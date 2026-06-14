import { notFound } from "next/navigation";
import { DomainNoteCard } from "@/components/domain-note-card";
import { RichTextLines } from "@/components/rich-text-lines";
import { getLabImgNoteBySlug, getLabImgNotes } from "@/lib/webdb";

function isReferenceSection(title: string) {
  return /참고|reference|references|bibliography|출처/i.test(title);
}

export function generateStaticParams() {
  return getLabImgNotes().map((note) => ({ slug: note.slug }));
}

export default async function LabImgDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getLabImgNoteBySlug(params.slug);

  if (!note) notFound();

  const visibleSections = note.sections.filter((section) => !isReferenceSection(section.title));

  return (
    <div className="space-y-6">
      <DomainNoteCard note={note} />
      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm">
        <div className="space-y-6">
          {visibleSections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h3 className="font-medium text-stone-900">{section.title}</h3>
              <RichTextLines lines={section.content} className="space-y-2 text-sm leading-6 text-stone-700" bulletStyle="plain" />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
