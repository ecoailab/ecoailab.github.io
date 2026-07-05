# EcoAI Lab Website Design System

## 1. Atmosphere & Identity

EcoAI Lab follows an **Anthropic / Claude** aesthetic: a warm ivory canvas, a single coral accent, generous whitespace, and serif (Fraunces) headings paired with a clean sans body. The signature is calm, human, editorial clarity — not a SaaS dashboard, neon AI product, or a busy Google Sites page. Depth comes from spacing, soft radii, and thin warm borders rather than heavy shadows, gradients, or photo overlays.

## 2. Color

### Palette

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Surface/page | --ecoai-bg-page | #faf9f5 | Ivory page background |
| Surface/page-2 | --ecoai-bg-page-2 | #f5f4ee | Alternate section wash |
| Surface/site white | --ecoai-site-white | #faf9f5 | Header and content sections (ivory, not pure white) |
| Surface/primary | --ecoai-surface | #ffffff | Main cards and panels |
| Surface/secondary | --ecoai-surface-soft | #f5f4ee | Research panels |
| Surface/wash | --ecoai-surface-wash | #f0eee6 | Quiet section transitions |
| Text/primary | --ecoai-text | #1f1e1c | Headlines and strong labels (warm near-black) |
| Text/secondary | --ecoai-text-secondary | #3d3d3a | Body copy |
| Text/muted | --ecoai-text-muted | #6b6b63 | Metadata and captions |
| Border/subtle | --ecoai-border | rgba(60,55,45,0.12) | Card outlines (warm) |
| Border/accent | --ecoai-border-accent | rgba(217,119,87,0.32) | Highlighted panels |
| Accent/primary | --ecoai-accent | #d97757 | Coral — CTAs, links, focus, active nav, wordmark accent |
| Accent/deep | --ecoai-accent-deep | #bd5d3a | Coral hover/pressed |
| Accent/warm | --ecoai-accent-warm | #b4886b | Small metadata and collaboration notes |

### Rules

- **Coral (#d97757) is the one and only accent.** It carries links, CTAs, active nav, focus rings, and the hero "AI" wordmark. Do not reintroduce blue, sky, cyan, teal, or forest green as accents.
- Backgrounds stay ivory (#faf9f5); cards are white. Never use pure cool white (#f8fafc) or dark panels.
- Avoid generic AI gradients, neon glows, glass/grid backgrounds, and heavy photo overlays.
- Depth = spacing + soft radii (12–14px) + thin warm borders + light warm shadows. Keep shadows subtle.
- New colors must first be added to this table, then exposed as CSS custom properties in the Claude layer at the end of `assets/css/custom.css`.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(3rem, 7vw, 5.7rem) | 700-850 | 1.02 | 0 | Google Sites-style sky hero |
| H1 | clamp(2rem, 4vw, 3rem) | 850-950 | 1.08 | 0 | Page titles |
| H2 | clamp(1.75rem, 3vw, 2.35rem) | 800-950 | 1.12 | 0 | Section headers |
| H3 | 1.18rem-1.55rem | 800-950 | 1.18 | 0 | Card titles |
| Body/lg | 1.05rem-1.16rem | 560-650 | 1.72 | 0 | Lead paragraphs |
| Body | 1rem | 520-650 | 1.68-1.78 | 0 | Main copy |
| Body/sm | 0.9rem-0.96rem | 600-800 | 1.45-1.65 | 0 | Card copy and metadata |
| Label | 0.72rem-0.8rem | 900-950 | 1.2 | 0 | Technical labels |

### Font Stack

- **Headings (serif):** `Fraunces` (opsz 9–144), falling back to `Source Serif 4`, Georgia, serif. Applied to h1–h3, the hero title, section headings, and card titles. Loaded via `layouts/_partials/hooks/head-end/claude-fonts.html`.
- **Body / navigation (sans):** `Inter`, then system-ui / theme sans stack. Clean and neutral.
- Mono: system monospace only for compact numeric records, never as a sci-fi data motif.
- Headings use a slightly tight tracking (-0.015em; hero -0.025em) and weight ~560–600, echoing Claude's Copernicus feel.

### Rules

- Korean headings use `word-break: keep-all` and `text-wrap: balance` where supported.
- Body copy should stay near 65-75 characters per line.
- Use weight and size for hierarchy; avoid decorative all-caps except short technical labels.

## 4. Spacing & Layout

### Base Unit

All spacing is based on 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --ecoai-space-1 | 4px | Fine internal gaps |
| --ecoai-space-2 | 8px | Compact icon/label gaps |
| --ecoai-space-3 | 12px | Small card gaps |
| --ecoai-space-4 | 16px | Default inline padding |
| --ecoai-space-5 | 20px | Tight card padding |
| --ecoai-space-6 | 24px | Standard card padding |
| --ecoai-space-8 | 32px | Large card padding |
| --ecoai-space-10 | 40px | Section internal rhythm |
| --ecoai-space-12 | 48px | Homepage hero and section entry |
| --ecoai-space-16 | 64px | Major section rhythm |

### Grid

- Max content width: 1180px for standard sections, 1240px for homepage hero.
- Homepage desktop hero: full-bleed sky background with centered title and tagline. Content begins below the hero.
- Breakpoints: mobile below 720px, tablet 721-900px, compact desktop 901-1100px, desktop above 1100px.

### Rules

- Prefer CSS Grid for multi-column research layouts.
- Fixed-format cards should use stable dimensions or `aspect-ratio` to prevent layout shifts.
- Use `min-height`/`min-h` patterns, not fixed viewport heights.

## 5. Components

### Research Hero
- **Structure**: full-bleed sky background, centered display title, tagline, down cue, then research summary below.
- **Variants**: homepage only.
- **Spacing**: `--ecoai-space-4` through `--ecoai-space-12`.
- **States**: pathway links have default, hover, active, and focus-visible states.
- **Accessibility**: one semantic page H1 remains available; sky background is decorative; skip link is preserved.
- **Motion**: hover uses transform and shadow only.

### Research Board Node
- **Structure**: anchor or article card with route label, title, and short description.
- **Variants**: energy, sensing, model, output.
- **Spacing**: `--ecoai-space-5` to `--ecoai-space-6`.
- **States**: default, hover, focus-visible, active.
- **Accessibility**: entire card is the link with clear visible text.
- **Motion**: hover lift with transform, no layout animation.

### Editorial Panel
- **Structure**: section panel or card with label, heading, body, and optional link group.
- **Variants**: publication output, professor card, contact, collaboration CTA.
- **Spacing**: `--ecoai-space-6` to `--ecoai-space-10`.
- **States**: links and cards expose hover/focus-visible; non-interactive panels do not animate.
- **Accessibility**: contrast must pass against glass or dark surfaces.
- **Motion**: subtle hover only for interactive panels.

### Pathway Link
- **Structure**: compact anchor with eyebrow and Korean destination label.
- **Variants**: map, stories, students, archive links.
- **Spacing**: `--ecoai-space-3` to `--ecoai-space-4`.
- **States**: default, hover, active, focus-visible.
- **Accessibility**: clear text, no icon-only links.
- **Motion**: translateY hover and visible focus ring.

### Responsive Research Picture
- **Structure**: `picture` with AVIF sources first, WebP second, JPEG fallback image.
- **Variants**: LCP hero photo, gallery photo, large editorial background equivalent via CSS `image-set()`.
- **Sizing**: 640w, 960w, and a max-width derivative up to the original image width for homepage research photography.
- **Accessibility**: meaningful photos keep descriptive alt text on the fallback `img`.
- **Performance**: LCP image is preloaded with `imagesrcset`, `imagesizes`, and `fetchpriority="high"`.

### Legacy Sites Info Row
- **Structure**: full-width white section with wide horizontal rules, centered bold Korean research statements, then two image links and contact lines.
- **Variants**: research domains, core technologies, collaboration and contact rows.
- **Spacing**: large vertical breathing room, minimal card chrome.
- **States**: image links and text links expose hover and focus-visible.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 120-160ms | ease-out | Press and focus response |
| Standard | 200-260ms | ease | Hover lift and surface shift |
| Emphasis | 420-520ms | cubic-bezier(0.16, 1, 0.3, 1) | Future hero reveal only |

### Rules

- Animate only `transform`, `opacity`, and `filter`.
- Respect `prefers-reduced-motion: reduce`.
- Do not animate non-interactive cards unless the motion communicates state.
- All interactive links and cards need visible focus rings.

## 7. Depth & Surface

### Strategy

Use a Google Sites strategy on the homepage: white sections, thin gray dividers, simple centered typography, and minimal shadows. Depth should come from the sky image and spacing. Keep the heavier paper editorial depth for lower archive/detail pages only when needed.

| Level | Value | Usage |
|-------|-------|-------|
| Line | 1px solid var(--ecoai-border) | Standard cards |
| Accent line | 1px solid var(--ecoai-border-accent) | Active/highlight panels |
| Tint block | rgba(255,253,248,0.92) | Hero captions and quiet panels |
| Subtle shadow | 0 18px 44px rgba(58,47,32,0.10) | Light panels |
| Ambient shadow | 0 24px 80px rgba(68,54,35,0.14) | Premium photo mats and section panels |
| Deep shadow | 0 28px 70px rgba(58,47,32,0.16) | Hero visual and large editorial panels |
| Inset highlight | inset 0 1px 0 rgba(255,255,255,0.82) | Raised paper surfaces |

### Rules

- Avoid dark sections unless the content itself requires contrast.
- Homepage light areas should mostly use dividers and spacing rather than tinted shadows.
- Radius stays at 8px for cards and panels; pills are reserved for small CTAs or labels.
- Image format order is AVIF, then WebP, then original JPEG. Do not replace real lab photos with generated imagery for performance.
