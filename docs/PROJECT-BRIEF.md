# AMANAT project brief

**Course:** CS344 Web Engineering, Assignment 1  
**Assigned idea:** 20, Community Donation Drive Manager  
**Scope:** Client-side educational simulation using HTML, CSS and vanilla JavaScript.

## Users and purpose

Donors need to find useful items to contribute, check outstanding quantities, and choose a receiving window. Coordinators need to inspect pledges, cancel allocations, create new requirements and export a manifest.

## Main workflows

1. Browse, search and filter eight seeded drives by category, hub, priority and fulfillment. Sort by priority/deficit, completion, pledged weight or deadline.
2. Select a drive and calculate cargo weight, resulting completion and remaining deficit.
3. Check a hub/date/window against a maximum of two bookings, with a suggested later window when full.
4. Validate and save a pledge, produce a printable receipt, and revoke it to release units and capacity.
5. Create a new drive, browse the four-hub directory and export the current drive manifest as CSV.

## Records

A drive contains `id`, `title`, `category`, `hub`, `targetUnits`, `pledgedUnits`, `unitName`, `unitWeightKg`, `urgency`, `deadline`, `qualityRule` and `coordinator`. A baseline urgency is retained where needed to restore status after revocation.

A pledge records its reference, drive, hub, sample donor details, category/organization, integer quantity, date, window, timestamp, quality attestation and any surplus permission. Six initial bookings are included in the opening drive totals.

Records are stored as JSON in localStorage. A separate latest-receipt snapshot supports the confirmation page. The bounded telemetry log excludes donor contact details and raw search text.

## Validation and rule variant

- Four Twin Cities hubs; each hub/date/window accepts at most two bookings.
- Four PKT windows: 09:00-11:00, 11:00-13:00, 14:00-16:00 and 16:00-18:00.
- Quantity must be a positive whole number within the remaining deficit unless surplus is explicitly allowed.
- Collection must occur in a future window on or before the drive deadline.
- Phone format is `03XX-XXXXXXX`; a valid email and donor name are required. Groups must name their organization.
- The donor must attest to the selected acceptance rule and terms.
- Cargo of 50 kg or more is eligible for a simulated pickup request.
- New drives require a title, valid category/hub, positive integer target, positive unit weight, deadline and meaningful quality rule.

Empty, invalid, unavailable, fulfilled, revoked and storage-error states are handled in the interface. No backend, real donation processing or authenticated coordinator role is present.
