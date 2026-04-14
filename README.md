# 👋 mikovp — about page

Personal portfolio page built with **Nuxt 3**, **TailwindCSS** and **i18n**.

> Full-stack engineer shipping web products since 2018 — backends that don't crumble under load, frontends people actually enjoy using, and the glue automation in between.

🌐 **Live**: [mikovp.github.io/about-page](https://mikovp.github.io/about-page)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌍 **Bilingual** | English / Russian with one-click toggle |
| 🎨 **Glassmorphism UI** | Frosted-glass cards with backdrop blur & hover effects |
| ✨ **Particles** | Animated `tsparticles` constellation background |
| 🌗 **Dark mode** | Native `dark:` Tailwind support |
| 📱 **Responsive** | Mobile-first layout — stacks on small screens |
| 🚀 **SSG** | Fully static — deploys to GitHub Pages via CI/CD |

---

## 🛠 Tech Stack

```
Nuxt 3  •  Vue 3 (Composition API)  •  TailwindCSS  •  @nuxtjs/i18n  •  tsparticles
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
```

### Build & Preview

```bash
npm run generate     # static output in .output/public
npm run preview      # preview the production build
```

---

## 📦 Deployment

The project ships to **GitHub Pages** automatically on every push to `master` via a GitHub Action.

### Manual deploy

```bash
npm run generate
```

Upload the contents of `.output/public/` to any static host (Netlify, Vercel, Cloudflare Pages…).

---

## 📂 Project Structure

```
about-page/
├── app.vue                 # Single-page entry
├── components/
│   └── Particles.vue       # tsparticles background
├── i18n.config.ts          # EN / RU translations
├── nuxt.config.ts          # Nuxt + i18n + SSG config
├── tailwind.config.ts      # Tailwind settings
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages CI/CD
└── public/
    └── favicon.ico
```

---

## 📄 License

MIT — free to use, fork, and adapt.

---

<p align="center">
  <a href="https://github.com/mikovp">GitHub</a> · <a href="https://www.linkedin.com/in/mikovp/">LinkedIn</a>
</p>
