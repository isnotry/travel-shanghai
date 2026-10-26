# Shanghai Travel Guide · 欢迎来上海

[简体中文](README.md) | **English**

![No dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![No build step](https://img.shields.io/badge/build-none-blue)
![Static files](https://img.shields.io/badge/deploy-static%20files-lightgrey)
![Data stays local](https://img.shields.io/badge/data-local--only-orange)
![License: MIT](https://img.shields.io/badge/license-MIT-blue)

> 58 Shanghai sights with admission, opening hours, metro exits and closing days in one place - written twice, once per audience, on plain static files with no dependencies and no backend.

![Interface screenshot](https://cdn.jsdelivr.net/gh/isnotry/travel-shanghai@main/docs/screenshot-en.png)

**[Use it online](https://kingsir.work/travel-shanghai/)**

---

## What it is

A Shanghai guide built for **actual itineraries**, not for browsing. Every one of the 58 sights answers the same four questions: what it costs, when it opens, how long to allow, and which metro exit to take.

It ships as **three static HTML files plus vanilla CSS/JS** - no npm, no framework, no backend. Double-click `index.html` and it runs; drop it on any static host and it runs there too.

The Chinese and English editions are **not translations of each other**. The Chinese edition is written for domestic travellers (metro, timed-ticket booking, weather and clothing, tourist traps); the English edition is written for inbound visitors (the 240-hour visa-free transit, payments, blocked apps and connectivity). The same sight carries two separate write-ups, and each edition has its own colours and typography.

## Features

- **58 sights across 7 categories** - 9 landmarks, 11 gardens and water towns, 12 museums, 12 art districts, 4 shows, 6 family attractions, 4 temples; every card carries admission, opening hours, time to allow and the metro exit
- **Closing days come first** - 20 venues carry closing-day data, surfaced as a banner at the top and a red tag on the card, plus an `Open Mondays` toggle that filters out everything shut on Mondays
- **Two audiences, two sets of content** - the Chinese edition covers transport, ticket booking, weather and payments; the English edition covers visas, connectivity and cashless payment. Six briefing cards each, on completely different topics
- **Search indexes both languages** - typing `Bund` in the Chinese edition still finds 外滩; names, subtitles, descriptions, metro stations and category labels are all in the index
- **Saved list** - star any card, and your picks turn into a shortcut strip above the grid, stored in your own browser
- **Detail sheet** - click a card for the four hard facts plus 3-5 tips: the best vantage point, when it is quietest, where not to buy things
- **3 ready-made itineraries** - Classic 3 days, Family 5 days, Slow 7 days, sequenced around each venue's closing day
- **More than sights** - 6 briefing cards, a 10-item scam checklist, 9 local dishes, 6 emergency numbers, 6 everyday facts, 7 apps to install
- **Two visual systems** - the Chinese edition pairs warm rice-paper tones and a vermilion seal with a serif Song headline face; the English edition is dark, cinematic and set in Georgia
- **No dependencies, no build** - three HTML files, four source files, 60 images, no `node_modules`, nothing to compile

## Quick start

### Use it online

Click **[Use it online](https://kingsir.work/travel-shanghai/)** - nothing to install, no account needed.

### Run it locally

```bash
# Option 1: just open it (macOS)
open index.html

# Option 2: serve it locally
python3 -m http.server 8080
# then open http://localhost:8080
```

The entry page asks which language you want: the Chinese edition lives at `/zh/`, the English one at `/en/`.

## What each sight record holds

Every sight is one record in `assets/js/data.js`, with a matching Chinese and English write-up. The fields:

| Field | Meaning | Notes |
| --- | --- | --- |
| `price` | Admission | The real price; free sights say `Free` / 免费 |
| `hours` | Opening hours | Sights open around the clock say `Open 24 hours` |
| `duration` | Time to allow | A range, e.g. `1.5 - 2 hours` |
| `metro` | Getting there | Line + station + exit; separate multiple entrances with semicolons |
| `stars` | Recommendation | Out of 5, rendered as `★★★★☆` |
| `closed` | Closing day | `null` means open all year; otherwise a sentence in each language |
| `img` | Photo | `assets/img/<id>.jpg`; falls back to an emoji placeholder when missing |
| `cat` | Category | One of the 7 category ids, which decides the filter it lands under |

Admission and hours are **reference values** - the footer states plainly that the venue's own channel on the day is authoritative.

## The interface

| Where | Element | What it does |
| --- | --- | --- |
| Top bar | Site name + 5 anchors | Jump to Before You Go / Highlights / Itineraries / Shanghai on a Plate / Practical A-Z |
| Top right | `中文` / `EN` | Switch to the other edition |
| Top of Before You Go | Red banner | The Monday and Tuesday closing-day warning |
| Highlights | Category chips | Filter by category; `All` resets |
| Highlights | `Open Mondays` | Hides every venue judged closed on Mondays |
| Highlights | Search box | Searches both language sets at once, filtering as you type |
| Highlights | `N sights` | How many results the current filters produced |
| Sight card | Star | Add or remove from the saved list, stored locally |
| Sight card | Anywhere on the card | Opens the detail sheet |
| Detail sheet | × / backdrop / `Esc` | Three ways to close it |
| Bottom right | ↑ button | Appears past 600px of scroll, back to top |
| Footer | Open source on GitHub | Back to this repository |

### Shortcuts

| Key | Action |
| --- | --- |
| `Esc` | Close the detail sheet |
| `Enter` | Blur the search box, which also dismisses the mobile keyboard |

## How filtering and search work

```
isClosedMonday(a) = a.closed exists AND the current-language text contains MONDAY / 周一

search index hay = name(zh) + name(en) + sub(zh) + sub(en)
                 + desc(zh) + desc(en) + metro(zh) + metro(en) + category label

match = category matches && !(openMondays && isClosedMonday(a)) && hay contains the query (case-insensitive)
```

- `Open Mondays` is **subtractive**: it only removes venues judged closed on Mondays. Records with `closed: null` (the Bund, East Nanjing Road, Wukang Road and other open streets) always survive
- The closing-day check reads the **copy**, not a structured date field - to make a venue respond to `Open Mondays`, write `Closed Mondays` in English and 「周一闭馆」 in Chinese and the check picks it up
- Search is a case-insensitive substring match over one bilingual index, which is why an English query works in the Chinese edition

## Data & privacy

No backend, no analytics, no cookies, no third-party requests: images, styles and scripts all ship with the site, so it works offline.

Only two `localStorage` keys are used:

| Key | Contents | Notes |
| --- | --- | --- |
| `shanghai-lang` | `zh` / `en` | The entry page remembers your last choice and prints a small line on that half - it **never redirects** |
| `shanghai-favs` | Array of saved sight ids | e.g. `["bund","yuyuan"]`; clearing it clears the saved list |

Where `localStorage` is unavailable (private mode, some `file://` contexts) the saved list simply does not persist - everything else still works.

## Project layout

```text
travel-shanghai/
├── index.html                  # Language gate (remembers your choice, never redirects)
├── zh/
│   └── index.html              # Chinese page shell; content is rendered by JS
├── en/
│   └── index.html              # English page shell
├── assets/
│   ├── css/
│   │   ├── common.css          # Shared structure and components
│   │   ├── theme-zh.css        # Chinese theme: rice paper, vermilion, Song serif
│   │   └── theme-en.css        # English theme: dark, cinematic, Georgia
│   ├── js/
│   │   ├── data.js             # 58 bilingual sight records: copy, admission, closing days
│   │   ├── content.js          # Briefing, scams, itineraries, food, essentials, UI strings
│   │   └── app.js              # Rendering, filters, search, saved list, detail sheet
│   └── img/                    # 58 sight photos + 2 hero images, named <id>.jpg
├── tools/
│   └── build.js                # Produces a self-contained dist/ with inlined CSS/JS
├── docs/
│   ├── screenshot.png          # Chinese edition screenshot
│   └── screenshot-en.png       # English edition screenshot
├── .github/workflows/pages.yml # Publishes the site to GitHub Pages on every push to main
├── README.md                   # Chinese readme (default)
├── README.en.md                # This file
└── LICENSE                     # MIT licence
```

## Development notes

- All content lives in `assets/js/data.js` (the 58 sights) and `assets/js/content.js` (briefing, itineraries, food, essentials, UI strings). Edit and refresh - there is **no build step**
- Every sight needs both a `zh` and an `en` write-up with matching fields; `closed` must never be half-filled
- To add a sight: save a 16:10 photo as `assets/img/<id>.jpg` (1000px on the long edge is plenty), add a record to the matching category block in `data.js`, refresh
- Chinese theme variables live in `theme-zh.css`, English ones in `theme-en.css`; `common.css` holds structure only - keep language-specific styling out of it
- `tools/build.js` exists for hosts that block CSS/JS sub-resources: it inlines styles and scripts into the HTML and writes an uploadable `dist/`. GitHub Pages does not need it
- On every push to `main`, `.github/workflows/pages.yml` publishes `index.html`, `zh`, `en` and `assets` to GitHub Pages (the repo's Pages source must be set to **GitHub Actions**)

## Browser support

Modern Chrome, Edge, Safari and Firefox, plus mobile browsers on iOS and Android. The code is ES5-only; the single modern API is `IntersectionObserver` for the card reveal animation, and cards display normally without it. Below 760px the layout collapses to one column and the entry page's two halves stack vertically.

## License

[MIT](LICENSE) © 2026 isnotry
