/** Shared by progress statistics and session selection. A reset never erases attempts. */
export function progressedInRound(progress: { attempts: number; lastAttemptedAt?: string } | undefined, resetAt: string | null): boolean {
  if (!progress || progress.attempts <= 0) return false;
  const boundary = Date.parse(resetAt ?? "");
  if (!Number.isFinite(boundary)) return true;
  const attemptedAt = Date.parse(progress.lastAttemptedAt ?? "");
  return Number.isFinite(attemptedAt) && attemptedAt >= boundary;
}
