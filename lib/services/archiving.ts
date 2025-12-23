// archiving helpers for tutoring session scheduler for after-school programs

export function archivingStep0(records: any[], limit = 315) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep1(records: any[], limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep2(records: any[], limit = 84) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep3(records: any[], limit = 218) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep4(records: any[], limit = 163) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep5(records: any[], limit = 415) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep6(records: any[], limit = 58) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
