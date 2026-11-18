import type { QbankSessionResult } from "./qbank-store";
import { practiceMockExamKey, practiceVersionIds, PRACTICE_REVISION_SERIES, type PracticeIndex } from "./practice-selection";

export type PracticeAchievement = {
  score: number;
  passed: boolean;
  roundRecord: boolean;
  overallRecord: boolean;
};

/** Compare complete rounds, not short retry sets or partially submitted study sessions. */
export function practiceAchievement(current: QbankSessionResult, history: QbankSessionResult[], questions: PracticeIndex[]): PracticeAchievement | null {
  const slots = new Map<string, { id: string; round: string }>();
  const rounds = new Map<string, Set<string>>();
  for (const question of questions) {
    if (question.bookSeries === PRACTICE_REVISION_SERIES) continue;
    const round = practiceMockExamKey(question);
    if (!round) continue;
    const ids = rounds.get(round) ?? new Set<string>();
    ids.add(question.id);
    rounds.set(round, ids);
    for (const id of [...practiceVersionIds(question), ...(question.sourceIds ?? [])]) slots.set(id, { id: question.id, round });
  }
  const roundOf = (session: QbankSessionResult) => {
    if (!session.questionIds.length || !Number.isInteger(session.total) || session.total <= 0
      || !Number.isInteger(session.correct) || session.correct < 0 || session.correct > session.total
      || session.total > session.questionIds.length) return undefined;
    // Legacy immediate-feedback results don't retain unanswered/omitted details.
    if (session.mockExam ? session.mockExam.results.length !== session.questionIds.length : session.total !== session.questionIds.length) return undefined;
    let round: string | undefined;
    const seen = new Set<string>();
    for (const id of session.questionIds) {
      const slot = slots.get(id);
      if (!slot || (round && round !== slot.round) || seen.has(slot.id)) return undefined;
      round = slot.round;
      seen.add(slot.id);
    }
    return round && seen.size === rounds.get(round)?.size ? round : undefined;
  };
  const round = roundOf(current);
  if (!round) return null;
  const previous = history.filter(session => session.id !== current.id && Date.parse(session.completedAt) <= Date.parse(current.completedAt))
    .map(session => ({ session, round: roundOf(session) })).filter(item => item.round);
  const beats = (session: QbankSessionResult) => current.correct * session.total > session.correct * current.total;
  return {
    score: current.correct / current.total * 100,
    passed: current.correct * 100 >= current.total * 40,
    roundRecord: current.correct > 0 && previous.filter(item => item.round === round).every(item => beats(item.session)),
    overallRecord: current.correct > 0 && previous.every(item => beats(item.session)),
  };
}
