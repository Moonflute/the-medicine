import type { AntibioticSpectrumDataset } from "@/lib/types";

export type InfectionSetting = "community" | "mixed" | "healthcare-associated" | "hospital-acquired" | "ventilator-associated" | "procedure-associated";
export type InfectionPopulation = "adult" | "pediatric" | "neonate" | "pregnant" | "immunocompromised" | "neutropenic";
export type PathogenLikelihood = "common" | "important" | "risk-factor-dependent" | "uncommon" | "excluded";
export type RegimenRank = "preferred" | "alternative" | "conditional" | "salvage" | "not-recommended";
export type RegimenSelection = "one-of" | "all-of" | "optional";
export type InfectionReviewStatus = "draft" | "reviewed" | "verified" | "retired";
export type InfectionQuizType = "disease-to-organism" | "disease-to-antibiotic" | "disease-to-antibiotic-short-answer";
export type InfectionQuizQuestion = { id: string; type: InfectionQuizType; prompt: string; choiceIds: string[]; correctId: string; explanation: string; sourceIds: string[] };

export type InfectionPathogenReference = { id: string; label: string; aliases: string[]; spectrumOrganismId?: string; noteSlug?: string; noteTitle?: string };
export type InfectionPathogen = { organismId: string; likelihood: PathogenLikelihood; notes: string[] };
export type InfectionPathogenGroup = { context: string; organisms: InfectionPathogen[] };
export type InfectionRegimenComponent = { antibioticIds: string[]; selection: RegimenSelection };
export type InfectionRegimen = {
  id: string;
  context: string;
  rank: RegimenRank;
  components: InfectionRegimenComponent[];
  conditions: string[];
  avoidWhen: string[];
  notes: string[];
  sourceIds: string[];
};
export type InfectionTargetedTherapy = {
  organismId: string;
  susceptibilityCondition: string;
  rank: RegimenRank;
  antibioticIds: string[];
  notes: string[];
  sourceIds: string[];
};
export type InfectionPathway = {
  id: string;
  displayName: string;
  aliases: string[];
  diseaseSourceFile: string;
  diseaseSlug: string;
  diseaseTitle: string;
  infectionSite: string;
  setting: InfectionSetting;
  population: InfectionPopulation[];
  severity: string[];
  exclusions: string[];
  diagnosticNotes: string[];
  sourceControlNotes: string[];
  stewardshipNotes: string[];
  pathogenGroups: InfectionPathogenGroup[];
  empiricRegimens: InfectionRegimen[];
  targetedTherapies: InfectionTargetedTherapy[];
  sourceIds: string[];
  quizQuestions: InfectionQuizQuestion[];
  reviewStatus: InfectionReviewStatus;
  reviewedBy: string;
  reviewedAt: string;
};
export type InfectionPathwayDataset = {
  schemaVersion: number;
  reviewedAt: string;
  disclaimer: string;
  sources: Array<{ id: string; label: string; url: string; tier: "A" | "B" | "C"; year: string }>;
  pathogens: InfectionPathogenReference[];
  pathways: InfectionPathway[];
};

export type InfectionExplorerData = {
  pathways: InfectionPathwayDataset;
  spectrum: AntibioticSpectrumDataset;
};
