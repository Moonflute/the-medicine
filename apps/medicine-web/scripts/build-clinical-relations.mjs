#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..", "..", "..");
const dataRoot = path.join(root, "_webapp", "data");

const readJson = (name) => JSON.parse(fs.readFileSync(path.join(dataRoot, name), "utf8"));
const diseases = readJson("diseases.json");
const ccs = readJson("chief-complaints.json");
const drugs = readJson("drugs.json");
const labs = readJson("lab-img.json");
const skillsManifest = readJson("skills.json");

const nodes = [
  ...diseases.map((item) => ({ type: "disease", id: item.id, title: item.title, aliases: item.aliases ?? [], href: `/disease/${item.slug}`, item })),
  ...ccs.map((item) => ({ type: "cc", id: item.id, title: item.title, aliases: item.aliases ?? [], href: `/cc/${item.slug}`, item })),
  ...drugs.map((item) => ({ type: "drug", id: item.id, title: item.title, aliases: item.aliases ?? [], href: `/drugs/${item.slug}`, item })),
  ...labs.map((item) => ({ type: "lab", id: item.id, title: item.title, aliases: item.aliases ?? [], href: `/lab-img/${item.slug}`, item })),
  ...(skillsManifest.items ?? []).map((item) => ({ type: "skill", id: `skill:${item.id}`, title: item.name, aliases: item.aliases ?? [], href: `/skills/${item.id}`, item })),
];

function normalize(value) {
  return String(value ?? "")
    .replace(/^\[\[|\]\]$/g, "")
    .replace(/\.md$/i, "")
    .replace(/\\/g, "/")
    .split("#")[0]
    .split("|")[0]
    .split("/")
    .at(-1)
    ?.replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase() ?? "";
}

const lookup = new Map();
for (const node of nodes) {
  for (const candidate of [node.title, ...node.aliases]) {
    const key = normalize(candidate);
    if (!key) continue;
    const bucket = lookup.get(key) ?? [];
    if (!bucket.some((item) => item.type === node.type && item.id === node.id)) bucket.push(node);
    lookup.set(key, bucket);
  }
}

function resolve(value, preferredTypes = []) {
  const key = normalize(value);
  const candidates = lookup.get(key) ?? [];
  if (candidates.length === 1) return candidates[0];
  for (const type of preferredTypes) {
    const typed = candidates.filter((item) => item.type === type);
    if (typed.length === 1) return typed[0];
  }

  if (key.length < 2) return null;
  for (const type of preferredTypes) {
    const partial = nodes.filter((node) => node.type === type && [node.title, ...node.aliases].some((candidate) => {
      const candidateKey = normalize(candidate);
      const isShortLatin = /^[a-z0-9]+$/.test(candidateKey) && candidateKey.length < 3;
      return candidateKey && !isShortLatin && (candidateKey.includes(key) || key.includes(candidateKey));
    }));
    const unique = [...new Map(partial.map((node) => [node.id, node])).values()];
    if (unique.length === 1) return unique[0];
  }
  return null;
}

function mentionedNodes(value, type) {
  const text = normalize(value);
  if (!text) return [];
  const matches = nodes.filter((node) => node.type === type && [node.title, ...node.aliases].some((candidate) => {
    const key = normalize(candidate);
    const isShortLatin = /^[a-z0-9]+$/.test(key) && key.length < 3;
    return key && !isShortLatin && text.includes(key);
  }));
  return [...new Map(matches.map((node) => [node.id, node])).values()];
}

function wikiTargets(lines) {
  const results = [];
  for (const line of lines ?? []) {
    for (const match of String(line).matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) results.push(match[1].trim());
  }
  return results;
}
function structuredTerms(value) {
  return String(value ?? "")
    .split(/[,;/쨌]|\s+\+\s+/)
    .map((item) => item.replace(/\([^)]*\)/g, "").trim())
    .filter(Boolean);
}

const relationMap = new Map();
const unresolved = [];

function relationKey(source, relation, target, provenance) {
  return [source.type, source.id, relation, target.type, target.id, provenance].join("|");
}

function add(source, relation, target, provenance, evidence = "") {
  if (!source || !target || source.type === target.type && source.id === target.id) return;
  const key = relationKey(source, relation, target, provenance);
  if (relationMap.has(key)) return;
  relationMap.set(key, {
    sourceType: source.type,
    sourceId: source.id,
    sourceTitle: source.title,
    sourceHref: source.href,
    relation,
    targetType: target.type,
    targetId: target.id,
    targetTitle: target.title,
    targetHref: target.href,
    provenance,
    evidence,
  });
}

function inverse(source, relation, target, evidence) {
  const map = {
    presents_as: "differential",
    differential: "presents_as",
    indicated_for: "treated_with",
    treated_with: "indicated_for",
    diagnosed_by: "interprets",
    interprets: "diagnosed_by",
    initial_test: "ordered_for",
    monitored_by: "monitors",
    related_skill: "used_for",
    child_of: "parent_of",
    parent_of: "child_of",
    canonical_reference: "canonical_for",
    canonical_for: "canonical_reference",
  };
  const inverseRelation = map[relation];
  if (inverseRelation) add(target, inverseRelation, source, "generated", evidence);
}

function addFamilyResolved(source, rawTarget, relation, provenance, evidence) {
  const key = normalize(rawTarget);
  const candidates = (lookup.get(key) ?? []).filter((item) => item.type === "disease" && item.id !== source.id);
  const sourcePopulation = source.item?.familyMeta?.population;
  const target = candidates.find((item) => sourcePopulation === "pediatric" && item.item?.familyMeta?.population !== "pediatric")
    ?? candidates.find((item) => item.item?.familyMeta?.population !== "pediatric")
    ?? candidates[0];
  if (!target) {
    unresolved.push({ sourceType: source.type, sourceId: source.id, sourceTitle: source.title, rawTarget, relation, provenance, evidence });
    return;
  }
  add(source, relation, target, provenance, evidence);
  inverse(source, relation, target, evidence);
}

function addResolved(source, rawTarget, relation, provenance, preferredTypes, evidence) {
  const target = resolve(rawTarget, preferredTypes);
  if (!target) {
    unresolved.push({ sourceType: source.type, sourceId: source.id, sourceTitle: source.title, rawTarget, relation, provenance, evidence });
    return;
  }
  add(source, relation, target, provenance, evidence);
  inverse(source, relation, target, evidence);
}

for (const node of nodes) {
  const item = node.item;

  if (node.type === "disease") {
    for (const cc of item.chiefComplaints ?? []) addResolved(node, cc, "presents_as", "frontmatter", ["cc"], "chiefComplaints");
    const familyMeta = item.familyMeta ?? {};
    if (familyMeta.parentDisease) {
      const relation = familyMeta.relationToParent === "subtype" ? "child_of" : "child_of";
      addFamilyResolved(node, familyMeta.parentDisease, relation, "frontmatter", "parent_disease");
    }
    if (familyMeta.canonicalDisease && familyMeta.canonicalDisease !== item.title) {
      addResolved(node, familyMeta.canonicalDisease, "canonical_reference", "frontmatter", ["disease"], "canonical_disease");
    }
  }

  if (node.type === "drug") {
    for (const disease of item.drugMeta?.relatedDiseases ?? []) addResolved(node, disease, "indicated_for", "frontmatter", ["disease"], "related_diseases");
    for (const monitoringLine of item.drugMeta?.monitoring ?? []) {
      if (!/(monitor|monitoring|ECG|EKG|CBC|PT|INR|aPTT)/i.test(monitoringLine)) continue;
      if (/(not recommended|not routinely)/i.test(monitoringLine)) continue;
      const exactTerms = structuredTerms(monitoringLine).map((term) => resolve(term, ["lab"])).filter(Boolean);
      const mentioned = mentionedNodes(monitoringLine, "lab");
      for (const target of [...new Map([...exactTerms, ...mentioned].map((item) => [item.id, item])).values()]) {
        add(node, "monitored_by", target, "section", "monitoring");
        inverse(node, "monitored_by", target, "monitoring");
      }
    }
  }

  if (node.type === "cc") {
    for (const recommendation of item.recommendations ?? []) {
      if (recommendation.disease) addResolved(node, recommendation.disease, "differential", "section", ["disease"], "recommendation disease");
      for (const term of structuredTerms(recommendation.tests)) {
        const target = resolve(term, ["lab", "skill"]);
        if (target && ["lab", "skill"].includes(target.type)) add(node, target.type === "lab" ? "initial_test" : "related_skill", target, "section", `recommendation: ${recommendation.disease}`);
      }
      for (const term of structuredTerms(recommendation.treatment)) {
        const target = resolve(term, ["drug", "skill"]);
        if (target && ["drug", "skill"].includes(target.type)) add(node, target.type === "drug" ? "immediate_treatment" : "related_skill", target, "section", `recommendation: ${recommendation.disease}`);
      }
    }
  }
  const sections = item.sections ?? [];
  for (const section of sections) {
    const heading = String(section.title ?? "").toLowerCase();
    for (const rawTarget of wikiTargets(section.content)) {
      const target = resolve(rawTarget);
      if (!target) {
        unresolved.push({ sourceType: node.type, sourceId: node.id, sourceTitle: node.title, rawTarget, relation: "wikilink", provenance: "wikilink", evidence: section.title });
        continue;
      }

      let relation = "related";
      if (node.type === "cc" && target.type === "disease") relation = "differential";
      else if (node.type === "cc" && target.type === "lab") relation = /test/.test(heading) ? "initial_test" : "related_test";
      else if (node.type === "cc" && target.type === "drug") relation = /移섎즺|treat/.test(heading) ? "immediate_treatment" : "related_drug";
      else if ((node.type === "cc" || node.type === "disease") && target.type === "skill") relation = "related_skill";
      else if (node.type === "disease" && target.type === "lab") relation = /diagnos|workup/.test(heading) ? "diagnosed_by" : "related_test";
      else if (node.type === "disease" && target.type === "drug") relation = /management|treat/.test(heading) ? "treated_with" : "related_drug";
      else if (node.type === "lab" && target.type === "disease") relation = "interprets";
      else if (node.type === "lab" && target.type === "lab") relation = /next/.test(heading) ? "next_test" : "related_test";
      else if (node.type === "drug" && target.type === "lab") relation = /monitor/.test(heading) ? "monitored_by" : "related_test";
      else if (node.type === "drug" && target.type === "disease") relation = "indicated_for";

      add(node, relation, target, "wikilink", section.title);
      inverse(node, relation, target, section.title);
    }
  }
}

// Add conservative second-hop suggestions for CC pages. These remain visibly generated.
const explicitRelations = [...relationMap.values()].filter((item) => item.provenance !== "generated");
const nodeByKey = new Map(nodes.map((node) => [`${node.type}|${node.id}`, node]));
for (const ccRelation of explicitRelations.filter((item) => item.sourceType === "cc" && item.targetType === "disease")) {
  const source = nodeByKey.get(`cc|${ccRelation.sourceId}`);
  if (!source) continue;
  const downstream = explicitRelations.filter((item) => item.sourceType === "disease" && item.sourceId === ccRelation.targetId && ["lab", "drug", "skill"].includes(item.targetType));
  for (const item of downstream) {
    const target = nodeByKey.get(`${item.targetType}|${item.targetId}`);
    if (!target) continue;
    const relation = item.targetType === "lab" ? "initial_test" : item.targetType === "drug" ? "immediate_treatment" : "related_skill";
    add(source, relation, target, "generated", `via ${ccRelation.targetTitle}`);
  }
}

const relations = [...relationMap.values()].sort((a, b) =>
  a.sourceType.localeCompare(b.sourceType) ||
  a.sourceId.localeCompare(b.sourceId) ||
  a.targetType.localeCompare(b.targetType) ||
  a.targetTitle.localeCompare(b.targetTitle, "ko")
);

const nodeKeys = new Set(nodes.map((node) => `${node.type}|${node.id}`));
const brokenTargets = relations.filter((relation) => !nodeKeys.has(`${relation.targetType}|${relation.targetId}`));

const output = {
  generatedAt: new Date().toISOString(),
  source: "generated from frontmatter and wikilinks",
  nodeCount: nodes.length,
  relationCount: relations.length,
  explicitRelationCount: relations.filter((item) => item.provenance !== "generated").length,
  generatedRelationCount: relations.filter((item) => item.provenance === "generated").length,
  brokenTargetCount: brokenTargets.length,
  unresolvedReferenceCount: unresolved.length,
  relations,
  unresolved,
};

fs.writeFileSync(path.join(dataRoot, "clinical-relations.json"), `${JSON.stringify(output, null, 2)}\n`, "utf8");
const manifestPath = path.join(dataRoot, "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
manifest.domains.clinicalRelations = {
  count: output.relationCount,
  explicit: output.explicitRelationCount,
  generated: output.generatedRelationCount,
  source: "derived from frontmatter, structured CC recommendations, and wikilinks",
};
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  ok: brokenTargets.length === 0,
  nodeCount: output.nodeCount,
  relationCount: output.relationCount,
  explicitRelationCount: output.explicitRelationCount,
  generatedRelationCount: output.generatedRelationCount,
  brokenTargetCount: output.brokenTargetCount,
  unresolvedReferenceCount: output.unresolvedReferenceCount,
}, null, 2));
if (brokenTargets.length) process.exitCode = 1;
