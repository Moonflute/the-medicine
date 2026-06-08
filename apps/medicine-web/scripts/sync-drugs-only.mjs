import fs from "node:fs";
import path from "node:path";

const APP_ROOT = process.env.INIT_CWD || process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const VAULT_ROOT = path.join(WORKSPACE_ROOT, "vault_medicine");
const OUTPUT_ROOT = path.join(WORKSPACE_ROOT, "_webapp");
const DATA_ROOT = path.join(OUTPUT_ROOT, "data");

function readText(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

function readJson(fileName) {
  return JSON.parse(readText(path.join(DATA_ROOT, fileName)));
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

function normalizeLine(line) {
  return line
    .trim()
    .replace(/^\-\s*/, "• ")
    .replace(/^\*\s*/, "• ")
    .replace(/^\t+/, "")
    .trim();
}

function cleanupHeading(heading) {
  return heading.replace(/^\d+\.\s*/, "").trim();
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

function firstSectionText(sections, titleIncludes) {
  const section = sections.find((item) => item.title.toLowerCase().includes(titleIncludes.toLowerCase()));
  return section?.content ?? [];
}

function listMarkdownFiles(root, options = {}) {
  const {
    ignoreDirs = new Set(["_templates", "_webapp", ".obsidian", "images", "_index"]),
    ignoreFiles = new Set(["index.md", "계통_규칙.md", "분류체계.md", "약리학.md", "일반원례_및_교과서색인.md", "참고_RangDale10_구조매핑.md"]),
  } = options;

  const results = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (ignoreDirs.has(entry.name)) continue;
        walk(path.join(currentDir, entry.name));
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

function buildDrugs() {
  const root = path.join(VAULT_ROOT, "04 Pharmacology");
  const files = listMarkdownFiles(root).filter((filePath) => path.relative(root, filePath).split(path.sep).length > 1);

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

function main() {
  const drugs = buildDrugs();
  const manifest = readJson("manifest.json");
  const searchIndex = readJson("search-index.json");

  manifest.generatedAt = new Date().toISOString();
  manifest.domains.drugs = { count: drugs.length, source: "04 Pharmacology" };

  const nextSearchIndex = [
    ...searchIndex.filter((entry) => entry.type !== "drug"),
    ...drugs.map((item) => ({
      type: "drug",
      slug: item.slug,
      title: item.title,
      category: item.category,
      aliases: item.aliases,
      href: `/drugs/${item.slug}`,
    })),
  ];

  writeJson("drugs.json", drugs);
  writeJson("manifest.json", manifest);
  writeJson("search-index.json", nextSearchIndex);

  console.log(
    JSON.stringify(
      {
        ok: true,
        generatedAt: manifest.generatedAt,
        drugCount: drugs.length,
      },
      null,
      2,
    ),
  );
}

main();
