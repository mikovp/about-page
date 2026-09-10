# 👋 mikovp — about page

Personal portfolio page built with **Nuxt 3**, **TailwindCSS** and **i18n**.

> Full-stack engineer shipping web products since 2018 — backends that don't crumble under load, frontends people actually enjoy using, and the glue automation in between.

🌐 **Live**: [mikovp.github.io/about-page](https://mikovp.github.io/about-page)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌍 **Bilingual** | English / Russian with automatic browser detection |
| 🎨 **Glassmorphism UI** | Frosted-glass cards with backdrop blur & hover effects |
| ✨ **Particles** | Animated `tsparticles` constellation background (responsive) |
| 🌗 **Dark mode** | Native `dark:` Tailwind support |
| 📱 **Responsive** | Mobile-first layout — adaptive particle count |
| 🚀 **SSG** | Fully static — deploys to GitHub Pages via CI/CD |
| ♿ **Accessible** | ARIA labels, semantic HTML, keyboard navigation |
| 🔍 **SEO Optimized** | Open Graph, Twitter Cards, meta tags |
| 📦 **PWA Ready** | Manifest.json, offline support |
| 🎯 **Type Safe** | Strict TypeScript with full type checking |
| ✅ **Tested** | Vitest unit tests with coverage |
| 🎨 **Linted** | ESLint + Prettier configured |

---

## 🛠 Tech Stack

```
Nuxt 3  •  Vue 3 (Composition API)  •  TailwindCSS  •  @nuxtjs/i18n  •  tsparticles
TypeScript  •  Vitest  •  ESLint  •  Prettier
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20
- [npm](https://www.npmjs.com/)

### Install

```bash
git clone https://github.com/mikovp/about-page.git
cd about-page
npm install
```

### Development

```bash
npm run dev          # → http://localhost:3000
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run typecheck    # TypeScript type checking
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

The project ships to **GitHub Pages** automatically on every push to `master` via a GitHub Action with linting and type checking.

### Manual deploy

```bash
npm run generate
```

Upload the contents of `.output/public/` to any static host (Netlify, Vercel, Cloudflare Pages…).

---

## 📂 Project Structure

```
about-page/
├── app.vue                      # Main app entry
├── error.vue                    # Error page (404)
├── components/
│   ├── Card.vue                 # Reusable card component
│   ├── Hero.vue                 # Hero section
│   ├── LanguageToggle.vue       # Language switcher
│   ├── Particles.vue            # Responsive particles background
│   ├── TechStack.vue            # Tech stack badges
│   └── WorkList.vue             # Work experience list
├── composables/
│   └── useLocaleToggle.ts       # Locale switching logic
├── constants/
│   └── content.ts               # Static content (work items, tech stack)
├── types/
│   └── index.ts                 # TypeScript type definitions
├── assets/
│   └── css/
│       └── main.css             # Tailwind utilities & components
├── tests/                       # Vitest unit tests
│   ├── components/
│   └── constants/
├── i18n.config.ts               # EN / RU translations
├── nuxt.config.ts               # Nuxt + i18n + SSG + TypeScript config
├── tailwind.config.ts           # Tailwind settings
├── vitest.config.ts             # Vitest configuration
├── eslint.config.mjs            # ESLint configuration
├── .prettierrc.cjs              # Prettier configuration
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages CI/CD with lint/typecheck
└── public/
    ├── favicon.ico
    └── manifest.json            # PWA manifest
```

---

## 🎯 Recent Improvements

### Critical
- ✅ SEO meta tags (Open Graph, Twitter Cards, canonical URLs, lang attributes)
- ✅ Accessibility (ARIA labels, skip-to-content, semantic roles, focus states)
- ✅ Performance (responsive particle count, lazy loading, ClientOnly)

### Architecture
- ✅ TypeScript strict mode with full type checking
- ✅ Component refactoring (Card, Hero, LanguageToggle, TechStack, WorkList)
- ✅ Composables for reusable logic (useLocaleToggle)
- ✅ Constants extraction for maintainability
- ✅ Tailwind @layer components for reusable styles

### Developer Experience
- ✅ ESLint + Prettier configuration
- ✅ Vitest setup with unit tests
- ✅ CI/CD lint and type-check steps
- ✅ Updated dependencies (Nuxt 3.13, Vue 3.5, latest i18n)
- ✅ Browser language detection with i18n
- ✅ Runtime config for environment variables
- ✅ Error page (error.vue) for 404 handling

### UX/UI
- ✅ PWA support (manifest.json)
- ✅ Improved keyboard navigation
- ✅ Focus-visible states for accessibility
- ✅ Prefers-reduced-motion support

---

## 📄 License

MIT — free to use, fork, and adapt.

---

<p align="center">
  <a href="https://github.com/mikovp">GitHub</a> · <a href="https://www.linkedin.com/in/mikovp/">LinkedIn</a>
</p>
