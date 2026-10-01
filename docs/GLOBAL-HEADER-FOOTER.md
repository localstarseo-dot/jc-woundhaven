# Phase 1 global header and footer

Status: local review build. No commit, push, or deployment is authorized without JC's explicit go signal.

## Editable source

- `components/site-header.html`: utility bar, sticky primary navigation, referral dropdown, and mobile navigation
- `components/site-footer.html`: three footer columns, contact details, and copyright
- `styles/site.css`: shared design tokens and responsive component styles
- `scripts/site.js`: disclosure controls, mobile navigation, keyboard handling, and sticky offset
- `src/preview.html`: review canvas only, not the homepage
- `global-preview.html`: generated global-component review; rebuild after component edits
- `index.html`: generated homepage using the same shared header and footer
- `wound-care/index.html`: generated commercial service hub using the same shared header and footer
- `wounds-we-treat/index.html`: generated condition hub using the same shared header and footer
- `about/index.html`: generated About page using the same shared header and footer
- `technology/index.html`: generated Technology page using the same shared header and footer
- `contact/index.html`: generated form-free Contact page using the same shared header and footer
- `self-referral/index.html`: generated patient/family referral preview
- `patient-referral/index.html`: generated provider/clinician referral preview

Run `npm run build` and `npm run preview`, or run the scripts directly with Node. The global-component review is available at `http://127.0.0.1:4178/preview/global/`; the homepage is at `http://127.0.0.1:4178/`.

## Logo artwork mapping

The supplied filenames and actual artwork are reversed. Originals are preserved:

| Placement | Actual artwork | Original asset used |
| --- | --- | --- |
| White navigation | Full color anchor/staff and wordmark | `assets/Brand Logo/woundhaven_footer_logo_monochrome.svg` |
| Navy footer | White monochrome anchor/staff and wordmark | `assets/Brand Logo/woundhaven_nav_logo.svg` |
| Browser icon and subtle footer watermark | Icon only | `assets/Brand Logo/woundhaven_favicon.svg` / `.webp` |

The supplied SVGs contain embedded raster artwork; they are not vector paths. Using them preserves the clean source PNG artwork. The existing WebP horizontal logos exhibit rendering artifacts, so the preview uses the original SVG wrappers. No logo is regenerated or altered.

## Approved behavior

Both header bars stick together at the top. Utility wording stays centered at every width. Mobile uses the same message on two centered lines. Refer Patient remains visible beside the mobile menu button, and both audience choices are always one tap away.

JC's Contact revision supersedes the earlier Contact-section referral anchors:

- Request Care / patient and family: `self-referral/`
- Refer a Patient / provider and clinician: `patient-referral/`

JC's latest adjustment removes Service Areas and its dropdown from primary/mobile navigation, removes the Service Areas footer column, and changes footer city names to plain contact text. The blue conversion band has been removed from the shared footer at JC's request; page-level closing CTAs remain unchanged. Footer columns are Brand/Contact, Wound Care, and Company. The remaining Refer Patient dropdown supports keyboard focus, Escape, click-outside dismissal, and accurate expanded states.

## Preview limitations and handoff

The preview server exposes eight retained pages and the global component preview. The homepage, Wound Care service hub, Wounds We Treat condition hub, About page, Technology page, and Contact page are built; the four Service Areas paths are excluded for now. Contact is a simple contact-information page without forms. Separate `/self-referral/` and `/patient-referral/` pages contain inactive previews for patients/families and healthcare providers respectively. No form submits, collects, stores, or sends information. Approved workflow connections are required before enabling them.

`(XXX) XXX-XXXX` is the supplied phone placeholder. Telephone links contain a placeholder target until JC supplies the actual number. `info@woundhaven.com` is used as instructed. External referral destinations have not been supplied. Privacy, terms, accessibility, careers, social, and individual treatment pages are omitted from global links as directed.

Colors use the working blue/navy palette. No clinical metrics, testimonials, or equipment claims are introduced by these components.

## Local verification

The preview passed layout checks at 320, 390, 768, 1024, 1150, 1151, 1280, 1440, and 1920 pixels with centered utility content and no horizontal page overflow. Desktop and mobile scroll checks confirmed the combined header stays at viewport top. The original global build exercised Service Areas and Refer Patient dropdowns, mobile menu, Escape, ArrowDown, outside-click dismissal, and separate referral destinations in Chromium; Service Areas is now removed. See `docs/CARDS-AND-GLOBAL-ADJUSTMENTS.md` for current revision checks. All local header/footer destinations returned HTTP 200 and there were no browser script errors. Logo artwork was visually reviewed on both white and navy backgrounds after image decoding.
