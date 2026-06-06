export type SkillStep = {
  stepNumber: number;
  title: string;
  description: string;
  warning?: string;
  image?: string;
};

export type ClinicalSkill = {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  indications: string[];
  supplies: string[];
  complications: string[];
  precautions: string[];
  videoUrl?: string;
  steps: SkillStep[];
};
