# Card, navigation, and footer adjustments

Status: built and Chromium QA-tested locally on October 2, 2026. No staging, commit, push, publication, analytics, or performance measurement. JC's explicit go signal is still required for GitHub changes.

## Current revision

- Removed Service Areas and its dropdown from the shared desktop/mobile navigation.
- Removed the Service Areas footer column and changed footer city names to plain contact text. Coverage wording remains informational.
- Removed the blue Need Advanced Wound Care band from the shared footer in JC's latest follow-up. Footer columns remain Brand/Contact, Wound Care, and Company. Page-level closing CTAs and footer text links remain unchanged.
- Removed the eight number labels from the homepage Wounds We Treat cards. Their whole-card links now open the corresponding condition sections of the built Wounds We Treat hub.
- Made ready cards full-card native links. Cards without a suitable built destination remain plain. City/service-area cards have no placeholder links or Learn More affordances.

This revision does not delete the four reserved service-area routes, remove location copy elsewhere, remove numbered process steps, or invent individual service/condition URLs. Non-card contextual service-area links elsewhere in the page copy remain outside this requested navigation/footer/card change.

## Card behavior

The common `wh-linked-card` and `wh-card-link` styles stretch one native primary link across each ready card. Keyboard focus outlines the whole card. Ordinary browser link behavior works without a custom click handler or JavaScript.

Forty article cards plus eight Wound Care condition-list tiles use this behavior. Existing eight Wounds We Treat overview links and four Technology workflow links were already whole-card native links and remain so.

Homepage services link to matching built Wound Care sections. Homepage and Wound Care condition tiles link to matching built Wounds We Treat sections. Ready overview, advanced-treatment, care-model, and referral cards retain their relevant destinations. Patient/family cards open Self Referral; provider cards open Patient Referral. Secondary phone links and the provider's two-choice disclosure remain separately interactive and are not covered by the card's main link.

Informational care-setting, diagnostic, rationale, or location cards without a current suitable destination remain static. Telephone/email text remains available as contact information, but placeholder phone details are not promoted to new whole-card destinations.

## Source and build

- `components/site-header.html`, `components/site-footer.html`: global structure and links
- `styles/site.css`: native whole-card interaction, focus styling, three-column footer layout
- `styles/home.css`: removed unused wound-card numbering styles
- `src/pages/home.html`, `src/pages/wound-care.html`, `src/pages/wounds-we-treat.html`, `src/pages/about.html`, `src/pages/technology.html`, `src/pages/contact.html`: ready/static card behavior

Run `npm run build` and `npm run preview`. Review `http://127.0.0.1:4178/`. Generated outputs are rebuilt from source, not edited directly.

## Card revision verification

Eight built pages passed layout checks at 320, 390, 600, 768, 880, 1024, 1151, 1280, 1440, and 1920 pixel widths: eighty page/viewport combinations, centered utility content, one H1 per page, unique IDs, and no horizontal page or visible text overflow.

Forty-eight ready cards were clicked in their padding on both desktop and mobile, for ninety-six full-card destination checks. Targets were confirmed to exist and land below the combined sticky header. Twelve existing native whole-card links were also exercised. Thirty-nine unique served internal URL/fragment targets returned HTTP 200 with required anchors; reserved location routes returning HTTP 200 are still placeholders, not finished pages.

Header/footer Service Areas links were confirmed absent on all eight pages. Placeholder links were confirmed absent inside article cards. Provider disclosure choices, mobile menu/Escape, header referral routing, keyboard card focus/Enter, header ArrowDown/Escape, no-JavaScript navigation, and simulated `/jc-woundhaven/` project-prefix card routing passed. Contact remains form-free; separate referral previews remain disabled with no data collection.

No browser script errors, failed requests, or external/non-GET requests were observed in the tested flow. Header, wound-grid, integrated CTA, and footer screenshots were visually reviewed on desktop/mobile. Sixteen preservation hashes verified unchanged build/server scripts, navigation/referral interactions, document templates, referral page sources, other page styles, and original asset README. Original logo/photo assets were not edited.

This is local functional/layout QA, not deployment verification, a full accessibility audit, healthcare compliance approval, or PageSpeed/Core Web Vitals measurement. Remaining release gates and the no-push rule remain unchanged.

## Footer CTA follow-up

JC requested removal of the shared footer's blue CTA band after the card revision. The footer source was updated and all generated pages rebuilt. Page-level CTAs, header, cards, footer logo, contact information, three-column links, and copyright are unchanged. The earlier integrated-CTA screenshot checks above describe the preceding revision, not the current footer.

The revised footer passed 45 page/viewport checks across all eight built pages and the global preview at 320, 390, 600, 880, and 1440 pixels. The blue footer CTA is absent; the three columns, logo, seven navigation links, and page-level closing CTAs remain intact. No horizontal page overflow or browser script errors were observed. Desktop/mobile footer screenshots were inspected. No files were staged, committed, or pushed.

## Latest local follow-up: remove closing CTA bands and homepage care strip

After authorized repository checkpoint `a9e4e21`, JC returned to local-only work and requested removal of the homepage four-point care strip/city row and the blue closing CTA globally. One closing band was removed from each of Home, Wound Care, Wounds We Treat, About, and Technology. Contact and the referral pages had no such closing band. Source pages were edited and generated output rebuilt; shared header/footer components, imagery, scripts, hero buttons, referral cards, and contextual CTA links are unchanged.

All eight retained pages passed 390px/1440px checks: no removed sections or dangling final-CTA fragment references, centered FAQ intros retained on five pages, sticky header and three-column footer intact, and no horizontal overflow or browser errors. Contact remains form-free, and all 24 referral fields remain disabled. At the time of this local QA, no staging, commit, push, or deployment was authorized. JC subsequently gave a new explicit go signal to push these changes and publish a live staging preview; see `STAGING.md`.
