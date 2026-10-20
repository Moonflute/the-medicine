import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataRoot = path.resolve(appRoot, "../../_webapp/data");
const generated = path.join(appRoot, "public/generated");
const search = JSON.parse(fs.readFileSync(path.join(dataRoot, "search-index.json"), "utf8"));
const kinds = { disease: "disease", chiefComplaint: "cc", drug: "drug", labImg: "lab", skill: "skill", physiology: "page", pathology: "page", microorganism: "page", clinicalGroup: "page", resistancePhenotype: "page" };
const entries = search.filter(entry => kinds[entry.type]).map(entry => ({
  key: kinds[entry.type] + ":" + entry.href.replace(/\/$/, ""),
  kind: kinds[entry.type], title: entry.title.slice(0, 300), href: entry.href,
  aliases: [...new Set([...(entry.aliases ?? []), ...(entry.keywords ?? [])])].slice(0, 30),
}));
fs.mkdirSync(generated, { recursive: true });
const unique = [...new Map(entries.map(entry => [entry.key, entry])).values()];
const output = JSON.stringify(unique) + "\n";
fs.writeFileSync(path.join(generated, "study-flow-index.json"), output, "utf8");
console.log("Study Flow search: " + unique.length + " entries, " + Buffer.byteLength(output) + " bytes");
