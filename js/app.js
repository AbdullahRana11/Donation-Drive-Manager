'use strict';

const keys = { drives: 'amanat_drives_v1', pledges: 'amanat_pledges_v1', receipt: 'amanat_latest_receipt_v1', telemetry: 'amanat_telemetry_v1' };
const timeWindows = ['09:00-11:00', '11:00-13:00', '14:00-16:00', '16:00-18:00'];
const categories = ['Apparel & Bedding', 'Non-Perishable Food', 'Medical & Hygiene', 'Education & Books', 'Shelter & Utilities'];
const hubs = [
  { id: 'H12', name: 'H-12 NUST Gate 2 Logistics Desk', short: 'H-12 / NUST', coordinator: 'Ayesha Rahman', role: 'Campus logistics coordinator', badge: 'TC-012', extension: '120', capacityKg: 2500, coordinates: '33.6427,72.9905', directions: 'Approach H-12 from Srinagar Highway toward the NUST Gate 2 sector. In a live operation, confirm gate access and the precise receiving point before travel.', x: 150, y: 200 },
  { id: 'F8', name: 'F-8 Markaz Civic Relief Center', short: 'F-8 / MARKAZ', coordinator: 'Hassan Qureshi', role: 'Civic collection coordinator', badge: 'TC-008', extension: '108', capacityKg: 1500, coordinates: '33.7108,73.0396', directions: 'Approach F-8 Markaz from Margalla Road via Kohistan Road. The map identifies the sector center; a coordinator must confirm any real receiving address.', x: 380, y: 105 },
  { id: 'SAD', name: 'Saddar Cantt Depot Rawalpindi', short: 'SAD / CANTT', coordinator: 'Maryam Shah', role: 'Southern depot coordinator', badge: 'TC-021', extension: '121', capacityKg: 1500, coordinates: '33.5989,73.0479', directions: 'Use the Saddar approach from Mall Road toward the cantonment market. Restricted access and unloading arrangements would need confirmation before dispatch.', x: 420, y: 327 },
  { id: 'I10', name: 'I-10/3 Industrial Dry Storage', short: 'I-10/3 / STORAGE', coordinator: 'Bilal Ahmed', role: 'Dry goods dispatch coordinator', badge: 'TC-010', extension: '110', capacityKg: 12000, coordinates: '33.6504,73.0408', directions: 'Approach the I-10 industrial area via I.J.P. Road. Follow sector I-10/3 access roads and confirm the receiving bay before sending a loaded vehicle.', x: 300, y: 235 }
];

function seedDrives() {
  return [
    { id: 'DRV-201', title: 'Margalla Winter Thermal Quilt & Blanket Drive', category: categories[0], hub: hubs[0].name, targetUnits: 500, pledgedUnits: 410, unitName: 'quilts', unitWeightKg: 2.2, urgency: 'CRITICAL', deadline: '2026-11-28', qualityRule: 'New or dry-cleaned vacuum-sealed thermal quilts only', coordinator: hubs[0].coordinator },
    { id: 'DRV-202', title: 'Twin Cities Essential Dry Ration Packs (10kg Standard)', category: categories[1], hub: hubs[3].name, targetUnits: 1000, pledgedUnits: 740, unitName: 'packs', unitWeightKg: 10, urgency: 'CRITICAL', deadline: '2026-11-24', qualityRule: 'Minimum 6-month shelf expiry printed on flour, pulses, and cooking oil', coordinator: hubs[3].coordinator },
    { id: 'DRV-203', title: 'Rawalpindi Flood Preparedness First-Aid & Hygiene Kits', category: categories[2], hub: hubs[2].name, targetUnits: 350, pledgedUnits: 350, unitName: 'kits', unitWeightKg: 1.5, urgency: 'FULFILLED', baseUrgency: 'HIGH', deadline: '2026-11-18', qualityRule: 'Factory-sealed sterile bandages, ORS sachets, and antiseptic only', coordinator: hubs[2].coordinator },
    { id: 'DRV-204', title: 'Municipal Street School STEM Textbooks & Geometry Sets', category: categories[3], hub: hubs[1].name, targetUnits: 600, pledgedUnits: 290, unitName: 'sets', unitWeightKg: 1.8, urgency: 'HIGH', deadline: '2026-12-05', qualityRule: 'Complete Federal Board Grades 6-10 intact editions', coordinator: hubs[1].coordinator },
    { id: 'DRV-205', title: 'Pediatric Fortified Nutrition & Infant Formula Drive', category: categories[2], hub: hubs[1].name, targetUnits: 400, pledgedUnits: 165, unitName: 'tins', unitWeightKg: 0.9, urgency: 'CRITICAL', deadline: '2026-11-22', qualityRule: 'Unopened aluminum foil seal and batch verification mandatory', coordinator: hubs[1].coordinator },
    { id: 'DRV-206', title: 'Refurbished Student Laptops & Solar Study Lamps', category: categories[3], hub: hubs[0].name, targetUnits: 80, pledgedUnits: 58, unitName: 'units', unitWeightKg: 2.8, urgency: 'STANDARD', deadline: '2026-12-15', qualityRule: 'Must include functional charger and pass 2-hour battery test', coordinator: hubs[0].coordinator },
    { id: 'DRV-207', title: 'Potable Water Jerrycans & Ceramic Gravity Filters', category: categories[4], hub: hubs[3].name, targetUnits: 300, pledgedUnits: 225, unitName: 'units', unitWeightKg: 3.5, urgency: 'HIGH', deadline: '2026-11-30', qualityRule: 'Food-grade BPA-free HDPE containers or boxed ceramic candles', coordinator: hubs[3].coordinator },
    { id: 'DRV-208', title: 'Livelihood Rehabilitation Sewing Machines & Toolkits', category: categories[4], hub: hubs[2].name, targetUnits: 60, pledgedUnits: 44, unitName: 'kits', unitWeightKg: 8, urgency: 'STANDARD', deadline: '2026-12-20', qualityRule: 'Inspected working mechanical assembly with carrying case', coordinator: hubs[2].coordinator }
  ];
}

function pktDate(offset) {
  return new Date(Date.now() + 5 * 3600000 + (offset || 0) * 86400000).toISOString().slice(0, 10);
}

function seedPledges() {
  const tomorrow = pktDate(1);
  return [
    { id: 'PLG-1001', driveId: 'DRV-201', hub: hubs[0].name, donorName: 'Sample Campus Circle', phone: '0300-0000001', email: 'campus@example.com', donorCategory: 'University / Student group', organization: 'Demo student circle', quantity: 20, date: tomorrow, slot: timeWindows[1] },
    { id: 'PLG-1002', driveId: 'DRV-206', hub: hubs[0].name, donorName: 'Sample Study Collective', phone: '0300-0000002', email: 'study@example.com', donorCategory: 'University / Student group', organization: 'Demo study collective', quantity: 3, date: tomorrow, slot: timeWindows[1] },
    { id: 'PLG-1003', driveId: 'DRV-202', hub: hubs[3].name, donorName: 'Sample Ration Circle', phone: '0300-0000003', email: 'ration@example.com', donorCategory: 'Organization', organization: 'Demo ration circle', quantity: 25, date: tomorrow, slot: timeWindows[0] },
    { id: 'PLG-1004', driveId: 'DRV-204', hub: hubs[1].name, donorName: 'Sample Book Circle', phone: '0300-0000004', email: 'books@example.com', donorCategory: 'Individual', organization: '', quantity: 12, date: tomorrow, slot: timeWindows[2] },
    { id: 'PLG-1005', driveId: 'DRV-203', hub: hubs[2].name, donorName: 'Sample Health Circle', phone: '0300-0000005', email: 'health@example.com', donorCategory: 'Organization', organization: 'Demo health circle', quantity: 15, date: tomorrow, slot: timeWindows[0] },
    { id: 'PLG-1006', driveId: 'DRV-208', hub: hubs[2].name, donorName: 'Sample Skills Circle', phone: '0300-0000006', email: 'skills@example.com', donorCategory: 'Individual', organization: '', quantity: 2, date: tomorrow, slot: timeWindows[3] }
  ].map(function (pledge) { return Object.assign(pledge, { createdAt: new Date().toISOString(), attestation: true, sample: true }); });
}

let drives = [];
let pledges = [];
let telemetry = [];
let activeHub = hubs[0].name;
let ledgerTimer;
let storageTimer;
let lastConflict = '';
let pendingAction = null;
let nextSlot = '';

function byId(id) { return document.getElementById(id); }
function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function number(value) { return Number(value).toLocaleString('en-PK', { maximumFractionDigits: 2 }); }
function deficit(drive) { return Math.max(0, drive.targetUnits - drive.pledgedUnits); }
function completion(drive) { return drive.pledgedUnits / drive.targetUnits * 100; }
function urgency(drive) { return drive.pledgedUnits >= drive.targetUnits ? 'FULFILLED' : drive.baseUrgency || drive.urgency; }
function getHub(name) { return hubs.find(function (hub) { return hub.name === name; }); }
function bookings(hub, date, slot) { return pledges.filter(function (pledge) { return pledge.hub === hub && pledge.date === date && pledge.slot === slot; }).length; }
function validDay(value) { return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value; }
function slotInFuture(date, slot) {
  if (!validDay(date) || !timeWindows.includes(slot) || date < pktDate()) return false;
  return date > pktDate() || slot.slice(0, 5) > new Date(Date.now() + 5 * 3600000).toISOString().slice(11, 16);
}

function storageWarning(message) {
  const box = byId('storage-warning');
  if (box) { box.textContent = message; box.hidden = false; }
}

function readStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    storageWarning('Saved browser data could not be read. Check that browser storage is enabled. To start fresh, clear this site\'s stored data in your browser settings and reload; this removes saved pledges.');
    return fallback;
  }
}

function validDrive(drive) {
  return drive && /^DRV-\d+$/.test(drive.id) && typeof drive.title === 'string' && categories.includes(drive.category) && getHub(drive.hub) && Number.isSafeInteger(drive.targetUnits) && drive.targetUnits > 0 && Number.isSafeInteger(drive.pledgedUnits) && drive.pledgedUnits >= 0 && Number.isFinite(drive.unitWeightKg) && drive.unitWeightKg > 0 && typeof drive.unitName === 'string' && typeof drive.qualityRule === 'string' && typeof drive.coordinator === 'string' && validDay(drive.deadline) && ['CRITICAL', 'HIGH', 'STANDARD', 'FULFILLED'].includes(drive.urgency);
}

function validPledge(pledge, records) {
  const drive = pledge && records.find(function (record) { return record.id === pledge.driveId; });
  return drive && /^PLG-\d+$/.test(pledge.id) && pledge.hub === drive.hub && Number.isSafeInteger(pledge.quantity) && pledge.quantity > 0 && validDay(pledge.date) && timeWindows.includes(pledge.slot) && typeof pledge.donorName === 'string' && typeof pledge.phone === 'string' && typeof pledge.email === 'string';
}

function loadRecords() {
  const savedDrives = readStored(keys.drives, null);
  const savedPledges = readStored(keys.pledges, null);
  if (savedDrives === null && savedPledges === null) {
    drives = seedDrives();
    pledges = seedPledges();
    saveRecords(drives, pledges);
  } else if (Array.isArray(savedDrives) && savedDrives.length && savedDrives.every(validDrive) && Array.isArray(savedPledges) && savedPledges.every(function (pledge) { return validPledge(pledge, savedDrives); })) {
    drives = savedDrives;
    pledges = savedPledges;
  } else {
    drives = seedDrives();
    pledges = seedPledges();
    storageWarning('The saved dataset is incomplete or invalid. Sample records are shown. To start fresh, clear this site\'s stored data in your browser settings and reload; this removes saved pledges.');
  }
}

function saveRecords(nextDrives, nextPledges, receipt) {
  const changes = [[keys.drives, JSON.stringify(nextDrives)], [keys.pledges, JSON.stringify(nextPledges)]];
  if (receipt !== undefined) changes.push([keys.receipt, receipt === null ? null : JSON.stringify(receipt)]);
  const previous = [];
  try {
    changes.forEach(function (change) { previous.push([change[0], localStorage.getItem(change[0])]); });
    changes.forEach(function (change) {
      if (change[1] === null) localStorage.removeItem(change[0]);
      else localStorage.setItem(change[0], change[1]);
    });
    return true;
  } catch (error) {
    previous.forEach(function (change) {
      try {
        if (change[1] === null) localStorage.removeItem(change[0]);
        else localStorage.setItem(change[0], change[1]);
      } catch (rollbackError) { /* Browser storage remains unavailable. */ }
    });
    storageWarning('This change could not be saved. No reservation has been confirmed. Free browser storage or enable local storage, then try again.');
    return false;
  }
}

function amanatTelemetry(eventName, detail) {
  telemetry.push({ timestamp: new Date().toISOString(), event: eventName, detail: detail || '' });
  telemetry = telemetry.slice(-100);
  try { localStorage.setItem(keys.telemetry, JSON.stringify(telemetry)); } catch (error) { /* The visible log still works without storage. */ }
  renderTelemetry();
}
window.amanatTelemetry = amanatTelemetry;

function renderTelemetry() {
  if (!byId('telemetry-log')) return;
  byId('telemetry-count').textContent = telemetry.length + ' EVENTS';
  byId('telemetry-log').replaceChildren();
  telemetry.slice().reverse().forEach(function (entry) {
    byId('telemetry-log').appendChild(node('li', '', entry.timestamp + ' // ' + entry.event + (entry.detail ? ' : ' + entry.detail : '')));
  });
}

function addOptions(select, items, placeholder) {
  select.replaceChildren();
  if (placeholder !== undefined) { const option = node('option', '', placeholder); option.value = ''; select.appendChild(option); }
  items.forEach(function (item) {
    const option = node('option', '', typeof item === 'string' ? item : item.label);
    option.value = typeof item === 'string' ? item : item.value;
    select.appendChild(option);
  });
}

function fillDriveOptions() {
  const previous = byId('pledge-drive').value;
  addOptions(byId('pledge-drive'), drives.map(function (drive) { return { value: drive.id, label: drive.id + ' / ' + drive.title }; }));
  if (drives.find(function (drive) { return drive.id === previous; })) byId('pledge-drive').value = previous;
}

function filteredDrives() {
  const search = byId('search').value.trim().toLowerCase();
  const category = byId('filter-category').value;
  const hub = byId('filter-hub').value;
  const status = byId('filter-urgency').value;
  const result = drives.filter(function (drive) {
    return (!category || drive.category === category) && (!hub || drive.hub === hub) && (!status || urgency(drive) === status) && (!byId('hide-fulfilled').checked || urgency(drive) !== 'FULFILLED') && (!search || [drive.title, drive.id, drive.hub, drive.qualityRule].join(' ').toLowerCase().includes(search));
  });
  const priorities = { CRITICAL: 0, HIGH: 1, STANDARD: 2, FULFILLED: 3 };
  result.sort(function (a, b) {
    const sort = byId('sort-drives').value;
    if (sort === 'completion') return completion(a) - completion(b);
    if (sort === 'tonnage') return b.pledgedUnits * b.unitWeightKg - a.pledgedUnits * a.unitWeightKg;
    if (sort === 'deadline') return a.deadline.localeCompare(b.deadline);
    return priorities[urgency(a)] - priorities[urgency(b)] || deficit(b) - deficit(a);
  });
  return result;
}

function renderDrives() {
  clearTimeout(ledgerTimer);
  const list = byId('drive-list');
  const records = filteredDrives();
  list.replaceChildren();
  list.setAttribute('aria-busy', 'false');
  byId('result-count').textContent = records.length + ' / ' + drives.length + ' DRIVES';
  byId('breadcrumb-filter').textContent = 'Active Drive Ledger : ' + (byId('filter-category').value || 'All categories');
  const filterName = byId('filter-urgency').value ? byId('filter-urgency').value.toLowerCase() + ' ' : '';
  document.title = 'AMANAT // [' + records.length + ' ' + filterName + 'Drives] Twin Cities Relief Registry';
  if (!records.length) {
    const empty = node('div', 'empty-state');
    empty.append(node('h3', '', 'No matching drives.'), node('p', '', 'Broaden a filter or clear your search to return to the full registry.'));
    const clear = node('button', 'button', 'Clear all filters →');
    clear.type = 'button'; clear.addEventListener('click', clearFilters);
    empty.appendChild(clear); list.appendChild(empty);
  }
  records.forEach(function (drive, index) {
    const row = node('article', 'drive-row' + (byId('pledge-drive').value === drive.id ? ' selected' : ''));
    row.dataset.driveId = drive.id;
    const detail = node('div', 'drive-detail');
    const meta = node('div', 'drive-meta');
    meta.append(node('span', '', drive.id), node('span', 'badge ' + urgency(drive).toLowerCase(), urgency(drive)));
    detail.append(meta, node('h3', '', drive.title), node('p', 'drive-location', drive.hub + ' / DUE ' + drive.deadline), node('p', 'drive-rule', drive.qualityRule));
    const allocation = node('div', 'drive-allocation');
    const total = node('div', 'allocation-total', number(drive.pledgedUnits));
    total.appendChild(node('small', '', ' / ' + number(drive.targetUnits) + ' ' + drive.unitName));
    const percent = completion(drive);
    const gauge = node('div', 'gauge' + (percent >= 100 ? ' fulfilled' : percent < 50 ? ' critical' : ''));
    gauge.setAttribute('role', 'img'); gauge.setAttribute('aria-label', percent.toFixed(1) + '% of target pledged');
    for (let segment = 0; segment < 10; segment += 1) {
      const cell = node('span', 'gauge-cell'); const fill = node('span', 'gauge-fill');
      fill.style.width = Math.max(0, Math.min(100, percent * 10 - segment * 100)) + '%';
      cell.appendChild(fill); gauge.appendChild(cell);
    }
    const status = node('div', 'allocation-status');
    status.append(node('span', '', percent.toFixed(1) + '%'), node('span', '', number(deficit(drive)) + ' remaining'));
    const select = node('button', 'select-drive', 'Select for Pledge →');
    select.type = 'button'; select.setAttribute('aria-label', 'Select ' + drive.id + ' for pledge');
    select.addEventListener('click', function () { selectDrive(drive.id); });
    allocation.append(total, gauge, status, select);
    row.append(node('span', 'drive-index', String(index + 1).padStart(2, '0')), detail, allocation);
    list.appendChild(row);
  });
}

function scheduleLedger() {
  clearTimeout(ledgerTimer);
  const list = byId('drive-list');
  list.replaceChildren(); list.setAttribute('aria-busy', 'true');
  for (let i = 0; i < 3; i += 1) {
    const skeleton = node('div', 'skeleton-row'); skeleton.setAttribute('aria-hidden', 'true');
    skeleton.append(node('div', 'skeleton-line short'), node('div', 'skeleton-line'), node('div', 'skeleton-line short'));
    list.appendChild(skeleton);
  }
  ledgerTimer = setTimeout(renderDrives, 200);
}

function clearFilters() {
  ['search', 'filter-category', 'filter-hub', 'filter-urgency'].forEach(function (id) { byId(id).value = ''; });
  byId('hide-fulfilled').checked = false; byId('sort-drives').value = 'priority';
  scheduleLedger(); amanatTelemetry('filters_cleared');
}

function selectDrive(id) {
  byId('pledge-drive').value = id;
  byId('override-deficit').checked = false;
  byId('quality-attestation').checked = false;
  updateImpact(); renderDrives();
  byId('pledge-quantity').focus();
  amanatTelemetry('drive_selected', id);
}

function updateKpis() {
  const active = drives.filter(function (drive) { return urgency(drive) !== 'FULFILLED'; }).length;
  const critical = drives.filter(function (drive) { return urgency(drive) === 'CRITICAL'; }).length;
  const pledged = drives.reduce(function (sum, drive) { return sum + drive.pledgedUnits; }, 0);
  const target = drives.reduce(function (sum, drive) { return sum + drive.targetUnits; }, 0);
  const weight = drives.reduce(function (sum, drive) { return sum + drive.pledgedUnits * drive.unitWeightKg; }, 0);
  const date = (byId('pledge-date') ? byId('pledge-date').value : '') || pktDate(1);
  const booked = pledges.filter(function (pledge) { return pledge.date === date; }).length;
  byId('kpi-active').textContent = String(active).padStart(2, '0');
  byId('kpi-critical').textContent = critical + ' critical deficits / ' + drives.length + ' total drives';
  byId('kpi-units').replaceChildren(document.createTextNode(number(pledged)), node('small', '', ' / ' + number(target)));
  byId('kpi-completion').textContent = (pledged / target * 100).toFixed(1) + '% of the combined target pledged';
  byId('kpi-weight').replaceChildren(document.createTextNode(number(weight)), node('small', '', ' kg'));
  byId('kpi-slots').replaceChildren(document.createTextNode(String(booked).padStart(2, '0')), node('small', '', ' / 32'));
  byId('kpi-date').textContent = date + ' / reserved bookings';
  byId('mobile-critical').textContent = critical;
}

function selectedDrive() { return drives.find(function (drive) { return drive.id === byId('pledge-drive').value; }); }

function updateImpact() {
  const drive = selectedDrive();
  if (!drive) return;
  const quantityInput = byId('pledge-quantity');
  const quantity = Number(quantityInput.value);
  const usableQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 0;
  const weight = usableQuantity * drive.unitWeightKg;
  const percent = (drive.pledgedUnits + usableQuantity) / drive.targetUnits * 100;
  const remaining = Math.max(0, deficit(drive) - usableQuantity);
  byId('assigned-hub').textContent = drive.hub;
  byId('quality-rule').textContent = drive.qualityRule;
  byId('quantity-unit').textContent = '(' + drive.unitName + ')';
  quantityInput.max = byId('override-deficit').checked ? '1000000' : String(deficit(drive));
  byId('pledge-date').min = pktDate(); byId('pledge-date').max = drive.deadline;
  byId('donor-organization').required = ['Organization', 'University / Student group'].includes(byId('donor-category').value);
  const impact = byId('impact-box'); impact.replaceChildren();
  const stats = node('div', 'impact-stats');
  [['Cargo weight', number(weight) + ' kg'], ['Post-pledge', percent.toFixed(1) + '%'], ['Still required', number(remaining)]].forEach(function (stat) {
    const item = node('span', '', stat[0]); item.appendChild(node('strong', '', stat[1])); stats.appendChild(item);
  });
  impact.append(stats, node('p', 'impact-line', number(usableQuantity) + ' ' + drive.unitName + ' × ' + number(drive.unitWeightKg) + ' kg per unit'), node('p', 'cargo-tier' + (weight >= 50 ? ' heavy' : ''), weight >= 50 ? '[HEAVY CARGO : FREE TRUCK PICKUP ELIGIBLE]' : '[STANDARD : HUB DROP-OFF]'));
  const date = byId('pledge-date').value;
  const slot = byId('pledge-slot').value;
  const status = byId('slot-status');
  byId('use-next-slot').hidden = true; status.classList.remove('conflict');
  const count = bookings(drive.hub, date, slot);
  byId('pledge-slot').querySelectorAll('option').forEach(function (option) {
    if (option.value) option.textContent = option.value + ' / ' + bookings(drive.hub, date, option.value) + ' of 2 booked';
  });
  if (slot && count >= 2) {
    status.classList.add('conflict');
    nextSlot = timeWindows.find(function (window) { return window > slot && bookings(drive.hub, date, window) < 2 && slotInFuture(date, window); }) || '';
    status.textContent = 'SLOT CONFLICT DETECTED / 2 of 2 bookings. ' + (nextSlot ? 'Next open window: ' + nextSlot + ' PKT.' : 'No later window remains on this date. Choose another date or an earlier available window.');
    byId('use-next-slot').hidden = !nextSlot;
    byId('use-next-slot').textContent = 'Use ' + nextSlot + ' instead →';
    const conflict = drive.hub + date + slot;
    if (lastConflict !== conflict) amanatTelemetry('slot_conflict_detected', getHub(drive.hub).id + ' / ' + date + ' / ' + slot);
    lastConflict = conflict;
  } else {
    lastConflict = '';
    status.textContent = !date || !slot ? 'Choose a date and time window to check hub capacity.' : !slotInFuture(date, slot) ? 'This time window has passed. Select a future PKT window.' : date > drive.deadline ? 'This date falls after the drive deadline.' : 'AVAILABLE / ' + (2 - count) + ' of 2 booking places remain. Times are PKT.';
  }
  updateKpis(); renderHubDetails();
}

function renderPledges() {
  const body = byId('pledge-rows'); body.replaceChildren();
  byId('pledge-count').textContent = pledges.length + ' LIVE RECORDS';
  pledges.slice().reverse().forEach(function (pledge) {
    const drive = drives.find(function (record) { return record.id === pledge.driveId; });
    const row = node('tr');
    const reference = node('td'); reference.dataset.label = 'Reference / donor';
    reference.append(node('strong', 'mono', pledge.id), node('span', 'table-detail', pledge.donorName));
    const location = node('td'); location.dataset.label = 'Drive / hub';
    location.append(node('span', 'mono', pledge.driveId), node('span', 'table-detail', pledge.hub));
    const units = node('td', 'mono', number(pledge.quantity) + ' ' + drive.unitName); units.dataset.label = 'Units / cargo';
    units.appendChild(node('span', 'table-detail', number(pledge.quantity * drive.unitWeightKg) + ' kg'));
    const window = node('td', 'mono', pledge.date); window.dataset.label = 'Window / PKT';
    window.appendChild(node('span', 'table-detail', pledge.slot));
    const action = node('td'); action.dataset.label = 'Action';
    const button = node('button', 'text-button', 'Revoke Pledge'); button.type = 'button';
    button.setAttribute('aria-label', 'Revoke pledge ' + pledge.id);
    button.addEventListener('click', function () { confirmAction('Revoke ' + pledge.id + '?', 'Release ' + number(pledge.quantity) + ' ' + drive.unitName + ' and its ' + pledge.date + ' / ' + pledge.slot + ' reservation. This removes the pledge from this browser.', function () { revokePledge(pledge.id); }); });
    action.appendChild(button); row.append(reference, location, units, window, action); body.appendChild(row);
  });
  if (!pledges.length) { const row = node('tr'); const cell = node('td', '', 'No live pledges. Record a pledge to open the local transaction register.'); cell.colSpan = 5; row.appendChild(cell); body.appendChild(row); }
}

function showErrors(id, errors) {
  const box = byId(id); box.replaceChildren(); box.hidden = !errors.length;
  if (!errors.length) return;
  box.appendChild(node('strong', '', 'Review these fields before recording:'));
  const list = node('ul'); errors.forEach(function (error) { list.appendChild(node('li', '', error)); });
  box.appendChild(list); box.setAttribute('tabindex', '-1'); box.focus();
}

function recordPledge(event) {
  event.preventDefault();
  const drive = selectedDrive();
  const form = byId('pledge-form');
  const quantity = Number(byId('pledge-quantity').value);
  const date = byId('pledge-date').value;
  const slot = byId('pledge-slot').value;
  const errors = [];
  const name = byId('donor-name').value.trim();
  const phone = byId('donor-phone').value.trim();
  const email = byId('donor-email').value.trim();
  const category = byId('donor-category').value;
  const organization = byId('donor-organization').value.trim();
  if (name.length < 2 || name.length > 80) errors.push('Donor name: enter 2 to 80 characters.');
  if (!/^03\d{2}-\d{7}$/.test(phone)) errors.push('Phone: use 03XX-XXXXXXX, for example 0300-1234567.');
  if (!email || !byId('donor-email').validity.valid) errors.push('Email: enter a valid email address.');
  if (!category) errors.push('Donor category: select an individual, student group or organization.');
  if (category && category !== 'Individual' && !organization) errors.push('Organization: enter the name of your institution or group.');
  if (!drive) errors.push('Target drive: choose a registered drive.');
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1000000) errors.push('Quantity: enter a whole number from 1 to 1,000,000.');
  else if (drive && quantity > deficit(drive) && !byId('override-deficit').checked) errors.push('Quantity exceeds the ' + deficit(drive) + ' remaining units. Reduce it or explicitly allow a surplus allocation.');
  if (!validDay(date) || date < pktDate()) errors.push('Drop-off date: choose today or a future date in PKT.');
  else if (drive && date > drive.deadline) errors.push('Drop-off date must be on or before ' + drive.deadline + '.');
  if (!timeWindows.includes(slot)) errors.push('Time window: select one of the four collection windows.');
  else if (validDay(date) && !slotInFuture(date, slot)) errors.push('Time window: choose a collection window that has not started in PKT.');
  if (drive && bookings(drive.hub, date, slot) >= 2) errors.push('Slot conflict: this hub already has two bookings in that window. Choose the suggested available window.');
  if (!byId('quality-attestation').checked) errors.push('Quality attestation: confirm the selected drive rule and donor terms.');
  if (!form.checkValidity() && !errors.length) errors.push('Complete all fields within their stated limits.');
  showErrors('pledge-errors', errors);
  if (errors.length) { amanatTelemetry('pledge_validation_failed', errors.length + ' fields'); return; }
  const highestId = pledges.reduce(function (highest, pledge) { return Math.max(highest, Number(pledge.id.slice(4))); }, 1006);
  const pledge = { id: 'PLG-' + Math.max(highestId + 1, Date.now()), driveId: drive.id, hub: drive.hub, donorName: name, phone: phone, email: email, donorCategory: category, organization: organization, quantity: quantity, date: date, slot: slot, createdAt: new Date().toISOString(), attestation: true, surplus: byId('override-deficit').checked };
  const nextDrives = drives.map(function (record) {
    if (record.id !== drive.id) return record;
    return Object.assign({}, record, { pledgedUnits: record.pledgedUnits + quantity, baseUrgency: record.baseUrgency || (record.urgency === 'FULFILLED' ? 'HIGH' : record.urgency) });
  });
  const receipt = { pledge: pledge, drive: nextDrives.find(function (record) { return record.id === drive.id; }) };
  if (!saveRecords(nextDrives, pledges.concat(pledge), receipt)) { showErrors('pledge-errors', ['Browser storage is unavailable. The pledge was not recorded.']); return; }
  drives = nextDrives; pledges.push(pledge);
  form.reset(); byId('pledge-drive').value = drive.id; byId('pledge-date').value = pktDate(1);
  updateAll();
  renderReceipt(byId('receipt-content'), receipt);
  byId('receipt-modal').showModal();
  amanatTelemetry('pledge_recorded', pledge.id + ' / ' + drive.id);
}

function revokePledge(id) {
  const pledge = pledges.find(function (record) { return record.id === id; });
  if (!pledge) return;
  const nextDrives = drives.map(function (drive) {
    if (drive.id !== pledge.driveId) return drive;
    return Object.assign({}, drive, { pledgedUnits: Math.max(0, drive.pledgedUnits - pledge.quantity), baseUrgency: drive.baseUrgency || (drive.urgency === 'FULFILLED' ? 'HIGH' : drive.urgency) });
  });
  const nextPledges = pledges.filter(function (record) { return record.id !== id; });
  if (!saveRecords(nextDrives, nextPledges)) return;
  drives = nextDrives; pledges = nextPledges; updateAll();
  byId('ledger-message').textContent = id + ' revoked. Units and the collection slot have been released.';
  byId('ledger-message').tabIndex = -1;
  byId('ledger-message').focus();
  amanatTelemetry('pledge_revoked', id);
}

function confirmAction(title, message, action) {
  byId('confirm-heading').textContent = title; byId('confirm-message').textContent = message;
  pendingAction = action; byId('confirm-modal').showModal(); byId('cancel-action').focus();
}

function createDrive(event) {
  event.preventDefault();
  const form = byId('drive-form'); const fields = form.elements;
  const target = Number(fields.targetUnits.value); const weight = Number(fields.unitWeightKg.value);
  const title = fields.title.value.trim(); const unit = fields.unitName.value.trim(); const rule = fields.qualityRule.value.trim();
  const errors = [];
  if (title.length < 5 || title.length > 140) errors.push('Drive title: enter 5 to 140 characters.');
  if (!categories.includes(fields.category.value)) errors.push('Select a valid category.');
  if (!getHub(fields.hub.value)) errors.push('Select a collection hub.');
  if (!Number.isSafeInteger(target) || target < 1 || target > 1000000) errors.push('Target units: enter a whole number from 1 to 1,000,000.');
  if (!Number.isFinite(weight) || weight < 0.01 || weight > 10000 || !fields.unitWeightKg.validity.valid) errors.push('Unit weight: enter 0.01 to 10,000 kg with at most two decimal places.');
  if (!unit || unit.length > 25) errors.push('Unit name: enter 1 to 25 characters.');
  if (!validDay(fields.deadline.value) || fields.deadline.value < pktDate()) errors.push('Deadline: choose today or a future date.');
  if (rule.length < 10 || rule.length > 350) errors.push('Quality rule: enter 10 to 350 characters.');
  if (!form.checkValidity() && !errors.length) errors.push('Complete all fields within their stated limits.');
  showErrors('drive-errors', errors);
  if (errors.length) { amanatTelemetry('drive_validation_failed', errors.length + ' fields'); return; }
  const highest = drives.reduce(function (value, drive) { return Math.max(value, Number(drive.id.slice(4))); }, 208);
  const drive = { id: 'DRV-' + (highest + 1), title: title, category: fields.category.value, hub: fields.hub.value, targetUnits: target, pledgedUnits: 0, unitName: unit, unitWeightKg: weight, urgency: fields.urgency.value, deadline: fields.deadline.value, qualityRule: rule, coordinator: getHub(fields.hub.value).coordinator };
  if (!saveRecords(drives.concat(drive), pledges)) { showErrors('drive-errors', ['Browser storage is unavailable. The drive was not registered.']); return; }
  drives.push(drive); form.reset(); fillDriveOptions(); clearFilters(); updateAll();
  byId('drive-message').textContent = drive.id + ' registered. The new requirement is now in the active ledger.';
  amanatTelemetry('drive_created', drive.id);
}

function hubOccupancy(hub) {
  const weight = drives.filter(function (drive) { return drive.hub === hub.name; }).reduce(function (sum, drive) { return sum + drive.pledgedUnits * drive.unitWeightKg; }, 0);
  return { weight: weight, percent: weight / hub.capacityKg * 100 };
}

function chooseHub(name, focusTab) {
  if (!byId('filter-hub')) {
    activeHub = name; renderHubs();
    if (focusTab) byId('tab-' + getHub(name).id).focus();
    amanatTelemetry('hub_selected', getHub(name).id); return;
  }
  activeHub = name; byId('filter-hub').value = name;
  renderHubs(); scheduleLedger(); amanatTelemetry('hub_selected', getHub(name).id);
  if (focusTab) byId('tab-' + getHub(name).id).focus();
}

function renderHubs() {
  if (!byId('hub-tabs')) return;
  const tabs = byId('hub-tabs'); const cards = byId('hub-cards'); const pins = byId('map-pins');
  tabs.replaceChildren(); cards.replaceChildren(); pins.replaceChildren();
  hubs.forEach(function (hub, index) {
    const active = hub.name === activeHub;
    const tab = node('button', '', hub.id); tab.id = 'tab-' + hub.id; tab.type = 'button';
    tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', String(active)); tab.setAttribute('aria-controls', 'hub-details');
    tab.setAttribute('aria-label', hub.name); tab.tabIndex = active ? 0 : -1;
    tab.addEventListener('click', function () { chooseHub(hub.name, true); });
    tab.addEventListener('keydown', function (event) {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % hubs.length;
      else if (event.key === 'ArrowLeft') next = (index + hubs.length - 1) % hubs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = hubs.length - 1;
      else return;
      event.preventDefault(); chooseHub(hubs[next].name, true);
    });
    tabs.appendChild(tab);
    const card = node('button', 'hub-card' + (active ? ' active' : '')); card.type = 'button'; card.setAttribute('aria-pressed', String(active));
    card.append(node('span', 'mono', '0' + (index + 1) + ' / ' + hub.short), node('strong', '', hub.name), node('small', '', hub.coordinator + ' / EXT. ' + hub.extension), node('span', 'mono', hubOccupancy(hub).percent.toFixed(1) + '% allocated →'));
    card.addEventListener('click', function () { chooseHub(hub.name, true); }); cards.appendChild(card);
    const pin = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    pin.setAttribute('class', 'map-pin' + (active ? ' active' : '')); pin.setAttribute('transform', 'translate(' + hub.x + ' ' + hub.y + ')');
    pin.setAttribute('role', 'button'); pin.setAttribute('tabindex', '0'); pin.setAttribute('aria-label', 'Select ' + hub.name); pin.setAttribute('aria-pressed', String(active));
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); rect.setAttribute('x', '-15'); rect.setAttribute('y', '-15'); rect.setAttribute('width', '30'); rect.setAttribute('height', '30');
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text'); label.setAttribute('text-anchor', 'middle'); label.setAttribute('y', '4'); label.textContent = '0' + (index + 1);
    const name = document.createElementNS('http://www.w3.org/2000/svg', 'text'); name.setAttribute('class', 'pin-label'); name.setAttribute('x', '23'); name.setAttribute('y', '5'); name.textContent = hub.id;
    pin.append(rect, label, name);
    pin.addEventListener('click', function () { chooseHub(hub.name, true); });
    pin.addEventListener('keydown', function (event) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); chooseHub(hub.name, true); } });
    pins.appendChild(pin);
  });
  renderHubDetails();
}

function renderHubDetails() {
  const panel = byId('hub-details'); if (!panel) return;
  const hub = getHub(activeHub); const occupancy = hubOccupancy(hub);
  panel.replaceChildren(); panel.setAttribute('aria-labelledby', 'tab-' + hub.id);
  const info = node('div', 'hub-info');
  [['Collection hours', '09:00-18:00 PKT / daily'], ['Allocated storage', occupancy.percent.toFixed(1) + '% / ' + number(occupancy.weight) + ' kg'], ['Field coordinator', hub.coordinator + ' / ' + hub.badge]].forEach(function (item) {
    const line = node('span', '', item[0]); line.appendChild(node('strong', '', item[1])); info.appendChild(line);
  });
  const bar = node('div', 'occupancy'); const fill = node('span'); fill.style.width = Math.min(100, occupancy.percent) + '%'; bar.appendChild(fill); bar.setAttribute('aria-hidden', 'true');
  const directions = node('a', 'text-link', 'Open sector coordinates in Google Maps ↗');
  directions.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(hub.coordinates); directions.target = '_blank'; directions.rel = 'noopener noreferrer';
  directions.addEventListener('click', function () { amanatTelemetry('map_directions_opened', hub.id); });
  const date = (byId('pledge-date') ? byId('pledge-date').value : '') || pktDate(1);
  const schedule = node('div', 'slot-schedule'); schedule.appendChild(node('h4', '', date + ' / BOOKING WINDOWS'));
  const list = node('ul'); timeWindows.forEach(function (window) {
    const count = bookings(hub.name, date, window); const row = node('li'); row.append(node('span', '', window), node('strong', count >= 2 ? 'critical' : '', count + '/2 ' + (count >= 2 ? 'FULL' : 'OPEN'))); list.appendChild(row);
  }); schedule.appendChild(list);
  const browse = node('a', 'button', 'Browse drives at this hub →');
  browse.href = 'drives.html?hub=' + encodeURIComponent(hub.name);
  panel.appendChild(browse);
  panel.append(node('span', 'eyebrow', 'COLLECTION POINT / ' + hub.id), node('h3', '', hub.name), node('p', '', hub.directions), info, bar, node('p', 'section-note', 'Simulated allocation from pledged weight, not measured stock. Nominal capacity: ' + number(hub.capacityKg) + ' kg.'), directions, schedule);
}

function renderTeam() {
  if (!byId('team-roster')) return;
  hubs.forEach(function (hub, index) {
    const member = node('div', 'team-member'); const details = node('div');
    details.append(node('h3', '', hub.coordinator), node('p', '', hub.role), node('small', '', hub.name), node('small', 'mono', hub.badge + ' / DISPATCH EXT. ' + hub.extension));
    member.append(node('span', '', '0' + (index + 1)), details); byId('team-roster').appendChild(member);
  });
}

function renderReceipt(container, receipt) {
  container.replaceChildren(); const pledge = receipt.pledge; const drive = receipt.drive; const hub = getHub(pledge.hub);
  container.append(node('div', 'receipt-brand', 'AMANAT //'), node('span', 'eyebrow', 'TWIN CITIES DIRECTORATE / LOCAL DEMONSTRATION'), node('h2', '', 'Official dispatch receipt'));
  container.querySelector('h2').id = 'receipt-heading';
  container.appendChild(node('p', 'receipt-reference', pledge.id));
  const list = node('dl');
  const weight = pledge.quantity * drive.unitWeightKg;
  [['Donor', pledge.donorName], ['Contact', pledge.phone + ' / ' + pledge.email], ['Donor category', pledge.donorCategory + (pledge.organization ? ' / ' + pledge.organization : '')], ['Allocated drive', drive.id + ' / ' + drive.title], ['Cargo', number(pledge.quantity) + ' ' + drive.unitName + ' / ' + number(weight) + ' kg'], ['Reserved window', pledge.date + ' / ' + pledge.slot + ' PKT'], ['Collection hub', hub.name], ['Quality attested', drive.qualityRule], ['Logistics tier', weight >= 50 ? 'Heavy cargo: pickup eligible; vehicle not confirmed' : 'Standard: hub drop-off'], ['Coordinator', hub.coordinator + ' / ' + hub.badge + ' / Ext. ' + hub.extension], ['Recorded at', pledge.createdAt], ['Allocation', pledge.surplus ? 'Surplus explicitly permitted' : 'Within remaining deficit']].forEach(function (entry) { list.append(node('dt', '', entry[0]), node('dd', '', entry[1])); });
  const mapLink = node('a', '', 'View approximate sector location ↗'); mapLink.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(hub.coordinates); mapLink.target = '_blank'; mapLink.rel = 'noopener noreferrer';
  container.append(list, node('p', '', hub.directions), mapLink, node('p', 'receipt-footer', 'LOCAL RECORD ONLY / No money collected, vehicle dispatched, physical donation verified or university credit awarded. Preserve this copy for the classroom demonstration.'));
}

function loadConfirmation() {
  const container = byId('confirmation-receipt');
  const receipt = readStored(keys.receipt, null); const savedPledges = readStored(keys.pledges, []);
  if (!receipt || !receipt.pledge || !validDrive(receipt.drive) || !validPledge(receipt.pledge, [receipt.drive])) {
    container.append(node('h2', '', 'No dispatch receipt yet.'), node('p', '', 'Record a pledge in the operations ledger using this browser, then return here for the latest receipt.'));
    byId('print-confirmation').hidden = true; return;
  }
  if (!Array.isArray(savedPledges) || !savedPledges.some(function (pledge) { return pledge.id === receipt.pledge.id; })) {
    container.append(node('span', 'badge critical', 'REVOKED / NO ACTIVE RESERVATION'), node('h2', '', receipt.pledge.id + ' has been revoked.'), node('p', '', 'Its quantity and slot have been released. Record a new pledge to generate a valid demonstration receipt.'));
    byId('print-confirmation').hidden = true; return;
  }
  renderReceipt(container, receipt);
  byId('print-confirmation').addEventListener('click', function () { amanatTelemetry('receipt_printed', receipt.pledge.id); window.print(); });
  amanatTelemetry('confirmation_viewed', receipt.pledge.id);
}

function csvCell(value) {
  let text = String(value);
  // A leading apostrophe prevents spreadsheet formulas in donor-supplied titles.
  if (/^\s*[=+@-]/.test(text)) text = "'" + text;
  return '"' + text.replace(/"/g, '""') + '"';
}

function exportCsv() {
  const rows = [['Drive ID', 'Title', 'Category', 'Hub', 'Target units', 'Pledged units', 'Deficit units', 'Unit', 'Unit weight kg', 'Pledged weight kg', 'Completion percent', 'Urgency', 'Deadline', 'Quality rule', 'Coordinator']];
  drives.forEach(function (drive) { rows.push([drive.id, drive.title, drive.category, drive.hub, drive.targetUnits, drive.pledgedUnits, deficit(drive), drive.unitName, drive.unitWeightKg, (drive.pledgedUnits * drive.unitWeightKg).toFixed(2), completion(drive).toFixed(2), urgency(drive), drive.deadline, drive.qualityRule, drive.coordinator]); });
  const blob = new Blob(['\uFEFF' + rows.map(function (row) { return row.map(csvCell).join(','); }).join('\r\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob); const link = node('a'); link.href = url; link.download = 'amanat-drive-manifest-' + pktDate() + '.csv'; document.body.appendChild(link); link.click(); link.remove();
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  amanatTelemetry('csv_exported', drives.length + ' drives');
}

function resetDemo() {
  const freshDrives = seedDrives(); const freshPledges = seedPledges();
  if (!saveRecords(freshDrives, freshPledges, null)) return;
  drives = freshDrives; pledges = freshPledges; telemetry = []; activeHub = hubs[0].name;
  byId('pledge-form').reset(); byId('drive-form').reset(); byId('pledge-date').value = pktDate(1); fillDriveOptions();
  showErrors('pledge-errors', []); showErrors('drive-errors', []); byId('storage-warning').hidden = true;
  byId('drive-message').textContent = ''; byId('ledger-message').textContent = 'Demo dataset restored: eight drives and six bookings. Earlier receipts are cleared.';
  clearFilters(); updateAll(); amanatTelemetry('demo_reset');
}

function updateAll() { renderDrives(); renderPledges(); renderHubs(); updateImpact(); }

function initRegistry() {
  loadRecords();
  addOptions(byId('filter-category'), categories, 'All categories');
  addOptions(byId('filter-hub'), hubs.map(function (hub) { return hub.name; }), 'All four hubs');
  addOptions(byId('new-category'), categories, 'Select category');
  addOptions(byId('new-hub'), hubs.map(function (hub) { return hub.name; }), 'Select hub');
  addOptions(byId('pledge-slot'), timeWindows, 'Select a time window');
  fillDriveOptions(); byId('pledge-date').value = pktDate(1); byId('new-deadline').min = pktDate();
  byId('pledge-form').noValidate = true; byId('drive-form').noValidate = true;
  renderTeam(); updateAll();
  byId('ledger-date').textContent = pktDate() + ' / LIVE LOCAL EDITION';
  document.querySelectorAll('.data-table').forEach(function (table) {
    const headings = Array.from(table.querySelectorAll('th')).map(function (heading) { return heading.textContent; });
    table.querySelectorAll('tbody tr').forEach(function (row) {
      row.querySelectorAll('td').forEach(function (cell, index) { if (!cell.dataset.label) cell.dataset.label = headings[index] || ''; });
    });
  });
  ['filter-category', 'filter-hub', 'filter-urgency', 'sort-drives', 'hide-fulfilled'].forEach(function (id) {
    byId(id).addEventListener('change', function () {
      if (id === 'filter-hub' && byId(id).value) { activeHub = byId(id).value; renderHubs(); }
      scheduleLedger(); amanatTelemetry('filter_applied', id + ' / ' + (byId(id).type === 'checkbox' ? byId(id).checked : byId(id).value || 'all'));
    });
  });
  byId('search').addEventListener('input', function () { scheduleLedger(); amanatTelemetry('search_changed', 'query length ' + byId('search').value.length); });
  byId('clear-filters').addEventListener('click', clearFilters);
  byId('filter-toggle').addEventListener('click', function () {
    const open = byId('filter-toggle').getAttribute('aria-expanded') !== 'true';
    byId('filter-toggle').setAttribute('aria-expanded', String(open)); byId('filter-fields').classList.toggle('is-open', open); amanatTelemetry('filter_drawer_toggled', open ? 'open' : 'closed');
  });
  byId('pledge-drive').addEventListener('change', function () { byId('quality-attestation').checked = false; byId('override-deficit').checked = false; updateImpact(); renderDrives(); amanatTelemetry('drive_selected', this.value); });
  ['pledge-quantity', 'pledge-date', 'pledge-slot', 'override-deficit', 'donor-category'].forEach(function (id) {
    byId(id).addEventListener('input', updateImpact);
    byId(id).addEventListener('change', function () { amanatTelemetry('pledge_field_changed', id); });
  });
  byId('use-next-slot').addEventListener('click', function () { byId('pledge-slot').value = nextSlot; updateImpact(); amanatTelemetry('slot_suggestion_accepted'); });
  byId('pledge-form').addEventListener('submit', recordPledge); byId('drive-form').addEventListener('submit', createDrive);
  document.querySelectorAll('[data-export]').forEach(function (button) { button.addEventListener('click', exportCsv); });
  byId('close-receipt').addEventListener('click', function () { byId('receipt-modal').close(); });
  byId('print-receipt').addEventListener('click', function () { document.body.classList.add('printing-receipt'); amanatTelemetry('receipt_printed', 'modal'); window.print(); document.body.classList.remove('printing-receipt'); });
  byId('receipt-modal').addEventListener('close', function () { byId('submit-pledge').focus(); amanatTelemetry('receipt_closed'); });
  byId('cancel-action').addEventListener('click', function () { pendingAction = null; byId('confirm-modal').close(); });
  byId('confirm-action').addEventListener('click', function () { const action = pendingAction; pendingAction = null; byId('confirm-modal').close(); if (action) action(); });
  byId('confirm-modal').addEventListener('cancel', function () { pendingAction = null; });
  document.querySelectorAll('a[href^="#"]').forEach(function (link) { link.addEventListener('click', function () { amanatTelemetry('section_opened', link.getAttribute('href')); }); });
  document.querySelectorAll('details').forEach(function (detail) { detail.addEventListener('toggle', function () { if (detail.id !== 'telemetry-drawer') amanatTelemetry('disclosure_toggled', detail.id || 'operational protocol'); }); });
  window.addEventListener('storage', function (event) {
    if (event.key === keys.drives || event.key === keys.pledges) {
      clearTimeout(storageTimer);
      storageTimer = setTimeout(function () {
        loadRecords(); fillDriveOptions(); updateAll();
        byId('ledger-message').textContent = 'Ledger refreshed from another tab in this browser.';
      }, 50);
    }
  });
  amanatTelemetry('registry_opened');
}

const savedTelemetry = readStored(keys.telemetry, []);
telemetry = Array.isArray(savedTelemetry) ? savedTelemetry.filter(function (entry) { return entry && typeof entry.timestamp === 'string' && typeof entry.event === 'string' && typeof entry.detail === 'string'; }).slice(-100) : [];
if (document.body.dataset.page === 'registry') {
  initRegistry();
  const requestedHub = new URLSearchParams(location.search).get('hub');
  if (getHub(requestedHub)) { byId('filter-hub').value = requestedHub; renderDrives(); }
}
if (document.body.dataset.page === 'hubs') { loadRecords(); renderHubs(); }
if (document.body.dataset.page === 'about') renderTeam();
if (document.body.dataset.page === 'confirmation') loadConfirmation();

function revealLinkedSection() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;
  const disclosure = target.closest('.supporting-records');
  if (disclosure) disclosure.open = true;
}
window.addEventListener('hashchange', revealLinkedSection);
revealLinkedSection();
