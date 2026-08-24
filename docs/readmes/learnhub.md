# LearnHub — Frontend AI & Accessibility Masterclass

A mini LMS showcase built with React + TypeScript, demonstrating W3C ARIA APG compliance through hand-crafted accessible components alongside a `shadcn/ui` + Radix UI comparison layer.

**Live demo:** `http://localhost:5174`

---

## Screenshot

### Course Detail View

![Course Detail — Overview Tab](docs/assets/course-detail.jpeg)

Frontend AI & Accessibility Masterclass showcasing custom accessible components with WCAG 2.1 AA compliance.

---

### Accessibility Audit View

![Accessibility Audit — Custom vs shadcn/ui](docs/assets/audit-view.jpeg)

Side-by-side comparison of custom-built accessible components vs `shadcn/ui` (Radix UI) implementations.

---

## Architecture

```
playground/src/
├── components/
│   ├── custom/          # 3 mandatory a11y components (built from scratch)
│   │   ├── CustomDisclosure.tsx   # Accordion / Syllabus modules
│   │   ├── CustomTabs.tsx         # Course info navigation
│   │   └── CustomModal.tsx        # Certificate claim dialog
│   ├── domain/           # MVVM — ViewModels consumed here
│   │   ├── CourseOverviewTabs.tsx
│   │   ├── SyllabusAccordion.tsx
│   │   └── ClaimCertificateModal.tsx
│   ├── ui/               # shadcn/ui components (Radix primitives)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   └── accordion.tsx
│   ├── common/           # Shared reusable components
│   └── layout/           # Header, Footer, Container
├── hooks/                # MVVM ViewModels
│   ├── useCourseViewModel.ts      # Tab state & keyboard navigation
│   ├── useSyllabusViewModel.ts     # Chapter open/close state
│   └── useCertificateViewModel.ts # Certificate form validation
├── types/                # Shared TypeScript interfaces
│   ├── course.ts
│   └── custom-components.ts
└── data/                 # Static course content
    └── courseData.ts
```

### MVVM Pattern

```
Hook (ViewModel)  →  Domain Component  →  Custom A11y Component
```

- **Model:** `courseData.ts` — static course content types
- **ViewModel:** `useCourseViewModel`, `useSyllabusViewModel`, `useCertificateViewModel`
- **View:** Domain components (`CourseOverviewTabs`, `SyllabusAccordion`, `ClaimCertificateModal`)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| UI Library | shadcn/ui (Radix UI primitives) |
| Routing | React Router v7 |
| Testing | Playwright |
| Linting | ESLint + TypeScript strict mode |

### Key Dependencies

```json
"@radix-ui/react-accordion": "^1.2.20",
"@radix-ui/react-dialog": "^1.1.23",
"@radix-ui/react-tabs": "^1.1.21",
"react-router-dom": "^7.18.2",
"@playwright/test": "^1.62.0"
```

---

## The 3 Custom Accessible Components

Built **from scratch** — no external UI libraries. All ARIA-compliant, keyboard-first.

### 1. CustomDisclosure

`src/components/custom/CustomDisclosure.tsx`

Accordion component for course syllabus modules.

| Feature | Implementation |
|---|---|
| Role | `button` trigger + `role="region"` content |
| State | `aria-expanded` as `"true"` / `"false"` string |
| Association | `aria-controls` links trigger to content |
| Keyboard | `Enter`/`Space` toggle; `ArrowUp`/`ArrowDown` roving focus |
| ID isolation | `useId()` prevents duplicate IDs across instances |
| Modes | Controlled (`isOpen` prop) + uncontrolled (`defaultOpen`) |

```tsx
<CustomDisclosure id="chapter-1" title="Introduction to Accessibility" defaultOpen>
  <p>Learn the fundamentals of web accessibility...</p>
</CustomDisclosure>
```

### 2. CustomTabs

`src/components/custom/CustomTabs.tsx`

Tab navigation for course information (Overview, Curriculum, Instructor).

| Feature | Implementation |
|---|---|
| Role | `role="tablist"` → `role="tab"` → `role="tabpanel"` |
| State | `aria-selected` as `"true"` / `"false"` string |
| Keyboard | `ArrowLeft`/`ArrowRight`; `Home`/`End`; `Enter`/`Space` |
| Focus | Roving `tabIndex` (active=0, inactive=-1) |
| Announcement | `aria-live="polite"` on active panel |
| Content | `hidden` attribute on inactive panels |

```tsx
<CustomTabs
  items={[
    { id: 'overview', label: 'Overview', content: <OverviewPanel /> },
    { id: 'curriculum', label: 'Curriculum', content: <CurriculumPanel /> },
  ]}
  defaultTabId="overview"
/>
```

### 3. CustomModal

`src/components/custom/CustomModal.tsx`

Certificate claim dialog with full focus management.

| Feature | Implementation |
|---|---|
| Role | `role="dialog"` + `aria-modal="true"` |
| Labels | `aria-labelledby` + `aria-describedby` |
| Focus trap | `Tab` cycles within modal; `Shift+Tab` reverse |
| Focus open | Focus moves to first focusable element |
| Focus restore | `isConnected` guard before `.focus()` on close |
| Scroll lock | `overflow: hidden` + `paddingRight` scrollbar compensation |
| Close | `Escape` key + backdrop click |

```tsx
<CustomModal isOpen={isOpen} onClose={handleClose} title="Klaim Sertifikat Anda">
  <form>...</form>
</CustomModal>
```

---

## shadcn/ui Comparison Layer

The `AuditView` (`/audit`) route renders both custom and `shadcn/ui` versions side by side for direct comparison.

### Implementation Comparison

| Aspect | Custom (Native) | shadcn/ui (Radix UI) |
|---|---|---|
| Accordion DOM | Inline | `@radix-ui/react-accordion` |
| Modal rendering | Inline (in component tree) | `@radix-ui/react-portal` teleports to `document.body` |
| Modal `aria-hidden` | Manual (not implemented) | Automatic on background tree |
| Scroll lock | Direct `style.overflow` manipulation | `data-state` attribute, stack-safe |
| Tabs activation | Hard-coded manual only | `activationMode` prop (`"auto"` / `"manual"`) |
| Focus management | `document.getElementById` | Internal ref collection |

See [NOTES.md](playground/NOTES.md) for the full technical gap analysis.

---

## Project Structure

```
LearnHub/
├── docs/                    # Development documentation
│   ├── 1_ARCHITECTURE.md
│   ├── 2_ROUTING.md
│   ├── 3_TYPES.md
│   ├── 4_UI-COMPONENTS.md
│   ├── 5_LAYOUT.md
│   ├── 6_ACCESSIBLE-COMPONENTS.md
│   ├── 7_DOMAIN-COMPONENTS.md
│   ├── 8_MVVM-LOGIC.md
│   ├── 9_SHADCN-AUDIT.md
│   ├── 10_KEYBOARD-TESTING.md
│   ├── 11_A11Y-STABILIZATION.md
│   ├── 12_REFACTOR-AUDIT.md
│   └── assets/              # README screenshots
│       ├── course-detail.png
│       └── audit-view.png
├── playground/              # Main application
│   ├── src/
│   ├── e2e/                # Playwright E2E tests
│   ├── NOTES.md            # FE-05 technical gap analysis
│   └── package.json
├── CLAUDE.md                # Project rules & reference
└── README.md                # This file
```

---

## Commands

```bash
cd playground

# Development
npm run dev          # Start dev server (http://localhost:5174)

# Build
npm run build        # TypeScript check + Vite build
npx tsc --noEmit    # TypeScript type check only

# Linting
npm run lint         # ESLint with TypeScript rules

# Testing
npx playwright test e2e/keyboard.spec.ts   # 11 keyboard-only E2E tests
npx playwright test                         # All tests

# Preview production build
npm run preview
```

---

## Accessibility Standards

- **WCAG 2.1 AA** compliant
- **W3C ARIA APG** patterns followed for:
  - [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
  - [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
  - [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

### Keyboard Navigation

| Component | Keys |
|---|---|
| CustomDisclosure | `Enter`/`Space` toggle; `ArrowUp`/`ArrowDown` navigate; `Tab` reach |
| CustomTabs | `ArrowLeft`/`ArrowRight` switch; `Home`/`End` first/last; `Tab` reach |
| CustomModal | `Escape` close; `Tab` cycle; `Shift+Tab` reverse; backdrop click close |

---

## Verification Checklist

- [ ] `tsc --noEmit` — zero TypeScript errors
- [ ] `npm run build` — compiles cleanly
- [ ] `npm run lint` — zero ESLint warnings
- [ ] Playwright E2E: 11/11 keyboard tests pass
- [ ] No `any` types or `as any` assertions in source
- [ ] All handlers memoized with `useCallback`
- [ ] All interactive elements have visible `focus-visible` ring
- [ ] Modal focus trap: Tab stays within modal while open
- [ ] Modal focus returns to trigger on close
- [ ] Scrollbar does not jump when modal opens/closes
- [ ] `aria-selected` / `aria-expanded` always strings (`"true"` / `"false"`)
