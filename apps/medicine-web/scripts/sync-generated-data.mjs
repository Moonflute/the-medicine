import fs from "node:fs";
import path from "node:path";

const APP_ROOT = process.env.INIT_CWD || process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const SOURCE_NOTES_ROOT = path.join(WORKSPACE_ROOT, "source_notes");
const OUTPUT_ROOT = path.join(WORKSPACE_ROOT, "_webapp");
const DATA_ROOT = path.join(OUTPUT_ROOT, "data");
const PUBLIC_QBANK_ROOT = path.join(APP_ROOT, "public", "generated", "qbank");
const QBANK_DATA_ROOT = path.join(DATA_ROOT, "qbank");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

function writeJson(fileName, value) {
  fs.writeFileSync(path.join(DATA_ROOT, fileName), `${JSON.stringify(value, null, 2)}\n`, "utf-8");
}

function writePublicQbankJson(fileName, value) {
  ensureDir(PUBLIC_QBANK_ROOT);
  fs.writeFileSync(path.join(PUBLIC_QBANK_ROOT, fileName), `${JSON.stringify(value)}\n`, "utf-8");
}

function writeQbankDataJson(fileName, value) {
  ensureDir(QBANK_DATA_ROOT);
  fs.writeFileSync(path.join(QBANK_DATA_ROOT, fileName), JSON.stringify(value) + "\n", "utf-8");
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
    if (currentKey && (line.startsWith("- ") || line.startsWith("  - "))) {
      frontmatter[currentKey] = `${frontmatter[currentKey]}\n${line.trim()}`;
      continue;
    }

    const keyMatch = line.match(/^([^:]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1].trim();
      frontmatter[currentKey] = keyMatch[2].trim();
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

function extractNestedSection(body, titlePattern) {
  const result = [];
  let active = false;
  let targetLevel = 0;

  for (const rawLine of body.split(/\r?\n/)) {
    const heading = rawLine.match(/^(#{2,6})\s+(.+)$/);

    if (heading) {
      const level = heading[1].length;
      const title = cleanupHeading(heading[2]);

      if (active && level <= targetLevel) break;
      if (!active && titlePattern.test(title)) {
        active = true;
        targetLevel = level;
      }
      continue;
    }

    if (active) {
      const normalized = normalizeLine(rawLine);
      if (normalized) result.push(normalized);
    }
  }

  return result;
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

function extractLeadingSummaryBlock(body) {
  const lines = body.split(/\r?\n/);
  const summary = [];
  let started = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!started) {
      if (!line || /^#\s+/.test(line)) {
        continue;
      }
      started = true;
    }

    if (!line) {
      break;
    }

    if (/^##\s+/.test(line)) {
      break;
    }

    const normalizedParts = line
      .split(/\s+>\s+/)
      .map((part, index) => (index === 0 ? part.replace(/^>\s?/, "") : part).trim())
      .filter(Boolean);

    summary.push(...normalizedParts);
  }

  return summary;
}

function listMarkdownFiles(root, options = {}) {
  const {
    recursive = true,
    ignoreDirs = new Set(["_templates", "_webapp", ".obsidian", "images"]),
    ignoreFiles = new Set(["index.md", "Disease_index.md", "CC_index.md", "chief_complaints_master.md", "_\uBAA9\uCC28.md"]),
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
  const root = path.join(SOURCE_NOTES_ROOT, "02 Diseases");
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md", "Disease_index.md", "_\uBAA9\uCC28.md", "_\uBAA9\uCC28.md"]),
  });

  return files.map((filePath) => {
    const raw = readText(filePath);
    const { frontmatter, body } = splitFrontmatter(raw);
    const sections = splitSections(body);
    const specialty = path.relative(root, filePath).split(path.sep)[0];
    const fileName = path.basename(filePath, ".md");
    const stat = fs.statSync(filePath);
    const contentUpdatedAt = readScalar(frontmatter["content_updated_at"]);
    const guidelineYear = readScalar(frontmatter["guideline_year"]);
    const sources = parseSkillSources(frontmatter.sources);
    const family = readScalar(frontmatter["disease_family"]);
    const parentDisease = readScalar(frontmatter["parent_disease"]);
    const relationToParent = readScalar(frontmatter["relation_to_parent"]);
    const population = readScalar(frontmatter["population"]);
    const canonicalDisease = readScalar(frontmatter["canonical_disease"]);
    const hasContentMeta = Boolean(contentUpdatedAt || guidelineYear || sources.length);
    const hasFamilyMeta = Boolean(family || parentDisease || relationToParent || population || canonicalDisease);

    return {
      id: path.relative(SOURCE_NOTES_ROOT, filePath).replaceAll("\\", "/"),
      slug: toSlug(path.relative(root, filePath).replaceAll("\\", "/")),
      title: fileName,
      sourcePath: path.relative(WORKSPACE_ROOT, filePath).replaceAll("\\", "/"),
      specialty,
      category: readScalar(frontmatter["계통"]) || readScalar(frontmatter["category"]) || specialty.replace(/^\d+\s*/, ""),
      classification: readList(frontmatter["분류"]),
      relatedSpecialties: readList(frontmatter["\uAD00\uB828\uBD84\uACFC"]),
      emergencyClassification: readList(frontmatter["\uC751\uAE09\uC758\uD559_\uBD84\uB958"]),
      oncologyClassification: readList(frontmatter["\uC885\uC591_\uBD84\uB958"]),
      aliases: readList(frontmatter["aliases"]),
      chiefComplaints: readList(frontmatter["CC"]),
      definition: extractDefinition(body),
      overview: buildStudyOverview(sections),
      sections,
      updatedAt: stat.mtime.toISOString(),
      clinicalPriority: readScalar(frontmatter["clinical_priority"]) || readScalar(frontmatter["임상_우선순위"]),
      ...(hasContentMeta ? {
        contentMeta: {
          contentUpdatedAt,
          guidelineYear,
          sources,
        },
      } : {}),
      ...(hasFamilyMeta ? {
        familyMeta: {
          family,
          parentDisease,
          relationToParent,
          population,
          canonicalDisease,
        },
      } : {}),
    };
  });
}

function parseSpecialtyTocMarkdown(raw) {
  const items = [];
  const stack = [];

  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^(\s*)-\s+(.+)$/);
    if (!match) continue;

    const depth = Math.floor(match[1].replace(/\t/g, "  ").length / 2);
    const title = match[2]
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .trim();
    if (!title) continue;

    stack[depth] = title;
    stack.length = depth + 1;
    items.push({ title, path: stack.slice() });
  }

  return items;
}

function buildDomainToc(domainFolder) {
  const tocPath = path.join(SOURCE_NOTES_ROOT, domainFolder, "_\uBAA9\uCC28.md");
  return {
    domain: domainFolder,
    sourcePath: fs.existsSync(tocPath) ? path.relative(WORKSPACE_ROOT, tocPath).replaceAll("\\", "/") : "",
    items: fs.existsSync(tocPath) ? parseSpecialtyTocMarkdown(readText(tocPath)) : [],
  };
}

function buildSpecialtyToc() {
  const root = path.join(SOURCE_NOTES_ROOT, "02 Diseases");
  if (!fs.existsSync(root)) return [];

  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => {
      const specialty = entry.name;
      const tocPath = path.join(root, specialty, "_\uBAA9\uCC28.md");
      return {
        specialty,
        specialtySlug: toSlug(specialty),
        sourcePath: fs.existsSync(tocPath) ? path.relative(WORKSPACE_ROOT, tocPath).replaceAll("\\", "/") : "",
        items: fs.existsSync(tocPath) ? parseSpecialtyTocMarkdown(readText(tocPath)) : [],
      };
    })
    .filter((toc) => toc.items.length > 0);
}

function normalizeRecommendationText(value) {
  return value
    .replace(/^[:\s]+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitOutsideParentheses(value, separator) {
  const parts = [];
  let current = "";
  let depth = 0;

  for (const char of value) {
    if (char === "(") depth += 1;
    if (char === ")" && depth > 0) depth -= 1;

    if (char === separator && depth === 0) {
      parts.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  parts.push(current);
  return parts;
}

function normalizeSymptomLabel(value) {
  return normalizeRecommendationText(value)
    .replace(/^[-*=]\s*/, "")
    .replace(/\s*\([+-]\)\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitRecommendationSymptoms(value) {
  return splitOutsideParentheses(value, "+")
    .map(normalizeSymptomLabel)
    .filter(Boolean)
    .filter((item) => !/^(검사|치료|교육)\s*[:：]/.test(item));
}

function historySlotKey(label) {
  const normalized = label.trim().toLowerCase();

  if (/^o\s*\/\s*l\s*\/\s*d\s*\/\s*co\s*\/\s*ex/.test(normalized)) return "onset";
  if (/^l\s*\/\s*d\s*\/\s*co\s*\/\s*ex/.test(normalized)) return "location";
  if (/^d\s*\/\s*co\s*\/\s*ex/.test(normalized)) return "duration";
  if (/^o\b|onset/.test(normalized)) return "onset";
  if (/^l\b|location/.test(normalized)) return "location";
  if (/^d\b|duration/.test(normalized)) return "duration";
  if (/^co\b|course/.test(normalized)) return "course";
  if (/^ex\b|experienced/.test(normalized)) return "experienced";
  if (/^c\b|character/.test(normalized)) return "character";
  if (/^a\b|associated/.test(normalized)) return "associated";
  if (/^f\b|factor/.test(normalized)) return "factor";
  if (/^e\b|event/.test(normalized)) return "event";
  if (/^ppi\b/.test(normalized)) return "ppi";
  if (/외과력|surgical/.test(normalized)) return "surgical";
  if (/과거력|past/.test(normalized)) return "past";
  if (/약물력|medication/.test(normalized)) return "medication";
  if (/사회력|social/.test(normalized)) return "social";
  if (/가족력|family/.test(normalized)) return "family";
  if (/여성력|female/.test(normalized)) return "female";
  if (/background/.test(normalized)) return "surgical";
  if (/cc-specific|assessment|opening/.test(normalized)) return "custom";

  return normalized.replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-|-$/g, "") || "custom";
}

function parseHistoryChecklist(body) {
  const header = body.match(/^##\s+Hx\s*\r?\n/m);
  if (!header || header.index === undefined) return [];

  const start = header.index + header[0].length;
  const remainder = body.slice(start);
  const nextSection = remainder.search(/^##\s+/m);
  const hxBody = nextSection === -1 ? remainder : remainder.slice(0, nextSection);

  const slots = [];
  let currentSlot = null;
  let currentGroup = "CC-specific";

  for (const rawLine of hxBody.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const slotHeading = line.match(/^###\s+(.+)$/);
    if (slotHeading) {
      currentSlot = {
        key: historySlotKey(slotHeading[1]),
        label: slotHeading[1].trim(),
        groups: [],
      };
      slots.push(currentSlot);
      currentGroup = "CC-specific";
      continue;
    }

    const groupHeading = line.match(/^####\s+(.+)$/);
    if (groupHeading) {
      currentGroup = groupHeading[1].trim();
      continue;
    }

    if (!currentSlot) continue;

    const item = line.replace(/^[-*]\s+/, "").trim();
    if (!item) continue;

    let group = currentSlot.groups.find((entry) => entry.label === currentGroup);
    if (!group) {
      group = { label: currentGroup, items: [] };
      currentSlot.groups.push(group);
    }

    group.items.push(item);
  }

  return slots.filter((slot) => slot.groups.some((group) => group.items.length > 0) || slot.label);
}
const PHYSICAL_EXAM_LABELS = new Map([
  ["vitals", "V/S"],
  ["eyes", "눈"],
  ["mouth", "구강"],
  ["neck", "목"],
  ["chest", "흉부"],
  ["abdomen", "복부"],
  ["extremities", "사지"],
  ["skin", "피부"],
  ["neurologic", "신경학적 검사"],
  ["special", "특수 진찰"],
]);

function physicalExamSlotKey(label) {
  const normalized = label.trim().toLowerCase();

  if (/^v\/s\b|vital signs/.test(normalized)) return "vitals";
  if (/eyes?|\uB208|\uB3D9\uACF5|\uC548\uC9C4/.test(normalized)) return "eyes";
  if (/mouth|\uC785|\uAD6C\uAC15|\uC778\uB450/.test(normalized)) return "mouth";
  if (/neck|\uBAA9|\uACBD\uC815\uB9E5|\uAC11\uC0C1\uC0D8|\uAC11\uC0C1\uC120|\uB9BC\uD504\uC808/.test(normalized)) return "neck";
  if (/chest|\uD754\uBD80|\uC2EC\uC74C|\uD638\uD761\uC74C/.test(normalized)) return "chest";
  if (/abdomen|\uBCF5\uBD80|\uC2E0\uB3D9\uB9E5|\uBC29\uAD11/.test(normalized)) return "abdomen";
  if (/\uC2DC\uD589\uD558\uC9C0|\uC2E0\uCCB4\uC9C4\uCC30\s*\uC5C6\uC74C|\uC0DD\uB7B5|\uD558\uC9C0\s*\uC54A\uC74C/.test(normalized)) return "special";
  if (/extremit|limb|\uC0AC\uC9C0|\uD314\uB2E4\uB9AC|\uC0C1\uC9C0|\uD558\uC9C0|\uC190|\uB9E5\uBC15/.test(normalized)) return "extremities";
  if (/skin|\uD53C\uBD80|\uBC1C\uC9C4|\uACE4\uBD09\uC9C0|\uCCAD\uC0C9\uC99D|\uBD80\uC885/.test(normalized)) return "skin";
  if (/neurolog|\uC2E0\uACBD|\uB1CC|\uC18C\uB1CC|\uC218\uB9C9|dtr|mmse|spurling|lhermitte|slrt|patrick|schober|dix-hallpike|tinel|phalen/.test(normalized)) return "neurologic";
  if (/special|\uD2B9\uC218|dre|cvat|\uACE8\uBC18|\uC720\uBC29|homan|\uC678\uC131\uAE30|\uC2E0\uCCB4\uC9C4\uCC30/.test(normalized)) return "special";

  return normalized.replace(/[^a-z0-9\uAC00-\uD7A3]+/g, "-").replace(/^-|-$/g, "") || "special";
}

function parsePhysicalExamChecklist(body) {
  const header = body.match(/^##\s+PEx\s*\r?\n/m);
  if (!header || header.index === undefined) return [];

  const start = header.index + header[0].length;
  const remainder = body.slice(start);
  const nextSection = remainder.search(/^##\s+/m);
  const pexBody = nextSection === -1 ? remainder : remainder.slice(0, nextSection);

  const slots = [];
  let currentSlot = null;
  let currentGroup = "CC-specific";

  for (const rawLine of pexBody.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const slotHeading = line.match(/^###\s+(.+)$/);
    if (slotHeading) {
      const key = physicalExamSlotKey(slotHeading[1]);
      currentSlot = { key, label: PHYSICAL_EXAM_LABELS.get(key) ?? slotHeading[1].trim(), groups: [] };
      slots.push(currentSlot);
      currentGroup = "CC-specific";
      continue;
    }

    const groupHeading = line.match(/^####\s+(.+)$/);
    if (groupHeading) {
      currentGroup = groupHeading[1].trim();
      continue;
    }

    const item = line.replace(/^[-*]\s+/, "").trim();
    if (!item) continue;

    if (!currentSlot) {
      const key = physicalExamSlotKey(item);
      currentSlot = { key, label: PHYSICAL_EXAM_LABELS.get(key) ?? item, groups: [] };
      slots.push(currentSlot);
    }

    let group = currentSlot.groups.find((entry) => entry.label === currentGroup);
    if (!group) {
      group = { label: currentGroup, items: [] };
      currentSlot.groups.push(group);
    }
    group.items.push(item);
  }

  return slots.filter((slot) => slot.groups.some((group) => group.items.length > 0) || slot.label);
}

function parseChiefComplaintRecommendations(sections) {
  const education = sections.find((section) => section.title.includes("환자교육"));
  if (!education) return [];

  const recommendations = [];
  let pendingSymptoms = "";

  for (const rawLine of education.content) {
    const line = normalizeRecommendationText(rawLine);
    if (!line) continue;
    if (/^(검사|치료|교육)\s*[:：]/.test(line)) continue;

    const equalIndex = line.indexOf("=");
    if (equalIndex === -1) {
      if (line.includes("+") && !line.includes("/")) pendingSymptoms = line;
      continue;
    }

    const lhs = normalizeRecommendationText(line.slice(0, equalIndex)) || pendingSymptoms;
    const rhs = normalizeRecommendationText(line.slice(equalIndex + 1));
    pendingSymptoms = "";

    if (!lhs || !rhs || !lhs.includes("+")) continue;

    const symptoms = [...new Set(splitRecommendationSymptoms(lhs))];
    const [disease = "", tests = "", ...treatmentParts] = rhs.split("/").map((part) => normalizeRecommendationText(part));
    const treatment = treatmentParts.join(" / ").trim();

    if (symptoms.length === 0 || !disease) continue;
    recommendations.push({ symptoms, disease, tests, treatment });
  }

  return recommendations;
}

function buildChiefComplaints() {
  const root = path.join(SOURCE_NOTES_ROOT, "01 Chief Complaint");
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md", "CC_index.md", "chief_complaints_master.md"]),
  });

  const notes = files.map((filePath) => {
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
      historyChecklist: parseHistoryChecklist(body),

      examChecklist: parsePhysicalExamChecklist(body),

      exam: firstSectionText(sections, "pex"),
      plan: firstSectionText(sections, "plan"),
      recommendations: parseChiefComplaintRecommendations(sections),
      sections,
      updatedAt: stat.mtime.toISOString(),
    };
  });

  return notes.sort((a, b) =>
    String(a.category).localeCompare(String(b.category), "ko", { numeric: true }) ||
    String(a.id).localeCompare(String(b.id), "ko", { numeric: true }) ||
    a.title.localeCompare(b.title, "ko"),
  );
}

function buildGenericNotes(domainFolder, domainKey, options = {}) {
  const root = path.join(SOURCE_NOTES_ROOT, domainFolder);
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md", ...(options.ignoreFiles ?? [])]),
  });

  return files.map((filePath) => {
    const raw = readText(filePath);
    const { frontmatter, body } = splitFrontmatter(raw);
    const sections = splitSections(body);
    const summaryCallout = extractSummaryCallout(body);
    const leadingSummaryBlock = extractLeadingSummaryBlock(body);
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
      summary: (
        summaryCallout.length > 0
          ? summaryCallout
          : leadingSummaryBlock.length > 0
            ? leadingSummaryBlock
            : body
                .split(/\r?\n/)
                .map(normalizeSummaryLine)
                .filter(Boolean)
      ).slice(0, 8),
      sections,
      updatedAt: stat.mtime.toISOString(),
      contentMeta: {
        reviewedAt: readScalar(frontmatter["reviewed_at"]),
        reviewStatus: readScalar(frontmatter["review_status"]),
        guidelineYear: readScalar(frontmatter["guideline_year"]),
        sources: parseSkillSources(frontmatter.sources),
      },
    };
  });
}

function buildDrugs() {
  const root = path.join(SOURCE_NOTES_ROOT, "04 Pharmacology");
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
    const detailClass = readScalar(frontmatter["분류_세부"]) || readScalar(frontmatter["분류_소분류"]);
    const brands = readList(frontmatter["상품명"]);
    const doses = readList(frontmatter["용량"]);
    const relatedDiseases = readList(frontmatter["related_diseases"]).filter((item) => item && item !== "-");
    const calloutSummary = extractSummaryCallout(body);
    const clinicalSection = firstSectionText(sections, "임상 사용");
    const fallbackSummary = clinicalSection.slice(0, 5);
    const indications = extractNestedSection(body, /적응증|indication/i);
    const contraindications = extractNestedSection(body, /금기|contraindication/i);
    const interactions = extractNestedSection(body, /상호작용|interaction/i);
    const adverseEffects = extractNestedSection(body, /부작용|이상반응|adverse/i);
    const monitoring = extractNestedSection(body, /모니터링|monitoring|주의/i);

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
      contentMeta: {
        reviewedAt: readScalar(frontmatter["reviewed_at"]),
        reviewStatus: readScalar(frontmatter["review_status"]),
        guidelineYear: readScalar(frontmatter["guideline_year"]),
        sources: parseSkillSources(frontmatter.sources),
      },
      drugMeta: {
        type: readScalar(frontmatter["유형"]) || "drug",
        categoryPath,
        topClass,
        middleClass,
        detailClass,
        clinicalCore: /^true$/i.test(readScalar(frontmatter["임상_핵심"])) || readScalar(frontmatter["clinical_priority"]) === "tier_1",
        priority: readScalar(frontmatter["clinical_priority"]) || readScalar(frontmatter["임상_우선순위"]),
        brands,
        doses,
        relatedDiseases,
        indications,
        contraindications,
        interactions,
        adverseEffects,
        monitoring,
        profile: readScalar(frontmatter["검증_프로파일"]),
      },
    };
  });
}


function buildMicrobiology() {
  const root = path.join(SOURCE_NOTES_ROOT, "09 Microbiology");
  const dataRoot = path.join(root, "_data");
  const registryPath = path.join(dataRoot, "microorganism-registry.json");
  const sourcesPath = path.join(dataRoot, "microbiology-sources.json");
  const relationsPath = path.join(dataRoot, "microbiology-relations.json");
  for (const required of [registryPath, sourcesPath, relationsPath]) {
    if (!fs.existsSync(required)) throw new Error(`Microbiology source is missing: ${required}`);
  }

  const registry = JSON.parse(readText(registryPath));
  const sourceDataset = JSON.parse(readText(sourcesPath));
  const relationDataset = JSON.parse(readText(relationsPath));
  const allowedKinds = new Set(["organism", "clinical_group", "resistance_phenotype"]);
  const allowedPathogenTypes = new Set(["bacterium", "virus", "fungus", "protozoan", "helminth", "ectoparasite", "prion", "mixed"]);
  const allowedStatuses = new Set(["draft", "source_checked", "clinically_reviewed", "verified", "needs_update"]);
  const sourceIds = new Set(sourceDataset.sources.map((item) => item.id));
  const ids = new Set();
  const spectrumIds = new Set();
  const normalizedAliases = new Map();

  const entities = registry.entities.map((entry) => {
    if (!entry.id || ids.has(entry.id)) throw new Error(`Duplicate or missing microbiology id: ${entry.id}`);
    ids.add(entry.id);
    if (!allowedKinds.has(entry.entityKind)) throw new Error(`Invalid entityKind for ${entry.id}: ${entry.entityKind}`);
    if (!allowedPathogenTypes.has(entry.pathogenType)) throw new Error(`Invalid pathogenType for ${entry.id}: ${entry.pathogenType}`);
    if (!allowedStatuses.has(entry.reviewStatus)) throw new Error(`Invalid reviewStatus for ${entry.id}: ${entry.reviewStatus}`);
    for (const sourceId of entry.sourceIds ?? []) {
      if (!sourceIds.has(sourceId)) throw new Error(`Unknown microbiology source for ${entry.id}: ${sourceId}`);
    }
    for (const spectrumId of entry.spectrumIds ?? []) {
      if (spectrumIds.has(spectrumId)) throw new Error(`Duplicate spectrum mapping: ${spectrumId}`);
      spectrumIds.add(spectrumId);
    }
    for (const alias of [entry.scientificName, entry.koreanName, ...(entry.aliases ?? [])].filter(Boolean)) {
      const normalized = alias.toLocaleLowerCase().replace(/[\s._/()-]+/g, "");
      const previous = normalizedAliases.get(normalized);
      if (previous && previous !== entry.id && alias === entry.scientificName && entry.entityKind === "organism" && registry.entities.find((candidate) => candidate.id === previous)?.entityKind === "organism") {
        throw new Error(`Duplicate canonical scientific name: ${alias} (${previous}, ${entry.id})`);
      }
      if (!previous) normalizedAliases.set(normalized, entry.id);
    }

    const notePath = path.join(root, entry.noteSourceFile);
    if (!fs.existsSync(notePath)) throw new Error(`Microbiology note is missing for ${entry.id}: ${entry.noteSourceFile}`);
    const { frontmatter, body } = splitFrontmatter(readText(notePath));
    const noteId = readScalar(frontmatter.microbiology_id);
    if (noteId !== entry.id) throw new Error(`Microbiology id mismatch: registry=${entry.id}, note=${noteId || "(missing)"}`);
    const noteSourceIds = readList(frontmatter.source_ids);
    for (const sourceId of noteSourceIds) {
      if (!sourceIds.has(sourceId)) throw new Error(`Unknown note source for ${entry.id}: ${sourceId}`);
    }
    const sections = splitSections(body);
    const summaryCallout = extractSummaryCallout(body);
    const relativePath = entry.noteSourceFile.replaceAll("\\", "/");
    const categoryPath = relativePath.split("/").slice(0, -1);
    const title = entry.koreanName && entry.scientificName && entry.koreanName !== entry.scientificName
      ? `${entry.koreanName} (${entry.scientificName})`
      : entry.koreanName || entry.scientificName;

    return {
      id: entry.id,
      slug: toSlug(`microbiology:${entry.id}`),
      title,
      scientificName: entry.scientificName || "",
      koreanName: entry.koreanName || "",
      entityKind: entry.entityKind,
      pathogenType: entry.pathogenType,
      category: entry.category || categoryPath.at(-1) || "기타",
      categoryPath,
      aliases: entry.aliases ?? [],
      classification: entry.classification ?? [],
      clinicalTags: entry.clinicalTags ?? [],
      taxonomyIds: entry.taxonomyIds ?? [],
      spectrumIds: entry.spectrumIds ?? [],
      relatedDiseaseIds: readList(frontmatter.related_disease_ids),
      relatedAntibioticIds: readList(frontmatter.related_antibiotic_ids),
      relatedLabIds: readList(frontmatter.related_lab_ids),
      sourceIds: [...new Set([...(entry.sourceIds ?? []), ...noteSourceIds])],
      reviewStatus: entry.reviewStatus,
      reviewedAt: entry.reviewedAt || readScalar(frontmatter.reviewed_at),
      sourcePath: path.relative(WORKSPACE_ROOT, notePath).replaceAll("\\", "/"),
      summary: summaryCallout.length ? summaryCallout : sections[0]?.content.slice(0, 3) ?? [],
      sections,
    };
  });

  const entityFiles = new Set(entities.map((entity) => entity.sourcePath.replaceAll("\\", "/")));
  const orphanNotes = listMarkdownFiles(root, {
    ignoreDirs: new Set(["_data", "_templates"]),
    ignoreFiles: new Set(["index.md"]),
  }).map((filePath) => path.relative(WORKSPACE_ROOT, filePath).replaceAll("\\", "/"))
    .filter((sourcePath) => !entityFiles.has(sourcePath));
  if (orphanNotes.length) throw new Error(`Unregistered microbiology notes: ${orphanNotes.join(", ")}`);

  for (const relation of relationDataset.relations) {
    if (!ids.has(relation.sourceId)) throw new Error(`Unknown microbiology relation source: ${relation.sourceId}`);
    if (["microorganism", "clinicalGroup", "resistancePhenotype"].includes(relation.targetType) && !ids.has(relation.targetId)) {
      throw new Error(`Unknown microbiology relation target: ${relation.targetId}`);
    }
    for (const sourceId of relation.sourceIds ?? []) {
      if (!sourceIds.has(sourceId)) throw new Error(`Unknown relation source id for ${relation.sourceId}: ${sourceId}`);
    }
    if (!allowedStatuses.has(relation.reviewStatus)) throw new Error(`Invalid relation status: ${relation.reviewStatus}`);
  }

  const toc = {
    domain: "Microbiology",
    sourcePath: "source_notes/09 Microbiology",
    items: entities.map((entity) => ({ title: entity.title, path: entity.categoryPath, slug: entity.slug, entityKind: entity.entityKind })),
  };
  return {
    dataset: {
      schemaVersion: registry.schemaVersion,
      reviewedAt: registry.reviewedAt,
      disclaimer: registry.disclaimer,
      sources: sourceDataset.sources,
      entities,
    },
    relations: relationDataset,
    toc,
  };
}

function buildAntibioticSpectrum(drugs, diseases, microbiology) {
  const hubsRoot = path.join(SOURCE_NOTES_ROOT, "10 Hubs");
  const infectionHub = fs.readdirSync(hubsRoot).find((name) => name.startsWith("01 "));
  if (!infectionHub) throw new Error("Infection Hub folder is missing.");
  const sourcePath = path.join(hubsRoot, infectionHub, "_data", "antibiotic-spectrum.json");
  if (!fs.existsSync(sourcePath)) throw new Error(`Antibiotic spectrum source is missing: ${sourcePath}`);

  const dataset = JSON.parse(readText(sourcePath));
  const allowedCoverage = new Set(["preferred", "active", "conditional", "variable", "inactive", "unknown"]);
  const allowedPregnancy = new Set([
    "generally_compatible", "use_if_needed", "trimester_caution", "avoid_if_possible",
    "contraindicated", "insufficient_data",
  ]);
  const organismIds = new Set(dataset.organisms.map((item) => item.id));
  const organisms = dataset.organisms.map((item) => {
    const microEntity = microbiology.entities.find((candidate) => candidate.spectrumIds.includes(item.id));
    if (microEntity) {
      return {
        ...item,
        microbiologyId: microEntity.id,
        microbiologySlug: microEntity.slug,
        noteTitle: microEntity.title,
      };
    }
    if (!item.noteSourceFile) return item;
    const expected = `source_notes/02 Diseases/${item.noteSourceFile}`.replaceAll("\\", "/");
    const note = diseases.find((candidate) => candidate.sourcePath.replaceAll("\\", "/") === expected);
    if (!note) throw new Error(`Organism note is not linked to a generated disease: ${item.id}/${item.noteSourceFile}`);
    return { ...item, noteSlug: note.slug, noteTitle: note.title };
  });
  const antibioticIds = new Set();
  const sourceIds = new Set(dataset.sources.map((item) => item.id));

  const antibiotics = dataset.antibiotics.map((item) => {
    if (antibioticIds.has(item.id)) throw new Error(`Duplicate antibiotic id: ${item.id}`);
    antibioticIds.add(item.id);
    if (!allowedPregnancy.has(item.pregnancy?.status)) {
      throw new Error(`Invalid pregnancy status for ${item.id}: ${item.pregnancy?.status}`);
    }
    for (const [organismId, level] of Object.entries(item.coverage)) {
      if (!organismIds.has(organismId)) throw new Error(`Unknown organism id for ${item.id}: ${organismId}`);
      if (!allowedCoverage.has(level)) throw new Error(`Invalid coverage level for ${item.id}/${organismId}: ${level}`);
    }
    for (const sourceId of item.sourceIds) {
      if (!sourceIds.has(sourceId)) throw new Error(`Unknown source id for ${item.id}: ${sourceId}`);
    }

    const sourceSuffix = `/08 감염/${item.sourceFile}`;
    const drug = drugs.find((candidate) => candidate.sourcePath.replaceAll("\\", "/").endsWith(sourceSuffix));
    if (!drug) throw new Error(`Antibiotic note is not linked to a generated drug: ${item.sourceFile}`);
    return { ...item, drugSlug: drug.slug, drugTitle: drug.title };
  });

  return { ...dataset, organisms, antibiotics };
}

function parseSkillSources(value) {
  const lines = readList(value).flatMap((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) return parsed;
      } catch {
        // Keep non-JSON source text on the existing plain-text path.
      }
    }
    return [line];
  });

  return lines
    .map((line) => {
      const [label, ...urlParts] = line.split("|").map((part) => part.trim());
      return { label: label.replace(/^\[|\]$/g, "").trim(), url: urlParts.join("|").trim() };
    })
    .filter((item) => item.label && item.url);
}

function firstSkillSection(body, title) {
  const lines = body.split(/\r?\n/);
  const result = [];
  let inSection = false;

  for (const rawLine of lines) {
    const headingMatch = rawLine.match(/^##\s+(.+)$/);
    if (headingMatch) {
      if (inSection) break;
      inSection = headingMatch[1].trim().toLowerCase() === title.toLowerCase();
      continue;
    }

    if (!inSection) continue;
    const line = rawLine.trim().replace(/^[-*]\s+/, "").trim();
    if (line && !/^###\s+/.test(line) && line !== "[]") result.push(line);
  }

  return result;
}

function extractSkillSteps(body) {
  const stepSectionMatch = body.match(/^##\s+Steps\s*\r?\n([\s\S]*)$/m);
  if (!stepSectionMatch) return [];

  const stepBody = stepSectionMatch[1].split(/^##\s+/m)[0].trim();
  const matches = [...stepBody.matchAll(/^###\s+(\d+)\.\s+(.+)$/gm)];
  return matches.map((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index ?? stepBody.length : stepBody.length;
    const chunk = stepBody.slice(start, end).trim();
    const warningMatch = chunk.match(/(?:^|\r?\n)Warning:\s*([\s\S]*)$/);
    const description = (warningMatch ? chunk.slice(0, warningMatch.index).trim() : chunk).trim();
    const warning = warningMatch?.[1]?.trim() || undefined;
    return {
      stepNumber: Number(match[1]),
      title: match[2].trim(),
      description,
      ...(warning ? { warning } : {}),
    };
  });
}



function extractRoadmapLanes(body) {
  const laneMatches = [...body.matchAll(/^##\s+(.+)$/gm)];
  if (laneMatches.length === 0) return [];

  return laneMatches.map((laneMatch, laneIndex) => {
    const laneStart = (laneMatch.index ?? 0) + laneMatch[0].length;
    const laneEnd = laneIndex + 1 < laneMatches.length ? laneMatches[laneIndex + 1].index ?? body.length : body.length;
    const laneBody = body.slice(laneStart, laneEnd).trim();
    const itemMatches = [...laneBody.matchAll(/^###\s+(.+)$/gm)];

    const items = itemMatches.map((itemMatch, itemIndex) => {
      const itemStart = (itemMatch.index ?? 0) + itemMatch[0].length;
      const itemEnd = itemIndex + 1 < itemMatches.length ? itemMatches[itemIndex + 1].index ?? laneBody.length : laneBody.length;
      const itemBody = laneBody.slice(itemStart, itemEnd).trim();
      const headingParts = itemMatch[1].split(/\s+\|\s+|\s+-\s+/).map((part) => part.trim()).filter(Boolean);
      const points = itemBody
        .split(/\r?\n/)
        .map((line) => line.trim().replace(/^[-*]\s+/, "").trim())
        .filter(Boolean);

      return {
        time: headingParts[0] || itemMatch[1].trim(),
        title: headingParts.slice(1).join(" - ") || itemMatch[1].trim(),
        points,
      };
    });

    return {
      title: cleanupHeading(laneMatch[1]),
      items: items.filter((item) => item.time && item.title),
    };
  }).filter((lane) => lane.items.length > 0);
}

function buildSpecialtyRoadmaps() {
  const root = path.join(SOURCE_NOTES_ROOT, "08 Specialty Roadmaps");
  if (!fs.existsSync(root)) return [];

  return listMarkdownFiles(root, { recursive: false, ignoreDirs: new Set(), ignoreFiles: new Set(["index.md"]) })
    .map((filePath) => {
      const { frontmatter, body } = splitFrontmatter(readText(filePath));
      const specialty = readScalar(frontmatter.specialty);
      const specialtySlug = readScalar(frontmatter.specialty_slug) || (specialty ? toSlug(specialty) : "");
      const title = readScalar(frontmatter.title) || path.basename(filePath, ".md");
      const description = readScalar(frontmatter.description);

      return {
        specialtySlug,
        title,
        description,
        sources: parseSkillSources(frontmatter.sources),
        lanes: extractRoadmapLanes(body),
      };
    })
    .filter((roadmap) => roadmap.specialtySlug && roadmap.lanes.length > 0);
}

function buildSkills() {
  const skillsRoot = path.join(SOURCE_NOTES_ROOT, "07 Skills");
  if (!fs.existsSync(skillsRoot)) {
    return { source: "07 Skills", categories: [], items: [] };
  }

  const categoryDirs = fs
    .readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(skillsRoot, entry.name))
    .sort((a, b) => path.basename(a).localeCompare(path.basename(b), "ko"));

  const categories = [];
  const items = [];

  for (const categoryDir of categoryDirs) {
    const files = listMarkdownFiles(categoryDir, { recursive: false, ignoreDirs: new Set(), ignoreFiles: new Set() });
    const parsedSkills = [];
    let categoryId = "";
    let categoryName = path.basename(categoryDir);
    let iconName = "Stethoscope";

    for (const filePath of files) {
      const { frontmatter, body } = splitFrontmatter(readText(filePath));
      const id = readScalar(frontmatter.id) || path.basename(filePath, ".md");
      const name = readScalar(frontmatter.name) || path.basename(filePath, ".md");
      const skillCategoryId = readScalar(frontmatter.category_id) || toSlug(categoryName);
      const skillCategoryName = readScalar(frontmatter.category_name) || categoryName;
      const skillIconName = readScalar(frontmatter.icon_name) || iconName;
      const order = Number(readScalar(frontmatter.order)) || Number.MAX_SAFE_INTEGER;
      categoryId = categoryId || skillCategoryId;
      categoryName = skillCategoryName;
      iconName = skillIconName;

      parsedSkills.push({
        order,
        skill: {
          id,
          name,
          aliases: readList(frontmatter.aliases),
          categoryId: skillCategoryId,
          categoryName: skillCategoryName,
          summary: extractSummaryCallout(body),
          indications: firstSkillSection(body, "Indications"),
          supplies: firstSkillSection(body, "Supplies"),
          complications: firstSkillSection(body, "Complications"),
          precautions: firstSkillSection(body, "Precautions"),
          sources: parseSkillSources(frontmatter.sources),
          videoUrl: readScalar(frontmatter.video_url) || null,
          steps: extractSkillSteps(body),
        },
      });
    }

    parsedSkills.sort((a, b) => a.order - b.order || a.skill.name.localeCompare(b.skill.name, "ko"));
    const categoryItems = parsedSkills.map(({ skill }) => ({ id: skill.id, name: skill.name }));
    items.push(...parsedSkills.map(({ skill }) => skill));

    if (categoryItems.length > 0) {
      categories.push({ id: categoryId, name: categoryName, iconName, items: categoryItems });
    }
  }

  return { source: "07 Skills", categories, items };
}

function buildSearchIndex({ diseases, chiefComplaints, drugs, microbiology, physiology, pathology, labImg, skills }) {
  const genericEntry = (type, item, href) => ({
    type,
    slug: item.slug,
    title: item.title,
    category: item.category,
    aliases: item.aliases,
    keywords: [...(item.pathSegments ?? []), ...item.sections.map((section) => section.title)].filter(Boolean),
    quickSummary: item.summary[0] || "",
    href,
  });

  return [
    ...diseases.map((item) => ({
      type: "disease",
      slug: item.slug,
      title: item.title,
      category: item.specialty,
      aliases: [...item.aliases, ...item.chiefComplaints],
      keywords: [...item.classification, ...item.chiefComplaints, ...item.sections.map((section) => section.title)].filter(Boolean),
      quickSummary: item.definition || item.overview?.[0] || "",
      href: `/disease/${item.slug}`,
    })),
    ...chiefComplaints.map((item) => ({
      type: "chiefComplaint",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      keywords: [...item.differentials.slice(0, 12), ...item.sections.map((section) => section.title)].filter(Boolean),
      quickSummary: item.concept[0] || item.differentials.slice(0, 3).join(" · "),
      href: `/cc/category/${toSlug(item.category || "기타")}/${item.slug}`,
    })),
    ...drugs.map((item) => ({
      ...genericEntry("drug", item, `/drugs/${item.slug}`),
      keywords: [
        ...item.drugMeta.relatedDiseases,
        item.drugMeta.topClass,
        item.drugMeta.middleClass,
        item.drugMeta.detailClass,
        ...item.sections.map((section) => section.title),
      ].filter(Boolean),
      priority: item.drugMeta.priority,
    })),
    ...microbiology.entities.map((entity) => ({
      type: entity.entityKind === "organism" ? "microorganism" : entity.entityKind === "clinical_group" ? "clinicalGroup" : "resistancePhenotype",
      slug: entity.slug,
      title: entity.title,
      category: entity.category,
      aliases: [entity.scientificName, entity.koreanName, ...entity.aliases].filter(Boolean),
      keywords: [...entity.classification, ...entity.clinicalTags, ...entity.categoryPath].filter(Boolean),
      quickSummary: entity.summary[0] || "",
      href: `/microbiology/${entity.slug}`,
    })),
    ...physiology.map((item) => genericEntry("physiology", item, `/physiology/${item.slug}`)),
    ...pathology.map((item) => genericEntry("pathology", item, `/pathology/${item.slug}`)),
    ...labImg.map((item) => genericEntry("labImg", item, `/lab-img/${item.slug}`)),
    ...skills.items.map((item) => ({
      type: "skill",
      slug: item.id,
      title: item.name,
      category: item.categoryName,
      aliases: item.aliases,
      keywords: [...item.indications, ...item.supplies].slice(0, 20),
      quickSummary: item.summary[0] || item.indications[0] || "",
      href: `/skills/${item.id}`,
    })),
  ];
}

function qbankSection(body, title) {
  const marker = `## ${title}`;
  const markerIndex = body.indexOf(marker);
  if (markerIndex < 0) return "";
  const contentStart = markerIndex + marker.length;
  const rest = body.slice(contentStart);
  const nextHeading = rest.search(/\n##\s+/);
  return (nextHeading >= 0 ? rest.slice(0, nextHeading) : rest).trim();
}

function normalizeQbankDiseaseTerm(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[()[\]{}.,;:/\\'"~!@#$%^&*+=?_\-–—]/g, "")
    .replace(/\s+/g, "");
}

function buildQbank() {
  const sourceRoots = [
    { root: path.join(SOURCE_NOTES_ROOT, "99 Q-bank", "MedQA"), questionBank: "clinical" },
    { root: path.join(SOURCE_NOTES_ROOT, "99 Q-bank", "Theory"), questionBank: "theory" },
  ].filter(({ root }) => fs.existsSync(root));
  if (sourceRoots.length === 0) return { index: [], specialties: [], questions: [] };
  const diseases = buildDiseases();
  const ccSlugByTitle = new Map(buildChiefComplaints().map((item) => [item.title, item.slug]));
  const diseaseBySlug = new Map(diseases.map((item) => [item.slug, item]));
  const diseaseCandidates = diseases.flatMap((item) =>
    [item.title, ...(item.aliases || [])]
      .map((term) => ({ term: normalizeQbankDiseaseTerm(term), slug: item.slug }))
      .filter((candidate) => candidate.term.length >= 3),
  );
  function resolveDiseaseTerm(term) {
    const normalized = normalizeQbankDiseaseTerm(term);
    if (normalized.length < 3) return "";
    const exact = diseaseCandidates.find((candidate) => candidate.term === normalized);
    if (exact) return exact.slug;
    const partial = diseaseCandidates
      .filter((candidate) => (
        candidate.term.length >= 5
        && (candidate.term.includes(normalized) || normalized.includes(candidate.term))
      ))
      .sort((a, b) => Math.abs(a.term.length - normalized.length) - Math.abs(b.term.length - normalized.length))[0];
    return partial?.slug || "";
  }
  const questions = [];
  const seenIds = new Set();
  const seenHashes = new Set();

  for (const { root, questionBank } of sourceRoots) {
    for (const filePath of listMarkdownFiles(root, { ignoreFiles: new Set(["index.md", "README.md"]) })) {
    const { frontmatter, body } = splitFrontmatter(readText(filePath));
    if (readScalar(frontmatter.type) !== "qbank") continue;
    const id = readScalar(frontmatter.id);
    const sourceHash = readScalar(frontmatter.source_hash);
    const specialty = readScalar(frontmatter.specialty);
    const answer = readScalar(frontmatter.answer);
    if (!id || seenIds.has(id)) throw new Error(`Q-bank duplicate or missing id: ${id || filePath}`);
    if (questionBank === "clinical" && (!sourceHash || seenHashes.has(sourceHash))) throw new Error(`Q-bank duplicate or missing source hash: ${sourceHash || filePath}`);
    if (!/^[A-D]$/.test(answer)) throw new Error(`Q-bank invalid answer for ${id}`);
    const question = qbankSection(body, "문제");
    const optionsText = qbankSection(body, "선택지");
    const options = {};
    for (const match of optionsText.matchAll(/^([A-D])\.\s+(.+)$/gm)) options[match[1]] = match[2].trim();
    if (!question || Object.keys(options).join("") !== "ABCD") throw new Error(`Q-bank malformed question/options for ${id}`);
    const explanationStatus = readScalar(frontmatter.explanation_status) || "missing";
    const explanation = ["verified", "machine-generated"].includes(explanationStatus)
      ? qbankSection(body, "해설").replace(/<!--([\s\S]*?)-->/g, "").trim()
      : "";
    const diseaseTerms = readList(frontmatter.related_diseases);
    const targetType = questionBank === "theory" ? readScalar(frontmatter.target_type) : "";
    const targetSlug = questionBank === "theory" ? readScalar(frontmatter.target_slug) : "";
    const relatedDiseaseSlugs = [...new Set([
      ...diseaseTerms.map(resolveDiseaseTerm).filter(Boolean),
      ...(targetType === "disease" && targetSlug ? [targetSlug] : []),
    ])];
    const relatedCcSlugs = [...new Set([
      ...(targetType === "cc" && targetSlug ? [targetSlug] : []),
      ...relatedDiseaseSlugs.flatMap((slug) => (diseaseBySlug.get(slug)?.chiefComplaints ?? []).map((term) => ccSlugByTitle.get(term) || "")).filter(Boolean),
    ])];
    const specialtySlug = toSlug(specialty);
    questions.push({
      id,
      source: readScalar(frontmatter.source),
      sourceSplit: readScalar(frontmatter.source_split),
      specialty,
      specialtySlug,
      relatedDiseaseTerms: diseaseTerms,
      relatedDiseaseSlugs,
      relatedCcSlugs,
      questionType: readScalar(frontmatter.question_type) || "other",
      difficulty: readScalar(frontmatter.difficulty) || "standard",
      question,
      options,
      answer,
      explanation,
      translationStatus: readScalar(frontmatter.translation_status),
      explanationStatus,
      reviewStatus: readScalar(frontmatter.review_status),
      questionBank,
      targetType,
      targetSlug,
    });
    seenIds.add(id);
    if (sourceHash) seenHashes.add(sourceHash);
    }
  }

  questions.sort((a, b) => a.id.localeCompare(b.id));
  const grouped = new Map();
  for (const question of questions) {
    const values = grouped.get(question.specialty) || [];
    values.push(question);
    grouped.set(question.specialty, values);
  }
  ensureDir(PUBLIC_QBANK_ROOT);
  const expectedFiles = new Set(["index.json", "specialties.json"]);
  const specialties = [...grouped.entries()].map(([name, items]) => {
    const slug = toSlug(name);
    const fileName = `${slug}.json`;
    expectedFiles.add(fileName);
    writePublicQbankJson(fileName, items);
    writeQbankDataJson(fileName, items);
    return { name, slug, count: items.length };
  }).sort((a, b) => a.name.localeCompare(b.name, "ko"));
  const index = questions.map((item) => ({
    id: item.id,
    specialty: item.specialty,
    specialtySlug: item.specialtySlug,
    relatedDiseaseSlugs: item.relatedDiseaseSlugs,
    relatedCcSlugs: item.relatedCcSlugs,
    questionType: item.questionType,
    difficulty: item.difficulty,
    translationStatus: item.translationStatus,
    explanationStatus: item.explanationStatus,
    questionBank: item.questionBank,
    targetType: item.targetType,
    targetSlug: item.targetSlug,
  }));
  writePublicQbankJson("index.json", index);
  writePublicQbankJson("specialties.json", specialties);
  for (const entry of fs.readdirSync(PUBLIC_QBANK_ROOT, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".json") && !expectedFiles.has(entry.name)) {
      fs.rmSync(path.join(PUBLIC_QBANK_ROOT, entry.name));
    }
  }
  for (const entry of fs.readdirSync(QBANK_DATA_ROOT, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".json") && !expectedFiles.has(entry.name)) {
      fs.rmSync(path.join(QBANK_DATA_ROOT, entry.name));
    }
  }
  return { index, specialties, questions };
}

function main() {
  ensureDir(DATA_ROOT);

  const diseases = buildDiseases();
  const chiefComplaints = buildChiefComplaints();
  const drugs = buildDrugs();
  const microbiology = buildMicrobiology();
  const antibioticSpectrum = buildAntibioticSpectrum(drugs, diseases, microbiology.dataset);
  const physiology = buildGenericNotes("05 Physiology", "physiology");
  const pathology = buildGenericNotes("03 Pathology", "pathology");
  const labImg = buildGenericNotes("06 Lab & Img", "lab-img", {
    ignoreFiles: ["Lab & Img.md", "분류체계.md", "_\uBAA9\uCC28.md"],
  });
  const skills = buildSkills();
  const specialtyRoadmaps = buildSpecialtyRoadmaps();
  const drugToc = buildDomainToc("04 Pharmacology");
  const labImgToc = buildDomainToc("06 Lab & Img");
  const specialtyToc = buildSpecialtyToc();
  const qbank = buildQbank();

  const specialties = [...new Map(diseases.map((item) => [item.specialty, item])).keys()].map((name) => {
    const normalizedName = name.replace(/^\d+\s*/, "").trim();
    const count = diseases.filter((item) => (
      item.specialty === name || item.relatedSpecialties.some((specialty) => specialty.replace(/^\d+\s*/, "").trim() === normalizedName)
    )).length;

    return { name, slug: toSlug(name), count };
  });

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceRoot: "source_notes",
    outputRoot: "_webapp/data",
    domains: {
      diseases: { count: diseases.length, source: "02 Diseases" },
      chiefComplaints: { count: chiefComplaints.length, source: "01 Chief Complaint" },
      drugs: { count: drugs.length, source: "04 Pharmacology" },
      antibioticSpectrum: { count: antibioticSpectrum.antibiotics.length, source: "04 Pharmacology/08 감염/_data" },
      microbiology: { count: microbiology.dataset.entities.length, source: "09 Microbiology" },
      physiology: { count: physiology.length, source: "05 Physiology" },
      pathology: { count: pathology.length, source: "03 Pathology" },
      labImg: { count: labImg.length, source: "06 Lab & Img" },
      skills: { count: skills.items.length, source: "07 Skills" },
      specialtyRoadmaps: { count: specialtyRoadmaps.length, source: "08 Specialty Roadmaps" },
      specialtyToc: { count: specialtyToc.length, source: "02 Diseases/*/_\uBAA9\uCC28.md" },
      drugToc: { count: drugToc.items.length, source: "04 Pharmacology/_\uBAA9\uCC28.md" },
      labImgToc: { count: labImgToc.items.length, source: "06 Lab & Img/_\uBAA9\uCC28.md" },
      specialties: { count: specialties.length, source: "derived from diseases" },
      qbank: { count: qbank.questions.length, source: "99 Q-bank/MedQA" },
    },
  };

  writeJson("manifest.json", manifest);
  writeJson("diseases.json", diseases);
  writeJson("chief-complaints.json", chiefComplaints);
  writeJson("drugs.json", drugs);
  writeJson("antibiotic-spectrum.json", antibioticSpectrum);
  writeJson("microorganisms.json", microbiology.dataset);
  writeJson("microbiology-relations.json", microbiology.relations);
  writeJson("microbiology-toc.json", microbiology.toc);
  writeJson("microbiology-sources.json", { schemaVersion: microbiology.dataset.schemaVersion, reviewedAt: microbiology.dataset.reviewedAt, sources: microbiology.dataset.sources });
  writeJson("physiology.json", physiology);
  writeJson("pathology.json", pathology);
  writeJson("lab-img.json", labImg);
  writeJson("skills.json", skills);
  writeJson("specialties.json", specialties);
  writeJson("specialty-roadmaps.json", specialtyRoadmaps);
  writeJson("specialty-toc.json", specialtyToc);
  writeJson("drug-toc.json", drugToc);
  writeJson("lab-img-toc.json", labImgToc);
  writeJson("qbank-index.json", qbank.index);
  writeJson("qbank-specialties.json", qbank.specialties);
  writeJson(
    "search-index.json",
    buildSearchIndex({ diseases, chiefComplaints, drugs, microbiology: microbiology.dataset, physiology, pathology, labImg, skills }),
  );

  fs.writeFileSync(
    path.join(OUTPUT_ROOT, "README.md"),
    [
      "# _webapp",
      "",
      "Generated web-app data derived from `source_notes` markdown files and web-only manual sources.",
      "",
      "- Source of truth: markdown files in `source_notes/*`",
      "- Output: committed JSON for GitHub Pages build under `_webapp/data`",
      "- Direction: source markdown -> generated JSON only",
      "- Keep `source_notes` itself free of web-app artifacts",
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
