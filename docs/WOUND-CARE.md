# Phase 1 Wound Care service hub

Status: phone/coverage revision rebuilt and locally validated; JC authorized committing and pushing it on October 2, 2026. See `PHONE-AND-COVERAGE-UPDATE.md` for current local QA and `STAGING.md` for publication checks. Referral workflows remain inactive.

## Purpose and supplied direction

`/wound-care/` owns commercial service/treatment intent. It explains available care, assessment, potential treatments and clinical support, supported settings and wound concerns, and how patients or providers begin care. It uses JC's supplied service-hub copy and section order.

All individual services remain sections or cards on this page. Eight overview cards link to deeper in-page sections, not separate treatment URLs. Clinical qualifiers such as “may,” “when clinically indicated,” “where appropriate,” and patient-specific suitability are retained. No results, credentials, metrics, insurance promises, or named devices are invented.

The page retains one substantial Austin coverage bridge, plus its location FAQ and compact coverage references. Service Areas and all dedicated city pages remain excluded by JC's next-version clarification; no location links are introduced. General coverage mentions Austin, Houston, San Antonio, College Station, Corpus Christi, Beaumont, and surrounding areas. Contextual links connect the assessment section to Wounds We Treat, care settings to the current care/referral pathways, confirmed-technology wording to Technology, and Why Wound Haven to About.

## Content coverage

- Hero: service-focused H1, home/bedside imagery, Request Care, official phone `(877) 288-1270` linked as `tel:+18772881270`
- Overview: eight core clinical service cards
- Wound assessment: eight assessment considerations and wound-evaluation action
- Treatment and management: five capabilities, including dressing management and patient education
- Diagnostic/clinical support: vascular assessment, cultures, labs, imaging, antibiotic guidance, and biopsy with clinical qualifiers
- Advanced options: seven potential approaches and suitability statement
- Care settings: homes, skilled nursing, assisted living, rehab, and LTAC
- Supported wounds: eight categories linked contextually to the condition hub
- Getting started: four steps
- Why Wound Haven: navy section with six reasons and About/Technology links
- Austin-focused coverage bridge with informational broader coverage wording, not location cross-links
- Separate patient/family and provider conversion cards, with the requested referral selection
- Ten service FAQs flowing directly into the shared footer; the blue closing CTA remains removed
- Existing shared utility bar, sticky navigation, and footer; no blue pre-footer CTA

During the original service-hub build, homepage and global-component source files were preserved with matching before/after SHA-256 checks. The current phone/coverage revision updates those shared components as documented separately. Shared component markup is reused. The generated nested page's skip-link fragment is rewritten to keep Skip to content on `/wound-care/` rather than the base URL.

## Source, build, and local routing

- `src/pages/wound-care.html`: service-hub sections and copy
- `src/wound-care-document.html`: preferred title, description, shared-component slots, and local noindex
- `styles/wound-care.css`: service-page-only additions and responsive overrides
- `styles/home.css`: reused established page patterns, unchanged
- `scripts/home.js`: reused native referral disclosure dismissal, unchanged
- `scripts/build.mjs`: generates `wound-care/index.html` alongside the existing homepage and review canvas
- `scripts/preview-server.mjs`: serves the built page at `/wound-care/`

Build with `npm run build`; preview with `npm run preview` at `http://127.0.0.1:4178/wound-care/`. The nested generated document uses a relative `../` base so shared navigation and assets resolve within the project, including at a future project-prefixed URL. In-page service links explicitly retain the `/wound-care/` path. This routing was tested locally with a simulated `/jc-woundhaven/` prefix; that test is not publication.

Title: `Advanced Wound Care Services | Wound Haven`

Description: `Explore Wound Haven's advanced wound care services, including wound assessment, debridement, compression therapy, vascular assessment, NPWT, and more. Mobile care is available in homes and supported care settings.`

## Supplied imagery

- `assets/WoundHaven_Batch2_Mobile_Wound_Care/04_treatment_plan_review.png`: bedside hero
- `assets/WoundHaven_Batch3_Service_Treatment/01_advanced_wound_assessment.png`: assessment section
- Existing `assets/WoundHaven_Batch2_Mobile_Wound_Care/07_patient_caregiver_provider.png` derivative: care settings

Originals are preserved. Responsive WebP derivatives and mappings are in `assets/web/`. The hero loads eagerly with high priority; below-fold photos load lazily. Supplied icons and clean logo source artwork are retained.

These are supplied care scenes, not verified evidence of actual Wound Haven staff, patients, services performed, or clinical outcomes. Confirm provenance, licensing, patient permissions, depicted branding, and clinical accuracy before publication.

## Historical local QA

Chromium checks passed at 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: no horizontal overflow, exactly one H1, centered utility content, correct metadata, expected section/card counts, and unique element IDs. Twenty-one unique internal URL/fragment targets returned HTTP 200 with their required anchors. Twenty-six distinct image source/variant URLs loaded successfully; rendered photos were decoded after scrolling.

Service-card scrolling lands below the sticky header. The FAQ accordion, body referral dropdown, Escape dismissal, mobile menu, combined sticky bars, patient/provider contact-anchor navigation, and nested-page skip link were exercised. The nested build also loaded its header and assets under a simulated project URL prefix. No browser script errors or failed HTTP requests were observed. Desktop and mobile sections were visually reviewed.

This is functional/layout QA, not a full accessibility audit, healthcare compliance assessment, or PageSpeed/Core Web Vitals measurement. Other Phase 1 pages still contain review placeholders; an HTTP 200 does not mean those pages or forms are finished.

## Release gates

The official phone is supplied and implemented locally. The supplied business email still needs confirmation. Patient/provider form connections, clinical/technology verification, image provenance, legal/privacy pages, production-domain metadata, tracking, production QA, and performance measurement remain outstanding. Service Areas and dedicated city/individual service pages are excluded, not unfinished active destinations. The local preview collects no patient information. Local noindex must remain until an authorized production release. Current phone/coverage QA is recorded separately in `PHONE-AND-COVERAGE-UPDATE.md`.
