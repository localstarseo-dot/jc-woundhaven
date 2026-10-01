# Authorized live staging preview

On October 2, 2026 (Asia/Manila), JC explicitly authorized pushing the latest local changes and publishing a browser-accessible staging URL.

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

Contact remains form-free. Self Referral and Patient Referral are visibly inactive drafts with disabled fields and no submission endpoint. No patient information is collected, uploaded, stored, or sent by these pages. Phone numbers remain placeholders.

This authorization does not approve a production launch, connect clinical referral workflows, verify photo rights or real staff/patient identity, approve clinical capabilities or outcome claims, confirm contact details, install analytics, or satisfy legal/privacy requirements. Those production gates remain separate.

## Publication verification

Before handing over the staging URL, check local/remote commit parity, successful Pages deployment, live HTTP responses, desktop/mobile rendering, required images/styles/scripts, project-prefixed navigation and condition anchors, removed CTA sections, and inactive referral safeguards. Local checks alone do not prove publication.

Further source revisions stay local until JC gives another explicit push or deployment go signal.
