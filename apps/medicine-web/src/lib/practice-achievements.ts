import type { QbankSessionResult, QbankState } from "./qbank-store";
import { isSelection } from "./qbank-grading";
import { countsTowardPracticeStats, practiceMockExamKey, practiceVersionIds, PRACTICE_REVISION_SERIES, type PracticeIndex } from "./practice-selection";
import { practiceStatisticsScore } from "./practice-statistics";

function indexPracticeRounds(questions: PracticeIndex[]) {
  const slots = new Map<string, { id: string; round: string; counted: boolean }>();
  const rounds = new Map<string, Set<string>>();
  const excludedIds = new Set<string>();
  for (const question of questions) {
    if (question.bookSeries === PRACTICE_REVISION_SERIES) continue;
    const round = practiceMockExamKey(question);
    if (!round) continue;
    const counted = countsTowardPracticeStats(question);
    if (counted) {
      const ids = rounds.get(round) ?? new Set<string>();
      ids.add(question.id);
      rounds.set(round, ids);
    }
    for (const id of [...practiceVersionIds(question), ...(question.sourceIds ?? [])]) {
      slots.set(id, { id: question.id, round, counted });
      if (!counted) excludedIds.add(id);
    }
  }
  return { slots, rounds, excludedIds };
}

function submittedPracticeRound(session: QbankSessionResult, { slots, rounds }: ReturnType<typeof indexPracticeRounds>): string | undefined {
  if (!session.questionIds.length || !Number.isInteger(session.total) || session.total < 0
    || session.total > session.questionIds.length || !Number.isInteger(session.correct)
    || session.correct < 0 || session.correct > session.total) return undefined;
  if (session.mockExam ? session.mockExam.results.length !== session.questionIds.length : session.total !== session.questionIds.length) return undefined;
  const savedSlots = session.questionIds.map(id => slots.get(id));
  const round = savedSlots[0]?.round;
  if (!round || savedSlots.some(slot => !slot || slot.round !== round)) return undefined;
  const ids = new Set(savedSlots.map(slot => slot!.id));
  const counted = savedSlots.filter(slot => slot!.counted).length;
  if (!counted || ids.size !== session.questionIds.length || counted !== rounds.get(round)?.size) return undefined;
  if (session.mockExam) {
    const resultIds = new Set(session.mockExam.results.map(result => slots.get(result.questionId)?.id));
    if (resultIds.size !== ids.size || [...resultIds].some(id => !id || !ids.has(id))) return undefined;
  }
  return round;
}

/** A full scored round or lifetime coverage survives retries and progress resets. */
export function completedPracticeExamKeys(questions: PracticeIndex[], state: Pick<QbankState, "progress" | "sessions">): Set<string> {
  const index = indexPracticeRounds(questions);
  const { slots, rounds } = index;
  const answered = new Set<string>();
  const attemptsBySlot = new Map<string, number>();
  const automaticBlanksBySlot = new Map<string, number>();
  const addAnswer = (id: string) => {
    const slot = slots.get(id);
    if (slot?.counted) answered.add(slot.id);
  };
  for (const [id, progress] of Object.entries(state.progress)) {
    const slot = slots.get(id);
    if (!slot?.counted || progress.attempts <= 0) continue;
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
          if (slot?.counted) automaticBlanksBySlot.set(slot.id, (automaticBlanksBySlot.get(slot.id) ?? 0) + 1);
        }
      }
    }
    // A submitted whole exam is complete even if it contains unanswered/omitted
    // items. Drafts and partial sets are not full-round submissions.
    if (!Number.isFinite(Date.parse(session.completedAt))) continue;
    const round = submittedPracticeRound(session, index);
    if (round) for (const id of rounds.get(round) ?? []) answered.add(id);
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
  const index = indexPracticeRounds(questions);
  const scoredRound = (session: QbankSessionResult) => {
    const round = submittedPracticeRound(session, index);
    const score = round ? practiceStatisticsScore(session, index.excludedIds) : undefined;
    return round && score && score.total > 0 ? { round, ...score } : undefined;
  };
  const result = scoredRound(current);
  if (!result) return null;
  const previous = history.filter(session => session.id !== current.id && Date.parse(session.completedAt) <= Date.parse(current.completedAt))
    .flatMap(session => { const scored = scoredRound(session); return scored ? [scored] : []; });
  const beats = (score: { correct: number; total: number }) => result.correct * score.total > score.correct * result.total;
  return {
    score: result.correct / result.total * 100,
    passed: result.correct * 100 >= result.total * 40,
    roundRecord: result.correct > 0 && previous.filter(item => item.round === result.round).every(beats),
    overallRecord: result.correct > 0 && previous.every(beats),
  };
}
