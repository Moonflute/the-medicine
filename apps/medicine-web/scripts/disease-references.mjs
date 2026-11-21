// Only explicit reference sections are separated. A clinical bullet beginning
// with "참고:" is not a bibliography and must stay in the authored section.
export function isDiseaseReferenceSection(title) {
  return /^(?:\d+[.)．]?\s*)?(?:출처|참고(?:\s*(?:문헌|자료|지침|가이드라인))?|references?|sources?|bibliography)(?:\s*\([^)]*\))?\s*$/i.test(title.trim());
}

const sourceLabel = /^(?:(?:(?:보완|추가|통합|OCR)\s*)?(?:출처|근거)(?:\s*보완)?|참고(?:\s*(?:문헌|자료|지침|가이드라인))?|references?|sources?)\s*[:：]\s*/i;
const markdownLink = /\[((?:\\.|[^\\\]])+)\]\((https?:\/\/(?:[^\s()]|\([^\s()]*\))+)\)/g;

function linkedReference(label, url) {
  return `[${label.replace(/[\\[\]]/g, "\\$&")}](${url})`;
}

function sourceUrlKey(value) {
  try {
    const url = new URL(value);
    // PMC accepts both numeric and PMC-prefixed article identifiers.
    const pathname = url.pathname.replace(/\/$/, "").replace(/^(\/articles\/)PMC(?=\d+$)/i, "$1");
    return `${url.hostname.toLowerCase()}${pathname}${url.search}${url.hash}`;
  } catch {
    return value.trim();
  }
}

function cleanReferenceLine(line) {
  return line.trim().replace(/^(?:[-*•]|\d+[.)])\s+/, "").replace(sourceLabel, "").trim();
}

function sourceTextKey(text) {
  return text.replace(/\s+/g, " ").replace(/[.。]\s*$/, "").toLowerCase();
}

export function separateDiseaseReferences(allSections, metadataSources = []) {
  const sections = [];
  const candidates = [];
  for (const section of allSections) {
    if (!isDiseaseReferenceSection(section.title)) {
      sections.push(section);
      continue;
    }
    let updateBlock = false;
    for (const line of section.content) {
      if (/^last updated\b/i.test(line.trim())) { updateBlock = true; continue; }
      if (updateBlock && /^\d{4}[-./]/.test(line.trim())) continue;
      if (line.trim()) updateBlock = false;
      const text = cleanReferenceLine(line);
      if (text && !/^[-*_]{3,}$/.test(text)) candidates.push(text);
    }
  }

  const references = [];
  const seenText = new Set();
  const seenUrls = new Set();
  const textOnly = new Map();
  const add = (text) => {
    const textKey = sourceTextKey(text);
    if (seenText.has(textKey)) return;
    const links = [...text.matchAll(markdownLink)];
    const singleLink = links.length === 1 && text.replace(links[0][0], "").replace(/[.。]/g, "").trim() === "";
    if (singleLink && seenUrls.has(sourceUrlKey(links[0][2]))) return;
    // Keep prose around citations, including page numbers and scope notes.
    references.push(`- ${text}`);
    seenText.add(textKey);
    if (!links.length) textOnly.set(textKey, references.length - 1);
    for (const link of links) seenUrls.add(sourceUrlKey(link[2]));
  };
  for (const text of candidates) add(text);
  for (const { label, url } of metadataSources) {
    if (!label?.trim() || (url && seenUrls.has(sourceUrlKey(url)))) continue;
    const textIndex = textOnly.get(sourceTextKey(label));
    if (url && textIndex !== undefined) {
      references[textIndex] = `- ${linkedReference(references[textIndex].slice(2), url)}`;
      textOnly.delete(sourceTextKey(label));
      seenUrls.add(sourceUrlKey(url));
      continue;
    }
    add(url ? linkedReference(label, url) : label);
  }
  return { sections, references };
}
