#!/usr/bin/env node
/* Build a deployable copy of the site into dist/.

   Why this exists: the publishing platform serves the entry page only to
   visitors holding a share link, but it rejects requests for the .css/.js
   sub-resources (403). Plain images are fine. So the deployable build has to
   inline stylesheets and scripts into the HTML, while leaving images as
   external references.

   Source stays untouched - edit assets/ and re-run:  node tools/build.js
*/
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'dist');

const COMMON_CSS = 'assets/css/common.css';
const SHARED_JS = ['assets/js/data.js', 'assets/js/content.js', 'assets/js/app.js'];

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function copyDir(srcRel, dstRel) {
  const src = path.join(ROOT, srcRel);
  const dst = path.join(OUT, dstRel);
  if (!fs.existsSync(src)) return 0;
  let n = 0;
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) {
      n += copyDir(path.join(srcRel, e.name), path.join(dstRel, e.name));
    } else {
      fs.copyFileSync(s, d);
      n++;
    }
  }
  return n;
}

/* Inline <link rel="stylesheet" href="..."> into a single <style> block. */
function inlineCss(html) {
  return html.replace(
    /[ \t]*<link rel="stylesheet" href="([^"]+)">\s*/g,
    function (m, href) {
      try {
        const css = read(href.replace(/^\.\.\//, ''));
        return '<style>\n' + css + '\n</style>\n';
      } catch (e) {
        console.error('  ! css not found:', href);
        return m;
      }
    }
  );
}

/* Inline <script src="..."> into a single inline <script>. */
function inlineJs(html) {
  return html.replace(
    /[ \t]*<script src="([^"]+)"><\/script>\s*/g,
    function (m, src) {
      try {
        const js = read(src.replace(/^\.\.\//, ''));
        return '<script>\n' + js + '\n</script>\n';
      } catch (e) {
        console.error('  ! js not found:', src);
        return m;
      }
    }
  );
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  console.log('building dist/ ...');

  // copy every page verbatim, then inline
  const pages = ['index.html', 'zh/index.html', 'en/index.html'];
  pages.forEach(function (p) {
    let html = read(p);

    html = inlineCss(html);
    html = inlineJs(html);

    const dst = path.join(OUT, p);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, html, 'utf8');
    console.log('  ' + p + '  ' + (fs.statSync(dst).size / 1024).toFixed(1) + ' KB');
  });

  // images stay external - they are served fine
  const imgDir = fs.readdirSync(path.join(ROOT, 'assets/img'));
  let n = 0;
  fs.mkdirSync(path.join(OUT, 'assets/img'), { recursive: true });
  imgDir.forEach(function (f) {
    fs.copyFileSync(path.join(ROOT, 'assets/img', f), path.join(OUT, 'assets/img', f));
    n++;
  });
  console.log('  assets/img  ' + n + ' files');

  // sanity: no external css/js refs should remain
  let leaks = 0;
  pages.forEach(function (p) {
    const s = fs.readFileSync(path.join(OUT, p), 'utf8');
    const css = (s.match(/<link rel="stylesheet"/g) || []).length;
    const js = (s.match(/<script src=/g) || []).length;
    if (css || js) {
      leaks++;
      console.error('  ! external refs left in ' + p + ' css=' + css + ' js=' + js);
    }
  });
  console.log(leaks ? 'FAILED' : 'ok');
  process.exit(leaks ? 1 : 0);
}

build();
