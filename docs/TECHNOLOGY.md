# Phase 1 Technology page

Status: built and Chromium QA-tested locally on October 2, 2026. Not committed, pushed, published, tracked, or performance-measured. No GitHub changes without JC's explicit go signal.

## Purpose and supplied direction

`/technology/` supports technology and clinical innovation intent. Wound Care remains the commercial treatment/service hub; Austin's future location page owns stronger local intent. Copy follows JC's supplied Technology brief. All technology topics remain on this hub without new child URLs.

The requested sequence is preserved: hero, technology overview, wound documentation and monitoring, diagnostic support, vascular assessment, advanced treatment technology, mobile/bedside workflows, care coordination, selective navy Why Technology Matters, one Austin bridge, separate patient/provider pathways, eight FAQs, and the blue final CTA. Approved header, pre-footer, and footer are shared unchanged.

Included content: three hero features; Document/Assess/Monitor/Coordinate jump cards; seven documentation areas; three generic diagnostic-support cards; four vascular assessment areas with venous/arterial/diabetic contextual links; two conditionally worded advanced-treatment cards; five care settings; seven care-team parties; four coordination-support areas; and five practical technology benefits.

## Claim control

PCR testing and its FAQ, PRP, ultrasound/MIST therapy, named devices, specific imaging platforms, branded tissue products, AI diagnosis, automated measurement, predictive healing, interoperability guarantees, outcome percentages, faster-healing claims, hospitalization/amputation claims, and superiority claims are omitted. Asset filenames or the existence of a technology in wound care generally do not establish Wound Haven's capabilities.

NPWT and broad advanced tissue options retain the supplied conditional wording and link to the existing Wound Care sections. They are not represented as confirmed launch capabilities. Vascular/diagnostic support and photographs remain clinically qualified. Clinical judgment stays central. Actual capabilities, the broad supplied metadata wording, devices, diagnostics, and treatment modalities require client and clinical review before publication.

## Editable source and build

- `src/pages/technology.html`: page copy, sections, and contextual links
- `src/technology-document.html`: supplied metadata, local noindex, relative base, and shared component slots
- `styles/technology.css`: page-specific responsive styles
- Existing `styles/home.css` and `styles/wound-care.css`: reused page patterns, unchanged
- Existing `scripts/home.js`: referral-disclosure behavior, unchanged
- `scripts/prepare-assets.mjs`: hero compression/resize derivatives and manifest
- `scripts/build.mjs`: generates `technology/index.html`
- `scripts/preview-server.mjs`: serves the built page at `/technology/`

Run `npm run prepare:assets`, `npm run build`, and `npm run preview`. Preview at `http://127.0.0.1:4178/technology/`. Edit source rather than generated output. Relative navigation/assets and explicit Technology fragments preserve project-prefix routing; the build keeps the shared skip link on Technology.

Title: `Advanced Wound Care Technology | Wound Haven`

Description: `Learn how Wound Haven uses advanced wound care technology to support wound assessment, documentation, monitoring, diagnostics, and coordinated mobile wound care.`

## Supplied assets

Hero: `assets/WoundHaven_Batch4_Technology/04_tablet_during_assessment.png`, compressed/resized to `assets/web/technology-hero-{640,960,1200}.webp`. It illustrates a clinician and patient discussing care with a tablet; it does not verify a named platform or clinical capability.

Documentation: existing responsive derivatives of `assets/WoundHaven_Batch4_Technology/05_digital_clinical_documentation.png`. The caption explicitly identifies an illustrative documentation workflow. The tablet imagery is not a verified before/after case study or proof of Wound Haven's actual software or outcomes.

The original assets are preserved. Supplied website icons and clean logo artwork are reused. Hero dimensions and high fetch priority are explicit; below-fold imagery is lazy loaded. The derivative manifest is a file mapping, not clinical proof. Confirm licensing, consent, actual staff identity, depicted branding, clinical accuracy, and technology availability before public release. Photography showing percentages, automatic wound outlines, and unconfirmed therapy equipment was not selected.

## Local verification

Chromium checks passed at 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: no horizontal page or visible text overflow, one H1, centered utility content, matching supplied metadata, thirteen ordered main sections, expected content counts, and unique IDs.

Twenty-four unique internal URL/fragment targets returned HTTP 200 with required anchors. Twenty-one image source/variant URLs loaded; all twenty-six rendered images decoded after scrolling. Four overview cards were exercised on desktop and mobile, for eight checks that their section targets land below the sticky header. Venous, arterial, and diabetic cross-page links were exercised. FAQ single-open behavior, body referral Escape/outside-click/focus dismissal, separate patient/provider destinations, mobile navigation, header referral dropdown, active Technology navigation state, sticky combined bars, and nested skip link were checked. No browser script errors or failed HTTP responses were observed.

A simulated `/jc-woundhaven/` prefix verified home/service navigation, Technology fragments, skip link, and assets. Desktop and mobile sections were visually inspected. Twenty-three SHA-256 comparisons verified the existing four pages and generated outputs, global preview, shared styles/components/interactions, and original asset README stayed unchanged.

This is local functional/layout QA, not deployment verification, a full accessibility audit, healthcare compliance assessment, or PageSpeed/Core Web Vitals measurement.

## Remaining release gates

Eight pages are built locally, including the two referral previews. Service Areas and its city pages are excluded for now; the Wound Care hub remains available. Contact has no forms. Separate self-referral and patient-referral pages contain visibly inactive patient/family and provider previews. The phone number is a placeholder; referral forms and healthcare privacy handling are not connected. No form collects patient information. Confirm current clinical capabilities and all technology/diagnostic/treatment claims, photo provenance, remaining pages, required legal/privacy content, production metadata/domain, analytics, production QA, and performance before an authorized release. Keep local noindex until release approval.
