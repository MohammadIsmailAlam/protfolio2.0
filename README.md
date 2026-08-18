# Portfolio v2

A rebuild of the old Create-React-App portfolio using a real component
architecture: **React + Vite + Tailwind CSS**, custom hooks, and a small
internal component library. Visual direction: a developer/editor
aesthetic — sections styled like open files in a code editor, colored
with a syntax-highlighting-inspired palette.

---

## 1. Project structure

```
src/
  config/
    siteConfig.js        # ← the ONLY file you edit for content (name, bio,
                          #   socials, skills, projects, experience, contact)
  lib/                    # framework-agnostic helper "library"
    cn.js                 # class-name combiner (tiny clsx alternative)
    scroll.js             # scrollToId() smooth-scroll helper
    icons.js              # string -> lucide-react icon map
  hooks/                  # custom hooks
    useLocalStorage.js    # generic persisted state
    useTheme.js            # (in context/ThemeContext.jsx) dark/light toggle
    useTypewriter.js       # types/deletes strings, used by Hero
    useInView.js            # IntersectionObserver -> boolean, used by <Reveal>
    useActiveSection.js    # drives the active nav tab while scrolling
  context/
    ThemeContext.jsx       # ThemeProvider + useTheme()
  components/
    ui/                    # reusable, presentational primitives
      Button.jsx  Tag.jsx  WindowChrome.jsx  Container.jsx
      CursorBlink.jsx  LineNumbers.jsx  SectionHeading.jsx
      Reveal.jsx  IconLink.jsx  ProjectCard.jsx
    layout/                # page chrome
      Navbar.jsx  Footer.jsx  Layout.jsx
    sections/              # one file per page section, all data-driven
      Intro.jsx  About.jsx  Skills.jsx  Projects.jsx  Experience.jsx  Contact.jsx
  App.jsx                  # composition root — wires sections into Layout
  main.jsx                 # ReactDOM entry point
  index.css                # Tailwind + CSS variable theme tokens
```

**Why this shape:** every section only knows how to _render_ — all copy
lives in `siteConfig.js`. Every visual pattern that repeats (a window
chrome, a tag, a scroll-reveal, an icon link) is a component in `ui/`
used in multiple places, not re-implemented per section. Cross-cutting
behavior (scrollspy, typing effect, theme, persisted state, in-view
detection) is a custom hook, not duplicated `useEffect` blocks.

---

## 2. Make it yours

Open **`src/config/siteConfig.js`** and replace the placeholder values:
your name, role(s), bio, socials, skills, projects, and experience
timeline. That's the only file that needs editing for content changes —
no component code needs to change.

Optional:

- Drop a real resume PDF at `public/resume.pdf` (matches `resumeUrl` in the config).
- Replace `public/favicon.svg` with your own mark.
- Update the `<title>` and `<meta name="description">` in `index.html`.

---

## 3. Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Opens the dev server (Vite prints the local URL, typically
`http://localhost:5173`) with hot module reload.

---

## 4. Production build

```bash
npm run build
```

Outputs a static, optimized build to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## 5. Deploy to Vercel

**Option A — Vercel dashboard (recommended for most people)**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repo.
3. Vercel auto-detects Vite. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every future push to your main branch redeploys
   automatically; every PR gets its own preview URL.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel        # first run: links the project, deploys a preview
vercel --prod # deploys to your production URL
```

A `vercel.json` is included with the build settings and an SPA rewrite
rule (all routes fall back to `index.html`), so no extra config is
needed either way.

---

## 6. Tech summary

| Concern           | Choice                                       |
| ----------------- | -------------------------------------------- |
| Build tool        | Vite                                         |
| UI library        | React 18                                     |
| Styling           | Tailwind CSS (+ CSS variables for theming)   |
| Icons             | lucide-react                                 |
| State/persistence | Custom hooks (`useLocalStorage`, `useTheme`) |
| Animation         | CSS keyframes + `useInView`/`Reveal`         |
| Hosting           | Vercel                                       |

No UI framework beyond Tailwind, no unnecessary dependencies — the
"component library" here is the app's own `components/ui/` folder,
written to be imported and reused, the same way you'd pull in a
third-party one.
