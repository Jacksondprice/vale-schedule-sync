// reports helpers for tutoring session scheduler for after-school programs

export function reportsStep0(records: any[], limit = 74) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep1(records: any[], limit = 32) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep2(records: any[], limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep3(records: any[], limit = 128) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep4(records: any[], limit = 278) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep5(records: any[], limit = 435) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep6(records: any[], limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep7(records: any[], limit = 373) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep8(records: any[], limit = 411) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
