# Official phone and expanded coverage revision

Status: implemented and locally validated on October 2, 2026. All nine generated outputs passed desktop/mobile browser and internal-link checks. JC then explicitly authorized committing and pushing this revision; the existing GitHub Pages configuration automatically deploys the pushed `main` branch. Publication is confirmed only after deployment and live-content checks. Custom-domain connection and production launch remain outside this authorization.

## Supplied source of truth and clarification

JC supplied the next-version Wound Haven brief, then clarified: keep Service Areas and dedicated city pages excluded, with coverage wordings only. This clarification supersedes the brief's older architecture diagram and its request to retain Service Areas navigation or Austin/Houston/San Antonio pages.

- Official displayed phone: `(877) 288-1270`.
- Telephone target: `tel:+18772881270`.
- Exact utility bar: `Suffering from a chronic wound? Call (877) 288-1270`.
- Supplied coverage: Austin, Houston, San Antonio, College Station, Corpus Christi, Beaumont, and surrounding areas in Texas.
- Business email: supplied `info@woundhaven.com`, still pending confirmation.

No coverage radius, county, additional city, address, opening hours, response guarantee, credential, clinical capability, outcome, or insurance claim is added.

## Scope applied

- Existing utility, footer, call buttons, contact details, and patient/provider sections use the official phone. Stale pending-phone copy and placeholder telephone accessibility labels are removed.
- Homepage keeps its Austin-first H1/title and established section hierarchy. The existing coverage section carries the complete six-city coverage statement; hero supporting copy stays compact rather than repeating every city.
- About incorporates complete coverage in the care-model copy and updates secondary coverage mentions while retaining its trust/care-model focus.
- Wound Care, Wounds We Treat, and Technology update general coverage statements/relevant FAQs without replacing their retained Austin-focused content.
- Contact lists six cities plus surrounding areas. Its description now includes the official phone and separate patient/provider pathways.
- The footer keeps generic mobile-care positioning and one complete informational coverage line, avoiding duplicate expanded city lists.
- The blue/navy/white/light-blue system, supplied logo artwork with no tagline, imagery, motion, sticky header, centered FAQ introductions, native card links, and existing section order remain.

## Architecture and referral safeguards

Eight pages stay: Home, Wound Care, Wounds We Treat, About, Technology, Contact, Self Referral, and Patient Referral. The Service Areas nav/dropdown, hub, and Austin/Houston/San Antonio routes remain excluded. No College Station, Corpus Christi, or Beaumont page or location link is created. Existing informational location cards remain non-clickable. Future individual service pages remain excluded; the Wound Care hub stays.

The shared footer CTA, five page-level blue closing CTA bands, and homepage care strip/city row remain removed. They are not restored merely because the brief mentions final/pre-footer CTA placement.

Contact remains form-free. General Contact uses phone/email information, not a combined inquiry/referral form. Self Referral and Patient Referral remain separate, visibly inactive previews with 24 disabled fields, no HTML form elements, submission endpoints, upload controls, iframes, or patient-information storage. No patient data is collected, uploaded, sent, or stored. Approved secure workflows are still required before enabling either route.

## Publication boundary

Staging destination: <https://localstarseo-dot.github.io/jc-woundhaven/>, using the existing `main` branch and repository root. JC's new push go signal authorizes this revision to replace the earlier `f492d82` review checkpoint through the existing Pages configuration. Check commit parity, successful deployment, and exact live phone/coverage content before declaring publication. Subsequent revisions require another explicit go signal. Domain work remains deferred at JC's request.

All local pages retain `noindex, nofollow`. That is not authentication or a privacy safeguard; do not put patient information or credentials in the public repository or preview. Clinical/provenance review, email confirmation, approved referral workflows, legal/privacy content, production-domain metadata, tracking, production QA, and performance measurement remain separate gates.

## Current verification status

All nine retained previews passed Chromium checks at 320, 390, 880, and 1440 pixels: 36 page/viewport combinations. Checks confirmed exact utility wording, official telephone targets, no stale phone placeholders or confirmation labels, one expanded footer coverage statement, the retained Austin homepage H1/title, required coverage placements, centered FAQ introductions, sticky navigation and dropdown behavior, and no horizontal overflow, runtime errors, or failed asset loads. Rendered images decoded successfully after vertical scrolling.

Contact stays form-free. All 24 fields on the separate referral previews remain disabled, with no form elements or iframes. Excluded location links and removed blue CTA bands/care strip remain absent. Styles, scripts, original assets, logo artwork, source route configuration, and build logic are unchanged.

A simulated `/jc-woundhaven/` project prefix passed 18 page/viewport checks, all eight homepage condition anchors, 36 unique internal links, and 14 excluded-route 404 checks, with no issues. These checks are local routing evidence, not a new GitHub deployment. The local preview server was restarted for final review at `http://127.0.0.1:4178/`.

Desktop/mobile screenshots of the homepage hero, coverage section, About care-model copy, Contact coverage card, and shared footer were visually inspected. Historical page/card/asset checks in other documents apply to their original revisions, not automatically to these updated files. Current checks are functional/layout QA, not a full accessibility audit, clinical/compliance approval, live deployment verification, or a PageSpeed/Core Web Vitals measurement.
