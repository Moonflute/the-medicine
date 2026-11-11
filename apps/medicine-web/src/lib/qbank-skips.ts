/** A skip is navigation state, never an attempt or an answer. */
export type QbankSkipState = {
  ids: string[];
  reviewing: boolean;
  passComplete: boolean;
};

export function readQbankSkipState(value: unknown, questionIds: readonly string[], answeredIds: readonly string[] = []): QbankSkipState {
  const candidate = value && typeof value === "object" && !Array.isArray(value) ? value as Partial<QbankSkipState> : {};
  const requested = new Set(Array.isArray(candidate.ids) ? candidate.ids.filter((id): id is string => typeof id === "string") : []);
  const answered = new Set(answeredIds);
  return {
    ids: [...new Set(questionIds)].filter(id => requested.has(id) && !answered.has(id)),
    reviewing: candidate.reviewing === true,
    passComplete: candidate.passComplete === true,
  };
}

export function markQbankSkipped(state: QbankSkipState, id: string): QbankSkipState {
  return { ...state, ids: state.ids.includes(id) ? state.ids : [...state.ids, id], passComplete: false };
}

export function resolveQbankSkipped(state: QbankSkipState, id: string): QbankSkipState {
  return { ...state, ids: state.ids.filter(value => value !== id), passComplete: false };
}

/** Keep the original order, and stop at each pass end instead of silently wrapping. */
export function qbankPassIndex(questionIds: readonly string[], currentIndex: number, state: QbankSkipState, direction: 1 | -1 = 1): number {
  const skipped = new Set(state.ids);
  for (let index = currentIndex + direction; index >= 0 && index < questionIds.length; index += direction) {
    if (!state.reviewing || skipped.has(questionIds[index])) return index;
  }
  return -1;
}
