---
name: MediChain AI Design System
description: A user-first, calm clinical interface for provably authentic health records
colors:
  paper: "#F6F4EE"
  surface: "#FFFFFF"
  rule: "#E5E7EB"
  ink: "#111827"
  muted: "#6B7280"
  verdigris: "#1F7A6D"
  verdigris-hover: "#186358"
  sage: "#DDE8E2"
  amber: "#B45309"
  vermilion: "#DC2626"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  data:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.verdigris}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.verdigris-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  card-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# MediChain AI Design System

## Overview

MediChain AI is a patient-first, calm clinical health intelligence instrument. It is built strictly under the **Impeccable** Operate mode and the **Hallmark** anti-slop quality gates. The product serves patients like Asha Sharma (44, managing Type-2 diabetes) by answering three fundamental human questions:
1. **"Am I getting better or worse?"**
2. **"Where do I put this new lab report?"**
3. **"Is my doctor seeing what they need to see?"**

All technical developer plumbing—such as SHA-256 hashes, salted Keccak-256 commitments, EVM transaction receipts, and LOINC codes—is preserved under the hood and viewable on-demand in a quiet slide-over drawer. The main canvas remains serene, uncluttered, and human.

## Colors

The palette is restrained, warm, and clinical without being sterile:
- **`--color-paper` (`#F6F4EE`):** Warm, matte, non-glare morning paper canvas. Avoids harsh digital blue/white glare.
- **`--color-surface` (`#FFFFFF`):** High-readability white container sheets with subtle 1px border.
- **`--color-rule` (`#E5E7EB`):** Subtle hairline borders (1px solid) providing clear structural division without heavy boxes.
- **`--color-ink` (`#111827`):** Deep charcoal ink for high-contrast, effortless legibility (WCAG AAA compliant).
- **`--color-muted` (`#6B7280`):** Soft slate for secondary metadata and timestamps (WCAG AA compliant ≥ 4.5:1).
- **`--color-verdigris` (`#1F7A6D`):** The single authoritative trust accent. Represents confirmed verification and health trajectory. Used on < 5% of viewport area.
- **`--color-sage` (`#DDE8E2`):** Soft organic tint for the verified badge and normal range indicators.
- **`--color-amber` (`#D97706`):** Clinical cautionary tone for values under doctor review.
- **`--color-vermilion` (`#DC2626`):** Crisp alert tone for out-of-range critical lab markers.

## Typography

Typography prioritizes clarity, calm authority, and rapid scanning:
- **Headings & Greetings:** Set in high-legibility sans (`Inter` / system stack) with gentle negative tracking (`-0.01em` to `-0.02em`). Headings speak for themselves without artificial uppercase eyebrow badges.
- **Body Text:** Minimum 16px with generous line spacing (1.5 to 1.65) to prevent reading fatigue.
- **Numerical & Clinical Values:** Rendered with `font-variant-numeric: tabular-nums` to ensure aligned decimals and dates across longitudinal trends.
- **Word Budget:** Under 80 words visible on screen at once. Headlines ≤ 7 words; descriptions ≤ 2 short sentences.

## Layout

- **Width & Containment:** Single centered column (max-width `768px` to `1024px`) with comfortable margins (`px-4 sm:px-8`).
- **Open Hierarchy:** Content is separated by open whitespace and subtle hairline rules (`--color-rule`).
- **No Card-in-Card Nesting:** One single container layer only. Child items are laid out as borderless rows or spaced list items, never cards nested inside cards.
- **No Confetti KPI Walls:** Exactly one hero figure (HbA1c trend) with an unhurried, gentle trajectory line. No walls of 4–6 equal colorful dials.

## Elevation & Depth

- **Shadows:** Natural, soft ambient light from above. Zero hard offset neobrutalist shadows (`4px 4px 0`) and zero decorative colored halos.
- **Layering:** Default sheet shadow is `0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)`.
- **Slide-over Drawer:** Elevated at `z-50` with a smooth backdrop scrim (`rgba(17, 24, 39, 0.3)`) to separate technical cryptography details from the primary patient view.

## Shapes

- **Corners:** Gentle, tactile rounding (`rounded-xl` for containers, `rounded-md` for buttons and badges, `rounded-full` for verified pills).
- **Hairlines:** Crisp 1px borders using `--color-rule` to define sheet edges without heavy strokes.
- **No Costumes:** No fake skeuomorphic pill blisters, no terminal prompts, and no geometric polygon masks.

## Components

1. **Top Bar / Navigation:** Quiet masthead with logo, user greeting, and clean switch between **Dashboard**, **Lab Reports**, and **Doctor Sharing**.
2. **Hero Trajectory:** The single biomarker that matters (HbA1c 7.4%, down from 8.6%) rendered with a quiet, smooth SVG curve and soft healthy range band (4.0% – 5.6%).
3. **Primary Action Dropzone:** Large, tactile, dashed-rule dropzone for new lab reports (`Drop a new lab report here to add to your records`). Exactly one primary action.
4. **Verified Report List:** Chronological list of authentic reports featuring report name, date, provider, and the quiet `✓ Verified Authentic` badge.
5. **Report Detail View:** Plain-English summary + 3 key biomarkers (HbA1c, Fasting Glucose, Serum Creatinine) with clear status tags (`Normal` / `Doctor Review`). Includes "View Cryptographic Receipt" link.
6. **Doctor Access & Peace of Mind:** Shows active doctor permission (`Dr. Arvind Rao, Fortis Healthcare`) with expiry and an immediate, 1-tap **"Revoke Access"** button.
7. **Slide-over Technical Receipt Drawer:** Accessible via the "View Cryptographic Receipt" button. Shows salted Keccak-256 hash, Polygon Amoy block timestamp, contract address, and on-chain verification seal.

## Do's and Don'ts

### Do
- Lead with what matters most to the patient: trajectory, report upload, and doctor sharing.
- Keep the language human, unhurried, and reassuring.
- Use tabular figures for all lab numbers and dates.
- Keep the interface completely functional on mobile and desktop without layout shifts.
- Keep the single verdigris accent under 5% of viewport coverage.

### Don't
- **NO Tracked Eyebrows:** Never add `POLYGON AMOY TESTNET` or `HEALTH RECORD VAULT` in tiny uppercase letters above headings.
- **NO Card-in-Card:** Never place a bordered card inside another bordered card.
- **NO KPI Confetti:** Never display a 2x3 or 2x2 grid of equal colorful stat boxes.
- **NO Developer Plumbing on Screen:** Never show raw 64-character hexadecimal hashes or gas fees on the main canvas.
- **NO Competing Buttons:** Never place two primary verdigris buttons side-by-side.
- **NO Fake Monospace:** Never apply `font-mono` to UI buttons, labels, or badges.
- **NO Gradient Text or Frosted Glass:** Never use multi-color text gradients or heavy blurred glass panels.
