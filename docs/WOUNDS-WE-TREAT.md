# Phase 1 Wounds We Treat condition hub

Status: phone/coverage revision rebuilt and locally validated; JC authorized committing and pushing it on October 2, 2026. See `PHONE-AND-COVERAGE-UPDATE.md` for current local QA and `STAGING.md` for publication checks. Referral workflows remain inactive.

## Purpose and supplied direction

`/wounds-we-treat/` owns condition/problem intent. The supplied brief is the copy source. Wound Care remains the commercial treatment/service hub. Existing Austin-focused content stays; Service Areas and all dedicated city pages remain excluded.

Eight approved wound types are separate sections, not child URLs: diabetic wounds, pressure injuries, venous wounds, arterial wounds, lymphedema-related wounds, burns/skin conditions, non-healing wounds, and complex wounds. The compact overview uses supplied brand icons and links to the eight section anchors. Headings explicitly name each condition.

Supplied clinical qualifiers are retained. Arterial care emphasizes assessment and appropriate clinical review, not a uniform treatment. Burns and skin-related care remain broad pending confirmation of the actual scope. No credentials, outcomes, timelines, named devices, or insurance claims are invented. The supplied contact-concern list is not presented as emergency triage. A separate safety note states: “Wound Haven does not replace emergency medical care. Seek emergency care for urgent or life-threatening symptoms.”

The page follows the retained order: hero, wound overview, eight condition sections, when to contact, four-step getting-started process, five care settings, one Austin bridge, separate patient/provider actions, ten FAQs, and shared footer. The blue final CTA and pre-footer band remain removed.

Condition sections link contextually to the Wound Care hub and its existing assessment, compression, and vascular section anchors. Complex wounds also link to Technology. About and Contact remain linked; excluded Service Areas/city routes do not. Patient/family actions use `/self-referral/`; provider actions use `/patient-referral/` through the requested two-choice disclosure. Official call links use `(877) 288-1270` and `tel:+18772881270`. General coverage wording includes Austin, Houston, San Antonio, College Station, Corpus Christi, Beaumont, and surrounding areas without adding location cards or pages.

## Editable source and build

- `src/pages/wounds-we-treat.html`: condition copy and sections
- `src/wounds-we-treat-document.html`: metadata, local noindex, relative base, and shared component slots
- `styles/wounds-we-treat.css`: page-specific responsive styles
- Existing `styles/home.css` / `styles/wound-care.css`: reused page patterns, unchanged
- Existing `scripts/home.js`: referral-disclosure dismissal, unchanged
- `scripts/build.mjs`: generates `wounds-we-treat/index.html` alongside the existing pages
- `scripts/preview-server.mjs`: serves the built condition hub at `/wounds-we-treat/`

Run `npm run build` and `npm run preview`, then open `http://127.0.0.1:4178/wounds-we-treat/`. The relative base and explicit hub-path fragments preserve project-prefix routing. The build rewrites the shared skip-link fragment to keep it on this page. The previous homepage, service-hub, global-component, and interaction files were verified unchanged with thirteen SHA-256 comparisons, including the two generated pages.

Title: `Wounds We Treat | Chronic & Complex Wound Care | Wound Haven`

Description: `Wound Haven provides care for diabetic wounds, pressure injuries, venous and arterial wounds, non-healing wounds, lymphedema-related wounds, burns, and other complex wounds.`

## Supplied assets

The hero uses responsive WebP resize/compression derivatives of `assets/WoundHaven_Batch2_Mobile_Wound_Care/06_non_graphic_wound_assessment.png`, with a CSS crop that retains clinician and patient faces. The care-setting section reuses the existing derivative of `assets/WoundHaven_Batch2_Mobile_Wound_Care/07_patient_caregiver_provider.png`. Below-fold imagery is lazy loaded; the hero has explicit dimensions and high fetch priority. Existing originals and clean brand-logo artwork are preserved. New derivative mappings are added to `assets/web/manifest.json`.

The imagery is supplied illustrative care content, not independently verified proof of actual staff, patient consent, clinical outcomes, or services performed. Confirm provenance, licensing, depicted branding, and clinical accuracy before public release. Existing icons are used as broad care-category cues, not diagnostic illustrations.

## Historical local verification

Chromium checks covered 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: no horizontal overflow, exactly one H1, centered utility bar, matching metadata, unique IDs, eight overview links and condition sections, expected care-list counts, nine contact concerns, four process steps, five settings, and ten FAQs.

All eight wound jumps were exercised on desktop and mobile, for sixteen checks that their targets land below the sticky header. Twenty-four unique internal URL/fragment targets returned HTTP 200 with required anchors. Twenty-one image source/variant URLs loaded; rendered images were decoded after scrolling. The FAQ accordion, body provider disclosure, Escape, mobile menu, sticky combined header, nested skip link, separate patient/provider destinations, and cross-page vascular-assessment link were exercised. No browser script errors or failed HTTP requests were observed. Desktop and mobile sections were visually inspected.

A simulated `/jc-woundhaven/` URL prefix verified project-relative assets, home navigation, skip link, and contextual service links. This is local routing evidence, not deployment. Functional/layout QA is not a full accessibility audit, healthcare compliance assessment, or PageSpeed/Core Web Vitals measurement.

## Remaining release gates

Eight retained pages are built, including the two inactive referral previews; the four Service Areas routes remain excluded. Contact has no forms; the separate self-referral and patient-referral pages contain disabled previews, not connected forms. The official phone is supplied and implemented locally; the supplied business email still needs confirmation. Referral form integrations and healthcare privacy handling, clinical scope and claim review, photo provenance, legal/privacy pages, production-domain metadata, tracking, production QA, and performance measurement remain outstanding. No form collects patient information. Keep local noindex until an authorized production release. Current phone/coverage QA is recorded separately in `PHONE-AND-COVERAGE-UPDATE.md`.
