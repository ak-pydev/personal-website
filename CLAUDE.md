# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + production build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # Preview production build
```

No test suite is configured.

## Architecture

Single-page portfolio built with React 19 + Vite + TypeScript + Tailwind CSS. Dark-only theme; no light mode toggle.

### Page layout (`src/App.tsx`)

Sections render top-to-bottom in a single scrollable column:

1. **DarkVeil** — WebGL background (OGL renderer, CPPN neural net fragment shader, fixed/full-screen)
2. **CardNav** — GSAP-animated hamburger nav, fixed at top
3. Hero text with **TextLoop** cycling roles
4. **Introduction** — section heading with **TextScramble** hover effect
5. **MagicBento** — interactive bento grid (`#about`, `#publications` anchor IDs)
6. **WorkExperience** — timeline (`#experience`)
7. **FooterSparkles** — decorative sparkle divider
8. **Projects** — wobble card grid (`#projects`)
9. **Footer** — social links

### Key component patterns

**MagicBento** (`src/components/MagicBento.tsx`) — the most complex component. It contains two sub-components:
- `ParticleCard`: wraps each bento cell; uses GSAP for tilt, magnetism, particle bursts, and click ripples. Animations are disabled on mobile (`<= 768px`).
- `GlobalSpotlight`: appends a single `div` to `document.body` and tracks mouse position relative to the `.bento-section` container, applying radial glow via CSS custom properties (`--glow-x`, `--glow-y`, `--glow-intensity`). Cards expose `--glow-x/y/intensity/radius` CSS vars that drive a `::after` pseudo-element border glow (`.card--border-glow`).

**DarkVeil** (`src/components/DarkVeil.tsx`) — OGL WebGL canvas that runs a CPPN-based generative shader. Accepts props: `hueShift`, `noiseIntensity`, `scanlineIntensity`, `speed`, `scanlineFrequency`, `warpAmount`, `resolutionScale`.

**CardNav** (`src/components/CardNav.tsx`) — GSAP timeline animates nav height + card stagger on open/close. Recalculates height on window resize. On mobile it measures actual content height; on desktop defaults to 260px.

### Utility

`src/lib/utils.ts` exports `cn()` — standard `clsx` + `tailwind-merge` helper for conditional class names.

### Styling

- Tailwind CSS v3 with `tailwindcss-animate`
- CSS custom properties for theme tokens defined in `src/index.css` (dark-only, no HSL light variants)
- Fonts: Inter (body) and DM Serif Display (hero heading); loaded via system/Google Fonts — not bundled
- Component-scoped CSS files: `CardNav.css`, `DarkVeil.css`

### Animation libraries in use

- **GSAP** (`gsap`) — used in CardNav, MagicBento (ParticleCard, GlobalSpotlight)
- **Motion** (`motion` v12) — used in TextLoop, TextScramble, timeline, wobble-card, sparkles
- **@react-three/fiber + drei + three.js** — installed but not currently used in active components
- **tsparticles** — installed but not currently used in active components
