import type { QbankSessionResult, QbankState } from "./qbank-store";
import { isSelection } from "./qbank-grading";
import { practiceMockExamKey, practiceVersionIds, PRACTICE_REVISION_SERIES, type PracticeIndex } from "./practice-selection";

/** A full-round submission or lifetime question coverage survives retries and progress resets. */
export function completedPracticeExamKeys(questions: PracticeIndex[], state: Pick<QbankState, "progress" | "sessions">): Set<string> {
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
  const answered = new Set<string>();
  const attemptsBySlot = new Map<string, number>();
  const automaticBlanksBySlot = new Map<string, number>();
  const addAnswer = (id: string) => {
    const slot = slots.get(id);
    if (slot) answered.add(slot.id);
  };
  for (const [id, progress] of Object.entries(state.progress)) {
    const slot = slots.get(id);
    if (!slot || progress.attempts <= 0) continue;
    // Legacy study submissions can retain an attempt without retaining a choice.
    attemptsBySlot.set(slot.id, (attemptsBySlot.get(slot.id) ?? 0) + progress.attempts);
    if (isSelection(progress.lastAnswer)) addAnswer(id);
  }
  for (const session of state.sessions) {
    // Immutable snapshots preserve earlier answers even if a later retry was left blank,
    // and include submitted questions that had no gradeable answer key.
    if (session.mockExam) {
      for (const result of session.mockExam.results) {
        if (isSelection(result.selected)) addAnswer(result.questionId);
        else {
          // A saved mock snapshot explicitly identifies automatically graded blanks.
          const slot = slots.get(result.questionId);
          if (slot) automaticBlanksBySlot.set(slot.id, (automaticBlanksBySlot.get(slot.id) ?? 0) + 1);
        }
      }
    }
    // A submitted whole exam is complete even if it contains unanswered/omitted
    // items. Drafts and partial sets are not full-round submissions.
    if (!Number.isFinite(Date.parse(session.completedAt)) || !Number.isInteger(session.total) || session.total < 0
      || session.total > session.questionIds.length || !Number.isInteger(session.correct)
      || session.correct < 0 || session.correct > session.total) continue;
    if (session.mockExam ? session.mockExam.results.length !== session.questionIds.length : session.total !== session.questionIds.length) continue;
    const savedSlots = session.questionIds.map(id => slots.get(id));
    const round = savedSlots[0]?.round;
    if (!round || savedSlots.some(slot => !slot || slot.round !== round)) continue;
    const ids = new Set(savedSlots.flatMap(slot => slot ? [slot.id] : []));
    if (ids.size !== session.questionIds.length || ids.size !== rounds.get(round)?.size) continue;
    if (session.mockExam) {
      const resultSlots = session.mockExam.results.map(result => slots.get(result.questionId));
      if (resultSlots.some(slot => !slot || slot.round !== round)) continue;
      const resultIds = new Set(resultSlots.flatMap(slot => slot ? [slot.id] : []));
      if (resultIds.size !== ids.size || [...resultIds].some(id => !ids.has(id))) continue;
    }
    for (const id of ids) answered.add(id);
  }
  for (const [id, attempts] of attemptsBySlot) {
    if (attempts > (automaticBlanksBySlot.get(id) ?? 0)) answered.add(id);
  }
  return new Set([...rounds].filter(([, ids]) => [...ids].every(id => answered.has(id))).map(([key]) => key));
}

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
