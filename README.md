# Wound Haven

Local source repository for the Wound Haven website.

## Repository

- GitHub repository: `localstarseo-dot/jc-woundhaven`
- Primary branch: `main`
- Local project folder: `Wound Haven`

JC authorized committing and pushing the current revision on October 2, 2026. This is a versioned repository checkpoint, not approval to enable GitHub Pages or launch a production website. GitHub Pages remains unconfigured. Earlier page documents record the local-only QA stage before this authorization; see `docs/REPOSITORY-CHECKPOINT.md` for the current scope. Future commits, pushes, and deployments still require an explicit go signal.

## Local Phase 1 pages and global components

The reusable global header and footer are built from `components/`, styled in `styles/site.css`, and controlled by `scripts/site.js`. Service Areas is currently omitted from navigation/footer links. The navy three-column footer has no blue CTA band; page-level CTAs remain unchanged. Ready cards use full-card native links; cards without a built destination remain plain. Homepage wound cards have no number labels and open matching Wounds We Treat sections.

Run `npm run build`, then `npm run preview`. Review the homepage at `http://127.0.0.1:4178/`, the commercial service hub at `http://127.0.0.1:4178/wound-care/`, the condition hub at `http://127.0.0.1:4178/wounds-we-treat/`, About at `http://127.0.0.1:4178/about/`, Technology at `http://127.0.0.1:4178/technology/`, Contact at `http://127.0.0.1:4178/contact/`, Self Referral at `http://127.0.0.1:4178/self-referral/`, and Patient Referral at `http://127.0.0.1:4178/patient-referral/`. The approved global-component review remains available at `http://127.0.0.1:4178/preview/global/`. Run the scripts directly with Node if npm is unavailable.

Edit `src/pages/home.html`, `src/document.html`, `styles/home.css`, and `scripts/home.js` for the homepage. Edit `src/pages/wound-care.html`, `src/wound-care-document.html`, and `styles/wound-care.css` for the service hub. Edit `src/pages/wounds-we-treat.html`, `src/wounds-we-treat-document.html`, and `styles/wounds-we-treat.css` for the condition hub. Edit `src/pages/about.html`, `src/about-document.html`, and `styles/about.css` for About. Edit `src/pages/technology.html`, `src/technology-document.html`, and `styles/technology.css` for Technology. Edit `src/pages/contact.html`, `src/contact-document.html`, and `styles/contact.css` for Contact. Edit `src/pages/self-referral.html`, `src/self-referral-document.html`, `src/pages/patient-referral.html`, `src/patient-referral-document.html`, and shared `styles/referral.css` for the separate referral previews. These pages reuse the established page styles; the other content pages also use the shared referral disclosure behavior. Edit the shared component files for the header and footer. `npm run build` regenerates `index.html`, `wound-care/index.html`, `wounds-we-treat/index.html`, `about/index.html`, `technology/index.html`, `contact/index.html`, `self-referral/index.html`, `patient-referral/index.html`, and `global-preview.html`; do not edit those generated files directly. The four Service Areas routes are excluded for now, as are future individual service pages. The existing Wound Care hub and current service content remain. Contact is a simple contact-information page with no forms or input fields. Its two referral links open separate, visibly inactive self-referral and provider patient-referral previews. The former general inquiry preview has been removed. No form collects, stores, or sends information; approved workflow connections are still required.

Responsive page photos are compression/resize derivatives in `assets/web/`, with originals preserved. Regenerate them with `npm run prepare:assets` using Sharp installed locally, or set `WOUNDHAVEN_NODE_MODULES` to a dependency directory containing Sharp. The script also recognizes this computer’s bundled Codex runtime. Browsers do not need that development dependency.

See `docs/HOMEPAGE.md`, `docs/WOUND-CARE.md`, `docs/WOUNDS-WE-TREAT.md`, `docs/ABOUT.md`, `docs/TECHNOLOGY.md`, and `docs/CONTACT.md` for page scope and release checks, and `docs/GLOBAL-HEADER-FOOTER.md` for the supplied logo artwork mapping, referral routing, and handoff details. Current card/navigation/footer changes are recorded in `docs/CARDS-AND-GLOBAL-ADJUSTMENTS.md`.

Build and review locally first. Do not commit, push, or publish without JC's explicit go signal.

## Latest batch imagery and visual polish

The new seven-batch library replaces obsolete photo sources. `assets/README.md` records the current inventory and selections. `styles/brand-visuals.css`, `styles/motion.css`, and `scripts/motion.js` provide selected supporting graphics and accessible, restrained interactions. See `docs/BATCH-ASSETS-AND-VISUAL-POLISH.md` for scope, placements, and QA evidence. The Wound Care hub is retained; future individual service pages and the four Service Areas pages are excluded for now. Contact stays form-free, and separate referral previews stay disabled. These are locally built mockups, not a deployed production site.
