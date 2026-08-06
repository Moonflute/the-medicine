import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const atlasPath = path.join(root, "source_notes", "10 Hubs", "03 \uC2E0\uACBD\uACC4 Hub", "_data", "nervous-system-atlas.json");
const atlas = JSON.parse(fs.readFileSync(atlasPath, "utf8"));
const item = (label, text) => ({ label, text });

for (const pathway of atlas.pathways) {
  const related = (pathway.nodes ?? []).map((id) => atlas.structures.find((structure) => structure.id === id)).filter(Boolean).map((structure) => ({ id: structure.id, label: structure.en, text: structure.summary }));
  pathway.note = {
    anatomy: [item("Origin", pathway.origin ?? pathway.route), item("Course", pathway.route), item("Decussation", pathway.decussation ?? "\uAD50\uCC28 \uC5EC\uBD80\uB294 route\uC640 source\uB97C \uD655\uC778\uD569\uB2C8\uB2E4."), item("Termination", pathway.termination ?? "termination \uC815\uBCF4\uB97C \uC5F0\uACB0\uD574 \uB450\uC5C8\uC2B5\uB2C8\uB2E4.")],
    function: [item("\uD575\uC2EC \uAE30\uB2A5", pathway.primaryFunction ?? pathway.route)],
    clinical: [item("\uBCD1\uBCC0 \uC591\uC0C1", pathway.lesionPattern ?? pathway.pattern), ...(pathway.laterality ? [item("\uCE21\uC131", pathway.laterality.description)] : []), item("\uD3C9\uAC00", "motor, sensory, coordination, cranial nerve sign\uC744 pathway\uC758 \uAD50\uCC28 \uC218\uC900\uACFC \uD568\uAED8 \uD574\uC11D\uD569\uB2C8\uB2E4.")],
    related,
    diseases: pathway.links,
    sourceIds: pathway.sourceIds ?? [],
  };
}

for (const reflex of atlas.reflexes) {
  const related = (reflex.route ?? []).map((id) => atlas.structures.find((structure) => structure.id === id)).filter(Boolean).map((structure) => ({ id: structure.id, label: structure.en, text: structure.summary }));
  reflex.note = {
    anatomy: [item("Reflex arc", reflex.arc), item("\uD68C\uB85C", (reflex.routeLabels ?? []).join(" \u2192 ") || reflex.arc)],
    function: (reflex.technique ?? []).map((text, index) => item(`\uAC80\uC0AC ${index + 1}`, text)),
    clinical: [item("\uC815\uC0C1 \uBC18\uC751", reflex.normal ?? "\uC88C\uC6B0 \uBC18\uC751\uC744 \uBE44\uAD50\uD569\uB2C8\uB2E4."), item("\uC774\uC0C1 \uC18C\uACAC", reflex.abnormal ?? "\uBCD1\uB825\uACFC \uB2E4\uB978 neurological sign\uC744 \uD568\uAED8 \uD574\uC11D\uD569\uB2C8\uB2E4."), item("\uC704\uCE58\uCD94\uC815", reflex.localization), ...(reflex.laterality ? [item("\uCE21\uC131", reflex.laterality.description)] : [])],
    related,
    diseases: [...new Set(related.flatMap((structure) => atlas.structures.find((candidate) => candidate.id === structure.id)?.links ?? []))],
    sourceIds: reflex.sourceIds ?? [],
  };
}

for (const topic of atlas.theoryTopics) {
  const related = atlas.structures.filter((structure) => structure.id === topic.itemId || structure.viewIds?.includes(topic.viewId)).slice(0, 12).map((structure) => ({ id: structure.id, label: structure.en, text: structure.summary }));
  topic.note = {
    anatomy: [item("\uD575\uC2EC \uAC1C\uB150", topic.summary), ...topic.keyPoints.map((text, index) => item(`\uD575\uC2EC \uD3EC\uC778\uD2B8 ${index + 1}`, text))],
    function: (topic.sections ?? []).map((section) => item(section.heading, section.body)),
    clinical: [item("\uC784\uC0C1 \uC801\uC6A9", "\uC99D\uC0C1\uC758 \uBD84\uD3EC, \uACBD\uACFC, neurological examination\uACFC \uC778\uC811 structure/pathway\uC758 \uC18C\uACAC\uC744 \uD1B5\uD569\uD574 \uD574\uC11D\uD569\uB2C8\uB2E4.")],
    related,
    diseases: [...new Set(related.flatMap((structure) => atlas.structures.find((candidate) => candidate.id === structure.id)?.links ?? []))],
    sourceIds: topic.sourceIds ?? [],
  };
}

fs.writeFileSync(atlasPath, `${JSON.stringify(atlas, null, 2)}\n`, "utf8");
console.log(`Enriched ${atlas.pathways.length} pathways, ${atlas.reflexes.length} reflexes, and ${atlas.theoryTopics.length} topics.`);
