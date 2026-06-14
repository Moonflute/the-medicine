import { notFound } from "next/navigation";
import Link from "next/link";
import { DomainNoteCard } from "@/components/domain-note-card";
import { RichTextLines } from "@/components/rich-text-lines";
import { getLabImgNoteBySlug, getLabImgNotes } from "@/lib/webdb";
import { buildLabImgOverviewRows, isLabImgOverviewNote } from "@/lib/lab-img-overview";

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

  const allNotes = getLabImgNotes();
  const visibleSections = note.sections.filter((section) => !isReferenceSection(section.title));
  const overviewRows = buildLabImgOverviewRows(note, allNotes);
  const showOverviewTable = isLabImgOverviewNote(note) && overviewRows.length > 0;

  return (
    <div className="space-y-6">
      <DomainNoteCard note={note} />
      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm">
        {showOverviewTable ? (
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            <table className="min-w-full divide-y divide-stone-200 text-sm">
              <thead className="bg-stone-50/80">
                <tr className="text-left text-stone-600">
                  <th className="px-4 py-3 font-medium">항목명</th>
                  <th className="px-4 py-3 font-medium">하한치</th>
                  <th className="px-4 py-3 font-medium">상한치</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                {overviewRows.map((row) => (
                  <tr key={row.slug}>
                    <td className="px-4 py-3 font-medium text-stone-900">
                      <Link href={`/lab-img/${row.slug}`} className="transition hover:text-sky-700">
                        {row.title}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-stone-700">{row.lower || "-"}</td>
                    <td className="px-4 py-3 text-stone-700">{row.upper || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-6">
            {visibleSections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h3 className="font-medium text-stone-900">{section.title}</h3>
                <RichTextLines lines={section.content} className="space-y-2 text-sm leading-6 text-stone-700" bulletStyle="plain" />
              </section>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
