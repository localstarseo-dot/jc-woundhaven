# Contact and separate referral pages

Status: JC authorized committing and pushing the October 3, 2026 Self Referral and Patient Referral integrations. Both separately supplied Jotforms replace their disabled previews and passed local QA. Verify the Pages deployment and both HTTPS referral pages after pushing. Earlier phone/coverage publication is recorded in `PHONE-AND-COVERAGE-UPDATE.md` and `STAGING.md`.

JC subsequently authorized committing and pushing the October 3 email-directory revision. He supplied four addresses for both Contact and the shared footer: `info@woundhaven.com` for general questions/patient inquiries, `careers@woundhaven.com` for employment, `referpatient@woundhaven.com` for hospital/healthcare-provider referrals, and `medicalrecords@woundhaven.com` for records requests. Displayed addresses and `mailto:` targets use lowercase. Mailbox setup and delivery are not verified, and no email is sent during QA. Verify the served Contact directory and shared footer after Pages deployment.

`qa/email-directory.test.cjs` passed 126 page/viewport checks in Chromium and WebKit at 320, 390, 600, 768, 880, 1151, and 1440 pixels. Every generated footer has the four matching email/purpose pairs. Contact has one departmental directory, no input/embedded form controls, preserved referral links, and no outdated pending-email or inactive-referral copy. Desktop/mobile screenshots were visually reviewed. Mail links were inspected, not clicked or sent. The hosted form scripts were blocked only in this footer-focused test; prior form QA remains separate. Build and whitespace checks passed.

## Current direction

JC's latest revision supersedes the earlier eleven-section Contact brief and its embedded preview layouts. Contact is now a simple contact-information page with two sections: contact details and two referral choices. It has no form elements, input fields, select menus, textareas, form previews, or embedded forms. The general inquiry preview was removed, not moved elsewhere.

Contact details include the supplied official phone `(877) 288-1270`, linked as `tel:+18772881270`, the four supplied departmental emails, and coverage for Austin, Houston, San Antonio, College Station, Corpus Christi, Beaumont, and surrounding areas. The Service Areas hub and all dedicated city pages remain excluded; the coverage card is informational and has no location links. Ready referral and care-model cards are full-card native links. No office address, hours, response guarantee, credentials, or medical outcomes are invented.

The three pathways stay distinct: patients/families choose Self Referral, healthcare providers choose Patient Referral, and email inquiries use the appropriate supplied departmental address. No generic Contact form combines those workflows. The email-confirmation placeholder and outdated inactive-referral notice are removed. Contact cautions against ordinary email for sensitive patient information and distinguishes records requests from sending records.

The linked examples were reviewed as separate-page routing references only:
- https://www.woundlocal.com/self-referral
- https://www.woundlocal.com/patient-referral

These are not Wound Haven referral destinations. No competitor phone number, integration, staff identity, or clinical claims are reused.

## Referral routing

- `/self-referral/`: Self Referral Form for patients and family members.
- `/patient-referral/`: Patient Referral Form for healthcare providers and care facilities.
- `/contact/`: general contact information only.

The two local referral routes extend the original ten-route Phase 1 architecture in response to the latest revision. Header, footer, and all existing page care/referral buttons now use these dedicated paths rather than old Contact-section anchors. The latest global adjustment omits Service Areas from navigation/footer links, uses three footer columns, and removes the blue CTA from the footer. Other approved copy and artwork remain unchanged.

## Separate referral integrations and safety

JC supplied Self Referral Jotform ID `262745397105058` on October 3, 2026. The local `/self-referral/` page now uses the exact supplied script `https://form.jotform.com/jsform/262745397105058`, replacing its eleven-field disabled mockup. The hosted form owns its fields, submission processing, and configuration. A direct HTTPS link to the same form is available when the embed fails or JavaScript is unavailable. The supplied hosted form is titled Self Referral Form. The local embed loads a live external form and can accept information; no submission was used for QA.

JC then supplied Patient Referral Jotform ID `262745072792060`. The local `/patient-referral/` page uses the exact supplied script `https://form.jotform.com/jsform/262745072792060`, replacing its thirteen-field disabled mockup and static supporting-record preview. Its hosted title is Patient Referral Form, and its direct HTTPS fallback link opens this same provider form. The hosted form controls its own fields and upload capabilities; no records are uploaded during QA. Self Referral retains its separate form ID. Contact remains form-free. The website does not add patient-information storage or its own submission handler, but this does not establish the external platform's data-handling practices.

The embeds are not proof of healthcare compliance. Confirm Jotform account-level healthcare privacy/HIPAA configuration, any required BAA, intended recipients, permissions, retention, and submission delivery. These checks and the submission flow remain unverified. The original embed requests authorized local implementation; JC's subsequent explicit push request authorizes publication of both integrations.

Contact and referral pages keep patient records separate from ordinary email and state that the website/referral pathway is not an emergency service.

## Editable source

- `src/pages/contact.html`, `src/contact-document.html`, `styles/contact.css`
- `src/pages/self-referral.html`, `src/self-referral-document.html`
- `src/pages/patient-referral.html`, `src/patient-referral-document.html`
- `styles/referral.css`: shared Self Referral and Patient Referral embed layout
- `components/site-header.html`, `components/site-footer.html`: referral destinations
- Existing five page sources: referral URL changes only
- `scripts/build.mjs`: generates all three page outputs
- `scripts/preview-server.mjs`: serves all three routes

Run `npm run build` and `npm run preview`. Review `http://127.0.0.1:4178/contact/`, `http://127.0.0.1:4178/self-referral/`, and `http://127.0.0.1:4178/patient-referral/`. Edit source, not generated output. Supplied icons/logos and original assets are preserved. No new photo assets or dependencies are required.

Contact metadata retains the title and updates the description for the official phone and separate pathways:
- `Contact Wound Haven | Request Wound Care`
- `Contact Wound Haven at (877) 288-1270 for mobile wound care in our Texas service areas. Choose separate patient or healthcare-provider referral pathways.`

All three pages retain local noindex/nofollow and project-relative links/assets.

## Current two-form local verification

`qa/self-referral-embed.test.cjs` checks Self Referral by default and Patient Referral with `WOUNDHAVEN_QA_REFERRAL=patient`. Both passed in Chromium and WebKit at 320, 390, 880, and 1440 pixels, totaling sixteen form/engine/viewport checks. Form IDs/titles, rendered fields, width fit, automatic iframe height, submit-control visibility within each frame, no-JavaScript/blocked-embed fallback links, and links between the two pathways were verified. The height check polls independently of animation frames because an off-screen mobile iframe can pause animation-frame callbacks. Screenshots were visually reviewed. Contact remains form-free. No field entry, upload, or submission was performed; delivery and privacy/account settings remain unverified.

The existing `qa/mobile-layout.test.cjs` passed all 144 page/viewport checks again after the provider integration, covering the one-line utility bar, city spacing, smooth scrolling, reduced motion, history, focus, and mobile menus. The build and `git diff --check` passed. These checks were performed locally before JC's explicit publication authorization; repeat the embed checks against the served HTTPS pages after deployment.

## Self Referral verification before provider integration

`qa/self-referral-embed.test.cjs` passed in Chromium and WebKit at 320, 390, 880, and 1440 pixels. The supplied form title/ID, rendered fields, auto-height, accessible submit-control position, and outer/inner horizontal fit were checked. JavaScript-disabled and blocked-embed fallback links passed. Contact remains form-free and provider controls remain disabled. Desktop/mobile screenshots were visually reviewed. No fields were filled, uploads made, or forms submitted, so delivery and account-side privacy configuration remain unverified.

The existing `qa/mobile-layout.test.cjs` also passed all 144 page/viewport checks across both engines, including one-line utility copy, city-heading spacing, smooth scrolling, reduced motion, history, focus, and mobile menus. The build and `git diff --check` passed. This change is local-only, not published.

## Historical local verification

Chromium checks passed for all three pages at 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: thirty page/viewport combinations without horizontal page, text, or field overflow. One H1 per page, centered utility content, unique IDs, all rendered image decoding, native field labels, and disabled controls were checked.

Fifteen unique internal URL/fragment targets returned HTTP 200 with required anchors. Thirteen routing checks covered desktop/mobile Contact buttons, header referral choices, and destination references on each of the five previous built pages. Shared sticky navigation, mobile menu/Escape, native disabled behavior, JavaScript-disabled safety, and simulated `/jc-woundhaven/` project-prefix routing passed. No browser script errors, failed requests, external/non-GET requests, or local/session storage were observed in the tested workflow.

Desktop/mobile screenshots were visually reviewed. Fourteen preservation hashes verify unchanged shared/page styles, page document templates, interactions, and original asset README. The five earlier page sources and two global components were checked for referral URL replacements only. This is local functional/layout QA, not a full accessibility audit, healthcare compliance assessment, deployment verification, or performance measurement.

## Remaining release gates

Six original Phase 1 pages plus two separate referral pages are built locally. The four Service Areas routes remain excluded. The official phone and departmental emails are supplied; mailbox provisioning and delivery remain unverified. Both referral pages have supplied external form connections authorized for publication, with account-side privacy and delivery checks still unverified. JC authorized publishing the latest email-directory revision; future source changes still require a new push request. Clinical claims, photo provenance, legal/privacy content, production metadata, tracking, production QA, and performance remain release gates. Current phone/coverage QA is recorded separately in `PHONE-AND-COVERAGE-UPDATE.md`.

Keep local noindex until release approval. Do not stage, commit, push, or publish without JC's explicit go signal.
