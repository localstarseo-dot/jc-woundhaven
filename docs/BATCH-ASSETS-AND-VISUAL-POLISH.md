# Batch asset review and visual polish

Status: historical asset/motion revision, built and browser-QA tested locally on October 2, 2026, then included in authorized staging. Its checks below are historical; current local phone/coverage scope is in `PHONE-AND-COVERAGE-UPDATE.md`, and publication scope is in `STAGING.md`. No performance measurement is claimed.

## What came first

1. Audit the new folders and assign images to their actual section purpose.
2. Replace obsolete photo-source mappings and regenerate responsive WebP derivatives.
3. Apply selected supporting artwork without obscuring text or adding unsupported claims.
4. Add restrained motion while preserving native links, keyboard use, and reduced-motion behavior.
5. Test the retained pages and keep excluded routes out of navigation.

The seven batches contain 36 PNG originals. Detailed counts and placements are in `assets/README.md`; `assets/web/manifest.json` records source provenance, derivative dimensions, and output sizes. Batch 1 supports About, Batch 2 supports mobile care, Batch 3 supports the existing Wound Care hub, Batch 4 supports Technology/documentation, and Batch 5 provides a patient-centered illustrative scene. Careers remains held. Original images and logos are unchanged.

## Batch 7 decisions

The light and navy patterns create restrained branded section texture. They sit behind opaque-enough color layers to preserve readability. The clinical graphic adds a visual break to Technology rather than representing an actual software interface or verified diagnostic platform.

The two referral diagrams are on the dedicated Self Referral and Patient Referral pages, not inside Contact. Equivalent HTML steps make the process readable on mobile and accessible independently of baked-in image text. They describe an intended future connected workflow; all local referral controls remain disabled.

The Texas map is held while Service Areas pages are excluded. Its embedded “Central Texas” wording and marked areas are not treated as verified coverage boundaries. Real local imagery, real-team identity, consent, licensing, and clinical claims need confirmation before publication. Supplied images alone cannot prove authenticity or outcomes.

## Current scope

JC clarified that the Wound Care hub and its current service content should remain. Future individual service pages and all four Service Areas pages are excluded for now. Their prior placeholder preview routes now return 404, and links to those excluded routes were removed throughout retained page content. City names and coverage copy remain informational. No individual condition or service URL was invented.

Approved hero referral labels, centered FAQ intros, sticky utility/navigation, form-free Contact, and the footer without the removed CTA are preserved. The moved homepage care strip and page-level blue closing CTA bands were removed in the subsequent authorized revision; they remain absent. The latest local revision updates official phone and six-city coverage wording only, leaving assets and motion unchanged.

## Motion and navigation

`styles/motion.css` and `scripts/motion.js` provide a 4px lift and soft shadow on genuinely linked cards, small button/arrow feedback, and one-time below-fold heading/media reveals. Static informational cards do not lift. Stretched native links still cover card padding; secondary phone links and referral disclosures remain separately usable.

The hero is not reveal-animated. Pending content remains visible at 0.92 opacity; no content is hidden waiting for JavaScript. Missing observer support, disabled JavaScript, and initial/live reduced-motion settings retain readable content. Hover movement is limited to fine-pointer devices. There are no autoplay, parallax, carousel, outcome-counter, or fabricated trust-badge additions.

`styles/brand-visuals.css` handles selected artwork and photo framing. The build injects these shared styles after page styles and loads the motion script with `defer`.

## Historical local verification

- Eight retained pages passed desktop/mobile checks at 1440 and 390 pixels, including 320 rendered image instances and 42 unique selected image URLs.
- All 27 unique internal fragment targets exist. No horizontal page overflow, browser script errors, failed requests, unexpected asset errors, or Service Areas links were observed.
- Four excluded location routes return 404; `/wound-care/` remains available.
- Contact has no forms or input fields. All 24 referral controls remain effectively disabled; no form elements, iframes, upload controls, or submission endpoints were introduced.
- All 80 original asset SHA-256 hashes match the audit baseline.
- Native card-padding navigation, secondary controls, keyboard elevation, static-card behavior, one-time reveals, initial/live reduced motion, touch hover exclusion, observer fallback, and no-JavaScript referral links were tested.
- Desktop/mobile visual screenshots were inspected. All retained pages remain `noindex, nofollow`.

This is historical local functional and visual QA, not a full accessibility audit, clinical/compliance approval, deployment check, PageSpeed score, or Core Web Vitals measurement. The official phone has since been supplied for the current local revision; business-email confirmation, approved referral integrations, provenance, legal/privacy content, production metadata, tracking, and final release QA remain separate gates. JC's explicit go signal is required before any further GitHub publication.
