import { RichTextLines } from "@/components/rich-text-lines";
import { reflowOcrText } from "@/lib/ocr-paragraphs";
import { practiceExplanationText } from "@/lib/practice-explanation";
import type { QbankQuestion } from "@/lib/types";

/** The question skin already owns the surrounding message or result panel. */
export function QbankExplanation({ text, question, reflow = false }: { text: string; question?: QbankQuestion; reflow?: boolean }) {
  const withOptions = question ? practiceExplanationText({ ...question, explanation: text }) : text;
  const content = reflow ? reflowOcrText(withOptions) : withOptions;
  return <div data-highlight-block="explanation" className="qbank-feedback-body qbank-explanation">
    <RichTextLines lines={content.replace(/\r\n?/g, "\n").split("\n")} presentation="embedded" bulletStyle="plain" className="qbank-reading-text space-y-2.5" />
  </div>;
}
