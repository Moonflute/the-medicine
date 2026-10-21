import { RichTextLines } from "@/components/rich-text-lines";
import { reflowOcrText } from "@/lib/ocr-paragraphs";

/** The question skin already owns the surrounding message or result panel. */
export function QbankExplanation({ text, reflow = false }: { text: string; reflow?: boolean }) {
  const content = reflow ? reflowOcrText(text) : text;
  return <div data-highlight-block="explanation" className="qbank-feedback-body qbank-explanation">
    <RichTextLines lines={content.replace(/\r\n?/g, "\n").split("\n")} presentation="embedded" bulletStyle="plain" className="space-y-2.5" />
  </div>;
}
