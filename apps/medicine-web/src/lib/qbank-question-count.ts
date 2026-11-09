export const QBANK_DEFAULT_COUNT = 10;

export function readQbankQuestionCount(raw: string | null | undefined): number | undefined {
  if (!raw || !/^\d+$/.test(raw)) return undefined;
  const count = Number(raw);
  return Number.isSafeInteger(count) && count > 0 ? count : undefined;
}

export function resolveQbankSessionCount(raw: string | null | undefined, available: number): number {
  return raw === "all" ? available : Math.min(available, readQbankQuestionCount(raw) ?? QBANK_DEFAULT_COUNT);
}
