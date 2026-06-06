import { notFound } from "next/navigation";
import { DomainNoteCard } from "@/components/domain-note-card";
import { RichTextLines } from "@/components/rich-text-lines";
import { getDrugBySlug, getDrugs } from "@/lib/webdb";

export function generateStaticParams() {
  return getDrugs().map((note) => ({ slug: note.slug }));
}

export default async function DrugDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getDrugBySlug(params.slug);

  if (!note) notFound();

  return (
    <div className="space-y-6">
      <DomainNoteCard note={note} />
      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm">
        <div className="space-y-4">
          {note.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-stone-200 p-4">
              <h3 className="font-medium text-stone-900">{section.title}</h3>
              <RichTextLines lines={section.content} className="mt-2 space-y-2 text-sm leading-6 text-stone-700" />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
