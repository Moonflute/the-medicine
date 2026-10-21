export type LearningLink = { label: string; href: string };
export type LearningSection = { title: string; bullets: string[] };
export type LearningTopic = { id: string; title: string; sections: LearningSection[]; links: LearningLink[]; question?: { prompt: string; choices: string[]; answer: number } };
export type InteractiveLearning = { slug: string; title: string; reviewed: string; introduction: string[]; topics: LearningTopic[]; sources: LearningLink[] };

/** Small, deliberately strict authoring format: H2 id | title, H3 section, bullet paragraphs. */
export function parseInteractiveLearning(markdown: string, slug: string): InteractiveLearning {
  const result: InteractiveLearning = { slug, title: "", reviewed: "", introduction: [], topics: [], sources: [] };
  let topic: LearningTopic | undefined, section: LearningSection | undefined, sources = false;
  for (const raw of markdown.replace(/\r/g, "").split("\n")) {
    const line = raw.trim(); if (!line) continue;
    if (line.startsWith("# ")) { result.title = line.slice(2); continue; }
    if (line.startsWith("검토 기준일:")) { result.reviewed = line.split(":")[1].trim(); continue; }
    if (line === "## 출처") { sources = true; topic = undefined; section = undefined; continue; }
    if (line.startsWith("## ")) {
      const [id, ...title] = line.slice(3).split(" | ");
      if (!/^[a-z0-9-]+$/.test(id) || !title.length || result.topics.some(t => t.id === id)) throw new Error(`Invalid/duplicate topic in ${slug}: ${line}`);
      topic = { id, title: title.join(" | "), sections: [], links: [] }; result.topics.push(topic); section = undefined; sources = false; continue;
    }
    if (line.startsWith("### ")) {
      if (!topic) throw new Error(`Section outside topic: ${slug}`);
      section = { title: line.slice(4), bullets: [] }; topic.sections.push(section); continue;
    }
    if (line.startsWith("예측: ")) {
      if (!topic) throw new Error(`Question outside topic: ${slug}`);
      const [prompt, ...parts] = line.slice(4).split(" | "); const answer = Number(parts.pop());
      if (parts.length < 2 || !Number.isInteger(answer) || answer < 0 || answer >= parts.length) throw new Error(`Invalid question: ${slug}/${topic.id}`);
      topic.question = {prompt, choices:parts, answer}; continue;
    }
    const text = line.replace(/^- /, "");
    const link = text.match(/^\[([^\]]+)\]\((.+)\)$/);
    if (sources || section?.title === "관련 자료") {
      if (!link) throw new Error(`Invalid related link: ${slug}: ${line}`);
      (sources ? result.sources : topic!.links).push({label:link[1],href:link[2].trim()}); continue;
    }
    if (section) section.bullets.push(text); else if (!topic) result.introduction.push(text);
  }
  if (!result.title || !result.reviewed || !result.sources.length || !result.topics.length) throw new Error(`Incomplete interactive source: ${slug}`);
  return result;
}

export type LearningCatalogEntry = { title: string; aliases?: string[]; href: string };
const normalize = (s: string) => s.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
export function resolveLearningLink(link: LearningLink, catalogs: Record<string, LearningCatalogEntry[]>): LearningLink {
  const match = link.href.match(/^(disease|drug|lab):(.+)$/);
  if (!match) { if (!link.href.startsWith("https://") && !link.href.startsWith("/interactive/")) throw new Error(`Unsafe learning URL: ${link.href}`); return link; }
  const [,kind,query] = match; const target=normalize(query); const catalog=catalogs[kind];
  const exact = catalog.filter(n=>[n.title,...(n.aliases??[])].some(t=>normalize(t)===target));
  const matches = exact.length ? exact : catalog.filter(n=>[n.title,...(n.aliases??[])].some(t=>normalize(t).includes(target)));
  if (matches.length !== 1) throw new Error(`Learning link ${link.href}: expected one note, found ${matches.length}. Use the exact source title.`);
  return {...link,href:matches[0].href};
}
