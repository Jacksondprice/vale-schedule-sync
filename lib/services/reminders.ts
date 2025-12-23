// reminders helpers for tutoring session scheduler for after-school programs

export function remindersStep0(records: any[], limit = 444) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep1(records: any[], limit = 469) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep2(records: any[], limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep3(records: any[], limit = 31) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep4(records: any[], limit = 408) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep5(records: any[], limit = 459) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep6(records: any[], limit = 75) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep7(records: any[], limit = 286) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep8(records: any[], limit = 305) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
