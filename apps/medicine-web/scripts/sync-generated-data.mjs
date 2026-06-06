import fs from "node:fs";
import path from "node:path";

const APP_ROOT = process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const VAULT_ROOT = path.join(WORKSPACE_ROOT, "vault_medicine");
const OUTPUT_ROOT = path.join(APP_ROOT, "generated");
const DATA_ROOT = OUTPUT_ROOT;

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
    .map((line) => line.replace(/^\-\s*/, "").trim());
}

function readScalar(value) {
  if (!value) return "";
  return value.replace(/^["']|["']$/g, "").trim();
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
      category: readScalar(frontmatter["계통"]) || specialty.replace(/^\d+\s*/, ""),
      classification: readList(frontmatter["분류"]),
      aliases: readList(frontmatter["aliases"]),
      chiefComplaints: readList(frontmatter["CC"]),
      definition: (body.match(/(?:-|\*)\s*\*\*정의\*\*:\s*(.+)/)?.[1] ?? "").trim(),
      overview: firstSectionText(sections, "개요"),
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
      category: readScalar(frontmatter["계통"]),
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

function buildGenericNotes(domainFolder, domainKey) {
  const root = path.join(VAULT_ROOT, domainFolder);
  const files = listMarkdownFiles(root, {
    ignoreFiles: new Set(["index.md"]),
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
      folder: folders.length > 1 ? folders[0] : "",
      aliases: readList(frontmatter["aliases"]),
      category: readScalar(frontmatter["계통"]) || (folders.length > 1 ? folders[0] : domainFolder),
      summary: body
        .split(/\r?\n/)
        .map(normalizeLine)
        .filter(Boolean)
        .slice(0, 8),
      sections,
      updatedAt: stat.mtime.toISOString(),
    };
  });
}

function buildSkillsPlaceholder() {
  return {
    items: [],
    source: "manual",
    note: "Clinical skills are not yet synced from vault source. Reserve this domain for later migration from legacy app/manual data.",
  };
}

function buildSearchIndex({ diseases, chiefComplaints, drugs, physiology, pathology }) {
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
      href: `/cc/${item.slug}`,
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
  ];
}

function main() {
  ensureDir(DATA_ROOT);

  const diseases = buildDiseases();
  const chiefComplaints = buildChiefComplaints();
  const drugs = buildGenericNotes("04 Pharmacology", "drug");
  const physiology = buildGenericNotes("05 Physiology", "physiology");
  const pathology = buildGenericNotes("03 Pathology", "pathology");
  const skills = buildSkillsPlaceholder();

  const specialties = [...new Map(diseases.map((item) => [item.specialty, item])).keys()].map((name) => ({
    name,
    slug: toSlug(name),
    count: diseases.filter((item) => item.specialty === name).length,
  }));

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceRoot: "vault_medicine",
    outputRoot: "apps/medicine-web/generated",
    domains: {
      diseases: { count: diseases.length, source: "02 Diseases" },
      chiefComplaints: { count: chiefComplaints.length, source: "01 Chief Complaint" },
      drugs: { count: drugs.length, source: "04 Pharmacology" },
      physiology: { count: physiology.length, source: "05 Physiology" },
      pathology: { count: pathology.length, source: "03 Pathology" },
      skills: { count: skills.items.length, source: "manual placeholder" },
      specialties: { count: specialties.length, source: "derived from diseases" },
    },
  };

  writeJson("manifest.json", manifest);
  writeJson("diseases.json", diseases);
  writeJson("chief-complaints.json", chiefComplaints);
  writeJson("drugs.json", drugs);
  writeJson("physiology.json", physiology);
  writeJson("pathology.json", pathology);
  writeJson("skills.json", skills);
  writeJson("specialties.json", specialties);
  writeJson(
    "search-index.json",
    buildSearchIndex({ diseases, chiefComplaints, drugs, physiology, pathology }),
  );

  fs.writeFileSync(
    path.join(OUTPUT_ROOT, "README.md"),
    [
      "# generated",
      "",
      "Generated web-app data derived from `vault_medicine`.",
      "",
      "- Source of truth: markdown files in `vault_medicine/*`",
      "- Output: committed JSON for GitHub Pages build",
      "- Direction: source markdown -> generated JSON only",
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
