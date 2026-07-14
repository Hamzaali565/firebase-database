# 👋 Hamza Ali — Project Portfolio

A quick look at two projects: an early Firebase practice build and my current flagship product, **Marriage Biodata Hub**.

[![biodata maker app](https://img.shields.io/badge/website-Live-brightgreen.svg)](https://www.marriagebiodatahub.com) [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📊 Project Comparison

| | [firebase-database](https://github.com/Hamzaali565/firebase-database) | [marriage_biodata_hub](https://github.com/hamza-ali-565/marriage_biodata_hub) |
|---|---|---|
| **Purpose** | Learning project — Firebase/Firestore CRUD app | Production SaaS — free marriage biodata maker |
| **Live URL** | parag-post.web.app | marriagebiodatahub.com |
| **Framework** | Create React App | Next.js 14 (App Router) |
| **Styling** | Plain CSS | Tailwind CSS + Framer Motion |
| **Backend / Data** | Firebase (Firestore/Hosting) | Static/SSR content, no external DB |
| **Maturity** | 3 commits, unmodified CRA scaffold | 107 commits, actively maintained |
| **Docs** | Default CRA README | Full custom README (features, SEO, deployment) |
| **Status** | Archived / practice | Active development |

**Takeaway:** `firebase-database` was an early exercise in wiring up Firebase with a React front end — useful groundwork for understanding client-side data flows and hosting deploys. `marriage_biodata_hub` is the production evolution of those skills: a fully-featured, SEO-optimized Next.js application with real users, a template system, and an ongoing content/growth strategy.

---

## 🔥 firebase-database

A Create React App project wired up to Firebase, deployed via Firebase Hosting.

- **Stack:** React, Firebase, HTML, CSS
- **Live demo:** [parag-post.web.app](https://parag-post.web.app/)
- **Scripts:**
  - `npm start` – run dev server at `localhost:3000`
  - `npm test` – run test runner
  - `npm run build` – production build

This repo represents foundational work with Firebase (Firestore-style data storage and Hosting deploys) before moving to more complex, production-grade architecture.

---

## 💒 Marriage Biodata Hub

**Marriage Biodata Hub** is a modern web app for creating stunning, professional, and elegant marriage biodatas — free templates, real-time preview, and instant PDF/JPEG export.

### ✨ Features
- **Premium & Free Templates** — a growing library of biodata designs (with more batches in active development)
- **Dynamic Customization** — colors, layouts, and fonts to match personal or cultural preferences
- **Real-Time Preview** — biodata updates live as details are entered
- **One-Click Download** — export as high-quality PDF or JPEG
- **SEO-Optimized Content** — articles and guides on biodata design and etiquette
- **SaaS-Grade UI/UX** — dark-mode interface with Framer Motion animations and glassmorphism

### 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel

### 🚀 Getting Started
```bash
git clone https://github.com/hamza-ali-565/marriage_biodata_hub.git
cd marriage_biodata_hub
npm install
npm run dev
```
Then open `http://localhost:3000`.

### 📂 Folder Structure
```
├── app/                # Next.js App Router pages, layouts, metadata
├── components/         # Reusable UI components (Header, Footer, Cards)
├── data/                # Structured content/config data
├── lib/                 # Shared utility functions
├── public/images/       # Static assets and template previews
└── package.json
```

### 🔍 SEO Optimization
- Next.js dynamic metadata API on every route
- Structured JSON-LD (Organization, FAQ schemas)
- Semantic HTML and SEO-friendly internal linking
- WebP images and static generation for fast loads

### 🌐 Deployment
Optimized for Vercel — push to GitHub, connect the repo, and Vercel auto-detects the Next.js build.

---

## 🤝 Contributing

Both repos welcome issues and PRs. For Marriage Biodata Hub specifically:

1. Fork the project
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Marriage Biodata Hub is licensed under the MIT License — see the LICENSE file for details.

---

*From a first Firebase experiment to a full production SaaS — built with ❤️.*