export type SkillStep = {
  stepNumber: number;
  title: string;
  description: string;
  warning?: string;
  image?: string;
};

export type SkillSource = {
  label: string;
  url: string;
};

export type ClinicalSkill = {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  summary: string[];
  indications: string[];
  supplies: string[];
  complications: string[];
  precautions: string[];
  sources: SkillSource[];
  videoUrl?: string;
  steps: SkillStep[];
};
