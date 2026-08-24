# Portfolio

> A portfolio website that shows the *why*, not just the *what* — built around case studies and Architecture Decision Records (ADRs) instead of generic project listings.

![Proof Statement](./proof-statement.png)

**Claim → Evidence → Interview.**


## 🌐 Live Demos

- **Netlify:** [https://ahmad-bayu-samudera.netlify.app/](https://ahmad-bayu-samudera.netlify.app/)
- **Vercel:** [https://portfolio-ahmad-bayu-samudera.vercel.app/](https://portfolio-ahmad-bayu-samudera.vercel.app/)

## About

This site documents my engineering decisions the same way I'd write them in a team: with context, the alternatives I considered, and the trade-offs I accepted. It is structured as four sections:

- **Hero** — who I am and the two case studies
- **Case Studies** — Pasaria (e-commerce) and CVPilot (AI resume analyzer), each with a problem, what I did, the outcome, and what I'd do differently
- **Decisions** — five ADRs covering architecture, data layer, debugging methodology, URL state management, and client state
- **Contact** — email, LinkedIn, GitHub, CV, and a calendar booking link, plus a contact form

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Playwright** for end-to-end testing
- **ESLint** with `eslint-config-next`

No UI libraries, no animation frameworks, no icon packs — every styling decision is documented in `src/app/page.tsx` so the reasoning stays visible.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the page hot-reloads as you edit `src/app/page.tsx`.

### Other Scripts

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx     # root layout, font setup, global metadata
│   ├── page.tsx       # main page, lazy loads below-the-fold components
│   └── globals.css    # CSS variables for color palette (WCAG AA compliant)
└── components/
    ├── PasariaCaseStudy.tsx  # modular case study component
    ├── CVPilotCaseStudy.tsx  # modular case study component
    ├── OtherDecisions.tsx    # ADRs component
    ├── ContactSection.tsx    # contact form and links
    ├── Spine.tsx             # reusable timeline indicator
    ├── MobileMarker.tsx      # mobile-specific marker
    ├── Tag.tsx               # tech stack pill component
    └── ADRField.tsx          # wrapper for ADR details
```

The portfolio is structured as a single page anchored with `#pasaria`, `#cvpilot`, and `#contact`, but relies on dynamic component loading (`React.lazy()` and `<Suspense>`) to reduce initial JS bundle size.

## Mobile Optimization & Performance Pass

Recent updates focused on the "Open It on Your Phone" initiative to address several UX and performance bottlenecks:

| Category | Problem (Before) | Fix (Action Taken) | Outcome (After) |
|---|---|---|---|
| **Performance** | Monolithic loading in `page.tsx` caused a heavy initial JS bundle size. | Split below-the-fold components and loaded them dynamically using `React.lazy()` and `<Suspense>`. | Initial JavaScript bundle size was drastically reduced, leading to faster load times. |
| **Mobile Layout** | Hero padding was too large (`py-24`) and text too dominant (`text-4xl`), pushing the first project below the fold on mobile. | Reduced hero padding to `py-10 md:py-24` and scaled down heading font sizes by ~20-25% for mobile viewports. | The first project card ("Pasaria") is immediately visible above the fold without scrolling. |
| **Readability** | Case study explanations were written in dense, wall-of-text paragraphs that were hard to scan. | Restructured paragraphs into scannable UI patterns using bold inline labels and bullet points. | Content is much easier to read and key points are instantly conveyed. |
| **Touch Targets** | Project action buttons stacked vertically, consuming screen space with inconsistent touch targets. | Arranged buttons side-by-side (`flex-row gap-3`) compactly, enforcing a minimum `44px` touch target height. | Modern button layout saves vertical real estate while complying with mobile touch accessibility standards. |
| **Accessibility** | Brand color (`#457b9d`) and low-opacity/small text (`text-[10px]`) had weak contrast against backgrounds. | Darkened `--color-brand` to `#255273`, bumped text color to `slate-900`, removed weak opacities, and increased base label fonts to `text-xs`. | Text legibility improved sharply, meeting WCAG AA minimum color contrast standards. |

## "Survive the Crit" Portfolio Review 

### Proof Statement
> *"I design AI-assisted frontend interfaces backed by robust server-side architecture and explain the end-to-end engineering decisions behind them."*

### Reviewer 10-Second Diagnostic Questions
1. **In 10 seconds, what do I do?**  
   *Initial Feedback:* Confusion. The hero tag claimed "AI Frontend Engineer", but the primary case study (Pasaria) focused 70% on backend tools (Express, PostgreSQL, Prisma, Redis, BullMQ).  
2. **Would you believe I'm good at it?**  
   *Initial Feedback:* Partial belief. Strong technical depth, but cognitive dissonance between hero claims and case study evidence weakened trust. A dead link (`#`) on the Pasaria "View Live Demo" button further hurt credibility.

---

### Feedback Categorization (Sorting)

#### 🔴 Must-Fix (Addressed in Code)
* **Cognitive Dissonance in Positioning:** Re-aligned hero section title to `Frontend & Full-Stack Engineer` to eliminate friction between hero claims and backend-heavy case study evidence.
* **Pasaria Case Study Bridging Context:** Preserved the authentic personal narrative and learning goals while adding an honest bridging sentence explaining how a frontend-focused Next.js project naturally expanded into full-stack backend engineering.
* **Dead Demo Link:** Replaced the broken `#` link on the Pasaria project demo button with an active **"View Live Demo"** button linking directly to `https://pasaria-e-commerce.vercel.app/` (matching the CVPilot button style).
* **ADR-003 Concrete Debugging Details:** Retained specific debugging evidence (Rp165.000 vs Rp220.000 checkout bug, prompt trial-and-error, double POST request + stale `localStorage` root cause).

#### 🟡 Nice-to-Have (Future Backlog)
* Add embedded interactive API sequence diagrams for Pasaria order flows.
* Add live iframe sandbox previews for CVPilot & Pasaria client components.
* Provide downloadable PDF exports for Architecture Decision Records (ADRs).

---

### Detailed Changes Log (Before, After & Impact)

| Component / Area | Before (Original State) | Action Taken (After) | Effect & Impact |
|---|---|---|---|
| **Hero Badge & Title** (`page.tsx`, `layout.tsx`) | Claimed strictly `AI Frontend Engineer`, creating positioning mismatch with full-stack case studies. | Re-positioned to `Frontend & Full-Stack Engineer`. Updated page title & headline to *"I build web applications from intuitive frontends to solid server-side architecture."* | Eliminates cognitive dissonance instantly; sets clear, honest expectations for full-stack capabilities in under 10 seconds. |
| **Pasaria Case Study Intro** (`PasariaCaseStudy.tsx`) | Opening narrative didn't explain why a frontend-targeted project was 70% backend logic. | Added an honest bridging sentence in Context (*"I initially set out to master modern Next.js frontend patterns, but building a production-ready application end-to-end naturally forced me into full-stack backend logic..."*). | Reframes full-stack scope via authentic context without altering original timeline or inventing unsupported workflow claims. |
| **Pasaria Personal Narrative & ADR-003** (`PasariaCaseStudy.tsx`, `OtherDecisions.tsx`) | Risk of flattening reflective personal voice into generic corporate bullet templates. | Retained reflective personal narrative voice and enriched ADR-003 with concrete checkout pricing bug details (Rp165.000 vs Rp220.000, double POST, stale `localStorage`). | Proves hands-on debugging skills with concrete empirical evidence rather than vague, template-based claims. |
| **Pasaria Action Buttons (Dead Link Fix)** (`PasariaCaseStudy.tsx`) | "View Live Demo" button pointed to a dead link (`#`). | Replaced broken `#` link with an active **"View Live Demo"** button linking directly to `https://pasaria-e-commerce.vercel.app/`. | Eliminates recruiter friction, removes dead navigation, and connects reviewers directly to the live platform. |

---

## Design Decisions

The visual language — color palette, typography, and the "Claim → Evidence → Interview" framing — was chosen to match how the content is structured. The CSS variables in `globals.css` (`--color-brand`, `--color-accent`, `--color-bg`, `--color-text`, `--font-ibm-plex-mono`) are the single source of truth for color and font usage. Every color reference uses a CSS variable rather than a hardcoded value, ensuring maintainability across light and dark themes.

## Testing

Playwright is configured for end-to-end testing. Add specs under a `tests/` directory and run them against the dev server.

## Deployment

The application is deployed live on both Netlify and Vercel:

- **Netlify Deployment:** [https://ahmad-bayu-samudera.netlify.app/](https://ahmad-bayu-samudera.netlify.app/)
- **Vercel Deployment:** [https://portfolio-ahmad-bayu-samudera.vercel.app/](https://portfolio-ahmad-bayu-samudera.vercel.app/)

For new deployments, connect the repository to [Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/) — default Next.js build settings (`npm run build`) will work out of the box.

---

## 🧙‍♂️ FE-AA2: Interactive 3D Hero Integration (Black Mage Low-Poly)

### Project Summary & 3D Interaction Guide
This feature integrates a highly dynamic and interactive Web3D Hero section into the portfolio. Powered by **Three.js**, **React Three Fiber (@react-three/fiber)**, and **Drei (@react-three/drei)**, the scene renders a Low-Poly Black Mage character (`black_mage.glb`, **73 KB**) equipped with complex animations, dual interaction modes, and custom material manipulations.

#### 🎮 Interactive Features & Custom Animations
1. **Dual State Layouts (Box vs Global Cursor Mode):**
   - **Box Mode:** The Mage is contained within a sleek, frosted glass UI container at the bottom right (`backdrop-blur-xl`, `rounded-xl`). Users can freely interact with the model using full `OrbitControls` (Pan, Rotate, Zoom).
   - **Global Cursor Mode:** Clicking anywhere on the screen 3 times instantly expands the Canvas into a fullscreen overlay. The Mage seamlessly snaps out of the box and fluidly follows the global mouse cursor position with parallax smoothing.
2. **Advanced Eye Animation (UV Morphing & Blinking):** The Mage's eyes are programmed to blink asynchronously and periodically morph their shape from round pupils to sharp vertical slits using dynamic UV coordinate scaling (`THREE.ClampToEdgeWrapping`). When the eyes become slits, their emissive intensity dynamically surges.
3. **Breathing Magical Fire Aura:** The Mage is surrounded by its original pixelated fire sprites and 3 orbiting magical spheres. All fire elements are synchronized with a custom `useFrame` mathematical animation loop that creates a slow, rhythmic "breathing" pulse effect and smoothly transitions colors between bright Red and bright Blue over a 20-second cycle.
4. **Dynamic Lighting & Aesthetics:** The environmental lighting and aura intensities dynamically adapt based on the Mage's current mode. The design prioritizes a clean, glassmorphic aesthetic without cluttered developer UI or unnecessary text labels.

---

### 📊 FE-AA2 Interactive Compliance Checklist

| Criteria | Implementation Details | Status |
|---|---|---|
| **3D Scene Rendered in Browser** | Built with R3F `<Canvas>` and Drei `<useGLTF>` rendering `/models/black_mage.glb`. | ✅ Completed |
| **Interactive Controls (Beyond Orbit Controls)** | Mouse cursor Parallax via `useFrame` + click-to-toggle Magic Aura lighting state. | ✅ Completed |
| **Asset Optimization & File Size Logging** | Asset stored in `public/models/black_mage.glb` (File size: **73 KB** verified). | ✅ Completed |
| **Lazy Loading & Fallback** | Loaded dynamically via `React.lazy()` + `<Suspense>` with a sleek 2D `CanvasFallback` UI. | ✅ Completed |
| **Mobile Friendliness & DPR Cap** | Device pixel ratio capped at `dpr={[1, 2]}`, camera zoom disabled (`enableZoom={false}`). | ✅ Completed |
| **FE-10 Performance Lens Compatibility** | Integrated `<Perf position="top-left" />` during development mode for profiling. | ✅ Completed |

---

### 🚀 Performance Metrics & Optimizations

| Metric | Target / Benchmark | Implementation Strategy |
|---|---|---|
| **3D Model Size** | 73 KB | Low-Poly GLTF format preloaded with `useGLTF.preload()`. |
| **Target Frame Rate** | 60 FPS | Frame loop optimized via `useFrame` and capped DPR (`[1, 2]`). |
| **Bundle Load Strategy** | Lazy Loaded | `React.lazy()` splits R3F bundle away from core HTML/CSS load. |
| **Fallback Experience** | Instant 2D UI | `CanvasFallback` prevents layout shift during asset download. |

#### Applied Performance Optimizations
- **Dynamic DPR Capping (`dpr={[1, 2]}`):** Restricts high-DPI screens (e.g. 3x Retina displays) from over-rendering pixels, avoiding GPU fill-rate bottlenecks.
- **Lazy Loading & Code Splitting:** Heavy Web3D libraries (`three`, `@react-three/fiber`, `@react-three/drei`) are chunked out of the primary entry point and fetched on demand.
- **Restricted Orbit Controls:** Disabled zooming (`enableZoom={false}`) and panning to prevent mobile touch gesture conflicts (scroll blocking).
- **Preloaded GLTF Assets:** `useGLTF.preload('/models/black_mage.glb')` ensures assets load efficiently prior to component mount.

---

## License

Private project. All rights reserved.

