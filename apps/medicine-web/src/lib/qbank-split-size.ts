/** Keep both panes usable, even when the available viewport is unusually short. */
export function splitBounds(length: number, stacked: boolean) {
  const min = length > 0 ? Math.min(0.5, Math.max(0.2, (stacked ? 160 : 320) / length)) : 0.5;
  return { min, max: 1 - min };
}

export function clampSplitRatio(ratio: number, length: number, stacked: boolean): number {
  const { min, max } = splitBounds(length, stacked);
  return Math.max(min, Math.min(max, Number.isFinite(ratio) ? ratio : 0.5));
}

export function pointerSplitRatio(position: number, start: number, length: number, stacked: boolean, grabOffset = 0): number {
  return clampSplitRatio(length > 0 ? (position - start - grabOffset) / length : 0.5, length, stacked);
}

export function keyboardSplitRatio(key: string, ratio: number, length: number, stacked: boolean, largeStep = false): number | null {
  const { min, max } = splitBounds(length, stacked);
  const step = largeStep ? 0.1 : 0.02;
  if (key === "Home") return min;
  if (key === "End") return max;
  if (key === "Enter") return 0.5;
  if (key === (stacked ? "ArrowUp" : "ArrowLeft")) return clampSplitRatio(ratio - step, length, stacked);
  if (key === (stacked ? "ArrowDown" : "ArrowRight")) return clampSplitRatio(ratio + step, length, stacked);
  return null;
}
