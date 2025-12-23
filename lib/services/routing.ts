// routing helpers for tutoring session scheduler for after-school programs

export function routingStep0(records: any[], limit = 197) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep1(records: any[], limit = 410) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep2(records: any[], limit = 141) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep3(records: any[], limit = 17) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep4(records: any[], limit = 498) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep5(records: any[], limit = 419) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep6(records: any[], limit = 324) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep7(records: any[], limit = 366) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep8(records: any[], limit = 374) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep9(records: any[], limit = 418) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep10(records: any[], limit = 209) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
