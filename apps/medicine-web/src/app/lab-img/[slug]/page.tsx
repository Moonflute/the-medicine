import { notFound } from "next/navigation";
import Link from "next/link";
import { DomainNoteCard } from "@/components/domain-note-card";
import { ECGWorkbench } from "@/components/ecg-workbench";
import { ParentPageFab } from "@/components/parent-page-fab";
import { ReviewSaveButton } from "@/components/review-save-button";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { RichTextLines } from "@/components/rich-text-lines";
import { buildLabImgGroups } from "@/lib/lab-img-groups";
import { buildLabImgOverviewGroups, isLabImgOverviewNote } from "@/lib/lab-img-overview";
import { getAllDiseases, getClinicalRelationsFor, getLabImgNoteBySlug, getLabImgNotes, getLabImgToc } from "@/lib/webdb";

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
  const isEcgHub = note.aliases.includes("EKG") && note.aliases.includes("ECG");
  const visibleSections = note.sections.filter((section) => !isReferenceSection(section.title));
  const overviewGroups = buildLabImgOverviewGroups(note, allNotes);
  const showOverviewTable = isLabImgOverviewNote(note) && overviewGroups.length > 0;
  const parentGroup = buildLabImgGroups(allNotes, getLabImgToc()).find(
    (group) =>
      group.overviewNote?.slug === note.slug ||
      group.directNotes.some((item) => item.slug === note.slug) ||
      group.childGroups.some(
        (childGroup) => childGroup.overviewNote?.slug === note.slug || childGroup.notes.some((item) => item.slug === note.slug),
      ),
  );
  const parentHref = parentGroup ? "/lab-img/category/" + parentGroup.slug : "/lab-img";
  const relations = getClinicalRelationsFor("lab", note.id);

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <ReviewSaveButton item={{ type: "lab", id: note.id, title: note.title, href: `/lab-img/${note.slug}`, category: note.category, summary: note.summary[0] || "" }} />
      </div>
      <DomainNoteCard note={note} />
      {isEcgHub ? <ECGWorkbench diseases={getAllDiseases()} /> : null}
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
      {note.contentMeta?.sources?.length ? (
        <section className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
          <h2 className="font-semibold text-slate-950">근거 및 검토 정보</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
            {note.contentMeta.reviewStatus ? <span className="pill">상태 {note.contentMeta.reviewStatus}</span> : null}
            {note.contentMeta.reviewedAt ? <span className="pill">검토일 {note.contentMeta.reviewedAt}</span> : null}
            {note.contentMeta.guidelineYear ? <span className="pill">근거 연도 {note.contentMeta.guidelineYear}</span> : null}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {note.contentMeta.sources.map((source) => (
              <li key={`${source.label}-${source.url}`}>
                <a href={source.url} target="_blank" rel="noreferrer" className="font-medium text-sky-700 hover:underline">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <RelatedClinicalContent relations={relations} />
      <ParentPageFab href={parentHref} />
    </div>
  );
}
