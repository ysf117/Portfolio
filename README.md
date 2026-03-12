<div align="center">

# ⬡ YUSUF MINHAS — Portfolio

**Engineered Reliability. Designed Precision.**

A modern, Swiss International–styled portfolio built with Next.js, Framer Motion, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0050?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)

</div>

---

## ✦ Overview

A personal portfolio website designed with a **Swiss International / Brutalist** aesthetic — strict grid alignments, precise typography, and a dark, technical colour palette. Every interaction is deliberate: typewriter headers, aurora background gradients, smooth scroll-linked navigation, and grayscale-to-colour profile reveal on hover.

### Key Features

| Feature | Description |
|---|---|
| **Typewriter Hero** | Character-by-character heading animation with a blinking cursor |
| **Aurora Background** | Slow-moving gradient that breathes life into the dark canvas |
| **Mouse Spotlight** | Radial gradient follows the cursor for a premium feel |
| **Tech Marquee** | Infinitely scrolling technology banner on mobile |
| **Profile Reveal** | Grayscale → colour image transition on hover |
| **Sticky Navigation Rail** | Icon-based vertical nav with active section tracking |
| **Mobile-First Responsive** | Dedicated mobile header, swipeable info carousel, and bottom nav |
| **Static Export** | Fully static HTML output — deploy anywhere |

---

## ✦ Design System

```
BACKGROUND    #050508           deep black-blue
SURFACE       #0a0a0f           elevated dark
PRIMARY       #3b82f6           electric blue
BORDER        rgba(255,255,255,0.1)  subtle swiss lines
TEXT          #e2e8f0           silver
TYPOGRAPHY    Space Grotesk     display + headings
              Monospace         technical labels / coordinates
RADIUS        0px everywhere    brutalist, no rounded corners
```

---

## ✦ Architecture — Atomic Design

The codebase follows **Atomic Design** methodology for maximum reusability and clarity:

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles & keyframe animations
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   └── page.tsx                  # Home page composition
│
├── components/
│   ├── atoms/                    # Smallest UI primitives
│   │   ├── Badge.tsx             # Tech stack tags (outline/filled)
│   │   ├── GlitchText.tsx        # Glitch text effect
│   │   ├── IconButton.tsx        # Navigation rail icon buttons
│   │   ├── MouseSpotlight.tsx    # Cursor-following radial gradient
│   │   ├── ProfileImage.tsx      # B&W → colour hover image
│   │   ├── SectionLabel.tsx      # "01 — PROJECTS" style labels
│   │   └── SwissBorder.tsx       # Decorative separator lines
│   │
│   ├── molecules/                # Functional groups of atoms
│   │   ├── CertificationCard.tsx # Individual certification tile
│   │   ├── HorizontalToolkit.tsx # Inline tech skill badges
│   │   ├── InfoBlock.tsx         # Sidebar info sections
│   │   ├── NavRailItem.tsx       # Nav icon + tooltip animation
│   │   ├── ProjectCard.tsx       # Project showcase card
│   │   ├── TechMarquee.tsx       # Infinite scrolling tech banner
│   │   └── TimelineEntry.tsx     # Career timeline row
│   │
│   ├── organisms/                # Full page sections
│   │   ├── CertificationGrid.tsx # Certifications grid
│   │   ├── EducationGrid.tsx     # Education timeline
│   │   ├── ExperienceTimeline.tsx# Career history section
│   │   ├── Footer.tsx            # Contact & collaboration CTA
│   │   ├── HeroSection.tsx       # Typewriter hero + tech marquee
│   │   ├── MobileHeader.tsx      # Mobile top bar
│   │   ├── MobileInfoCarousel.tsx# Swipeable mobile sidebar
│   │   ├── MobileNav.tsx         # Bottom navigation bar
│   │   ├── NavigationRail.tsx    # Sticky vertical desktop nav
│   │   ├── ProfileDrawer.tsx     # Expandable mobile profile
│   │   ├── Sidebar.tsx           # Fixed desktop left panel
│   │   └── WorkCarousel.tsx      # Project cards carousel
│   │
│   └── templates/
│       └── SwissLayout.tsx       # Master layout (sidebar + rail + content)
│
├── data/
│   └── portfolio.ts              # All resume content in one file
│
├── hooks/
│   ├── useActiveSection.ts       # Intersection Observer for nav tracking
│   ├── useClipboard.ts           # Copy-to-clipboard utility
│   └── useTypewriter.ts          # Character-by-character text animation
│
└── lib/
    └── utils.ts                  # clsx + tailwind-merge helper
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/ysf117/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Generate static export to /out
npm run build
```

The `output: 'export'` config in `next.config.js` produces a fully static `out/` directory ready for deployment on **GitHub Pages**, **Vercel**, **Netlify**, or any static host.

---

## ✦ Customisation

All personal content lives in a single data file for easy updates:

```
src/data/portfolio.ts
```

Edit this file to change your profile info, projects, experience, education, certifications, and contact details — no component code changes needed.

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Static Export) |
| **Language** | TypeScript 5 |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12, CSS Keyframes |
| **Typography** | Google Fonts — Space Grotesk |
| **Icons** | Material Symbols (Outlined) |
| **Utilities** | clsx, tailwind-merge |

---

## ✦ Deployment

This project is configured for **static export** out of the box. Deploy the `out/` directory to any static hosting provider:

| Provider | Command / Method |
|---|---|
| **Vercel** | Connect repo → auto-deploys |
| **GitHub Pages** | Push `out/` to `gh-pages` branch |
| **Netlify** | Set build command: `npm run build`, publish dir: `out` |

---

## ✦ License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**Built with precision by [Yusuf Minhas](https://yminhas.com)**

</div>
