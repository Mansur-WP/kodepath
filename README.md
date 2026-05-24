# KodePath

A modern, beginner-friendly platform for discovering programming languages. Browse 20 languages, take quizzes, compare languages side by side, track your learning roadmap, and bookmark your favourites — all without an account or internet connection.

---

## Features

- **Language Explorer** — 20 programming languages with descriptions, code samples, use cases, pros/cons, and learning resources
- **Language of the Day** — a random language highlighted on every visit
- **Daily Coding Tip** — a random tip from a curated pool, refreshed on every visit
- **Interactive Quiz** — test your knowledge with multiple-choice questions
- **Side-by-Side Compare** — pick any two languages and compare them directly
- **Categories** — browse languages by Web Dev, Frontend, Backend, Mobile, AI/ML, Data Science, Game Dev, and Systems
- **Bookmarks** — save languages you want to revisit (stored in your browser)
- **Learning Roadmap** — per-language checklists with progress bars (stored in your browser)
- **Dark Mode** — toggle in the navbar, preference saved automatically

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | Wouter |
| Syntax highlighting | highlight.js |
| Persistence | localStorage only |

No backend. No database. No authentication. Everything runs entirely in the browser.

---

## Project Structure

```
artifacts/kodepath/
├── src/
│   ├── data/
│   │   └── languages.ts        # All 20 language definitions (single source of truth)
│   ├── pages/
│   │   ├── Home.tsx            # Landing page, Language of the Day, Daily Tip
│   │   ├── Languages.tsx       # Full language browser with search & filters
│   │   ├── LanguageDetail.tsx  # Individual language page with roadmap
│   │   ├── Quiz.tsx            # Interactive quiz
│   │   ├── Compare.tsx         # Side-by-side language comparison
│   │   ├── Categories.tsx      # Browse by category
│   │   └── Bookmarks.tsx       # Saved languages
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation + live search + dark mode toggle
│   │   ├── LanguageCard.tsx    # Reusable card with bookmark icon
│   │   └── CodeBlock.tsx       # Syntax-highlighted code using highlight.js
│   ├── hooks/
│   │   ├── useBookmarks.ts     # Bookmark state → localStorage
│   │   ├── useRoadmapProgress.ts # Roadmap checklist → localStorage per language
│   │   └── useTheme.ts         # Dark mode toggle → localStorage
│   └── App.tsx                 # Route definitions
```

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm --filter @workspace/kodepath run dev
```

The app runs on the port assigned by the environment (`PORT` env var).

---

## Adding a Language

All language data lives in `src/data/languages.ts`. Each entry follows the `Language` interface defined at the top of that file. Add a new object to the `languages` array and it will automatically appear everywhere in the app — cards, quiz, compare, categories, and search.

---

## Deployment

This is a static Vite app — it can be deployed anywhere that serves static files.

**Vercel**

1. Push the repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Set the following in the project settings:

| Setting | Value |
|---|---|
| Root Directory | `artifacts/kodepath` |
| Framework Preset | Vite |
| Build Command | `pnpm run build` |
| Output Directory | `dist` |
| Install Command | `pnpm install` |

No environment variables are required.

**Netlify / GitHub Pages**

Same build command (`pnpm run build`) and output directory (`dist`). No server-side config needed.

---

## Persistence

All user data is stored in the browser via `localStorage`. Nothing is sent to any server.

| Key | Contents |
|---|---|
| `kodepath_bookmarks` | Array of bookmarked language IDs |
| `kodepath_progress_{id}` | Completed roadmap step indices per language |
| `kodepath_theme` | `"dark"` or `"light"` |

Clearing browser storage resets all preferences.
