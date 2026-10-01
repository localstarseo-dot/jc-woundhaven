# Contact and separate referral pages

Status: phone/coverage revision rebuilt and locally validated; JC authorized committing and pushing it on October 2, 2026. See `PHONE-AND-COVERAGE-UPDATE.md` for current local QA and `STAGING.md` for publication checks. Referral workflows remain inactive.

## Current direction

JC's latest revision supersedes the earlier eleven-section Contact brief and its embedded preview layouts. Contact is now a simple contact-information page with two sections: contact details and two referral choices. It has no form elements, input fields, select menus, textareas, form previews, or embedded forms. The general inquiry preview was removed, not moved elsewhere.

Contact details include the supplied official phone `(877) 288-1270`, linked as `tel:+18772881270`, business email pending confirmation, and coverage for Austin, Houston, San Antonio, College Station, Corpus Christi, Beaumont, and surrounding areas. The Service Areas hub and all dedicated city pages remain excluded; the coverage card is informational and has no location links. Ready referral and care-model cards are full-card native links. No office address, hours, response guarantee, credentials, or medical outcomes are invented.

The three pathways stay distinct: patients/families choose Self Referral, healthcare providers choose Patient Referral, and general inquiries use the displayed phone/email information. No generic Contact form combines those workflows. Pending-phone notes and placeholder telephone accessibility labels are removed; business-email confirmation remains a separate gate.

The linked examples were reviewed as separate-page routing references only:
- https://www.woundlocal.com/self-referral
- https://www.woundlocal.com/patient-referral

These are not Wound Haven referral destinations. No competitor phone number, integration, staff identity, or clinical claims are reused.

## Referral routing

- `/self-referral/`: Self Referral Form for patients and family members.
- `/patient-referral/`: Patient Referral Form for healthcare providers and care facilities.
- `/contact/`: general contact information only.

The two local referral routes extend the original ten-route Phase 1 architecture in response to the latest revision. Header, footer, and all existing page care/referral buttons now use these dedicated paths rather than old Contact-section anchors. The latest global adjustment omits Service Areas from navigation/footer links, uses three footer columns, and removes the blue CTA from the footer. Other approved copy and artwork remain unchanged.

## Inactive previews and safety

The existing eleven-field patient/family preview and thirteen-field provider preview were moved to the corresponding separate pages. No approved secure platform, form IDs, or real submission destinations have been supplied. Both remain visibly marked local previews with submissions disabled. They are not operational or compliance-approved forms.

Twenty-four empty controls remain natively disabled. Two submit-looking buttons are disabled `type="button"` controls. No HTML form elements, control names, endpoints, uploads, embedded third-party forms, submission handlers, or patient-information storage are present. The provider's four supporting-record labels remain static, with uploads conditional on an approved secure workflow. Disabling also works without JavaScript.

Contact and referral pages keep patient records separate from ordinary email and state that the website/referral pathway is not an emergency service.

## Editable source

- `src/pages/contact.html`, `src/contact-document.html`, `styles/contact.css`
- `src/pages/self-referral.html`, `src/self-referral-document.html`
- `src/pages/patient-referral.html`, `src/patient-referral-document.html`
- `styles/referral.css`: shared inactive-preview styles
- `components/site-header.html`, `components/site-footer.html`: referral destinations
- Existing five page sources: referral URL changes only
- `scripts/build.mjs`: generates all three page outputs
- `scripts/preview-server.mjs`: serves all three routes

Run `npm run build` and `npm run preview`. Review `http://127.0.0.1:4178/contact/`, `http://127.0.0.1:4178/self-referral/`, and `http://127.0.0.1:4178/patient-referral/`. Edit source, not generated output. Supplied icons/logos and original assets are preserved. No new photo assets or dependencies are required.

Contact metadata retains the title and updates the description for the official phone and separate pathways:
- `Contact Wound Haven | Request Wound Care`
- `Contact Wound Haven at (877) 288-1270 for mobile wound care in our Texas service areas. Choose separate patient or healthcare-provider referral pathways.`

All three pages retain local noindex/nofollow and project-relative links/assets.

## Historical local verification

Chromium checks passed for all three pages at 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: thirty page/viewport combinations without horizontal page, text, or field overflow. One H1 per page, centered utility content, unique IDs, all rendered image decoding, native field labels, and disabled controls were checked.

Fifteen unique internal URL/fragment targets returned HTTP 200 with required anchors. Thirteen routing checks covered desktop/mobile Contact buttons, header referral choices, and destination references on each of the five previous built pages. Shared sticky navigation, mobile menu/Escape, native disabled behavior, JavaScript-disabled safety, and simulated `/jc-woundhaven/` project-prefix routing passed. No browser script errors, failed requests, external/non-GET requests, or local/session storage were observed in the tested workflow.

Desktop/mobile screenshots were visually reviewed. Fourteen preservation hashes verify unchanged shared/page styles, page document templates, interactions, and original asset README. The five earlier page sources and two global components were checked for referral URL replacements only. This is local functional/layout QA, not a full accessibility audit, healthcare compliance assessment, deployment verification, or performance measurement.

## Remaining release gates

Six original Phase 1 pages plus two separate referral preview pages are built locally. The four Service Areas routes remain excluded. The official phone is supplied and implemented locally; confirm the business email. Approve secure referral destinations and privacy/data-handling workflows before enabling any collection or uploads. Clinical claims, photo provenance, legal/privacy content, production metadata, tracking, production QA, and performance remain release gates. Current phone/coverage QA is recorded separately in `PHONE-AND-COVERAGE-UPDATE.md`.

Keep local noindex until release approval. Do not stage, commit, push, or publish without JC's explicit go signal.
