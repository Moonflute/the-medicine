import fs from "node:fs";
import path from "node:path";
import type { InfectionPathway, InfectionPathwayDataset } from "@/lib/infection-types";

const DATA_ROOT = path.resolve(process.cwd(), "..", "..", "_webapp", "data");
let pathwayCache: InfectionPathwayDataset | undefined;

export function getInfectionPathways(): InfectionPathwayDataset {
  if (pathwayCache) return pathwayCache;
  const filePath = path.join(DATA_ROOT, "infection-pathways.json");
  if (!fs.existsSync(filePath)) throw new Error(`Generated infection pathways are missing: ${filePath}. Run npm run sync:data.`);
  pathwayCache = JSON.parse(fs.readFileSync(filePath, "utf-8")) as InfectionPathwayDataset;
  return pathwayCache;
}

export function getVerifiedInfectionPathways(): InfectionPathway[] {
  return getInfectionPathways().pathways.filter((item) => item.reviewStatus === "verified");
}

export function getInfectionPathwaysForDisease(slug: string): InfectionPathway[] {
  return getVerifiedInfectionPathways().filter((item) => item.diseaseSlug === slug);
}

export function getInfectionPathwaysForOrganism(id: string): InfectionPathway[] {
  return getVerifiedInfectionPathways().filter((item) => item.pathogenGroups.some((group) => group.organisms.some((organism) => organism.organismId === id)));
}

export function getInfectionPathwaysForAntibiotic(id: string): InfectionPathway[] {
  return getVerifiedInfectionPathways().filter((item) =>
    item.empiricRegimens.some((regimen) => regimen.components.some((component) => component.antibioticIds.includes(id)))
    || item.targetedTherapies.some((therapy) => therapy.antibioticIds.includes(id)),
  );
}
