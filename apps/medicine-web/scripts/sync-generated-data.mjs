import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";

const APP_ROOT = process.env.INIT_CWD || process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const VAULT_ROOT = path.join(WORKSPACE_ROOT, "vault_medicine");
const OUTPUT_ROOT = path.join(WORKSPACE_ROOT, "_webapp");
const DATA_ROOT = path.join(OUTPUT_ROOT, "data");
const require = createRequire(import.meta.url);
const ts = require("typescript");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

function writeJson(fileName, value) {
  fs.writeFileSync(path.join(DATA_ROOT, fileName), `${JSON.stringify(value, null, 2)}\n`, "utf-8");
}

function toSlug(value) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };

  const [, yaml, body] = match;
  const frontmatter = {};
  let currentKey = "";

  for (const line of yaml.split(/\r?\n/)) {
    const keyMatch = line.match(/^([^:]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1].trim();
      frontmatter[currentKey] = keyMatch[2].trim();
      continue;
    }

    if (currentKey && (line.startsWith("- ") || line.startsWith("  - "))) {
      frontmatter[currentKey] = `${frontmatter[currentKey]}\n${line.trim()}`;
    }
  }

  return { frontmatter, body };
}

function readList(value) {
  if (!value) return [];
  return value
    .split(/\r?\n/)
    .map((line) => line.replace(/^- /, "").replace(/^["']|["']$/g, "").trim())
    .filter(Boolean)
    .map((line) => line.replace(/^\-\s*/, "").trim())
    .filter(Boolean)
    .filter((line) => line !== "[]");
}

function readScalar(value) {
  if (!value) return "";
  const normalized = value.replace(/^["']|["']$/g, "").trim();
  return normalized === "[]" ? "" : normalized;
}

function cleanupHeading(heading) {
  return heading.replace(/^\d+\.\s*/, "").trim();
}

function normalizeLine(line) {
  return line
    .trim()
    .replace(/^\-\s*/, "• ")
    .replace(/^\*\s*/, "• ")
    .replace(/^\t+/, "")
    .trim();
}

function normalizeSummaryLine(line) {
  const normalized = normalizeLine(line).replace(/^#{1,6}\s+/, "").trim();
  if (!normalized) return "";
  if (/^#{1,6}$/.test(normalized)) return "";
  return normalized;
}

function splitSections(body) {
  const matches = [...body.matchAll(/^##\s+(.+)$/gm)];
  if (matches.length === 0) {
    return [{ title: "본문", content: body.split(/\r?\n/).map(normalizeLine).filter(Boolean) }];
  }

  return matches.map((match, index) => {
    const start = match.index ?? 0;
    const end = index + 1 < matches.length ? matches[index + 1].index ?? body.length : body.length;
    const chunk = body.slice(start + match[0].length, end).trim();
    return {
      title: cleanupHeading(match[1]),
      content: chunk.split(/\r?\n/).map(normalizeLine).filter(Boolean),
    };
  });
}

function firstSectionText(sections, titleIncludes) {
  const section = sections.find((item) => item.title.toLowerCase().includes(titleIncludes.toLowerCase()));
  return section?.content ?? [];
}

function extractSummaryCallout(body) {
  const lines = body.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === "> [!summary]");
  if (start === -1) return [];

  const summary = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim().startsWith(">")) break;
    const cleaned = line.replace(/^>\s?/, "").trim();
    if (!cleaned) continue;
    summary.push(cleaned);
  }

  return summary;
}

function listMarkdownFiles(root, options = {}) {
  const {
    recursive = true,
    ignoreDirs = new Set(["_templates", "_webapp", ".obsidian", "images"]),
    ignoreFiles = new Set(["index.md", "Disease_index.md", "CC_index.md", "chief_complaints_master.md"]),
  } = options;

  const results = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (ignoreDirs.has(entry.name)) continue;
        if (recursive) walk(path.join(currentDir, entry.name));
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
      if (ignoreFiles.has(entry.name)) continue;
      results.push(path.join(currentDir, entry.name));
    }
  }

  walk(root);
  return results.sort((a, b) => a.localeCompare(b, "ko"));
}

function stripInlineFormatting(line) {
  return line
    .replace(/^\u2022\s*/, "")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\*\*/g, "")
    .trim();
}

function isPureLabelLine(line) {
  const plain = stripInlineFormatting(line);
  return /^[^:]+:\s*$/.test(plain);
}

function isEditorialLine(line) {
  const plain = stripInlineFormatting(line);
  return (
    /^last updated\b/i.test(plain) ||
    /^출처\b/.test(plain) ||
    /^\d{4}[-./]/.test(plain)
  );
}

function isLowValueOverviewLine(line) {
  const plain = stripInlineFormatting(line);
  return /^(정의|원인|기전|병태생리|역학|분류|유전|위험인자|risk factors?|출처|위치|기타)\b/i.test(plain);
}

function scoreSectionTitle(title) {
  const normalized = title.toLowerCase();
  if (/(임상 양상|clinical features|증상)/.test(normalized)) return 90;
  if (/(진단|diagnosis)/.test(normalized)) return 100;
  if (/(검사|lab|imaging)/.test(normalized)) return 95;
  if (/(치료|treatment|management)/.test(normalized)) return 92;
  if (/(예후|합병증|prognosis)/.test(normalized)) return 45;
  if (/(개요|overview)/.test(normalized)) return 40;
  return 20;
}

function scoreOverviewLine(line, sectionTitle) {
  const plain = stripInlineFormatting(line);
  if (!plain || isEditorialLine(plain) || isPureLabelLine(line)) return Number.NEGATIVE_INFINITY;

  let score = scoreSectionTitle(sectionTitle);

  if (/진단 기준|criteria|확진|score|분류기준|asas|wells|mcn?connell/i.test(plain)) score += 45;
  if (/1차 치료|초기|치료 목표|항응고|혈전용해|인슐린|수액|nsaids|acei|ace 억제제|arb|ccb|생물학적 제제|수술|heparin|doac|warfarin/i.test(plain)) score += 45;
  if (/ct|mri|x-ray|초음파|심초음파|도플러|혈액검사|abga|d-dimer|troponin|bnp|hla|esr|crp|혈당|pH|HCO3|케톤|anion gap/i.test(plain)) score += 35;
  if (/주호소|특징|전형|무증상|흉통|호흡곤란|객혈|실신|조조강직|복통|쿠스마울|저혈압|쇼크/i.test(plain)) score += 30;
  if (/표적 장기 손상|우심실 부전|뇌부종|응급|critical|fatal|치명/i.test(plain)) score += 15;

  if (isLowValueOverviewLine(line)) score -= 80;
  if (plain.length > 220) score -= 10;

  return score;
}

function buildStudyOverview(sections) {
  const preferredOrder = [
    /임상 양상|clinical features|증상/i,
    /진단|diagnosis/i,
    /검사|lab|imaging/i,
    /치료|treatment|management/i,
    /개요|overview/i,
  ];

  const buckets = preferredOrder.map((matcher) =>
    sections.filter((section) => matcher.test(section.title)),
  );

  const selected = [];
  const seen = new Set();

  for (const bucket of buckets) {
    for (const section of bucket) {
      const scored = section.content
        .map((line, index) => ({
          line,
          index,
          score: scoreOverviewLine(line, section.title),
        }))
        .filter((item) => Number.isFinite(item.score) && item.score > 55)
        .sort((a, b) => b.score - a.score || a.index - b.index);

      const takeLimit = /임상 양상|clinical features|증상/i.test(section.title) ? 2 : 1;
      let taken = 0;

      for (const item of scored) {
        const plain = stripInlineFormatting(item.line);
        if (seen.has(plain)) continue;
        selected.push(item.line);
        seen.add(plain);
        taken += 1;
        if (selected.length >= 5 || taken >= takeLimit) break;
      }

      if (selected.length >= 5) break;
    }
    if (selected.length >= 5) break;
  }

  if (selected.length >= 3) return selected;

  const fallback = [];
  for (const section of sections) {
    for (const line of section.content) {
      const plain = stripInlineFormatting(line);
      if (!plain || isEditorialLine(line) || isPureLabelLine(line) || isLowValueOverviewLine(line)) continue;
      if (seen.has(plain)) continue;
      fallback.push(line);
      seen.add(plain);
      if (selected.length + fallback.length >= 5) break;
    }
    if (selected.length + fallback.length >= 5) break;
  }

  return [...selected, ...fallback].slice(0, 5);
}

function extractDefinition(body) {
  const patterns = [
    /(?:-|\*)\s*\*\*정의\*\*:\s*(.+)/,
    /(?:•\s*)?\*\*정의\*\*:\s*(.+)/,
    /(?:-|\*)\s*정의:\s*(.+)/,
  ];

  for (const pattern of patterns) {
    const match = body.match(pattern);
    if (match?.[1]) return match[1].trim();
  }

  return "";
}

function buildDiseases() {
  const root = path.join(VAULT_ROOT, "02 Diseases");
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md", "Disease_index.md"]),
  });

  return files.map((filePath) => {
    const raw = readText(filePath);
    const { frontmatter, body } = splitFrontmatter(raw);
    const sections = splitSections(body);
    const specialty = path.relative(root, filePath).split(path.sep)[0];
    const fileName = path.basename(filePath, ".md");
    const stat = fs.statSync(filePath);

    return {
      id: path.relative(VAULT_ROOT, filePath).replaceAll("\\", "/"),
      slug: toSlug(path.relative(root, filePath).replaceAll("\\", "/")),
      title: fileName,
      sourcePath: path.relative(WORKSPACE_ROOT, filePath).replaceAll("\\", "/"),
      specialty,
      category: readScalar(frontmatter["계통"]) || readScalar(frontmatter["category"]) || specialty.replace(/^\d+\s*/, ""),
      classification: readList(frontmatter["분류"]),
      aliases: readList(frontmatter["aliases"]),
      chiefComplaints: readList(frontmatter["CC"]),
      definition: extractDefinition(body),
      overview: buildStudyOverview(sections),
      sections,
      updatedAt: stat.mtime.toISOString(),
    };
  });
}

function buildChiefComplaints() {
  const root = path.join(VAULT_ROOT, "01 Chief Complaint");
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md", "CC_index.md", "chief_complaints_master.md"]),
  });

  return files.map((filePath) => {
    const raw = readText(filePath);
    const { frontmatter, body } = splitFrontmatter(raw);
    const sections = splitSections(body);
    const title = path.basename(filePath, ".md");
    const stat = fs.statSync(filePath);

    return {
      id: readScalar(frontmatter["CC_Id"]) || title,
      slug: toSlug(title),
      title,
      aliases: readList(frontmatter["aliases"]),
      category: readScalar(frontmatter["계통"]) || readScalar(frontmatter["category"]),
      sourcePath: path.relative(WORKSPACE_ROOT, filePath).replaceAll("\\", "/"),
      concept: firstSectionText(sections, "concept"),
      differentials: firstSectionText(sections, "감별"),
      history: firstSectionText(sections, "hx"),
      exam: firstSectionText(sections, "pex"),
      plan: firstSectionText(sections, "plan"),
      sections,
      updatedAt: stat.mtime.toISOString(),
    };
  });
}

function buildGenericNotes(domainFolder, domainKey, options = {}) {
  const root = path.join(VAULT_ROOT, domainFolder);
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md", ...(options.ignoreFiles ?? [])]),
  });

  return files.map((filePath) => {
    const raw = readText(filePath);
    const { frontmatter, body } = splitFrontmatter(raw);
    const sections = splitSections(body);
    const rel = path.relative(root, filePath);
    const folders = rel.split(path.sep);
    const title = path.basename(filePath, ".md");
    const stat = fs.statSync(filePath);

    return {
      id: `${domainKey}:${rel.replaceAll("\\", "/")}`,
      slug: toSlug(`${domainKey}:${rel.replaceAll("\\", "/")}`),
      title,
      sourcePath: path.relative(WORKSPACE_ROOT, filePath).replaceAll("\\", "/"),
      relativePath: rel.replaceAll("\\", "/"),
      pathSegments: folders.slice(0, -1),
      folder: folders.length > 1 ? folders[0] : "",
      aliases: readList(frontmatter["aliases"]),
      category: readScalar(frontmatter["계통"]) || readScalar(frontmatter["category"]) || (folders.length > 1 ? folders[0] : domainFolder),
      summary: body
        .split(/\r?\n/)
        .map(normalizeSummaryLine)
        .filter(Boolean)
        .slice(0, 8),
      sections,
      updatedAt: stat.mtime.toISOString(),
    };
  });
}

function buildDrugs() {
  const root = path.join(VAULT_ROOT, "04 Pharmacology");
  const files = listMarkdownFiles(root, {
    ignoreDirs: new Set(["_templates", "_webapp", ".obsidian", "images", "_index"]),
    ignoreFiles: new Set(["index.md", "계통_규칙.md", "분류체계.md", "약리학.md", "일반원례_및_교과서색인.md", "참고_RangDale10_구조매핑.md"]),
  }).filter((filePath) => path.relative(root, filePath).split(path.sep).length > 1);

  return files.map((filePath) => {
    const raw = readText(filePath);
    const { frontmatter, body } = splitFrontmatter(raw);
    const sections = splitSections(body);
    const rel = path.relative(root, filePath);
    const folders = rel.split(path.sep);
    const title = path.basename(filePath, ".md");
    const stat = fs.statSync(filePath);

    const categoryPath = readScalar(frontmatter["계통"]) || readScalar(frontmatter["category"]);
    const topClass = readScalar(frontmatter["분류_대분류"]);
    const middleClass = readScalar(frontmatter["분류_중분류"]);
    const detailClass = readScalar(frontmatter["분류_세부"]);
    const brands = readList(frontmatter["상품명"]);
    const doses = readList(frontmatter["용량"]);
    const relatedDiseases = readList(frontmatter["related_diseases"]).filter((item) => item && item !== "-");
    const calloutSummary = extractSummaryCallout(body);
    const clinicalSection = firstSectionText(sections, "임상 사용");
    const fallbackSummary = clinicalSection.slice(0, 5);

    return {
      id: `drug:${rel.replaceAll("\\", "/")}`,
      slug: toSlug(`drug:${rel.replaceAll("\\", "/")}`),
      title,
      sourcePath: path.relative(WORKSPACE_ROOT, filePath).replaceAll("\\", "/"),
      folder: folders[0] ?? "",
      aliases: readList(frontmatter["aliases"]),
      category: categoryPath || folders[0] || "약물",
      summary: (calloutSummary.length > 0 ? calloutSummary : fallbackSummary).slice(0, 5),
      sections,
      updatedAt: stat.mtime.toISOString(),
      drugMeta: {
        type: readScalar(frontmatter["유형"]) || "drug",
        categoryPath,
        topClass,
        middleClass,
        detailClass,
        clinicalCore: /^true$/i.test(readScalar(frontmatter["임상_핵심"])),
        priority: readScalar(frontmatter["임상_우선순위"]),
        brands,
        doses,
        relatedDiseases,
        profile: readScalar(frontmatter["검증_프로파일"]),
      },
    };
  });
}

function buildSkillsPlaceholder() {
  const sourceFile = path.join(APP_ROOT, "src", "lib", "skills-data.ts");
  const sourceCode = readText(sourceFile);
  const transpiled = ts.transpileModule(sourceCode, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;

  const dummyIcon = () => null;
  const sandbox = {
    module: { exports: {} },
    exports: {},
    require: (specifier) => {
      if (specifier === "lucide-react") {
        return new Proxy(
          {},
          {
            get: () => dummyIcon,
          },
        );
      }

      throw new Error(`Unsupported import in skills source: ${specifier}`);
    },
  };
  sandbox.exports = sandbox.module.exports;

  vm.runInNewContext(transpiled, sandbox, { filename: sourceFile });

  const iconByCategoryId = {
    blood: "Droplet",
    tubes: "TestTube",
    monitoring: "ActivitySquare",
    advanced: "Stethoscope",
    cpr: "HeartPulse",
    line: "GitCommit",
    injection: "Pill",
    wound: "Bandage",
    ward: "ClipboardList",
  };

  const { MOCK_SKILLS = {}, SKILL_CATEGORIES = [] } = sandbox.module.exports;
  const items = Object.values(MOCK_SKILLS).map((skill) => ({
    ...skill,
    videoUrl: skill.videoUrl ?? null,
  }));

  const categories = SKILL_CATEGORIES.map((category) => ({
    id: category.id,
    name: category.name,
    iconName: iconByCategoryId[category.id] ?? "Stethoscope",
    items: category.items.map((item) => ({
      id: item.id,
      name: item.name,
    })),
  }));

  return {
    source: "legacy-manual",
    categories,
    items,
  };
}

function buildSearchIndex({ diseases, chiefComplaints, drugs, physiology, pathology, labImg }) {
  return [
    ...diseases.map((item) => ({
      type: "disease",
      slug: item.slug,
      title: item.title,
      category: item.specialty,
      aliases: [...item.aliases, ...item.chiefComplaints],
      href: `/disease/${item.slug}`,
    })),
    ...chiefComplaints.map((item) => ({
      type: "chiefComplaint",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      href: `/cc/category/${toSlug(item.category || "기타")}/${item.slug}`,
    })),
    ...drugs.map((item) => ({
      type: "drug",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      href: `/drugs/${item.slug}`,
    })),
    ...physiology.map((item) => ({
      type: "physiology",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      href: `/physiology/${item.slug}`,
    })),
    ...pathology.map((item) => ({
      type: "pathology",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      href: `/pathology/${item.slug}`,
    })),
    ...labImg.map((item) => ({
      type: "labImg",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      href: `/lab-img/${item.slug}`,
    })),
  ];
}

function main() {
  ensureDir(DATA_ROOT);

  const diseases = buildDiseases();
  const chiefComplaints = buildChiefComplaints();
  const drugs = buildDrugs();
  const physiology = buildGenericNotes("05 Physiology", "physiology");
  const pathology = buildGenericNotes("03 Pathology", "pathology");
  const labImg = buildGenericNotes("06 Lab & Img", "lab-img", {
    ignoreFiles: ["Lab & Img.md", "분류체계.md"],
  });
  const skills = buildSkillsPlaceholder();

  const specialties = [...new Map(diseases.map((item) => [item.specialty, item])).keys()].map((name) => ({
    name,
    slug: toSlug(name),
    count: diseases.filter((item) => item.specialty === name).length,
  }));

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceRoot: "vault_medicine",
    outputRoot: "_webapp/data",
    domains: {
      diseases: { count: diseases.length, source: "02 Diseases" },
      chiefComplaints: { count: chiefComplaints.length, source: "01 Chief Complaint" },
      drugs: { count: drugs.length, source: "04 Pharmacology" },
      physiology: { count: physiology.length, source: "05 Physiology" },
      pathology: { count: pathology.length, source: "03 Pathology" },
      labImg: { count: labImg.length, source: "06 Lab & Img" },
      skills: { count: skills.items.length, source: "legacy skills source" },
      specialties: { count: specialties.length, source: "derived from diseases" },
    },
  };

  writeJson("manifest.json", manifest);
  writeJson("diseases.json", diseases);
  writeJson("chief-complaints.json", chiefComplaints);
  writeJson("drugs.json", drugs);
  writeJson("physiology.json", physiology);
  writeJson("pathology.json", pathology);
  writeJson("lab-img.json", labImg);
  writeJson("skills.json", skills);
  writeJson("specialties.json", specialties);
  writeJson(
    "search-index.json",
    buildSearchIndex({ diseases, chiefComplaints, drugs, physiology, pathology, labImg }),
  );

  fs.writeFileSync(
    path.join(OUTPUT_ROOT, "README.md"),
    [
      "# _webapp",
      "",
      "Generated web-app data derived from `vault_medicine` and web-only manual sources.",
      "",
      "- Source of truth: markdown files in `vault_medicine/*`",
      "- Output: committed JSON for GitHub Pages build under `_webapp/data`",
      "- Direction: source markdown -> generated JSON only",
      "- Keep `vault_medicine` itself free of web-app artifacts",
      "- Do not hand-edit JSON here unless explicitly treating it as manual-only data",
      "",
      "Regenerate with:",
      "",
      "```bash",
      "cd apps/medicine-web",
      "npm run sync:data",
      "```",
      "",
    ].join("\n"),
    "utf-8",
  );

  console.log(
    JSON.stringify(
      {
        ok: true,
        generatedAt: manifest.generatedAt,
        counts: Object.fromEntries(Object.entries(manifest.domains).map(([key, value]) => [key, value.count])),
      },
      null,
      2,
    ),
  );
}

main();
