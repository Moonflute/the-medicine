// Reflow scan line wraps without changing any non-whitespace character.
// Keep paragraph breaks, lists, section labels and clinical result rows.
const listStart = /^(?:\(\d{1,2}\)|[•●○▪■▶※*]|[-–—]\s|[①-⑳㉠-㉻]|(?:\d{1,2}|[A-Ea-e])[.)]\s|[가나다라마바사아자차카타파하]\)\s)/;
const resultStart = /^(?:\[|［|【|혈액\s*검사|소변\s*검사|검사\s*결과|혈청|말초혈액|뇌척수액|WBC\b|RBC\b|Hb\b|Hgb\b|Hct\b|PLT\b|platelet\b|BUN\b|Cr\b|Na(?:\/|\s)|K(?:\/|\s)|Ca(?:\/|\s)|pH\s*\d|PaCO|PaO|HCO|AST\b|ALT\b|CRP\b|ESR\b|glucose\b|protein\s*\(|RPR\b|HIV\b|HBsAg\b)/i;
const sectionHeading = /^(?:출제\s*의도|정답\s*(?:및\s*)?해설|오답\s*피하기|(?:핵심|혁심|핵삼)\s*(?:요약|요악)|Ref\s*[:：])/i;
const heading = /^(?:(?:핵심|혁심|핵삼)\s*(?:요약|요악)|해설|정답|참고|진단|치료|증상|원인|검사|예후|감별진단|오답\s*해설|정리)(?:\s*[:：].*|\s*\[.*|\s*［.*)?$/;
function numericRow(line: string): boolean {
  const tokens = line.trim().split(/\s+/);
  const numbers = tokens.filter((token) => /^[-+−]?\d+(?:[.,]\d+)*(?:%|[+−-])?$/.test(token)).length;
  return numbers >= 2 && numbers / tokens.length >= 0.4 && !/[가-힣]{3}(?:다|고|며|서)[.,]?/.test(line);
}
const sentenceEnd = /(?:[.!?。？！][”’"')）\]]*)$/;
const continuation = /^(?:다|고|은|는|을|를|의|와|과|에서|에게|으로|이다|입니다|한다|하였다|된다|되었다|었다|았다)(?=\s|[.,?!])/;
// These are ordinary split-word endings, not corrections to clinical content.
const splitWords = /(?:의료\n인|질\n환|검\n사|치\n료|진\n단|예\n방|환\n자|적\n절|제\n거|고\n칼륨|산소포화\n도|호흡\n음|정\n상|행성\n이하선염)/g;

export function reflowOcrText(text: string): string {
  if (!text.includes("\n") && !text.includes("\r")) return text;
  const prepared = text.replace(/\r\n?/g, "\n").replace(splitWords, (part) => part.replace("\n", ""));
  const lines = prepared.split("\n");
  let out = lines[0].trimEnd();
  for (let i = 1; i < lines.length; i++) {
    const previous = lines[i - 1].trim();
    const next = lines[i].trim();
    const structured = !previous || !next || listStart.test(next) || (resultStart.test(next) && (/^(?:\[|［|【)/.test(next) || /\d|[+−]/.test(next)))
      || sectionHeading.test(next) || /^(?:출제\s*의도|정답\s*(?:및\s*)?해설|오답\s*피하기)$/.test(previous) || numericRow(previous) || numericRow(next) || heading.test(previous) || heading.test(next) || sentenceEnd.test(previous)
      || /\t|\S {2,}\S/.test(lines[i]) || /\t|\S {2,}\S/.test(lines[i - 1]);
    const separator = structured ? "\n" : /[가-힣]$/.test(previous) && continuation.test(next) ? "" : " ";
    out += separator + next;
  }
  return out;
}
