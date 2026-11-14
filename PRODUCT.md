# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: Asha Sharma, a 44-year-old mother in India managing Type-2 Diabetes with recurring quarterly diagnostic reports from multiple diagnostic providers.
Secondary user: Dr. Arvind Rao, MD, consulting endocrinologist who needs a fast, verified chronological synthesis before an 8-minute consultation.

## Product Purpose

MediChain AI provides provably unaltered health records, transparent patient-controlled consent, and clinician-ready longitudinal biomarker intelligence. It replaces fragmented paper binders and unverifiable PDF attachments with a secure personal vault where diagnostic reports are decrypted on-demand, validated for clinical bounds, and anchored to public EVM blockchains for independent tamper verification without exposing personal health information (PHI).

## Positioning

Unlike general-purpose PHRs (such as government Aarogya Setu 2.0 or commercial EMR portals) which simply store and summarize PDFs, MediChain AI provides cryptographic proof of origin and integrity (provably unaltered since issuance), patient-readable append-only access timelines, and doctor-ready delta sheets that synthesize trends across competing diagnostic providers.

## Operating Context

- **Usage scene:** Quiet domestic setting (reviewing a recent lab test on phone or desktop) or clinical consultation room (doctor reviewing trend synthesis before exam).
- **Documents:** Diagnostic blood panels (lipid, glycemic, renal, thyroid) as digital PDFs or clean scans.
- **Regulatory framework:** India Digital Personal Data Protection (DPDP) Act 2025/2026 rules (Rule 4 Consent Manager ready, 1-year audit log retention, right to erasure via crypto-shredding) and ABDM (M1 ABHA auth, M3 HIU record fetch).

## Capabilities and Constraints

- **Capabilities:** Client-side AES-256-GCM envelope encryption, OCR & schema-constrained JSON extraction, human confirmation gate for out-of-range values, salted Keccak-256 blockchain commitment anchoring on Polygon Amoy, independent browser verification via viem, instant consent revocation.
- **Constraints:** No automated medical diagnosis or drug dosing advice; zero patient health information (PHI) or identities on public ledgers; under 80 words per screen; zero developer jargon (hashes, gas fees, LOINC codes) on the patient's primary screen.

## Brand Commitments

- **Name:** MediChain AI
- **Voice:** Unhurried, calm, serious clinical instrument; trustworthy, empathetic, and human.
- **Colors:** Warm Paper (`#F6F4EE`), Clinical Deep Ink (`#111827`), Trust Verdigris (`#1F7A6D`), and Soft Sage (`#DDE8E2`).

## Evidence on Hand

- Detailed 44-page research blueprint (`MediChain_AI_Blueprint.pdf`).
- Technical Specification (`03-Tech-Spec.md`), PRD (`02-PRD.md`), and Deep Analysis (`01-Deep-Analysis.md`).
- Grounded patient test dataset for Asha Sharma with 3 historical lab panels (Oct 2025, Mar 2026, Sep 2026).

## Product Principles

1. **The Tool Disappears into the Task:** No cognitive friction, no developer plumbing on screen.
2. **Peace of Mind over Data Density:** Emphasize the single key trajectory that matters rather than confusing charts and gauge rows.
3. **Radical Transparency:** The patient always knows who has access and can revoke permissions in one tap.
4. **Independent Cryptographic Proof:** Trust is verifiable by anyone in the browser without having to trust MediChain's servers.

## Accessibility & Inclusion

- Target: WCAG 2.2 AA.
- Contrast ratio ≥ 4.5:1 for body copy and placeholders.
- Full `:focus-visible` keyboard accessibility.
- Motion: zero gratuitous animation; immediate state feedback with `prefers-reduced-motion` compliance.
- Typography: Tabular numerals on all medical numbers and dates; high-legibility sans-serif.
