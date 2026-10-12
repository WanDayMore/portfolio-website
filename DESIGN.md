---
name: Isaiah Quejadas Portfolio
description: Clean, minimalist indie-developer portfolio and software engineering workshop
colors:
  primary: "#4f46e5"
  primary-hover: "#4338ca"
  neutral-bg: "#fafaf9"
  surface: "#ffffff"
  surface-card: "#ffffff"
  border-structural: "#e7e5e4"
  border-subtle: "#f5f5f4"
  text-primary: "#1c1917"
  text-muted: "#57534e"
  accent-emerald: "#059669"
  accent-amber: "#d97706"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
  xl: "14px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  card-bento:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.xl}"
    padding: "24px"
    border: "1px solid {colors.border-structural}"
  chip-category:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "4px 10px"
---

# Design System: Isaiah Quejadas Portfolio

## Overview

**Creative North Star: "The Indie Craftsman's Workshop"**

The visual design system embodies honest, clean, and unpretentious indie-developer craftsmanship. Purpose-built for engineering hiring managers, technical founders, and collaborators, the interface rejects corporate theater, faux frosted-glass gloss, and floating gadgetry in favor of razor-sharp readability, solid paper surfaces, and straightforward technical proof.

Rather than hiding behind dark-room glows or floating status badges pinned to corners, the aesthetic is inspired by classic engineering notebooks, clean developer blogs, and high-craft indie software tools (e.g. Linear, Bear, Raycast documentation, and classic personal developer journals). Surfaces are anchored by warm stone paper (`#fafaf9`), solid crisp white cards (`#ffffff`), tactile 1px warm-stone borders (`#e7e5e4`), and high-contrast deep ink typography (`#1c1917`).

Confirmed visual anti-references include:
- Frosted glassmorphism, blur backdrops, translucent overlays, and glossy sheen
- Floating status chips, corner pills, and badge clutter pinned over images
- Artificial dark-mode obsession with neon halos and ambient glowing clouds
- Arbitrary proficiency gauges, star ratings, and subjective percentage meters
- Gradient text fills, neon clip paths, and AI-slop color schemes

**Key Characteristics:**
- Solid, opaque, paper-white cards on warm stone ground (`#fafaf9`)
- Pure solid typography in deep ink (`#1c1917`) with balanced contrast (`#57534e`)
- Grounded, inline metadata instead of floating status chips or corner tags
- Tactile 1px structural borders without ambient frosted blur
- Monospaced technical indicators (JetBrains Mono) paired with human geometric body copy (Plus Jakarta Sans)
- Snappy, unbloated, fast-loading visual footprint

## Colors

The palette uses a warm, editorial light-theme foundation designed for sustained daylight reading with crisp contrast.

### Primary
- **Craftsman Indigo** (`#4f46e5`): The deliberate interactive accent. Reserved for primary buttons, active text links, focused form strokes, and direct action items.
- **Craftsman Indigo Hover** (`#4338ca`): Deepened interactive hover state.

### Secondary Accents
- **Signal Emerald** (`#059669`): Live availability dot and verified production deployment status.
- **Signal Amber** (`#d97706`): Secondary notes and capstone academic highlights.

### Neutral
- **Stone Canvas** (`#fafaf9`): Root canvas background. A calm, warm off-white paper plane that prevents glare.
- **Solid White** (`#ffffff`): Component surface for cards, navigation bar, and modal dialogues. Solid and 100% opaque.
- **Structural Stone Border** (`#e7e5e4`): Crisp 1px boundary stroke defining card edges, dividers, and table rows.
- **Subtle Divider** (`#f5f5f4`): Faint internal horizontal rule for secondary line breaks.
- **Deep Ink Primary** (`#1c1917`): High-contrast, solid black-ink typography for headlines, titles, and body prose.
- **Stone Muted** (`#57534e`): Legible, WCAG AAA compliant secondary metadata, timestamps, and descriptive summaries.

### Named Rules
**The Solid Ground Rule.** All cards, containers, and bars are 100% opaque solid surfaces (`#ffffff`). Frosted glassmorphism, background blurs, and translucent rgba washes are strictly forbidden.
**The Inline Metadata Rule.** Metadata (dates, categories, status, architecture) must flow naturally as inline text within the layout structure. Floating badge overlays and corner status chips pinned across thumbnails are barred.
**The Single Accent Economy.** Craftsman Indigo is strictly restricted to interactive affordances (≤8% of any viewport).

## Typography

**Display & Headline Font:** Plus Jakarta Sans (with system-ui, -apple-system, sans-serif)
**Body Font:** Plus Jakarta Sans (with system-ui, -apple-system, sans-serif)
**Code & Metadata Font:** JetBrains Mono (with monospace)

**Character:** Clean, approachable, and technically authoritative. Plus Jakarta Sans offers open counters and warm geometric proportions, while JetBrains Mono gives authentic developer credibility to file sizes, commands, and tech stacks.

### Hierarchy
- **Display** (800 Extrabold, `clamp(2.25rem, 5vw, 3.5rem)`, `1.15` line-height, `-0.03em` tracking): Hero intro title.
- **Headline** (700 Bold, `clamp(1.5rem, 3vw, 2rem)`, `1.25` line-height, `-0.02em` tracking): Section titles.
- **Title** (600 SemiBold, `1.25rem` / `20px`, `1.35` line-height): Project titles and employer names.
- **Body** (400 Regular, `0.9375rem` / `15px`, `1.65` line-height, max line length `65–75ch`): Narrative descriptions and bullet points.
- **Label / Code** (600 SemiBold, `0.75rem` / `12px`, `0.02em` tracking): Tech stacks, timestamps, and architectural tags.

### Named Rules
**The Pure Ink Type Rule.** All headings and display titles render exclusively in solid Deep Ink (`#1c1917`). Gradient text fills or clipping masks are strictly prohibited.
**The Editorial Title Rule.** Headings stand alone without decorative kickers, artificial status pills, or noisy emoji prefixes.

## Layout

The spatial model relies on a clean, centered single-column or bento layout:
- **Max Container:** `max-w-5xl` (1024px) to `max-w-6xl` (1152px) centered with `px-4 sm:px-6 lg:px-8` gutters.
- **Vertical Rhythm:** `py-16 sm:py-20` between primary sections.
- **Content Hierarchy:** Distinct tiered organization prioritizing flagship distributed systems first, followed by auxiliary experiments.

## Elevation & Depth

True to the indie-developer ethos, depth is achieved through tactile, solid planar containment rather than heavy drop-shadows or floating blur layers:
- **Rest State:** Flat solid white surface with a crisp 1px `#e7e5e4` border.
- **Hover State:** Micro-lift or subtle border tint shift (`border-stone-400` or minimal `0 2px 8px -2px rgba(0, 0, 0, 0.05)`).
- **No Frosted Glass:** Completely eliminate `backdrop-blur-*`, `bg-white/70`, and translucent filters.

## Shapes

- **Buttons & Inputs:** Medium rounded corners (`rounded-lg` / 8–10px) with comfortable tactile padding.
- **Cards & Bento Frames:** Crisp rounded corners (`rounded-xl` / 12–14px) framed in 1px solid stone borders.
- **Tags & Indicators:** Subtle square-pill geometry (`rounded-md` / 6px) with clean inline typography.
- **Borders:** Crisp, 1px continuous hairline strokes (`border border-stone-200`).

## Components

### Buttons
- **Primary:** Craftsman Indigo background (`#4f46e5`), white text (`#ffffff`), `rounded-lg`, font-medium, padding `10px 20px`.
- **Secondary / Outline:** Solid white background (`#ffffff`), deep ink text (`#1c1917`), 1px `#e7e5e4` border, hover `bg-stone-50`.
- **Ghost:** Transparent background, deep ink or muted stone text, hover `bg-stone-100`.

### Status Indicators & Metadata
- **Format:** Inline metadata text (e.g. `Full-Stack • 2026` or `Active Production System`).
- **No Floating Chips:** Placed directly inside the card body alongside titles and descriptions, never floating over artwork or thumbnails.

### Cards & Projects
- **Surface:** Solid `#ffffff` background with 1px `#e7e5e4` border.
- **Thumbnail:** Clean rectangular or rounded-lg image preview nested cleanly with a 1px border. No floating badges layered on top.
- **Hierarchy:** Flagship production systems receive prominent grid placement; secondary exploratory work sits in an uncluttered compact row.

### Navigation
- **Surface:** Solid `#ffffff` bar or clean sticky header with a subtle 1px bottom border (`border-b border-stone-200`). Zero frosted blur.
- **Links:** Deep ink hover states, clean minimal active indicator.

### Modals & Deep Dives
- **Backdrop:** Neutral stone dimmed wash (`bg-stone-900/40`), clean and focused.
- **Modal Dialog:** Solid `#ffffff` sheet with 1px stone border and crisp, readable printable layout.

## Do's and Don'ts

### Do:
- **Do** use solid, 100% opaque `#ffffff` cards on the `#fafaf9` stone canvas.
- **Do** keep typography in crisp, solid Deep Ink (`#1c1917`) and Stone Muted (`#57534e`).
- **Do** flow metadata inline as clean text and structured lists.
- **Do** use JetBrains Mono for tech stacks, code tags, and metrics.
- **Do** maintain a simple, unpretentious, fast indie-developer aesthetic.

### Don't:
- **Don't** use frosted glassmorphism, translucent overlays, or `backdrop-blur`.
- **Don't** overlay floating status chips, pills, or badge counters on top of image thumbnails.
- **Don't** use dark-mode obsidian planes with neon glow halos.
- **Don't** add arbitrary proficiency ratings, percentage bars, or skill levels.
- **Don't** use gradient text fills on headings.
