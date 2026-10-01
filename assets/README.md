# Wound Haven Asset Inventory

This folder is the source library for the local Wound Haven mockup. JC replaced the previous photo folders with seven named batches on October 2, 2026. The new source images are preserved; responsive WebP derivatives live separately in `assets/web/`.

## Current brand direction

Use the Wound Haven anchor and medical staff mark with the `WoundHaven` wordmark. Do not reintroduce the removed `Visiting Advanced Wound Care` tagline.

- Primary blue: `#0057B8`
- Navy: `#0B2D5B`
- Light blue: `#CFE8FF`
- White: `#FFFFFF`
- Brand cues: stability, trust, advanced care, mobile care
- Actual artwork, despite reversed filenames: `Brand Logo/woundhaven_footer_logo_monochrome.svg` is the full-color header artwork; `Brand Logo/woundhaven_nav_logo.svg` is the white footer artwork.
- The previous cranberry palette and earlier asset inventory are superseded, not current direction.

## Original library

| Folder | Files | Dimensions | Role |
| --- | ---: | --- | --- |
| WoundHaven_Batch1_Team_Providers | 6 PNGs | 1448 × 1086 | Human interaction and clinical preparation |
| WoundHaven_Batch2_Mobile_Wound_Care | 7 PNGs | 1448 × 1086 | Arrivals, home consultation, patient/caregiver discussion |
| WoundHaven_Batch3_Service_Treatment | 5 PNGs | First three approximately square; last two wide | Assessment, dressing, documentation, follow-up |
| WoundHaven_Batch4_Technology | 6 PNGs | 1448 × 1086 | Tablet-supported documentation and coordination |
| WoundHaven_Batch5_Patient_Outcomes | 4 PNGs | 1536 × 1024 | Human context; not clinical outcome evidence |
| WoundHaven_Batch6_Careers | 2 PNGs | 1536 × 1024 | Held for future Careers |
| WoundHaven_Batch7_Supporting_Graphics_Final | 6 PNGs | First three 1672 × 941; last three 1448 × 1086 | Patterns, clinical illustration, referral pathways, map |
| Brand Logo | 6 SVG/WebP files | Vector and raster | Header, white footer, favicon |
| Website Icons | 38 files | Existing supplied formats | Care, conditions, technology, referrals |

There are 36 PNGs across the seven new batches. Batches 1–6 total 56.70 MB. No file was renamed or edited in these original batch folders by this revision.

## Selected website images

`scripts/prepare-assets.mjs` and `assets/web/manifest.json` are the current source-to-derivative mapping, including actual output dimensions and sizes.

| Website role | Selected source within its batch |
| --- | --- |
| Home hero | Batch 2 / 03_home_consultation.png |
| Shared home/facility care image | Batch 2 / 07_patient_caregiver_provider.png |
| Wound Care hero | Batch 2 / 04_treatment_plan_review.png |
| Wound assessment | Batch 3 / 01_advanced_wound_assessment.png |
| Wounds We Treat hero | Batch 2 / 06_non_graphic_wound_assessment.png |
| About hero | Batch 1 / warm_home_healthcare_visit.png |
| About mobile model | Batch 2 / 01_provider_arriving_at_home.png |
| Technology hero | Batch 4 / 04_tablet_during_assessment.png |
| Documentation sections | Batch 4 / 05_digital_clinical_documentation.png |
| Homepage patient-centered support | Batch 5 / 03_family_caregiver_interaction.png |

Team preparation is optimized as a spare, not added as a claimed staff portrait. Serving selected compressed derivatives rather than original PNGs keeps the mockup lighter. Asset compression is not a PageSpeed measurement.

## Batch 7 decisions

- Light pattern: faint section backgrounds on Home, About, and Technology.
- Navy pattern: restrained texture behind existing navy sections and the main footer. It does not add a footer CTA.
- Clinical technology graphic: decorative support in Technology, without named software, AI, or diagnostic-accuracy claims.
- Patient/family and provider pathway graphics: their respective separate referral pages, accompanied by readable HTML steps. Contact stays form-free.
- Texas map: held while Service Areas pages are excluded. Embedded wording is not a verified service boundary.

## Scope and authenticity

The Wound Care hub and current service content are retained. Individual future service pages and Service Areas pages are excluded for now; current pages contain no links to the excluded location routes. Careers is not added.

The source files do not verify actual Wound Haven staff or patient identities, devices, licenses, consent, or clinical outcomes. These are illustrative mockup assets. Filenames such as `recovery_lifestyle` do not justify healed-patient, faster-healing, independence, or satisfaction claims.

Before publishing, confirm provenance and rights, clinical accuracy, consent where required, and real business information. Replace illustrative artwork with verified real-team/home-visit photography where authenticity needs proof. Keep the approved logos intact; do not fabricate trust badges, credentials, testimonials, or outcomes.

## Local-only rule

No staging, commit, push, deployment, or publication without JC's explicit go signal. Original files remain the asset source of truth; derivatives can be regenerated from the mapping.
