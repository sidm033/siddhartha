# Siddhartha Mukherjee — Personal Brand Platform

A premium, animated personal brand platform built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

**Live:** [https://s-iddhartha.github.io/siddhartha/](https://s-iddhartha.github.io/siddhartha/)

## Tech Stack

- **Framework:** Next.js 15 (Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, Canvas API
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- Interactive particle neural network background (Canvas, 60fps)
- AI Assistant chatbot with portfolio knowledge
- Command palette navigation (Cmd + K)
- 3D tilt skill cards with animated proficiency bars
- Expandable project case studies with architecture diagrams
- Scroll-linked animated career timeline
- IIT Roorkee AI/ML certification showcase
- Typing animation, animated counters, loading screen
- Fully responsive — mobile, tablet, desktop
- SEO optimized with OpenGraph and Twitter Cards

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
```

Static output is generated in the `out/` directory. The GitHub Actions workflow automatically builds and deploys to GitHub Pages on every push to `main`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, SEO
│   ├── page.tsx          # Main page composing all sections
│   └── globals.css       # Global styles, animations, utilities
├── components/
│   ├── hero.tsx          # Hero section with particles & typing
│   ├── about.tsx         # About section with info cards
│   ├── skills.tsx        # Interactive skill cards with 3D tilt
│   ├── experience.tsx    # Animated career timeline
│   ├── projects.tsx      # Expandable case studies
│   ├── ai-lab.tsx        # AI capabilities showcase
│   ├── education.tsx     # IIT Roorkee & B.Tech cards
│   ├── startup-builder.tsx # Capabilities & "Build in 30 Days"
│   ├── contact.tsx       # Contact cards & social links
│   ├── navbar.tsx        # Glassmorphism navbar
│   ├── footer.tsx        # Footer
│   ├── ai-assistant.tsx  # Floating AI chat widget
│   ├── command-palette.tsx # Cmd+K navigation
│   ├── particle-field.tsx  # Canvas particle system
│   └── loading-screen.tsx  # Branded loading screen
└── lib/
    ├── data.ts           # All portfolio data & AI responses
    └── utils.ts          # Utility functions
```

## License

Copyright © 2026 Siddhartha Mukherjee. All rights reserved.
