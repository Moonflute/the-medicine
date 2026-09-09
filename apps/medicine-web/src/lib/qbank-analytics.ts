import type { QbankState } from "./qbank-store";

export type AnalyticsQuestion = { id: string; bank: string; department: string; topic: string; label: string; exam?: string };
export type AnalyticsGroup = { key: string; total: number; attempted: number; attempts: number; correct: number; wrong: number; retryIds: string[] };
export function buildQbankAnalytics(questions: AnalyticsQuestion[], state: QbankState, bank = "all", department = "all") {
  const catalog = [...new Map(questions.map(q => [q.id, q])).values()];
  const selected = catalog.filter(q => (bank === "all" || q.bank === bank) && (department === "all" || q.department === department));
  const ids = new Set(selected.map(q => q.id));
  const groups = new Map<string, AnalyticsGroup>();
  const topics = new Map<string, AnalyticsGroup>();
  const exams = new Map<string, AnalyticsGroup>();
  let attempts = 0, correct = 0, attempted = 0, recovered = 0;
  const wrong: Array<AnalyticsQuestion & { mistakes: number; attempts: number; last: string }> = [];
  for (const q of selected) {
    const p = state.progress[q.id];
    const count = Math.max(0, Number(p?.attempts) || 0);
    const right = Math.min(count, Math.max(0, Number(p?.correctAttempts) || 0));
    const latestWrong = count > 0 && p?.lastCorrect === false;
    const mistakes = count - right;
    attempts += count; correct += right;
    if (count > 0) attempted++;
    if (mistakes > 0 && p?.lastCorrect === true) recovered++;
    if (latestWrong) wrong.push({ ...q, mistakes, attempts: count, last: p?.lastAttemptedAt ?? "" });
    for (const [map, key] of [[groups, q.department], [topics, `${q.department} · ${q.topic}`], [exams, q.exam]] as const) {
      if (!key) continue;
      const g = map.get(key) ?? { key, total: 0, attempted: 0, attempts: 0, correct: 0, wrong: 0, retryIds: [] };
      g.total++; g.attempts += count; g.correct += right;
      if (count > 0) g.attempted++;
      if (latestWrong) { g.wrong++; g.retryIds.push(q.id); }
      map.set(key, g);
    }
  }
  wrong.sort((a, b) => b.mistakes - a.mistakes || a.last.localeCompare(b.last) || a.id.localeCompare(b.id));
  const weak = [...topics.values()].filter(g => g.wrong > 0).sort((a, b) => Number(b.attempted >= 5) - Number(a.attempted >= 5) || b.wrong - a.wrong || a.correct / a.attempts - b.correct / b.attempts);
  // Mixed sessions cannot be apportioned without per-answer historical events.
  const sessions = state.sessions.filter(s => s.total > 0 && s.questionIds.length > 0 && s.questionIds.every(id => ids.has(id))).sort((a, b) => b.completedAt.localeCompare(a.completedAt)).slice(0, 10);
  const recent = sessions.slice(0, 5), previous = sessions.slice(5, 10);
  const rate = (items: typeof sessions) => items.length ? Math.round(100 * items.reduce((sum, s) => sum + s.correct, 0) / items.reduce((sum, s) => sum + s.total, 0)) : null;
  const currentRate = rate(recent), previousRate = rate(previous);
  return { selected, attempts, correct, attempted, recovered, wrong, repeated: wrong.filter(q => q.mistakes >= 2), groups: [...groups.values()].sort((a, b) => a.key.localeCompare(b.key, "ko")), weak, exams: [...exams.values()].sort((a, b) => b.key.localeCompare(a.key)), sessions, currentRate, change: recent.length === 5 && previous.length === 5 && currentRate !== null && previousRate !== null ? currentRate - previousRate : null };
}

export function readRetryIds(value: string | null): string[] {
  try { const ids: unknown = JSON.parse(value ?? "null"); return Array.isArray(ids) ? [...new Set(ids.filter((id): id is string => typeof id === "string" && id.length > 0 && id.length < 2000))].slice(0, 100) : []; } catch { return []; }
}
