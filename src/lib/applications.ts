const KEY = "arivom.applications";

export interface AppliedRecord {
  id: string;
  appliedAt: string;
}

export function getApplied(): AppliedRecord[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AppliedRecord[]) : [];
  } catch {
    return [];
  }
}

export function isApplied(id: string) {
  return getApplied().some((r) => r.id === id);
}

export function toggleApplied(id: string): boolean {
  const list = getApplied();
  const exists = list.some((r) => r.id === id);
  const next = exists ? list.filter((r) => r.id !== id) : [...list, { id, appliedAt: new Date().toISOString() }];
  localStorage.setItem(KEY, JSON.stringify(next));
  return !exists;
}
