# Phase 1 Wound Care service hub

Status: built and Chromium QA-tested locally on October 2, 2026. Not committed, pushed, published, tracked, or performance-measured. GitHub changes require JC's explicit go signal.

## Purpose and supplied direction

`/wound-care/` owns commercial service/treatment intent. It explains available care, assessment, potential treatments and clinical support, supported settings and wound concerns, and how patients or providers begin care. It uses JC's supplied service-hub copy and section order.

All individual services remain sections or cards on this page. Eight overview cards link to deeper in-page sections, not separate treatment URLs. Clinical qualifiers such as “may,” “when clinically indicated,” “where appropriate,” and patient-specific suitability are retained. No results, credentials, metrics, insurance promises, or named devices are invented.

The page has one substantial Austin location bridge, plus the supplied location FAQ and compact city references. Stronger Austin-specific targeting remains reserved for `/service-areas/austin/`. Contextual links connect the assessment section to Wounds We Treat, care settings to the current care/referral pathways, confirmed-technology wording to Technology, and Why Wound Haven to About.

## Content coverage

- Hero: service-focused H1, home/bedside imagery, Request Care, clickable placeholder phone
- Overview: eight core clinical service cards
- Wound assessment: eight assessment considerations and wound-evaluation action
- Treatment and management: five capabilities, including dressing management and patient education
- Diagnostic/clinical support: vascular assessment, cultures, labs, imaging, antibiotic guidance, and biopsy with clinical qualifiers
- Advanced options: seven potential approaches and suitability statement
- Care settings: homes, skilled nursing, assisted living, rehab, and LTAC
- Supported wounds: eight categories linked contextually to the condition hub
- Getting started: four steps
- Why Wound Haven: navy section with six reasons and About/Technology links
- Austin bridge with Houston and San Antonio cross-links
- Separate patient/family and provider conversion cards, with the requested referral selection
- Ten service FAQs and final primary-blue CTA
- Existing shared utility bar, sticky navigation, pre-footer CTA, and footer

The homepage and global-component source files were preserved, with matching before/after SHA-256 checks. Shared component markup is reused. The generated nested page's skip-link fragment is rewritten to keep Skip to content on `/wound-care/` rather than the base URL.

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

## Local QA

Chromium checks passed at 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: no horizontal overflow, exactly one H1, centered utility content, correct metadata, expected section/card counts, and unique element IDs. Twenty-one unique internal URL/fragment targets returned HTTP 200 with their required anchors. Twenty-six distinct image source/variant URLs loaded successfully; rendered photos were decoded after scrolling.

Service-card scrolling lands below the sticky header. The FAQ accordion, body referral dropdown, Escape dismissal, mobile menu, combined sticky bars, patient/provider contact-anchor navigation, and nested-page skip link were exercised. The nested build also loaded its header and assets under a simulated project URL prefix. No browser script errors or failed HTTP requests were observed. Desktop and mobile sections were visually reviewed.

This is functional/layout QA, not a full accessibility audit, healthcare compliance assessment, or PageSpeed/Core Web Vitals measurement. Other Phase 1 pages still contain review placeholders; an HTTP 200 does not mean those pages or forms are finished.

## Release gates

The real telephone number, patient/provider form connections, remaining Phase 1 pages, clinical/technology verification, image provenance, legal/privacy pages, public-domain metadata, tracking, production QA, and performance measurement remain outstanding. The local preview collects no patient information. Local noindex must remain until an authorized release.
