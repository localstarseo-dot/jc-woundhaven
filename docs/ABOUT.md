# Phase 1 About page

Status: built and Chromium QA-tested locally on October 2, 2026. Not committed, pushed, published, tracked, or performance-measured. No GitHub changes without JC's explicit go signal.

## Purpose and supplied direction

`/about/` supports trust, brand understanding, the mobile care model, coordination, local relevance, and conversion. It does not replace the Wound Care commercial hub, Wounds We Treat condition hub, or Austin location page. Copy follows JC's supplied About brief.

The page follows the requested order: hero, who we are, care model, five care settings, clinical approach, selective navy Why Wound Haven, connected care, technology-supported care, one Austin bridge, separate patient/provider pathways, eight FAQs, and a blue final CTA. The existing pre-footer and footer follow unchanged.

The five brand pillars, ten clinical planning factors, five differentiation points, eight coordination parties, three communication features, and five generic technology-support areas are included. Technology claims retain conditional wording. No founding year, founder story, staff count, patient count, years of experience, credentials, accreditations, hospital partnerships, insurance relationships, outcome statistics, leadership biographies, or named devices are invented.

Contextual links connect to Wound Care, Wounds We Treat, Technology, Service Areas, Austin, and Contact. Houston and San Antonio remain smaller secondary links. Request Care uses `/self-referral/`; the two-choice provider disclosure separates patient/family and provider destinations.

## Editable source and build

- `src/pages/about.html`: supplied copy and page sections
- `src/about-document.html`: metadata, local noindex, relative base, and shared component slots
- `styles/about.css`: About-specific responsive styles
- Existing `styles/home.css` and `styles/wound-care.css`: reused patterns, unchanged
- Existing `scripts/home.js`: body referral-disclosure behavior, unchanged
- `scripts/prepare-assets.mjs`: responsive derivatives and manifest
- `scripts/build.mjs`: generates `about/index.html`
- `scripts/preview-server.mjs`: serves the built page at `/about/`

Run `npm run prepare:assets`, `npm run build`, and `npm run preview`; open `http://127.0.0.1:4178/about/`. Generated files are not editable sources. Relative assets and navigation work under a project URL prefix; the build keeps the shared skip link on About.

Title: `About Wound Haven | Advanced Mobile Wound Care`

Description: `Learn about Wound Haven's approach to advanced mobile wound care, including care delivered in homes, skilled nursing facilities, assisted living, rehab, and LTAC settings.`

## Supplied imagery

Hero: `assets/WoundHaven_Batch1_Team_Providers/warm_home_healthcare_visit.png`, resized and compressed as `assets/web/about-hero-{640,960,1200}.webp`.

Care model: `assets/WoundHaven_Batch2_Mobile_Wound_Care/01_provider_arriving_at_home.png`, resized and compressed as `assets/web/about-care-model-{640,960}.webp`.

Originals are preserved and mappings are recorded in `assets/web/manifest.json`. CSS crops retain the clinician and patient faces. The hero has explicit dimensions and high fetch priority; the second photo and below-fold icons are lazy loaded. Existing clean logo artwork and website icons are reused.

These are supplied illustrative care images. The brief requests real Wound Haven clinicians, but actual staff identity and patient consent have not been verified; generic alt text does not claim those identities. Confirm provenance, licensing, depicted branding, and clinical accuracy before public release. Do not treat imagery as proof of actual care, outcomes, or staff credentials.

## Local verification

Chromium checks covered 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: no horizontal page or visible text overflow, centered utility content, and exactly one H1. Supplied metadata, twelve ordered main sections, expected content counts, and unique IDs were checked.

Thirteen unique internal URL/fragment destinations returned HTTP 200, including both Contact referral anchors. Twenty image source/variant URLs loaded; all twenty-three rendered images decoded after scrolling. Eight FAQ disclosures, single-open behavior, body referral dismissal by Escape/outside click/focus, both referral destinations, mobile navigation, header referral dropdown, sticky combined header, About's active nav state, and the nested skip link were exercised. No browser script errors or failed HTTP responses were observed.

A simulated `/jc-woundhaven/` prefix verified relative assets, home navigation, the Wound Care link, and the About skip link. Desktop and mobile page sections were visually inspected. Nineteen SHA-256 comparisons verified that the existing three pages, generated outputs, shared styles/components/interactions, global preview, and original asset README were unchanged during this build.

This is functional/layout QA, not a full accessibility audit, healthcare compliance assessment, deployment verification, or PageSpeed/Core Web Vitals measurement.

## Remaining release gates

Eight pages are built locally, including the two inactive referral previews. The four Service Areas routes and future individual service pages are excluded for now; the Wound Care hub is retained. The phone number is a placeholder and Contact has no forms; the separate self-referral and patient-referral pages contain disabled previews, not functional referral forms. No form collects patient information. Actual clinical scope, staff/photo provenance, devices or diagnostics, referral integrations and healthcare privacy handling, remaining pages, legal/privacy content, public-domain metadata, analytics, production QA, and performance measurement still require confirmation before an authorized release. Keep local noindex until release approval.
