import { notFound } from "next/navigation";
import Link from "next/link";
import { DomainNoteCard } from "@/components/domain-note-card";
import { ParentPageFab } from "@/components/parent-page-fab";
import { RichTextLines } from "@/components/rich-text-lines";
import { buildLabImgGroups } from "@/lib/lab-img-groups";
import { buildLabImgOverviewGroups, isLabImgOverviewNote } from "@/lib/lab-img-overview";
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

  const allNotes = getLabImgNotes();
  const visibleSections = note.sections.filter((section) => !isReferenceSection(section.title));
  const overviewGroups = buildLabImgOverviewGroups(note, allNotes);
  const showOverviewTable = isLabImgOverviewNote(note) && overviewGroups.length > 0;
  const parentGroup = buildLabImgGroups(allNotes).find(
    (group) =>
      group.overviewNote?.slug === note.slug ||
      group.directNotes.some((item) => item.slug === note.slug) ||
      group.childGroups.some(
        (childGroup) => childGroup.overviewNote?.slug === note.slug || childGroup.notes.some((item) => item.slug === note.slug),
      ),
  );
  const parentHref = parentGroup ? "/lab-img/category/" + parentGroup.slug : "/lab-img";

  return (
    <div className="space-y-6">
      <DomainNoteCard note={note} />
      <section className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
        {showOverviewTable ? (
          <div className="space-y-5">
            {overviewGroups.map((group) => (
              <section key={group.title} className="overflow-hidden rounded-lg border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold  text-slate-700">
                  {group.title}
                </div>
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-white">
                    <tr className="text-left text-slate-500">
                      <th className="px-4 py-3 font-medium">Item</th>
                      <th className="px-4 py-3 font-medium text-sky-700">Low</th>
                      <th className="px-4 py-3 font-medium text-rose-700">High</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {group.rows.map((row) => (
                      <tr key={`${group.title}-${row.slug}-${row.title}`}>
                        <td className="px-4 py-3 font-medium text-slate-950">
                          <Link href={`/lab-img/${row.slug}`} className="transition hover:text-sky-700">
                            {row.title}
                          </Link>
                        </td>
                        <td className="px-4 py-3 font-medium" style={{ color: "#0369a1" }}>
                          {row.lower || "-"}
                        </td>
                        <td className="px-4 py-3 font-medium" style={{ color: "#be123c" }}>
                          {row.upper || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {visibleSections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h3 className="font-medium text-slate-950">{section.title}</h3>
                <RichTextLines lines={section.content} className="space-y-2 text-sm leading-6 text-slate-700" bulletStyle="plain" />
              </section>
            ))}
          </div>
        )}
      </section>
      <ParentPageFab href={parentHref} />
    </div>
  );
}
