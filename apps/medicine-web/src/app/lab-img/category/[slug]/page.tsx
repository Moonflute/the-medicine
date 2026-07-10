import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { RichTextLines } from "@/components/rich-text-lines";
import { ParentPageFab } from "@/components/parent-page-fab";
import { buildLabImgGroups } from "@/lib/lab-img-groups";
import { buildLabImgOverviewGroups, isLabImgOverviewNote } from "@/lib/lab-img-overview";
import { getLabImgNotes, type DomainNote } from "@/lib/webdb";

function isReferenceSection(title: string) {
  return /참고|reference|references|bibliography|출처/i.test(title);
}

export function generateStaticParams() {
  return buildLabImgGroups(getLabImgNotes()).map((group) => ({ slug: group.slug }));
}

function NoteLinks({
  notes,
  overviewHref,
  overviewLabel,
}: {
  notes: ReturnType<typeof getLabImgNotes>;
  overviewHref?: string;
  overviewLabel?: string;
}) {
  return (
    <div className="space-y-3">
      {overviewHref && overviewLabel ? (
        <div className="flex justify-start">
          <Link
            href={overviewHref}
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase  text-slate-700 transition hover:border-slate-300 hover:bg-white"
          >
            {overviewLabel} overview
          </Link>
        </div>
      ) : null}
      {notes.length > 0 ? (
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/lab-img/${note.slug}`}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
            >
              <span className="pr-3 text-sm font-medium text-slate-950">{note.title}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function InlineNote({
  title,
  note,
  allNotes,
}: {
  title?: string;
  note: DomainNote;
  allNotes: DomainNote[];
}) {
  const visibleSections = note.sections.filter((section) => !isReferenceSection(section.title));
  const overviewGroups = buildLabImgOverviewGroups(note, allNotes);
  const showOverviewTable = isLabImgOverviewNote(note) && overviewGroups.length > 0;

  return (
    <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
      {title ? <h2 className="mb-4 text-2xl font-semibold  text-slate-950">{title}</h2> : null}
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
  );
}

export default async function LabImgCategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const allNotes = getLabImgNotes();
  const group = buildLabImgGroups(allNotes).find((item) => item.slug === params.slug);

  if (!group) {
    notFound();
  }

  const shouldInlineOverview = Boolean(group.overviewNote && group.directNotes.length === 0 && group.childGroups.length === 0);

  return (
    <div className="space-y-6">
      <Link
        href="/lab-img"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to lab categories
      </Link>

      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs uppercase  text-slate-500">Lab & Img</div>
          {group.overviewNote && !shouldInlineOverview ? (
            <Link
              href={`/lab-img/${group.overviewNote.slug}`}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase  text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              {group.title} overview
            </Link>
          ) : null}
        </div>
        <h1 className="mt-3 text-4xl font-semibold ">{group.title}</h1>
      </header>

      {shouldInlineOverview && group.overviewNote ? <InlineNote note={group.overviewNote} allNotes={allNotes} /> : null}

      {group.directNotes.length > 0 ? (
        <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
          <NoteLinks notes={group.directNotes} />
        </section>
      ) : null}

      <div className="space-y-5">
        {group.childGroups.map((childGroup) => (
          <section key={`${group.rawTitle}-${childGroup.rawTitle}`} className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            <div className="mb-4 border-l-4 border-teal-600 py-1 pl-3">
              <h2 className="text-sm font-semibold text-slate-700">{childGroup.title}</h2>
            </div>

            <NoteLinks
              notes={childGroup.notes}
              overviewHref={childGroup.overviewNote ? `/lab-img/${childGroup.overviewNote.slug}` : undefined}
              overviewLabel={childGroup.overviewNote ? childGroup.title : undefined}
            />
          </section>
        ))}
      </div>
      <ParentPageFab href="/lab-img" />
    </div>
  );
}
