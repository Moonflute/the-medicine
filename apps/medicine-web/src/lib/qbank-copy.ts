import { correctAnswers } from "./qbank-grading";
import { OPTION_LABELS } from "./qbank-option-order";
import { reflowOcrText } from "./ocr-paragraphs";
import type { QbankAnswer, QbankQuestion } from "./types";

function visibleText(question: QbankQuestion, value: string): string {
  return question.sourceSplit === "private-scan" ? reflowOcrText(value) : value;
}

type OptionLabels = "position" | "source";

export function qbankQuestionCopyText(question: QbankQuestion, displayedOptions: QbankAnswer[], labels: OptionLabels = "position"): string {
  const options = displayedOptions.map((key, index) => `${labels === "source" ? key : OPTION_LABELS[index]}. ${visibleText(question, question.options[key] ?? "")}`);
  return [visibleText(question, question.question), ...options].join("\n").trim();
}

export function qbankExplanationCopyText(question: QbankQuestion, displayedOptions: QbankAnswer[], labels: OptionLabels = "position"): string {
  const correct = correctAnswers(question);
  const answer = question.gradingMode === "all-credit"
    ? "전원 정답 처리 · 조건/보기 불완전"
    : correct.length
      ? `정답: ${correct.map((key) => labels === "source" ? key : OPTION_LABELS[displayedOptions.indexOf(key)] ?? key).join(", ")}`
      : question.ungradedReason || "정답 미확인 문항입니다.";
  const explanation = question.explanation
    ? visibleText(question, question.explanation)
    : "검증된 해설은 아직 준비되지 않았습니다.";
  return `${answer}\n\n${explanation}`.trim();
}

export function qbankCombinedCopyText(question: QbankQuestion, displayedOptions: QbankAnswer[], labels: OptionLabels = "position"): string {
  return `${qbankQuestionCopyText(question, displayedOptions, labels)}\n\n${qbankExplanationCopyText(question, displayedOptions, labels)}`;
}
