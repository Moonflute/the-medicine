import { AudioReviewClient } from "@/components/audio-review-client";
import type { AudioDocument, AudioSection } from "@/lib/audio-review";
import { getAllDiseases, getAllSkills, getChiefComplaints, getDrugs, getLabImgNotes, getSpecialties, getSpecialtyToc } from "@/lib/webdb";

function sections(title: string, lines: string[]): AudioSection[] {
  return lines.length ? [{ title, lines }] : [];
}

function toAudioSections(items: Array<{ title: string; content: string[] }>): AudioSection[] {
  return items.map((item) => ({ title: item.title, lines: item.content }));
}

function sortDiseasesForAudio(diseases: ReturnType<typeof getAllDiseases>) {
  const specialtyOrder = new Map<string, number>();
  const tocItems = new Map<string, Array<{ path: string[] }>>();

  getSpecialties().forEach((specialty, index) => {
    specialtyOrder.set(specialty.name, index);
    tocItems.set(specialty.name, getSpecialtyToc(specialty.slug)?.items ?? []);
  });

  const classificationFor = (note: ReturnType<typeof getAllDiseases>[number]) => {
    if (note.specialty.startsWith("10 ") && note.oncologyClassification.length) return note.oncologyClassification;
    if (note.specialty.startsWith("21 ") && note.emergencyClassification.length) return note.emergencyClassification;
    return note.classification;
  };

  const tocPosition = (note: ReturnType<typeof getAllDiseases>[number]) => {
    const path = classificationFor(note).map((item) => item.trim()).filter(Boolean);
    const items = tocItems.get(note.specialty) ?? [];
    const matches = (candidate: string[]) => items.findIndex((item) => (
      item.path.length === candidate.length && item.path.every((part, index) => part === candidate[index])
    ));
    const exact = matches(path);
    if (exact >= 0) return exact;

    for (let start = 1; start < path.length; start += 1) {
      const position = matches(path.slice(start));
      if (position >= 0) return position;
    }
    for (let end = path.length - 1; end > 0; end -= 1) {
      const position = matches(path.slice(0, end));
      if (position >= 0) return position;
    }
    return items.length + 1;
  };

  return diseases.slice().sort((a, b) => {
    const specialtyDifference = (specialtyOrder.get(a.specialty) ?? Number.MAX_SAFE_INTEGER) - (specialtyOrder.get(b.specialty) ?? Number.MAX_SAFE_INTEGER);
    if (specialtyDifference) return specialtyDifference;
    const tocDifference = tocPosition(a) - tocPosition(b);
    if (tocDifference) return tocDifference;
    return a.title.localeCompare(b.title, "ko");
  });
}

export default function AudioReviewPage() {
  const catalog: AudioDocument[] = [
    ...sortDiseasesForAudio(getAllDiseases()).map((note) => ({
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
