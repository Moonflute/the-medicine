import { notFound } from "next/navigation";
import { ChiefComplaintCard } from "@/components/chief-complaint-card";
import { RichTextLines } from "@/components/rich-text-lines";
import { getChiefComplaintBySlug, getChiefComplaints } from "@/lib/webdb";

export function generateStaticParams() {
  return getChiefComplaints().map((note) => ({ slug: note.slug }));
}

export default async function ChiefComplaintDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getChiefComplaintBySlug(params.slug);

  if (!note) notFound();

  return (
    <div className="space-y-6">
      <ChiefComplaintCard note={note} />
      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm">
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-stone-500">Full sections</div>
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
