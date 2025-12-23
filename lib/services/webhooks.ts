// webhooks helpers for tutoring session scheduler for after-school programs

export function webhooksStep0(records: any[], limit = 253) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep1(records: any[], limit = 161) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep2(records: any[], limit = 267) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep3(records: any[], limit = 392) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep4(records: any[], limit = 421) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep5(records: any[], limit = 187) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep6(records: any[], limit = 314) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep7(records: any[], limit = 216) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep8(records: any[], limit = 17) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
