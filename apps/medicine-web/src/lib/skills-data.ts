import type { ClinicalSkill } from "@/lib/types";

export const MOCK_SKILLS: Record<string, ClinicalSkill> = {};

export const SKILL_CATEGORIES: Array<{
  id: string;
  name: string;
  icon?: unknown;
  items: Array<{ id: string; name: string }>;
}> = [];
