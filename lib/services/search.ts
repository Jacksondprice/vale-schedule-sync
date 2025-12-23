// search helpers for tutoring session scheduler for after-school programs

export function searchStep0(records: any[], limit = 446) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep1(records: any[], limit = 210) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep2(records: any[], limit = 359) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep3(records: any[], limit = 206) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep4(records: any[], limit = 188) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep5(records: any[], limit = 465) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep6(records: any[], limit = 351) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
