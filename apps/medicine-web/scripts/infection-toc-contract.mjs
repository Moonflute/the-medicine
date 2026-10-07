export const INFECTION_CORE_TOC = [
  "감염", "G(+)", "G(-)", "기타 감염질환", "혐기성균", "바이러스",
  "진균", "원생동물", "기생충", "발열", "원내감염", "지역사회 감염",
];

export function validateInfectionToc(headings, classificationPaths = []) {
  if (!Array.isArray(headings) || headings.some(heading => typeof heading !== "string" || !heading.trim())) {
    throw new Error("Infection specialty TOC headings must be nonempty strings");
  }
  if (new Set(headings).size !== headings.length) {
    throw new Error("Infection specialty TOC contains duplicate headings");
  }
  const coreHeadings = headings.filter(heading => INFECTION_CORE_TOC.includes(heading));
  if (JSON.stringify(coreHeadings) !== JSON.stringify(INFECTION_CORE_TOC)) {
    throw new Error("Infection specialty pathogen-centered TOC order changed: " + coreHeadings.join(" > "));
  }
  const additionalHeadings = headings.filter(heading => !INFECTION_CORE_TOC.includes(heading));
  for (const heading of additionalHeadings) {
    if (!classificationPaths.some(parts => Array.isArray(parts) && parts.includes(heading))) {
      throw new Error("Infection specialty added TOC heading has no source document: " + heading);
    }
  }
  return additionalHeadings;
}
