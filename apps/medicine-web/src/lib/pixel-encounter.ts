// Cosmetic only: identity is stable across sessions, answer order and grading.
export const PIXEL_ENEMIES = ["slime", "mushroom", "ghost", "golem", "skeleton", "bat", "goblin"] as const;
export type PixelEnemy = typeof PIXEL_ENEMIES[number];
export type PixelThreat = "calm" | "alert" | "danger";
export type PixelEnemyProgress = { attempts: number; correctAttempts: number; consecutiveCorrect: number };

export function pixelThreat(progress?: PixelEnemyProgress | null): PixelThreat {
  if (!progress) return "calm";
  const safe = (n: number) => Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
  const misses = Math.max(0, safe(progress.attempts) - safe(progress.correctAttempts));
  const streak = safe(progress.consecutiveCorrect);
  // A first miss stays friendly. Two recent successes clear the visual warning.
  if (misses < 2 || streak >= 2) return "calm";
  const level = (misses >= 4 ? 2 : 1) - Math.min(streak, 1);
  return level >= 2 ? "danger" : level === 1 ? "alert" : "calm";
}

function hashId(id: string) {
  let hash = 2166136261;
  for (let i = 0; i < id.length; i++) hash = Math.imul(hash ^ id.charCodeAt(i), 16777619);
  return hash >>> 0;
}

export function pixelEncounter(questionId: string, progress?: PixelEnemyProgress | null) {
  const identity = hashId(questionId);
  return {
    enemy: PIXEL_ENEMIES[identity % PIXEL_ENEMIES.length],
    color: (["mint", "sky", "lilac", "peach"] as const)[hashId(`color:${questionId}`) % 4],
    threat: pixelThreat(progress),
  };
}
