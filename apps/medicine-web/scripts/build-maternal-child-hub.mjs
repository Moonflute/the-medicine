import fs from "node:fs";
import path from "node:path";

const APP_ROOT = process.env.INIT_CWD || process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const HUBS_ROOT = path.join(WORKSPACE_ROOT, "source_notes", "10 Hubs");
const MATERNAL_HUB = fs.readdirSync(HUBS_ROOT).find((name) => name.startsWith("02 "));
if (!MATERNAL_HUB) throw new Error("Maternal-child Hub folder is missing.");
const SOURCE_PATH = path.join(HUBS_ROOT, MATERNAL_HUB, "_data", "maternal-child-hub.json");
const OUTPUT_PATH = path.join(WORKSPACE_ROOT, "_webapp", "data", "maternal-child-hub.json");

if (!fs.existsSync(SOURCE_PATH)) throw new Error("Maternal-child Hub source is missing: " + SOURCE_PATH);
const data = JSON.parse(fs.readFileSync(SOURCE_PATH, "utf8"));
if (data.schemaVersion !== 1 || !Array.isArray(data.stages) || !Array.isArray(data.pediatricMilestones) || !Array.isArray(data.sources)) throw new Error("Maternal-child Hub source schema is invalid.");
if (!data.stages.length || !data.pediatricMilestones.length || !data.sources.length) throw new Error("Maternal-child Hub requires timeline, milestones, and sources.");
for (const stage of data.stages) { if (!stage.group || !stage.time || !stage.title || !Array.isArray(stage.development) || !Array.isArray(stage.assessments) || !Array.isArray(stage.clinicalFocus)) throw new Error("Maternal-child timeline stage is incomplete."); }
for (const milestone of data.pediatricMilestones) { if (!milestone.age || !milestone.title || !Array.isArray(milestone.gross) || !Array.isArray(milestone.fine) || !Array.isArray(milestone.language) || !Array.isArray(milestone.social) || !Array.isArray(milestone.visit)) throw new Error("Maternal-child milestone is incomplete."); }
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ ok: true, stages: data.stages.length, milestones: data.pediatricMilestones.length }, null, 2));
