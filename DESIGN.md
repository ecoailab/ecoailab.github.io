# EcoAI Lab Design System

## 0. Research Log (greenfield)

- Embedded refs: shortlisted `supabase.md`, `linear.app.md`, `voltagent.md` → picked **`gpt-tasteskill.md` (Layer A)** + **`supabase.md` (Layer B)** because the brief is expressive ("FOMO 오는 최신기술", dynamic rendering → Awwwards-tier execution discipline) and the lab identity (eco-energy + AI, dark technical canvas with one restrained accent) maps to Supabase's dark-emerald token architecture — with the accent hue swapped to the lab's official cobalt.
- Brand lock: user-supplied logo `시안3` (wing/leaf "E" mark + bold wordmark), extracted brand color **#004193**, transparent PNG. All lab imagery unified on this mark.
- Lazyweb: 2 queries ("AI research lab university website", "quantum computing dark landing page"), 16 results, 2 screens viewed in full (Sora news index, Goodfire landing) → layout grammar taken: wide 1200–1320px container, banded sections separated by 80–140px, one dominant visual move per section, quiet text-first CTAs in hero, dark fields used as anchors/endcaps.
- Imagen drafts: skipped — no image-generation tool in this environment; signature hero visual is procedural (WebGL particles assembled from the logo alpha mask), not a bitmap.
- Conflict resolution: where Layer A bans decorative meta-labels ("SECTION 01") and Layer B ritualizes mono uppercase labels, Layer A wins — mono labels must carry real information (`IEEE ACCESS · 2026`, `// RESEARCH_DOMAINS`), never numbering decoration.
- Deterministic layout draw (gpt-taste protocol, seed = prompt length 130): Hero → **Cinematic Center**; Type stack → **Outfit** (+ Pretendard for Korean, mandated by content); Components → **Inline Typography Images**, **Horizontal Accordion**, **Infinite Marquee**; GSAP → **Scroll Pinning** + **Scrubbing Text Reveal**.

## 1. Atmosphere & Identity

A night observatory for energy intelligence. Deep near-black blue canvas, hairline ruled grids, and two living signatures: **a particle field that assembles into the lab's wing mark and dissolves back into an energy stream** ("Eyes on the sky" made literal), and **a full-page cosmic sky** that sits behind the entire page as a quiet, deep-space atmosphere. The cobalt of the logo (#004193) is identity; its lit azure ramp (#3E8EDE → #9EC9FF) is energy in motion. Everything else is near-monochrome blue-gray. The site feels like a research instrument — precise, quiet, alive — not a SaaS landing page.

Signature moments: the WebGL hero where ~14,000 GPU particles gather from noise into the wing-"E" logo, react to the pointer, then scatter as the page scrolls — the mark literally made of energy; and the layered cosmic sky that drifts with the pointer, giving the whole page a single, shared depth without competing with the content above it.

## 2. Color

Dark-mode-native. No light theme.

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Canvas | `--color-abyss` | `#04070C` | Page background |
| Surface | `--color-ink` | `#0A0F16` | Section surfaces, nav pill |
| Panel | `--color-panel` | `#0D141D` | Cards, raised panels |
| Border | `--color-line` | `#16202E` | Hairlines, card borders, dividers |
| Border strong | `--color-line-strong` | `#223146` | Hover borders, emphasized rules |
| Brand | `--color-brand` | `#004193` | Logo, identity markers, focus accents |
| Azure | `--color-azure` | `#3E8EDE` | Links, interactive accent, chart strokes |
| Sky glow | `--color-sky-glow` | `#9EC9FF` | Particle glow, gradient highlights, hover text |
| Text primary | `--color-frost` | `#EAF2FC` | Headings, body strong |
| Text secondary | `--color-mist` | `#8FA3BC` | Body, metadata |
| Text muted | `--color-dim` | `#55677E` | Captions, disabled, footer legal |
| Success | `--color-success` | `#2FBF8F` | Active/ongoing status chips |
| Warn | `--color-warn` | `#D9A441` | Award/highlight chips (sparingly) |

### Rules
- Depth by tonal shift + hairline borders (`--color-line`), never shadows on surfaces.
- Brand/azure used for interactive elements and glow moments; never large fills.
- Particle/glow effects may use the azure→sky-glow ramp with additive blending; this is the one place "glow" is allowed.
- No color outside this table. Extend the table first.

## 3. Typography

### Font Stack
- Display: `Outfit` (self-hosted via @fontsource), fallback `Pretendard, sans-serif`
- Body: `Pretendard` (jsdelivr CDN, dynamic subset; preconnected), fallback `Outfit, sans-serif`
- Mono: `JetBrains Mono` (@fontsource), fallback `monospace`
- Justification for 3 families: Korean content requires Pretendard; Outfit carries Latin display voice; mono is the data/instrument voice.

### Scale (fluid with clamp)

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(2.75rem, 6.5vw, 5.5rem) | 600 | 1.05 | -0.02em | Hero H1 only |
| H1 | clamp(2.25rem, 4.5vw, 3.5rem) | 600 | 1.1 | -0.015em | Page titles |
| H2 | clamp(1.75rem, 3vw, 2.5rem) | 600 | 1.2 | -0.01em | Section headers |
| H3 | 1.25rem | 600 | 1.35 | -0.005em | Card titles |
| Body/lg | 1.125rem | 400 | 1.65 | 0 | Lead paragraphs |
| Body | 1rem | 400 | 1.65 | 0 | Default |
| Body/sm | 0.875rem | 400 | 1.55 | 0 | Secondary, metadata |
| Caption | 0.75rem | 500 | 1.4 | 0.02em | Chips, metadata |
| Mono label | 0.75rem | 500 | 1.3 | 0.12em | Real-information labels only, uppercase |

### Rules
- Hero H1 never exceeds 3 lines at any viewport — wide container (`max-w-6xl`), fluid size.
- Body text never below 14px (0.875rem).
- Weight 400/500/600 only; no 700+.

## 4. Spacing & Layout

Base unit 4px. Section rhythm is cinematic: `py-24 md:py-36` between major sections.

- Max content width: `76rem` (1216px), gutters `px-6 md:px-10`.
- Grid: 12-col at lg, gap-6; bento uses `grid-flow-dense` with interlocking spans, zero dead cells.
- Breakpoints: sm 640 / md 768 / lg 1024 / xl 1280.
- Full-bleed dark canvas with constrained content bands; section separation by spacing + hairline rules, not background flips (canvas stays `--color-abyss`; only panels lift).

## 5. Components

### Nav (floating pill)
- Structure: fixed top, centered glass pill (`--color-ink` at 72% + backdrop-blur + 1px `--color-line`), logo mark left, links center, GitHub icon + contact pill right.
- Variants: default / scrolled (pill tightens, border brightens). Mobile: pill → bottom-sheet menu (full overlay, focus-trapped).
- States: link default `--color-mist`, hover `--color-frost`, active route azure dot indicator; focus-visible ring azure.
- Motion: 150ms ease-out color; pill transform 250ms; menu overlay fade+rise 300ms.

### Hero (home only)
- Structure: `min-h-[100dvh]`, full-bleed WebGL canvas behind, centered H1 (max 3 lines), sub line, two CTAs (primary pill azure-on-brand, secondary ghost hairline).
- Signature: particle logo assembly (see Section 6). Scroll indicator: hairline + mono `SCROLL`.
- States: WebGL fails → static logo PNG poster + gradient (never blank).
- Accessibility: canvas `aria-hidden`, `prefers-reduced-motion` → static poster.

### Section Heading
- Structure: mono real-info label (e.g. `// PEOPLE`) + H2 + optional lead paragraph, hairline rule beneath with azure tick.
- No decorative numbering, no pill tags.

### Bento Card (research domains)
- Structure: `--color-panel`, 1px `--color-line`, radius 12px, padding 24–32px, `grid-flow-dense`.
- Content: domain icon (SVG stroke), H3, body/sm, mono domain tag. One card carries the sky-hero image, one carries the inline-stat.
- States: hover → border `--color-line-strong` + translateY(-2px) + azure icon tint; GPU-only.

### Horizontal Accordion (core tech)
- Vertical slices that expand on hover/focus to reveal description; keyboard: arrow-key navigable, `aria-expanded`.
- Collapsed: vertical mono label; expanded: H3 + body/sm + hairline.

### Publication Row / News Row
- Structure: grid row — [mono index | title + authors | venue + year | note chip], hairline `--color-line` between rows.
- States: hover → row bg lifts to `--color-ink`, title azure. Focusable when linked.
- Filter bar: search input + category chips (pill, hairline; active = brand border + azure text). Client-side filtering, URL-param aware.

### Person Card
- Structure: panel, monogram avatar (initials on brand-gradient disc) or photo, name (KR + EN), role chip, GitHub link icon.
- Professor card: wide split — photo left, bio timeline right (mono years, hairline rail).

### Marquee
- Infinite scroll of venue names (IEEE Access, Applied Energy, AAAI, IJCAI…), `--color-dim` text, pause on hover, masked edges. Honors `prefers-reduced-motion`.

### Footer
- Dark endcap: brand lockup, contact block (email/tel/room), sitemap columns, mono legal line. Hairline top border.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 100–150ms | ease-out | link/hover color, chip press |
| Standard | 200–300ms | ease-in-out | accordion, filter, menu |
| Emphasis | 400–600ms | cubic-bezier(0.16,1,0.3,1) | hero entry, view transitions |
| Scroll-driven | tied to scroll | linear (scrub) | text reveal, pinned scenes, particle scatter |

### Signature scenes (GSAP ScrollTrigger + Lenis)
1. **Particle mark** (three.js): idle drift → pointer repulsion → on scroll, particles scatter off-screen (scrubbed). Static fallback poster otherwise.
2. **Scrubbing manifesto**: research mission paragraph, word opacity 0.12 → 1.0 sequentially on scroll.
3. **Pinned research map**: section title pins left while project cards scroll right; each card fades/scales 0.94 → 1.0 on entry.
4. **View Transitions** (Astro ClientRouter): cross-page fade+rise, shared element on nav pill.

### Cosmic sky backdrop
A single, full-page WebGL sky sits behind the entire page as the lab's signature atmosphere. It is depth-mapped into three star layers and one slow cloud/aurora band. The sky is **not** the hero particle logo; it is a separate, persistent backdrop that covers the whole route.

- **Star depth layers:** far, mid, near. Each layer moves opposite to the pointer with fixed parallax factors: far `0.006`, mid `0.014`, near `0.028`.
- **Cloud/aurora band:** subtle cobalt-to-azure cosmic dust and nebula drifting across the upper/middle band. Parallax capped at no more than `0.004` for the cloud layer and no more than `0.002` for the aurora layer so it never overwhelms the text above.
- **Colors:** locked to the existing palette. Stars and dust use `--color-brand`, `--color-azure`, `--color-sky-glow`, and `--color-abyss` only. No new tokens are added.
- **Readability guard:** nebula alpha contribution is capped at `0.06` maximum so the backdrop never reduces text contrast.
- **Motion response:** mouse-driven parallax is smoothed with frame damping around `0.08` (lerp per frame). On coarse-pointer or `hover: none` devices, the sky switches to automatic low-amplitude drift; no touch tracking or pointer listener is registered.
- **Reduced motion:** when `prefers-reduced-motion` matches, the sky renders one static frame and stops. No pointer listener, no `requestAnimationFrame`, no drift.
- **Lifecycle:** the pointer listener and `requestAnimationFrame` loop are created when the page becomes active and torn down on `astro:before-swap` only to prevent leaks and duplicate loops.

- Lenis smooth scroll globally, disabled with `prefers-reduced-motion`.
- Only `transform`/`opacity`/`filter` animate. `will-change` only during active tweens.

## 7. Depth & Surface

Strategy: **tonal-shift + hairline borders** (Supabase-derived). No box-shadows on surfaces. The only "glow" in the system is the additive particle/glow layer in the hero and azure focus rings (`0 0 0 2px var(--color-abyss), 0 0 0 4px var(--color-azure)`).

| Level | Treatment | Usage |
|-------|-----------|-------|
| 0 | `--color-abyss` canvas | page |
| 1 | `--color-panel` + 1px `--color-line` | cards, rows |
| 2 | border `--color-line-strong` | hover/emphasis |
| 3 | brand/azure border or tint | active, focus, identity |

## 8. Accessibility Constraints & Accepted Debt

### Constraints
- WCAG 2.2 AA: body contrast ≥ 4.5:1 (`--color-mist` on `--color-abyss` = 7.1:1 pass; `--color-dim` used only for captions ≥ 12px at 3:1+), visible azure focus ring on every interactive element, full keyboard reachability (accordion, filter bar, menu), `prefers-reduced-motion` disables particles/marquee/scrub scenes, canvas always `aria-hidden` with text equivalent present.
- Every `<img>` has explicit dimensions or aspect-ratio box; LCP image `fetchpriority="high"`.

### Accepted Debt
| Item | Location | Why accepted | Owner / Exit |
|------|----------|--------------|--------------|
| Member photos unavailable (monogram avatars instead) | /people | Source site hotlinks Google-hosted images not licensed to mirror; lab can drop photos into `public/assets/people/` later | Lab / when photos provided |
| Gallery limited to 3 local photos + hero assets | /gallery | Only local images available; Google Sites gallery not mirrored | Lab / when gallery photos provided |
