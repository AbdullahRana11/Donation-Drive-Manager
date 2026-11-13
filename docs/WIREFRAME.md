# Current page map

```text
index.html          Home: purpose, introduction, how it works
  |-- drives.html   Drive ledger, pledge form, recent records, coordinator desk
  |-- hubs.html     Collection map, directions, booking schedules
  |-- reports.html  Sample past drives and inspections
  |-- about.html    Project scope, FAQ and team

From the donation desk:
  |-- receipt dialog --> thank-you.html
  |-- terms/privacy --> legal.html

404.html provides recovery links for unassigned routes.
```

The detailed ledger sketch below applies to `drives.html`. Map, reports, FAQ and team blocks now occupy their own pages as shown above.

# AMANAT wireframe

This structural sketch describes the completed interface. It separates content and workflow placement from typography, color and decoration.

## Desktop: wider than 1080 px

```text
+--------------------------------------------------------------------+
| Registry status | PKT clock | Reset sample data | Export CSV          |
| Operational SLA                                                     |
+--------------------------------------------------------------------+
| AMANAT //        Twin Cities Directorate       [Record pledge]       |
|                                               [Export ledger]       |
| Operations | Hubs | Field reports | Protocols | Directorate          |
+--------------------------------------------------------------------+
| Breadcrumb / current category                                       |
| Academic demonstration notice                                       |
+----------------+----------------+----------------+------------------+
| Active drives  | Pledged units  | Cargo weight   | Slot utilization |
+----------------+----------------+----------------+------------------+
| Operations desk heading                                             |
+--------------------------------------------+-----------------------+
| ACTIVE DRIVE LEDGER: 8 columns              | PLEDGE DESK: 4 cols   |
| Search                                     | Drive selector        |
| Category | Hub | Urgency | Sort             | Assigned hub          |
| Hide fulfilled | Clear                     | Quantity | Date       |
|                                            | Surplus choice        |
| ID + priority | Title, hub, rule            | Live impact summary   |
|               | Target, progress, deficit  | Window + conflict     |
|               | Select for pledge          | Quality rule          |
|                                            | Donor contact fields  |
| ... eight sample records ...               | Quality attestation   |
|                                            | [Record pledge]       |
+--------------------------------------------+-----------------------+
| RECENT PLEDGES TABLE: reference, drive, units, date, revoke action    |
+--------------------------------------------------------------------+
| Coordinator dispatch desk [+ expandable new-drive form]             |
+--------------------------------------+-----------------------------+
| HUB DIRECTORY: selectable SVG map    | Hub tabs, directions,        |
|                                      | occupancy and slot schedule  |
+----------------+----------------+----------------+------------------+
| H-12 hub       | F-8 hub        | Saddar hub     | I-10/3 hub        |
+--------------------------------------------------------------------+
| FIELD REPORT 01: target / actual / tonnage / audit code               |
| FIELD REPORT 02: target / actual / tonnage / audit code               |
| FIELD REPORT 03: target / actual / tonnage / audit code               |
+--------------------------------------------------------------------+
| SAMPLE PARTNER INSPECTION TABLE                                      |
+---------------------------+----------------------------------------+
| Operating protocol        | Five expandable FAQs                   |
+--------------------------------------+-----------------------------+
| Original team illustration           | Four coordinator records     |
+--------------------------------------------------------------------+
| Footer: routes, governance, latest receipt, telemetry disclosure      |
+--------------------------------------------------------------------+
```

## Tablet: 769 to 1080 px

The KPI strip uses two columns. The ledger is full width, followed by the full-width pledge desk with paired form fields. Tables remain tabular where space permits. Hub details and the map sit beside each other. Content order matches the document order.

## Mobile: 768 px and below

```text
+--------------------------------+
| Clock / reset / SLA             |
| Masthead and primary actions    |
| Scrollable section navigation   |
| Breadcrumb and demo notice      |
+---------------+----------------+
| Active drives | Pledged units  |
| Cargo weight  | Slot use       |
+---------------+----------------+
| Operations heading             |
| Search               [Filters] |
| Collapsible filter fields      |
| Drive records, one per row      |
|                                |
| Pledge desk                    |
| Drive / hub                    |
| Quantity / date                |
| Cargo / completion / deficit   |
| Window / conflict message      |
| Donor fields / attestation     |
| [Record pledge]                |
|                                |
| Recent pledges as labeled rows |
| Expandable coordinator desk    |
| Map, hub tabs and schedule     |
| Field reports and sample audit |
| FAQs, team and footer          |
+--------------------------------+
| Critical count | Jump to desk  | <- sticky bottom control
+--------------------------------+
```

## Receipt and route map

```text
drives.html
  |-- validated pledge --> receipt dialog --> thank-you.html
  |-- governance links --------------------> legal.html
  |-- recovery directory ------------------> 404.html

Receipt: brand / reference / donor / drive / cargo / receiving window
         hub directions / quality attestation / local-record notice
         [Print] [Confirmation page or return to desk]
```

The native dialog keeps keyboard focus inside the receipt until it is closed. Print output contains the receipt itself. The standalone page also handles no receipt and revoked receipt states.
