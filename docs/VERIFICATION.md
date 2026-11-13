# AMANAT verification record

Tested on 13 November 2026 using the installed Chrome browser through Playwright. Tests used a fresh browser profile and fictional donor records. The application itself contains no Playwright dependency.

| Check | Result |
| --- | --- |
| Seed records | 8 drives; 6 bookings; 7 active and 3 critical drives |
| Opening arithmetic | 2,282 / 3,290 units; 69.4%; 10,799.4 kg; 6 / 32 tomorrow bookings |
| Filter and sort engine | Combined filters, quality-rule search, empty result and four sorts passed |
| Skeleton state | Busy state appears on filter changes before the updated records |
| Hub controls | Selection filters the ledger; keyboard tab navigation passed |
| Conflict | H-12 tomorrow 11:00-13:00 blocks the third booking and suggests 14:00-16:00 |
| Live calculation | 25 DRV-201 quilts: 55 kg, 87.0% completion, 65 remaining |
| Validation | Empty details, missing group name, full slot and excessive quantity rejected |
| Pledge persistence | New record survives reload; DRV-201 rises from 410 to 435 |
| Receipt | Modal and confirmation page read the same saved allocation; A4 output is one page |
| Revoke | Units return to 410; revoked receipt is inactive; revoking a seed frees its slot |
| Coordinator workflow | New requirement becomes DRV-209 and appears in the ledger |
| CSV | Real download includes deficits; formula-leading title is escaped; donor contacts excluded |
| Privacy | Telemetry does not include the entered donor name or email |
| Reset (historical interface) | Cancellation preserved records; confirmation restored eight drives and six bookings. This UI control was subsequently removed. Use a fresh private session for current demonstrations. |
| Responsive layout | No horizontal overflow at 1080, 768, 390 or 320 px; mobile drawer and jump work |
| Standalone pages | Confirmation, governance and 404 directory render with distinct metadata |
| Browser health | Zero console errors and failed asset requests during the tested flows |
| Additional edge cases | Exact 50 kg eligibility, fractional quantity rejection, deadline rejection and explicit surplus passed |
| Text safety | HTML-like donor content remains literal text; no injected image is created |
| Keyboard and motion | Receipt closes with Escape and returns focus; reduced motion disables shimmer animation |
| Local preview | Unknown nested routes return the custom page with HTTP 404; non-application files are not served |
| Storage unavailable | Clear error displayed with a usable sample ledger |
| Confirmation printing | Standalone receipt also produces one A4 page |
| Tab refresh | New drives and dataset reset refresh in another tab on the same origin |
| Direct offline opening | index.html opens from disk with all eight drives and no failed local assets in Chrome |

The application is a local classroom simulation. These checks do not establish production readiness, live collection availability or compliance with the assignment's restriction on generated full-site code. See the AI disclosure in ../README.md.

After the readability refinement, checked expandable desktop filters, category filtering, full-slot conflict and suggested slot, invalid form errors, navigation into collapsed records, and layouts at 1080, 768, 390 and 320 pixels. No horizontal overflow or JavaScript errors occurred. Desktop and mobile screenshots were refreshed and reviewed.

After splitting the content into pages, checked all eight pages at 1440, 390 and 320 pixels, with no horizontal overflow. Verified hub selection links to the correctly filtered drive page, slot conflicts, successful pledge submission and the saved receipt on the standalone confirmation page. No JavaScript errors or failed asset requests occurred. Home page screenshots are included.

## Folder reorganization verification

On 13 November 2026, moved CSS into `css/`, application JavaScript into `js/`, SVGs into `assets/images/`, font notices into `assets/fonts/licenses/`, and documentation/screenshots/reference files into `docs/`. The preview helper is now `scripts/serve.cjs`.

- All eight HTML pages loaded over the updated preview server with their local assets.
- Static checks found no broken HTML, CSS/font or documentation links.
- Hub-to-drive navigation, filtering, full-slot warnings, pledge creation, saved confirmation and revocation passed.
- Direct opening from disk loaded the home and drive pages with the moved Manrope font files.
- Layout checks passed at 1440, 390 and 320 px without horizontal overflow.
- Unknown routes returned the custom HTTP 404. Documentation, assignment references and preview tooling were not served.
- No JavaScript errors or failed asset requests occurred during the tested workflows.

The application logic, storage keys and root HTML page URLs were preserved. Start the preview from the project root with `node scripts/serve.cjs`.

## Fluid layout and mobile refinement

- Removed the red wordmark slashes on all eight pages.
- Replaced the 1440px page cap with fluid, clamped outer gutters; preserved readable paragraph widths.
- Tested all eight pages at 280, 320, 360, 390, 430, 540, 768, 820, 1024, 1080, 1100, 1280, 1440, 1920 and 2560px. No horizontal page overflow or controls outside the viewport were found.
- Checked six primary content pages at 640px for desktop-zoom reflow.
- Exercised mobile filters, pledge jump, full-slot blocking, suggested slot, valid submission and scrollable receipt.
- Added explicit mobile labels to the sample audit table.
- Rechecked the final small-screen header, reports and donation layouts in installed Chrome and Edge at seven representative widths.
- No JavaScript errors or failed asset requests occurred in the Chrome workflow checks. Home and mobile receipt screenshots were captured.

These are browser/viewport checks, not tests on every physical device. Safari and Firefox remain untested.

### Community photography check — November 13, 2026

Added three credited Pexels photographs to the home and About pages. Six local WebP derivatives total 248,338 bytes. Explicit dimensions, responsive srcset and below-fold lazy loading are present. The preview server serves WebP with image/webp.

Chrome checks passed for home, About and donation pages at 280, 390, 768, 1024, 1440 and 1920 pixels: no horizontal overflow, broken images or JavaScript page errors. Desktop and mobile home screenshots were visually reviewed. Donation logic was unchanged.

### Pakistani generated imagery — November 13, 2026

Replaced the three displayed Pexels photos with original built-in image-generation outputs: an Islamabad volunteer scene, a Rawalpindi collection scene and Pakistani food-parcel preparation. Originals are 1536 x 1024 PNGs; the six responsive WebP derivatives total 561,340 bytes. Captions identify them as AI-generated illustrations. No stock image was used as generation input. Full prompts are in IMAGE-PROMPTS.md.

Chrome checks passed on home and About at 280, 390, 768, 1024, 1440 and 1920 pixels. No horizontal overflow, broken images or JavaScript page errors. Every displayed community image resolves to assets/images/generated/. The hero also loaded through file://. Desktop, mobile and About section screenshots were visually inspected. Existing application logic and layout CSS were unchanged.


### Integrated photography refinement — November 13, 2026

Removed the image captions and adjacent image-origin note from home/About. Alt text now describes the visible subjects without generation metadata; origin documentation remains in ATTRIBUTION.md and IMAGE-PROMPTS.md. The hero now joins its copy and image on a shared neutral surface with aligned edges. The supporting photo is smaller, and the About photo shares its section's surface. Tablet stacking begins at 1100px to avoid narrow portrait crops; upper image positioning keeps faces visible on wider screens.

Home/About passed 20 Chrome checks at widths 280, 320, 390, 768, 900, 901, 1024, 1440, 1920 and 2560: no horizontal overflow, broken images, empty image containers or JavaScript page errors. Caption absence and descriptive alt text were checked. After the final crop adjustment, the home layout was rechecked at 390, 901, 1024, 1100, 1101, 1440, 1920 and 2560. Desktop, mobile, wide-screen and About screenshots were visually reviewed. No JavaScript or donation workflow changes.


### Sans-serif typography replacement — November 13, 2026

See TYPOGRAPHY-UPDATE.md for changed selectors and the 32 page/viewport checks. A declaration comparison confirms no layout, dimensions, padding or margin properties changed; the only non-font property addition is the requested muted hero second-line color. Existing JavaScript and HTML files are untouched. Retired serif font-face registrations and unused serif binaries were removed.


### Header refresh and utility cleanup — November 13, 2026

See HEADER-UPDATE.md for exact files, selectors, removed markup, JS changes and 64 responsive checks. Navigation and page content were verified unchanged.


### Donation headline refinement — November 13, 2026

Changed only `.workbench-heading h1` and its spans to locally hosted Libre Caslon Display 400, upright, with a 34–48px responsive size and restrained tracking. Chrome verified font loading, normal style and no page errors or horizontal overflow at 280, 390, 768, 1440 and 1920px. The headline screenshot was visually reviewed. Header, form title, other content, colors and application logic were unchanged.


### Frontend copy audit — November 13, 2026

Reviewed all eight pages, image alt text, accessibility labels, placeholders, page metadata, expanded panels, a rendered sample receipt, validation errors, confirmation dialog and invalid-storage state. Inspected the page overview visually and scanned active HTML/CSS/JS/SVG sources for stray assistant messages, AI authorship labels, prompt text and unfinished copy. No such frontend text was found. Image descriptions remain ordinary descriptions of their visible subjects.

Corrected obsolete references to the removed Reset Demo Dataset control in `legal.html` and the two storage-warning messages in `js/app.js`. Replacement instructions describe browser site-data controls and warn that saved pledges are removed. JavaScript syntax and browser page-error checks passed. Sample/fictional-operation notices and authorship/asset attribution documentation remain intact.
