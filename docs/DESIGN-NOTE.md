# AMANAT design note

**Course:** CS344 Web Engineering / Assignment 1  
**Assigned idea:** 20 / Community Donation Drive Manager  
**Project name:** AMANAT // Twin Cities Relief & Donation Drive Registry  
**Implementation scope:** Browser-only academic simulation. See ../README.md for the AI assistance disclosure.

## User and problem

The primary user is a donor who wants to find a current requirement, choose a useful quantity and reserve a receiving window. A collection coordinator needs to see remaining deficits, prevent overlapping bookings, cancel incorrect allocations and register new requirements.

The core workflow is: inspect a drive, select it, enter a quantity, check the cargo impact and hub availability, provide sample donor details, attest to the quality rule, then record and print a receipt. A full time window is blocked before any booking is saved. Revocation restores the remaining deficit and releases the receiving slot.

The supplied brief's data variant is four Islamabad/Rawalpindi hubs, eight exact seed drives, six existing bookings and a limit of two bookings per hub/date/window. Cargo at or above 50 kg is eligible for simulated truck pickup. The sample bookings are already included in the seed totals, so initialization does not add their quantities again.

## WDLC stages

The stages below follow the supplied **Week 1 - Lecture 3 - WDLC** deck.

| Stage | Application to AMANAT |
| --- | --- |
| 1. Gathering Relevant Information | Identify donors and coordinators, the five workflows, required records, quality rules, deadlines and two-booking capacity. Review the course's client-side scope. |
| 2. Planning | Organize the site into a registry, receipt, governance and recovery page. Define the workbench and mobile order in WIREFRAME.md. |
| 3. Design & Layout | Use a desktop ledger/form grid, four KPI columns and responsive stacking. Combine Plus Jakarta Sans display headings, Manrope/Inter interface text and IBM Plex Mono quantities. Libre Caslon Display is used only for the donation-page headline. |
| 4. Content Creation | Prepare the eight supplied drive records, six fictional donor bookings, quality instructions, five FAQs, simulated audit records, policies and original SVG illustrations. |
| 5. Development | Write semantic HTML, CSS media queries and vanilla JavaScript functions. Store the arrays and latest receipt in localStorage. |
| 6. Testing, Review & Launch | Verify validation, filtering, calculations, conflicts, persistence, revocation, export, mobile layouts and print output. Provide a local static preview; remote launch is left to the project owner. |
| 7. Maintenance & Updates | Keep sample dates appropriate, preserve the record schema, review the acceptance rules and retest affected workflows after changes. A real shared deployment would require a separately designed backend. |

## Page organization

The home page introduces the project. The donation workflow is in `drives.html`, the map in `hubs.html`, archive records in `reports.html`, and the FAQ/team in `about.html`. Source code is organized into `css/` and `js/`; artwork is in `assets/images/`, and font files and notices are in `assets/fonts/`.

## Layout and interaction decisions

The masthead identifies the directorate and offers the two main actions immediately. The KPI strip summarizes all drives. The ledger occupies eight desktop columns, while the four-column pledge desk keeps selection and allocation close together. An individual row combines the drive's rule, deadline, deficit and segmented completion gauge.

At 1080 px, the workbench becomes a single column and the KPI strip becomes two columns. At 768 px, filters move into a disclosure, pledge tables become labeled records and a sticky jump control provides direct access to the pledge desk. Empty results explain how to recover. Filter changes briefly show a 200 ms skeleton. Reduced-motion settings disable its animation.

Semantic headings, form labels, native input constraints, visible focus, status text, keyboard-operable hub tabs and native dialogs support accessibility. Errors are announced in an assertive summary. User input is rendered as text. The receipt has a separate print layout that excludes navigation and controls.

## Browser client versus server

| Responsibility | Where it runs in this assignment |
| --- | --- |
| Load and style pages | The browser parses local HTML and CSS, with local fonts and SVGs. |
| Filter, sort, calculate and check capacity | JavaScript in the browser uses arrays and functions. |
| Validate and record a pledge | HTML constraints plus JavaScript custom rules in the browser. |
| Save and restore data | This browser profile's localStorage for the current origin. |
| Generate receipts and CSV | Browser DOM, print support and Blob download. |
| Deliver files during preview | Optional scripts/serve.cjs returns static files over loopback HTTP. It has no pledge endpoints or database. |
| Shared bookings, authenticated coordinators or real dispatch | Outside Assignment 1. No such service is present. |

This distinction matters: two devices do not see the same records, and simultaneous edits in separate tabs cannot guarantee a shared booking limit. A receipt confirms a local demonstration record only. Storage occupancy represents pledged weight divided by nominal hub capacity, rather than inspected physical stock.

## A small live change to explain

Change a drive's acceptance rule in `seedDrives()` and open the site in a fresh private browser session to see the revised text. Explain why editing a seed alone does not replace an existing saved array. There is no reset button in the current interface. For a visible layout change, adjust the `--red` custom property and identify which operational states use it. Restore the final palette after the demonstration.

The screenshots are in `screenshots/`, the layout sketch is in WIREFRAME.md, and the verified scenarios are in VERIFICATION.md.
