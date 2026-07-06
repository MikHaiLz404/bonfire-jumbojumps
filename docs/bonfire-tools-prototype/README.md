# Bonfire Tools — Dev & LiveOps Prototype

Clickable prototype of the 7 internal tools that ship with our production foundation.

Built as static HTML — **no build step, no server, no backend**. Just open `index.html` in a browser.

## 🚀 How to open

### Option 1: Open directly (simplest)

```bash
open index.html
```

Or double-click `index.html` in Finder.

### Option 2: Local server (recommended for sharing)

```bash
# Python
python3 -m http.server 8000

# Then open http://localhost:8000
```

### Option 3: Share via GitHub Pages

1. Push this folder to a `gh-pages` branch
2. Enable Pages in repo settings
3. Share the public URL with Bonfire

## 🧰 What's inside

### Dev Tools (designer-facing)

| # | Tool | File | What's clickable |
|---|---|---|---|
| 1 | **Merge Item & Chain Builder** | `tools/chain-builder.html` | Switch chains, view tier tree, edit properties |
| 2 | **Board / Level Editor** | `tools/board-editor.html` | Drag items onto 6×8 grid, pick tiles, inspect cells |
| 3 | **Narrative / Story Editor** | `tools/story-editor.html` | Drag story nodes, see flow connections, preview dialog |
| 4 | **Town / Scene Builder** | `tools/town-builder.html` | Drop decor, set time/weather/season, preview scene |

### LiveOps Tools (post-launch operations)

| # | Tool | File | What's clickable |
|---|---|---|---|
| 5 | **Live Event Builder** | `tools/event-builder.html` | Pick template, configure, view calendar, deploy pipeline |
| 6 | **Live Balancing Console** | `tools/balancing.html` | Adjust sliders, see before/after preview, push to live |
| 7 | **Playtest Accelerator + QC** | `tools/playtest.html` | Inject cheats, launch scenarios, tick QA checklist |

## 🎨 Design

- Extracted from `docs/Bonfine Feature & Tools.docx` (4 reference images)
- 3-step header pattern: Design → Build → Preview
- macOS-style app window frame with traffic lights
- Dark navy sidebar + light canvas
- Purple primary accent
- Emoji + inline SVG icons (no asset pipeline)

## 🗂️ File structure

```
bonfire-tools-prototype/
├── index.html              ← Landing — pick a tool
├── tools/
│   ├── chain-builder.html
│   ├── board-editor.html
│   ├── story-editor.html
│   ├── town-builder.html
│   ├── event-builder.html
│   ├── balancing.html
│   └── playtest.html
├── assets/
│   ├── style.css           ← Shared design system
│   └── app.js              ← Shared helpers (drag, drop, toast, dialog)
└── README.md
```

## ✅ What's wired up

- All 7 tools navigate from the landing page
- Drag & drop on board editor, town builder, story editor
- Sliders update values live in balancing console
- QA checklist ticks update progress bar
- Calendar shows event schedule
- Step headers are clickable (toast feedback)
- Deploy / Save buttons show toast feedback

## 🚧 What's stubbed (intentionally)

- **No backend** — all state lives in-memory, refresh = reset
- **No persistence** — closing the tab loses changes
- **Data is placeholder** — tree, flower, coin etc. are illustrative
- **No real auth** — sidebar home button just navigates
- **No tests** — clickable only

## 📝 Notes for the next iteration

- Add `localStorage` persistence per tool
- Wire to Firebase for real Remote Config
- Replace emoji icons with real asset pipeline output
- Add export to JSON for each editor
- Add diff view between two snapshots in balancing