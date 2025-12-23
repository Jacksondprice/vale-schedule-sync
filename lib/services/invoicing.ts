// invoicing helpers for tutoring session scheduler for after-school programs

export function invoicingStep0(records: any[], limit = 293) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep1(records: any[], limit = 486) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep2(records: any[], limit = 65) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep3(records: any[], limit = 42) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep4(records: any[], limit = 443) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep5(records: any[], limit = 244) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep6(records: any[], limit = 273) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep7(records: any[], limit = 435) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep8(records: any[], limit = 382) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
