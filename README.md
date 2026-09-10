# 👋 mikovp — about page

Personal portfolio page built with **Nuxt 4**, **TailwindCSS** and **i18n**.

> Full-stack engineer shipping web products since 2018 — backends that don't crumble under load, frontends people actually enjoy using, and the glue automation in between.

🌐 **Live**: [mikovp.github.io/about-page](https://mikovp.github.io/about-page)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌍 **Bilingual** | English / Russian with automatic browser detection (SSR) |
| 🧠 **AI / LLM focus** | RAG pipelines, LLM integrations, agentic workflows, AI products |
| 🎨 **Glassmorphism UI** | Frosted-glass cards with backdrop blur & hover effects |
| ✨ **Particles** | Animated `tsparticles` v4 background (responsive particle count) |
| 🌗 **Dark mode** | Native `dark:` Tailwind support |
| 📱 **Responsive** | Mobile-first layout — stack and adaptive particles |
| 🚀 **SSG** | Fully static — deploys to GitHub Pages via CI/CD |
| ♿ **Accessible** | ARIA labels, skip-link, semantic HTML, focus-visible states, reduced-motion support |
| 🔍 **SEO Optimized** | Open Graph, Twitter Cards, canonical URLs, lang attributes |
| 📦 **PWA Ready** | `manifest.json` |
| 🎯 **Type Safe** | Strict TypeScript, `nuxt typecheck` passes in CI |
| ✅ **Tested** | Vitest unit tests (components + constants) |

---

## 🛠 Tech Stack

```
Nuxt 4  •  Vue 3.5 (Composition API)  •  TailwindCSS v3  •  @nuxtjs/i18n  •  tsparticles v4
TypeScript  •  Vitest  •  ESLint (flat config)  •  Prettier
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20
- [npm](https://www.npmjs.com/) ≥ 10

### Install

```bash
git clone https://github.com/mikovp/about-page.git
cd about-page
npm ci
```

> Use `npm ci` for clean, lockfile-driven installs. For everyday development `npm install` also works.

### Development

```bash
npm run dev          # → http://localhost:3000
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run typecheck    # Nuxt + vue-tsc type checking
npm run test         # Run Vitest tests
npm run test:ui      # Run tests with UI
```

### Build & Preview

```bash
npm run generate     # static output in .output/public
npm run preview      # preview the production build
```

---

## 📦 Deployment

The project ships to **GitHub Pages** automatically on every push to `master` via a GitHub Action: `npm ci` → lint → typecheck → generate.

### Manual deploy

```bash
npm run generate
```

Upload the contents of `.output/public/` to any static host (Netlify, Vercel, Cloudflare Pages…).

---

## 📂 Project Structure

```
about-page/
├── app.vue                      # Main app entry + SEO head
├── error.vue                    # Error page (404)
├── components/
│   ├── Card.vue                 # Reusable glass card
│   ├── Hero.vue                 # Hero section with social links
│   ├── LanguageToggle.vue       # EN / RU switcher
│   ├── Particles.vue            # tsparticles v4 background (VueParticles)
│   ├── TechStack.vue            # Tech badges
│   └── WorkList.vue             # Experience list
├── composables/
│   └── useLocaleToggle.ts       # Locale switching logic
├── constants/
│   └── content.ts               # Work items, workflows, tech stack
├── types/
│   └── index.ts                 # Shared TypeScript types
├── plugins/
│   └── particles.client.ts      # tsparticles plugin registration (client-only)
├── assets/
│   └── css/
│       └── tailwind.css         # Tailwind + reduced-motion fallback
├── i18n/
│   └── i18n.config.ts           # EN / RU translations
├── tests/                       # Vitest unit tests
├── nuxt.config.ts               # Nuxt + i18n + SSG config
├── tailwind.config.ts           # Tailwind settings (fade-in-up animation)
├── vitest.config.ts             # Vitest configuration
├── eslint.config.mjs            # ESLint flat config
├── .prettierrc.cjs              # Prettier configuration
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages CI/CD (ci → lint → typecheck → generate)
└── public/
    ├── favicon.ico
    └── manifest.json            # PWA manifest
```

---

## 🎯 Highlights

### Content
- ✅ **AI / LLM first**: experience, approach and tech stack emphasize LLM integrations, RAG pipelines, structured LLM output and agentic workflows in production

### Critical
- ✅ SEO meta tags (Open Graph, Twitter Cards, canonical URLs, lang attributes)
- ✅ Accessibility (ARIA labels, skip-to-content, semantic roles, focus states)
- ✅ Performance (responsive particle count, ClientOnly for client-heavy components)

### Architecture
- ✅ Strict TypeScript — `nuxt typecheck` passes
- ✅ Component refactoring (Card, Hero, LanguageToggle, TechStack, WorkList)
- ✅ Composables for reusable logic (`useLocaleToggle`)
- ✅ Constants extraction and shared types
- ✅ i18n `no_prefix` strategy — SSR locale from browser language, cookie persisted

### Developer Experience
- ✅ ESLint (flat config) + Prettier
- ✅ Vitest unit tests
- ✅ CI/CD: `npm ci` → lint → typecheck → static generate
- ✅ Up-to-date stack: Nuxt 4, Vue 3.5, i18n v10, tsparticles v4
- ✅ Error page (`error.vue`) for 404 handling
- ✅ Clean lockfile — `npm ci` runs green on Linux CI

### UX/UI
- ✅ PWA manifest
- ✅ Keyboard navigation & focus-visible rings
- ✅ `prefers-reduced-motion` support (content stays visible)

---

## 📄 License

MIT — free to use, fork, and adapt.

---

<p align="center">
  <a href="https://github.com/mikovp">GitHub</a> · <a href="https://www.linkedin.com/in/mikovp/">LinkedIn</a>
</p>