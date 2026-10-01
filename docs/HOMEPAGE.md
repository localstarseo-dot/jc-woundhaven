# Wound Haven homepage

Status: phone/coverage revision rebuilt and locally validated; JC authorized committing and pushing it on October 2, 2026. See `PHONE-AND-COVERAGE-UPDATE.md` for current local QA and `STAGING.md` for publication checks. Referral workflows remain inactive.

## Direction and scope

The supplied homepage brief is the copy source. The page remains focused on Austin, TX, while supporting patient/family and healthcare-provider intent. Austin remains in the title, hero, coverage heading, primary location card, and relevant FAQ. General coverage wording includes Austin, Houston, San Antonio, College Station, Corpus Christi, Beaumont, and surrounding areas without repeating the complete list throughout the page. The three existing location cards remain informational; no Service Areas or dedicated city pages are added. No keyword repetition, invented metrics, credentials, testimonials, named devices, or insurance-acceptance claims are added.

The homepage includes hero, eight wound categories, five care settings, eight services, navy Why Wound Haven section, four-step process, conditional technology section, separate referral pathways, three city cards, and eight FAQs. The FAQ section now flows directly into the shared footer. The shared sticky header omits Service Areas; the shared three-column footer has no embedded blue conversion CTA. Condition cards are unnumbered, full-card native links to matching sections of the built Wounds We Treat hub, not nonexistent individual pages. Ready service cards link to matching Wound Care sections; location cards remain plain while their destination pages are excluded.

JC's latest local request removes the four-point care-approach strip and its city row from the homepage. The blue closing CTA is also removed from Home, Wound Care, Wounds We Treat, About, and Technology. Header, footer, hero buttons, referral cards, and other contextual CTAs are unchanged.

The official phone `(877) 288-1270` replaces placeholder copy and uses `tel:+18772881270` in existing call links. The full coverage list belongs in the existing coverage section and shared footer; compact supporting copy does not imply a three-city-only coverage limit. The Austin-first H1/title, imagery, section hierarchy, and removed CTA sections stay unchanged.

FAQ intro blocks are centered consistently on Home, Wound Care, Wounds We Treat, About, and Technology. This includes the eyebrow, heading, description, and contact link. The approved desktop two-column/mobile stacked layout and left-aligned question/answer text are preserved.

The homepage hero CTAs are “Self Referral Form” → `/self-referral/` and “Patient Referral Form” → `/patient-referral/`. Other contextual referral buttons remain unchanged; the separate blue closing CTA bands are removed. Referral pages are local disabled previews, not active submission forms.

The insurance FAQ directs visitors to confirm requirements with Wound Haven. Clinical suitability qualifiers in the supplied service copy are retained. Technology capabilities remain conditional pending confirmation of actual systems.

## Editable source and preview

- `src/pages/home.html`: homepage sections and copy
- `src/document.html`: page metadata, local noindex, and shared-component slots
- `styles/home.css`: responsive homepage styles
- `scripts/home.js`: homepage provider-referral disclosure dismissal
- `scripts/build.mjs`: generates `index.html` and the separate `global-preview.html`
- `scripts/prepare-assets.mjs`: creates responsive WebP compression/resize derivatives
- `assets/web/manifest.json`: original-to-derivative mapping and dimensions

Build with `npm run build`; preview with `npm run preview` at `http://127.0.0.1:4178/`. The separate shared-component canvas is at `/preview/global/`. The Wound Care and Wounds We Treat hubs, About, Technology, and Contact are also built at their approved URLs. Contact has no forms. Separate `/self-referral/` and `/patient-referral/` pages contain disabled patient/family and provider previews; no information is collected. The local server omits the four Service Areas routes; links to those excluded pages have been removed. It injects a root base URL into the homepage and global preview for local routing only. This is not a deployed router or a complete Phase 1 site.

Title: `Mobile Wound Care in Austin, TX | Wound Haven`

Description: `Wound Haven provides advanced mobile wound care in Austin, TX, including care in homes, skilled nursing facilities, assisted living, rehab, and LTAC settings. Request care or refer a patient.`

## Imagery

The supplied home-care assets are used without changing original files:

- `assets/WoundHaven_Batch2_Mobile_Wound_Care/03_home_consultation.png`: hero
- `assets/WoundHaven_Batch2_Mobile_Wound_Care/07_patient_caregiver_provider.png`: bedside/home care
- `assets/WoundHaven_Batch4_Technology/05_digital_clinical_documentation.png`: documentation scene

WebP derivatives use responsive sizes, explicit dimensions, eager/high-priority hero loading, and lazy loading for below-fold photos. Supplied brand icons and original clean logo artwork are used. No new logo or stock photograph is generated.

The brief requests a real Wound Haven clinician. These supplied images are suitable home-care scenes, but staff identity, patient consent, licensing, and whether pictured devices are actually used by Wound Haven have not been verified. Confirm provenance or replace with verified photography before publication. The image manifest does not certify authenticity or usage rights.

## Historical local verification

Chromium layout checks covered 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths. Desktop and mobile sections were visually inspected. Checks covered one H1, exact title and description, centered utility bar, no horizontal overflow, sticky combined header, local links and assets, FAQ accordion, referral disclosure and Escape, mobile menu, and separate patient/provider anchor targets. No browser script errors were observed.

This is browser-functional and visual QA, not a Lighthouse, PageSpeed, Core Web Vitals, assistive-technology, or full accessibility audit. HTTP 200 on a preview route does not mean its page or form is completed.

Earlier revision QA: before the latest removal, the care strip was verified once between the FAQ and closing CTA. All five FAQ intro blocks passed centered-text/description/link and accordion open/close checks at 320, 390, 600, 880, and 1440 pixels; question/answer alignment and responsive columns are unchanged. The two hero CTA labels and button fit passed ten viewport checks from 320 to 1920 pixels, with four desktop/mobile clicks confirming the separate referral routes and their disabled previews. Desktop/mobile screenshots were visually inspected. Footer removal remains verified across all built pages. These changes are local only.

## Before public launch

The official phone is supplied and implemented locally as `(877) 288-1270` / `tel:+18772881270`. Confirm the provided `info@woundhaven.com` address. Connect separately approved patient and provider referral destinations, with appropriate healthcare privacy requirements and handling. No local preview form collects patient information. Current phone/coverage revision QA is recorded separately in `PHONE-AND-COVERAGE-UPDATE.md`; historical checks above do not certify this revision.

Confirm clinical services, technology, insurance wording, service availability, and photo provenance. Service Areas and all dedicated city pages remain excluded unless separately approved. Add legal/privacy pages only when they exist, configure the approved public domain/canonical metadata, remove local noindex only during an approved production release, and complete production QA and measurement setup. These are separate release gates, not completed by this homepage build.
