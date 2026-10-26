/* Shanghai Travel - shared renderer (zh / en editions) */
(function () {
  'use strict';

  var D = window.TRAVEL_DATA;
  var C = window.TRAVEL_CONTENT;
  var lang = document.body.getAttribute('data-lang') || 'zh';
  var ui = C.ui[lang];
  var IMG = '../assets/img/';
  var FAV_KEY = 'shanghai-favs';

  document.documentElement.lang = ui.htmlLang;
  document.title = ui.brand + (lang === 'zh' ? ' · 旅行指南' : ' · Travel Guide');

  /* ---------------- helpers ---------------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function $(sel) {
    return document.querySelector(sel);
  }

  function catLabel(id) {
    var list = D.cats[lang] || D.cats.zh;
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return list[i].label;
      }
    }
    return id;
  }

  function stars(n) {
    var s = '';
    var i;
    for (i = 0; i < 5; i++) {
      s += i < n ? '★' : '☆';
    }
    return s;
  }

  function loadFavs() {
    try {
      return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveFavs(a) {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(a));
    } catch (e) {
      /* storage unavailable - favourites simply won't persist */
    }
  }

  var favs = loadFavs();

  function isClosedMonday(a) {
    var t;
    if (!a.closed) {
      return false;
    }
    t = a.closed[lang] || a.closed.zh || '';
    return lang === 'zh' ? t.indexOf('周一') > -1 : /monday/i.test(t);
  }

  function findAttraction(id) {
    var i;
    for (i = 0; i < D.attractions.length; i++) {
      if (D.attractions[i].id === id) {
        return D.attractions[i];
      }
    }
    return null;
  }

  /* ---------------- hero ---------------- */

  function renderHero() {
    var h = ui.hero;
    var stats = h.stats.slice();
    var heroImg = lang === 'zh' ? 'hero-zh.jpg' : 'hero-en.jpg';
    var i;
    var html = '';

    if (stats.length) {
      stats[0] = { n: String(D.attractions.length), l: stats[0].l };
    }

    html += '<div class="hero-media">';
    html += '<img src="' + IMG + heroImg + '" alt="' + esc(h.title) + '" fetchpriority="high">';
    html += '<div class="hero-scrim"></div>';
    html += '</div>';
    html += '<div class="hero-in wrap">';
    html += '<div class="hero-copy">';
    html += '<span class="kicker">' + esc(h.kicker) + '</span>';
    html += '<h1>' + esc(h.title) + '</h1>';
    html += '<p class="hero-lead">' + esc(h.lead) + '</p>';
    html += '<div class="hero-stats">';
    for (i = 0; i < stats.length; i++) {
      html += '<div class="stat"><b>' + esc(stats[i].n) + '</b><span>' + esc(stats[i].l) + '</span></div>';
    }
    html += '</div>';
    html += '</div>';
    /* vertical seal sits to the right of the headline - a signature mark in CN layout */
    if (lang === 'zh') {
      html += '<div class="hero-seal" aria-hidden="true"><span>沪</span></div>';
    }
    html += '</div>';

    $('#hero').innerHTML = html;
  }

  /* ---------------- closure alert ---------------- */

  function renderAlert() {
    var a = C.closureAlert[lang];
    var html = '';

    html += '<div class="alert">';
    html += '<span class="ic">&#9888;</span>';
    html += '<div>';
    html += '<h3>' + esc(a.title) + '</h3>';
    html += '<p>' + esc(a.text) + '</p>';
    html += '<p><strong>' + esc(a.action) + '</strong></p>';
    html += '</div>';
    html += '</div>';

    $('#alert').innerHTML = html;
  }

  /* ---------------- notes ---------------- */

  function renderNotes() {
    var list = C.notes[lang];
    var html = '';
    var i, j;

    for (i = 0; i < list.length; i++) {
      html += '<article class="note">';
      html += '<div class="note-h"><span class="ic">' + list[i].icon + '</span>';
      html += '<h3>' + esc(list[i].title) + '</h3></div>';
      html += '<ul>';
      for (j = 0; j < list[i].items.length; j++) {
        html += '<li>' + esc(list[i].items[j]) + '</li>';
      }
      html += '</ul>';
      html += '</article>';
    }

    $('#notes').innerHTML = html;
  }

  /* ---------------- warnings ---------------- */

  function renderWarnings() {
    var w = C.warnings[lang];
    var html = '';
    var i;

    html += '<div class="warn-box">';
    html += '<h3><span>&#9873;</span>' + esc(ui.warnTitle) + '</h3>';
    html += '<ul class="warn-list">';
    for (i = 0; i < w.length; i++) {
      html += '<li>' + esc(w[i]) + '</li>';
    }
    html += '</ul>';
    html += '</div>';

    $('#warnings').innerHTML = html;
  }

  /* ---------------- attractions ---------------- */

  var state = { cat: 'all', q: '', monday: false };

  function mediaHTML(a) {
    if (a.img) {
      return '<img src="' + IMG + a.img + '" alt="' + esc(a[lang].name) + '" loading="lazy" decoding="async">';
    }
    return '<div class="card-ph"><span>' + a.icon + '</span></div>';
  }

  function metaRows(a) {
    var t = a[lang];
    var L = ui.labels;
    var html = '';

    html += '<div class="meta-row"><span class="k">' + esc(L.ticket) + '</span><span class="v">' + esc(t.price) + '</span></div>';
    html += '<div class="meta-row"><span class="k">' + esc(L.hours) + '</span><span class="v">' + esc(t.hours) + '</span></div>';
    html += '<div class="meta-row"><span class="k">' + esc(L.duration) + '</span><span class="v">' + esc(t.duration) + '</span></div>';
    html += '<div class="meta-row"><span class="k">' + esc(L.metro) + '</span><span class="v">' + esc(t.metro) + '</span></div>';

    return html;
  }

  function closedText(a) {
    if (!a.closed) {
      return null;
    }
    return a.closed[lang] || a.closed.zh;
  }

  function cardHTML(a) {
    var t = a[lang];
    var on = favs.indexOf(a.id) > -1;
    var c = closedText(a);
    var html = '';

    html += '<article class="card reveal" data-id="' + a.id + '">';
    html += '<div class="card-media">' + mediaHTML(a);
    html += '<span class="badge-cat">' + esc(catLabel(a.cat)) + '</span>';
    html += '<span class="stars">' + stars(a.stars) + '</span>';
    html += '<button class="fav' + (on ? ' on' : '') + '" data-fav="' + a.id +
      '" title="' + esc(on ? ui.favOn : ui.favAdd) + '">' + (on ? '★' : '☆') + '</button>';
    html += '</div>';
    html += '<div class="card-body">';
    html += '<h3>' + esc(t.name) + '</h3>';
    html += '<div class="card-sub">' + esc(t.sub) + '</div>';
    html += '<p class="card-desc">' + esc(t.desc) + '</p>';
    html += '<div class="meta">' + metaRows(a) + '</div>';
    if (c) {
      html += '<span class="closed-tag">&#9888; ' + esc(c) + '</span>';
    }
    html += '<div class="card-more">' + esc(ui.labels.tips) + ' &rarr;</div>';
    html += '</div>';
    html += '</article>';

    return html;
  }

  function matches(a) {
    var hay;
    if (state.cat !== 'all' && a.cat !== state.cat) {
      return false;
    }
    if (state.monday && isClosedMonday(a)) {
      return false;
    }
    if (state.q) {
      hay = [
        a.zh.name, a.en.name, a.zh.sub, a.en.sub, a.zh.desc, a.en.desc,
        a.zh.metro, a.en.metro, catLabel(a.cat)
      ].join(' ').toLowerCase();
      if (hay.indexOf(state.q.toLowerCase()) === -1) {
        return false;
      }
    }
    return true;
  }

  function renderCards() {
    var list = D.attractions.filter(matches);
    var grid = $('#cards');
    var html = '';
    var i;

    for (i = 0; i < list.length; i++) {
      html += cardHTML(list[i]);
    }
    grid.innerHTML = html;
    $('#count').textContent = list.length + ' ' + ui.countSuffix;

    if (!list.length) {
      grid.innerHTML = '<p class="empty">' +
        (lang === 'zh'
          ? '没有匹配的景点，换个关键词或取消筛选试试。'
          : 'No matches. Try a different keyword or clear the filters.') +
        '</p>';
    }

    observeReveal();
  }

  function renderFilters() {
    var cats = D.cats[lang] || D.cats.zh;
    var html = '';
    var i;

    for (i = 0; i < cats.length; i++) {
      html += '<button class="chip' + (state.cat === cats[i].id ? ' on' : '') +
        '" data-cat="' + cats[i].id + '">' + esc(cats[i].label) + '</button>';
    }
    html += '<button class="chip' + (state.monday ? ' on' : '') + '" data-monday="1">' +
      (lang === 'zh' ? '周一可去' : 'Open Mondays') + '</button>';
    html += '<div class="searchbox"><input id="q" type="search" placeholder="' +
      esc(ui.search) + '" value="' + esc(state.q) + '"></div>';

    $('#filters').innerHTML = html;

    var q = $('#q');
    q.addEventListener('input', function () {
      state.q = q.value.trim();
      renderCards();
    });
    q.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter') {
        q.blur();
      }
    });
  }

  /* Delegated filter clicks - bound once from init so listeners never stack up. */
  function bindFilters() {
    $('#filters').addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('[data-cat]') : null;
      var m = e.target.closest ? e.target.closest('[data-monday]') : null;
      if (b) {
        state.cat = b.getAttribute('data-cat');
        renderFilters();
        renderCards();
      } else if (m) {
        state.monday = !state.monday;
        renderFilters();
        renderCards();
      }
    });
  }

  /* ---------------- favourites strip ---------------- */

  function renderFavStrip() {
    var box = document.getElementById('favstrip');
    var mine = [];
    var i;
    var html = '';

    if (!box) {
      return;
    }

    for (i = 0; i < D.attractions.length; i++) {
      if (favs.indexOf(D.attractions[i].id) > -1) {
        mine.push(D.attractions[i]);
      }
    }

    if (!mine.length) {
      box.innerHTML = '';
      box.style.display = 'none';
      return;
    }

    box.style.display = '';
    html += '<div class="fav-head"><h3>' + esc(ui.favTitle) + '</h3><span>' + mine.length + '</span></div>';
    html += '<div class="fav-pills">';
    for (i = 0; i < mine.length; i++) {
      html += '<button class="fav-pill" data-goto="' + mine[i].id + '">' + esc(mine[i][lang].name) + '</button>';
    }
    html += '</div>';

    box.innerHTML = html;
  }

  /* ---------------- itineraries ---------------- */

  function renderItineraries() {
    var list = C.itineraries[lang];
    var html = '';
    var i, j;

    for (i = 0; i < list.length; i++) {
      html += '<article class="itin">';
      html += '<h3>' + esc(list[i].name) + '</h3>';
      html += '<div class="tag">' + esc(list[i].tag) + '</div>';
      html += '<ol>';
      for (j = 0; j < list[i].days.length; j++) {
        html += '<li>' + esc(list[i].days[j]) + '</li>';
      }
      html += '</ol>';
      html += '<div class="note"><strong>' + esc(ui.itineraryNote) + '：</strong>' + esc(list[i].note) + '</div>';
      html += '</article>';
    }

    $('#itins').innerHTML = html;
  }

  /* ---------------- food ---------------- */

  function renderFood() {
    var list = C.food[lang];
    var html = '';
    var i;

    for (i = 0; i < list.length; i++) {
      html += '<div class="food-item"><h4>' + esc(list[i].name) + '</h4><p>' + esc(list[i].desc) + '</p></div>';
    }

    $('#foodlist').innerHTML = html;
  }

  /* ---------------- essentials ---------------- */

  function renderEssentials() {
    var e = C.essentials[lang];
    var html = '';
    var i;
    var numbersTitle = lang === 'zh' ? '紧急与常用电话' : 'Emergency & Useful Numbers';
    var factsTitle = lang === 'zh' ? '生活须知' : 'Everyday Essentials';
    var appsTitle = lang === 'zh' ? '建议提前装好' : 'Install Before You Fly';

    html += '<div class="ess"><h3>' + esc(numbersTitle) + '</h3><dl>';
    for (i = 0; i < e.numbers.length; i++) {
      html += '<div class="row"><dt>' + esc(e.numbers[i].k) + '</dt><dd>' + esc(e.numbers[i].v) + '</dd></div>';
    }
    html += '</dl></div>';

    html += '<div class="ess"><h3>' + esc(factsTitle) + '</h3><ul>';
    for (i = 0; i < e.facts.length; i++) {
      html += '<li>' + esc(e.facts[i]) + '</li>';
    }
    html += '</ul></div>';

    html += '<div class="ess"><h3>' + esc(appsTitle) + '</h3><div class="pills">';
    for (i = 0; i < e.apps.length; i++) {
      html += '<span class="pill">' + esc(e.apps[i]) + '</span>';
    }
    html += '</div></div>';

    $('#ess').innerHTML = html;
  }

  /* ---------------- modal ---------------- */

  function openModal(id) {
    var a = findAttraction(id);
    var t;
    var L;
    var c;
    var html = '';
    var i;

    if (!a) {
      return;
    }

    t = a[lang];
    L = ui.labels;
    c = closedText(a);

    html += '<div class="modal-media">' + mediaHTML(a) + '</div>';
    html += '<button class="modal-close" data-close="1" aria-label="' + esc(ui.close) + '">&times;</button>';
    html += '<div class="modal-in">';
    html += '<h3>' + esc(t.name) + '</h3>';
    html += '<p class="modal-sub">' + esc(t.sub) + '</p>';
    html += '<p>' + esc(t.desc) + '</p>';
    html += '<div class="modal-table">' + metaRows(a) + '</div>';
    if (c) {
      html += '<span class="closed-tag">&#9888; ' + esc(c) + '</span>';
    }
    html += '<div class="tips-list"><h4>' + esc(L.tips) + '</h4><ul>';
    for (i = 0; i < t.tips.length; i++) {
      html += '<li>' + esc(t.tips[i]) + '</li>';
    }
    html += '</ul></div>';
    html += '<p class="updated">' + esc(ui.updated) + '</p>';
    html += '</div>';

    $('#modal-box').innerHTML = html;
    $('#modal').classList.add('on');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $('#modal').classList.remove('on');
    document.body.style.overflow = '';
  }

  function bindModal() {
    $('#modal').addEventListener('click', function (e) {
      if (e.target.getAttribute('data-close') || e.target.classList.contains('modal-bg')) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  /* ---------------- global clicks ---------------- */

  function bindClicks() {
    document.addEventListener('click', function (e) {
      var f = e.target.closest ? e.target.closest('[data-fav]') : null;
      var g = e.target.closest ? e.target.closest('[data-goto]') : null;
      var card = e.target.closest ? e.target.closest('.card') : null;
      var id;
      var on;
      var i;

      if (f) {
        e.stopPropagation();
        id = f.getAttribute('data-fav');
        i = favs.indexOf(id);
        if (i > -1) {
          favs.splice(i, 1);
        } else {
          favs.push(id);
        }
        saveFavs(favs);
        on = favs.indexOf(id) > -1;
        f.classList.toggle('on', on);
        f.textContent = on ? '★' : '☆';
        f.setAttribute('title', on ? ui.favOn : ui.favAdd);
        renderFavStrip();
        return;
      }

      if (g) {
        openModal(g.getAttribute('data-goto'));
        return;
      }

      if (card) {
        openModal(card.getAttribute('data-id'));
      }
    });
  }

  /* ---------------- reveal on scroll ---------------- */

  var io = null;

  function observeReveal() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    var i;

    if (!('IntersectionObserver' in window)) {
      for (i = 0; i < els.length; i++) {
        els[i].classList.add('in');
      }
      return;
    }

    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    }

    for (i = 0; i < els.length; i++) {
      io.observe(els[i]);
    }
  }

  /* ---------------- back to top ---------------- */

  function bindTop() {
    var btn = $('#totop');

    window.addEventListener('scroll', function () {
      btn.classList.toggle('on', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------- static text ---------------- */

  var SECTION_IDS = ['tips', 'sights', 'itineraries', 'food', 'practical'];

  function bindStatic() {
    var nav = $('#nav');
    var titles = ['sec-tips', 'sec-sights', 'sec-itin', 'sec-food', 'sec-ess'];
    var html = '';
    var i;
    var h;
    var s;

    for (i = 0; i < ui.nav.length; i++) {
      html += '<a href="#' + SECTION_IDS[i] + '">' + esc(ui.nav[i]) + '</a>';
    }
    nav.innerHTML = html;

    $('#brand-text').textContent = ui.brand;
    $('#swap').textContent = ui.swap;
    $('#swap').setAttribute('title', ui.swapTitle);
    $('#swap').setAttribute('href', lang === 'zh' ? '../en/' : '../zh/');

    for (i = 0; i < titles.length; i++) {
      h = document.getElementById(titles[i] + '-title');
      s = document.getElementById(titles[i] + '-sub');
      if (h) {
        h.textContent = ui.nav[i];
      }
      if (s && ui.subs && ui.subs[i]) {
        s.textContent = ui.subs[i];
      }
    }

    $('#foot-note').textContent = ui.updated;
  }

  /* ---------------- init ---------------- */

  function init() {
    bindStatic();
    renderHero();
    renderAlert();
    renderNotes();
    renderWarnings();
    renderFilters();
    bindFilters();
    renderCards();
    renderFavStrip();
    renderItineraries();
    renderFood();
    renderEssentials();
    bindModal();
    bindClicks();
    bindTop();
    observeReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
