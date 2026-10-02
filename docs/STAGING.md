# Authorized live staging preview

## October 3 departmental email publication authorization

JC explicitly authorized pushing the four-email footer and Contact revision. The shared footer and Contact directory display `info@woundhaven.com`, `careers@woundhaven.com`, `referpatient@woundhaven.com`, and `medicalrecords@woundhaven.com` with their supplied purposes. Contact remains form-free and the separate Jotforms are unchanged. Local Chromium/WebKit checks passed across all nine generated routes and seven widths. Verify the deployed HTML/styles and responsive directory/footer on `https://woundhaven.com/`; set `WOUNDHAVEN_QA_BASE=https://woundhaven.com` and `WOUNDHAVEN_QA_GLOBAL_ROUTE=/global-preview.html` for the email QA script. Mailto targets are inspected without sending email; mailbox setup/delivery remain unverified.

## October 3 referral publication authorization

JC explicitly authorized committing and pushing both supplied Jotform integrations. The existing `main`/root GitHub Pages deployment uses the custom domain `https://woundhaven.com/` with HTTPS enforced. `/self-referral/` uses form `262745397105058`; `/patient-referral/` uses form `262745072792060`. Both replace the inactive previews described in the earlier checkpoint below. Contact remains form-free. These hosted forms can accept submissions, so the earlier no-collection statement no longer applies to referral pages. No test data was entered, uploaded, or submitted. Account-side privacy/HIPAA settings, permissions, retention, and submission delivery remain unverified. Confirm deployment success, live source/style parity, and both loaded forms before reporting this push as live.

## Earlier staging checkpoint

On October 2, 2026 (Asia/Manila), JC explicitly authorized pushing the latest local changes and publishing a browser-accessible staging URL.

The earlier authorized staging checkpoint is `f492d82`. JC subsequently gave a new explicit go signal on October 2, 2026 to commit and push the official-phone and expanded-coverage revision. The existing branch-based Pages configuration publishes that push automatically. See `PHONE-AND-COVERAGE-UPDATE.md` for scope and local QA; successful deployment and served-content checks are still required to confirm publication.

## Scope and selected hosting configuration

- Repository: `localstarseo-dot/jc-woundhaven`, visibility unchanged (public).
- GitHub Pages target: <https://localstarseo-dot.github.io/jc-woundhaven/>.
- Source: existing `main` branch, repository root (`/`).
- `.nojekyll` keeps the committed static files from being transformed by Jekyll.
- The local editable source and `scripts/build.mjs` remain authoritative. Generated HTML is committed for Pages.
- Homepage four-point care strip and city row are removed. Blue closing CTA bands are removed from Home, Wound Care, Wounds We Treat, About, and Technology. Other referral buttons and footer links remain.
- Eight review pages remain: Home, Wound Care, Wounds We Treat, About, Technology, Contact, Self Referral, and Patient Referral. Individual service pages and Service Areas pages remain excluded.
- The local `/preview/global/` alias is provided by the local preview server. Its static Pages equivalent is `/jc-woundhaven/global-preview.html`.

## Staging safeguards and remaining release gates

All generated pages retain `noindex, nofollow`. This discourages search indexing; it is not authentication or privacy protection. Do not put private patient information or credentials in this public repository or preview.

Contact remains form-free. Self Referral and Patient Referral are visibly inactive drafts with disabled fields and no submission endpoint. No patient information is collected, uploaded, stored, or sent by these pages. The current phone/coverage revision replaces the earlier `f492d82` placeholders with `(877) 288-1270` / `tel:+18772881270` and includes all six approved markets plus surrounding areas. No location pages or links are added.

This authorization does not approve a production launch, connect clinical referral workflows, verify photo rights or real staff/patient identity, approve clinical capabilities or outcome claims, confirm contact details, install analytics, or satisfy legal/privacy requirements. Those production gates remain separate.

## Publication verification

Before handing over the staging URL, check local/remote commit parity, successful Pages deployment, live HTTP responses, desktop/mobile rendering, required images/styles/scripts, project-prefixed navigation and condition anchors, removed CTA sections, and inactive referral safeguards. Local checks alone do not prove publication.

Further source revisions stay local until JC gives another explicit push or deployment go signal.
