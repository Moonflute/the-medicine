import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WORKSPACE_ROOT = path.resolve(SCRIPT_ROOT, "..", "..");
const sourcePath = path.join(WORKSPACE_ROOT, "source_notes", "02 Diseases", "16 신경과-신경외과", "_data", "nervous-system-atlas.json");
const outputPath = path.join(WORKSPACE_ROOT, "_webapp", "data", "nervous-system-atlas.json");

const atlas = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const required = ["views", "structures", "pathways", "dermatomes", "myotomes", "reflexes", "nexSteps", "sources"];
for (const key of required) {
  if (!Array.isArray(atlas[key]) || atlas[key].length === 0) throw new Error(`Neuro atlas is missing ${key}.`);
}
for (const collection of ["structures", "pathways", "dermatomes", "myotomes", "reflexes", "nexSteps"]) {
  const ids = atlas[collection].map((item) => item.id);
  if (new Set(ids).size !== ids.length || ids.some((id) => !id)) throw new Error(`Neuro atlas ${collection} contains duplicate or empty ids.`);
}
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(atlas, null, 2)}\n`, "utf8");
console.log(`Built nervous-system atlas: ${atlas.structures.length} structures, ${atlas.pathways.length} pathways.`);