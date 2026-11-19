import { correctAnswers } from "./qbank-grading";
import type { QbankAnswer, QbankQuestion } from "./types";

const keys: QbankAnswer[] = ["A", "B", "C", "D", "E"];
const marker = "(?:[A-E]|[1-5]|[①-⑤])";
const labels = `${marker}(?:\\s*(?:[,/·、]|및|와|과)\\s*${marker}|\\s+(?=[①-⑤])${marker})*`;
const optionLine = new RegExp(`^\\s*(?:[-*•]\\s+)?(?:\\*\\*)?(?:보기\\s*|선택지\\s*)?(${labels})(?:\\s*번)?(?:\\*\\*)?\\s*([:：.)）]?)(?:\\*\\*)?(?:\\s+|$)(.*)$`);
const optionSection = /^(오답\s*(?:해설|풀이|피하기|분석|포인트)|(?:보기|선택지)(?:별)?\s*(?:해설|풀이|분석)|정답\s*(?:및\s*)?해설)/;
const sectionEnd = /^(?:[\[［【#]|출제\s*의도|심화\s*해설|핵심\s*(?:요약|정리)|참고|근거|추가\s*\)|해설\s*\d)/;
const separateExample = /^(?:(?:추가|별도)\s*(?:예제|예시(?:\s*문항)?|문항)|추가\s*[:：]\s*다른\s*영상\s*상황)/;
const exampleQuestion = /[?？]\s*(?:\d{4}\s*)?(?:기출(?:\s*변형)?|예제|연습\s*문제)\s*$/;
const mainExplanation = /^(?:해설\s*[1-9]\d*(?:\s*[\]］】:：]|$)|본문항\s*해설)/;

function plain(value: string): string {
  return value.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
}

function optionKeys(value: string): QbankAnswer[] {
  return (value.match(/[A-E1-5①-⑤]/g) ?? []).map(label => keys[
    /[A-E]/.test(label) ? label.charCodeAt(0) - 65 : /[1-5]/.test(label) ? Number(label) - 1 : label.charCodeAt(0) - 0x2460
  ]);
}

/** Enrich only explicit option commentary, never generic numbered teaching lists.
 * Source labels always refer to the stored option IDs, not a display position.
 * The saved explanation, answer key and question payload are not mutated.
 */
export function practiceExplanationText(question: QbankQuestion): string {
  const text = question.explanation;
  if (question.questionBank !== "practice" || !text) return text;
  const answers = correctAnswers(question);
  let context: "wrong" | "correct" | "options" | undefined;
  let inFence = false;
  let inSeparateExample = false;
  return text.replace(/\r\n?/g, "\n").split("\n").flatMap(line => {
    if (/^\s*```/.test(line)) { inFence = !inFence; context = undefined; return [line]; }
    if (inFence || /^\s*\|/.test(line)) return [line];

    const clean = line.trim().replace(/^(?:#{1,6}\s+|[-*•]\s+)/, "").replace(/\*\*/g, "");
    const unwrapped = clean.replace(/^[\[［【]\s*/, "");
    // A secondary vignette has its own option numbering. Its later
    // "정답 및 해설" / "오답피하기" headings must not reactivate the parent
    // question's options. Resume only at an explicit main explanation boundary.
    if (separateExample.test(unwrapped) || exampleQuestion.test(clean)) {
      inSeparateExample = true;
      context = undefined;
      return [line];
    }
    if (inSeparateExample) {
      if (!mainExplanation.test(unwrapped)) return [line];
      inSeparateExample = false;
      context = undefined;
    }
    const renderedTitle = line.trim().match(/^\*\*([A-E])\. (.+)\*\*$/);
    if (renderedTitle && plain(renderedTitle[2]) === plain(question.options[renderedTitle[1] as QbankAnswer] ?? "")) {
      if (context === "correct") context = undefined;
      return [line];
    }
    const section = unwrapped.match(optionSection);
    let candidate = line;
    let heading: string | undefined;
    if (section) {
      context = section[1].startsWith("오답") ? "wrong" : section[1].startsWith("정답") ? "correct" : "options";
      heading = section[1];
      candidate = unwrapped.slice(section[0].length).replace(/^\s*[\]］】:：]?\s*/, "");
      if (!candidate) return [line];
    } else if (sectionEnd.test(clean) || /(?:기출|예제|연습\s*문제)\s*$/.test(clean) || /[?？]\s*$/.test(clean)) {
      context = undefined;
    }

    const match = candidate.match(optionLine);
    if (!match) return [line];
    const [, sourceLabels, delimiter, body] = match;
    // A colon is an explicit label; periods/parentheses often enumerate steps,
    // organisms (C. difficile), figure panels or diagnostic criteria instead.
    const explicit = /[:：]/.test(delimiter);
    if (!explicit && (!context || !/[①-⑤]/.test(sourceLabels))) return [line];
    const referenced = optionKeys(sourceLabels);
    if (!referenced.length || new Set(referenced).size !== referenced.length
      || referenced.some(key => !question.options[key]?.trim())) return [line];
    // A mismatched original answer reference is not safe to relabel.
    if ((context === "correct" && referenced.some(key => !answers.includes(key)))
      || (context === "wrong" && referenced.some(key => answers.includes(key)))) {
      context = undefined;
      return [line];
    }
    if (!body || /^번(?:이다|입니다|\s*이다)/.test(body)) return [line];
    if (referenced.length === 1 && plain(body) === plain(question.options[referenced[0]]!)) return [line];

    const titles = referenced.map(key => `**${key}. ${plain(question.options[key]!)}**`);
    // Subsequent numbered facts in a correct-answer paragraph can be an
    // algorithm (e.g. ABCDE trauma assessment), not more option commentary.
    if (context === "correct") context = undefined;
    return [...(heading ? [heading, ""] : []), ...titles, "", body];
  }).join("\n");
}
