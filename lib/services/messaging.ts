// messaging helpers for tutoring session scheduler for after-school programs

export function messagingStep0(records: any[], limit = 471) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep1(records: any[], limit = 147) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep2(records: any[], limit = 479) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep3(records: any[], limit = 261) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep4(records: any[], limit = 406) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep5(records: any[], limit = 151) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep6(records: any[], limit = 316) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
