import { AudioReviewClient } from "@/components/audio-review-client";
import type { AudioDocument, AudioSection } from "@/lib/audio-review";
import { getAllDiseases, getAllSkills, getChiefComplaints, getDrugs, getLabImgNotes } from "@/lib/webdb";

function sections(title: string, lines: string[]): AudioSection[] {
  return lines.length ? [{ title, lines }] : [];
}

function toAudioSections(items: Array<{ title: string; content: string[] }>): AudioSection[] {
  return items.map((item) => ({ title: item.title, lines: item.content }));
}

export default function AudioReviewPage() {
  const catalog: AudioDocument[] = [
    ...getAllDiseases().map((note) => ({
      id: note.slug, domain: "disease" as const, title: note.title, category: note.specialty, href: `/disease/${note.slug}`,
      sections: [...sections("개요", [note.definition ?? "", ...(note.overview ?? [])]), ...toAudioSections(note.sections)],
    })),
    ...getChiefComplaints().map((note) => ({
      id: note.id, domain: "cc" as const, title: note.title, category: note.category || "Chief Complaint", href: `/cc/category/${Buffer.from(note.category || "기타", "utf-8").toString("base64url")}/${note.slug}`,
      sections: [
        ...sections("개념", note.concept), ...sections("문진", note.history), ...sections("진찰", note.exam), ...sections("초기 접근", note.plan), ...sections("감별진단", note.differentials), ...toAudioSections(note.sections),
      ],
    })),
    ...getDrugs().map((note) => ({
      id: note.id, domain: "drug" as const, title: note.title, category: note.category, href: `/drugs/${note.slug}`,
      sections: [...sections("요약", note.summary), ...toAudioSections(note.sections)],
    })),
    ...getLabImgNotes().map((note) => ({
      id: note.id, domain: "lab" as const, title: note.title, category: note.category, href: `/lab-img/${note.slug}`,
      sections: [...sections("요약", note.summary), ...toAudioSections(note.sections)],
    })),
    ...getAllSkills().map((note) => ({
      id: `skill:${note.id}`, domain: "skill" as const, title: note.name, category: note.categoryName, href: `/skills/${note.id}`,
      sections: [
        ...sections("요약", note.summary), ...sections("적응증", note.indications), ...sections("준비물", note.supplies),
        { title: "술기 순서", lines: note.steps.map((step) => `${step.stepNumber}. ${step.title}. ${step.description}${step.warning ? ` 주의: ${step.warning}` : ""}`) },
        ...sections("합병증", note.complications), ...sections("주의사항", note.precautions),
      ],
    })),
  ];
  return <AudioReviewClient catalog={catalog} />;
}
