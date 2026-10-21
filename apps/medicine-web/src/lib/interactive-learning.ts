import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { getInteractiveConcept } from "@/lib/interactive-concepts";
import { getAllDiseases, getDrugs, getLabImgNotes } from "@/lib/webdb";
import { parseInteractiveLearning, resolveLearningLink } from "@/lib/interactive-learning-parser";

export const getInteractiveLearning = cache((slug: string) => {
  if (!getInteractiveConcept(slug)) throw new Error("Unknown interactive concept");
  const source = path.resolve(process.cwd(), "../../source_notes/05 Physiology/Interactive", `${slug}.md`);
  const result = parseInteractiveLearning(fs.readFileSync(source, "utf8"), slug);
  const catalogs = {
    disease: getAllDiseases().filter(n=>n.documentRole!=="compatibility").map(n=>({...n,href:`/disease/${n.slug}`})),
    drug: getDrugs().map(n=>({...n,href:`/drugs/${n.slug}`})),
    lab: getLabImgNotes().map(n=>({...n,href:`/lab-img/${n.slug}`})),
  };
  result.topics.forEach(topic=>{topic.links=topic.links.map(link=>resolveLearningLink(link,catalogs));});
  result.sources=result.sources.map(link=>resolveLearningLink(link,catalogs));
  return result;
});
