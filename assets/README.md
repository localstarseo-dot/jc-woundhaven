# Wound Haven Asset Inventory

This folder is the source library for the Wound Haven website. Keep these original files intact. Create web-optimized derivatives separately when the site is built.

## Inventory

| Category | Files | Source dimensions | Intended use |
| --- | ---: | --- | --- |
| Brand Logo | 6 | SVG plus WebP | Navigation, dark footer, and favicon |
| Careers | 2 | 1448 × 1086 PNG | Recruitment and clinician-role content |
| Mobile Care | 7 | 1448 × 1086 PNG | In-home care and mobile-service sections |
| Patient Outcomes | 4 | 1536 × 1024 PNG | Comfort, support, caregiver, and progress messaging |
| Service | 5 | 1448 × 1086 PNG | Assessment, dressing, bandaging, tracking, and care-planning sections |
| Supporting Graphics | 0 | Empty | Reserved for future supporting artwork |
| Team | 6 | 1448 × 1086 PNG | Team and about-page imagery |
| Technology | 6 | 1536 × 1024 PNG | Allograft, ultrasound mist, imaging, tracking, and collaboration content |
| Website Icons | 40 | 1254 × 1254 PNG; selected 512 × 512 SVG and 1024 × 1024 WebP | Service, process, referral, coverage, and trust indicators |

Total inside `assets`: 76 files, excluding `.DS_Store` and this inventory.

## Brand direction

The separate `Brand Direction.png` board defines the current visual direction:

- Haven Navy: `#15284C`
- Clinical Blue: `#4475A7`
- Care Cranberry: `#9F2843`
- Ice Blue: `#F0F6F9`
- Charcoal: `#333333`
- White: `#FFFFFF`
- Proposed pillars: Trusted, Compassionate, Mobile, Advanced, and Clear
- Typography is not final; the board explicitly marks final font selection as pending.

## Recommended usage

- Prefer the navigation SVG on light backgrounds and the reversed footer SVG on dark navy backgrounds.
- Use the circular mark for favicon and compact-brand placements. A complete favicon package still needs standard browser and Apple touch PNG sizes or an `.ico` fallback.
- Treat the PNG photography as high-resolution source files. Generate responsive WebP or AVIF derivatives before production use.
- Prefer SVG for icons 17–24 where available. Keep PNG only as an editing/source fallback and WebP only where a raster fallback is needed.
- Write contextual alt text based on each image's page role. Do not repeat the filename as alt text.

## Items to resolve before production

1. The `Patient Outcomes ` directory currently has a trailing space in its source name. Rename it only when page references can be updated in the same change.
2. Brand-logo filenames contain a download suffix, ` (1)`. Normalize production copies rather than overwriting these source files.
3. `Supporting Graphics` is currently empty.
4. Icons 18–21 use different descriptive names across their PNG and SVG/WebP versions. Confirm the intended concept before treating each numbered group as equivalent:
   - 18: `insurance-approval` versus `insurance-coverage`
   - 19: `covered-care` versus `medicare-coverage`
   - 20: `service-area-coverage` versus `service-area`
   - 21: `certified-specialist` versus `clinical-expertise`
5. The source library is about 63 MB. Most photographs are 1.2–2.2 MB PNG files and should not be served directly on production pages.
6. The photography and clinical technology visuals have a generated or composited appearance. Confirm licensing, provenance, medical accuracy, and permission before presenting people as actual staff or patients, devices as exact clinical equipment, or scenes as documented outcomes.
7. No standalone tagline-lockup asset is included even though the brand-direction board displays one.

## Production rule

Preserve this folder as the source-of-truth asset library. Put renamed, compressed, responsive website derivatives in a separate production directory and keep a mapping back to each source file.
