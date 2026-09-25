import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ParentPageFab } from "@/components/parent-page-fab";
import { getChiefComplaintsByWardGroup, getWardGroupBySlug, getWardGroups, WARD_CATEGORY } from "@/lib/webdb";

const categorySlug = Buffer.from(WARD_CATEGORY, "utf-8").toString("base64url");

export function generateStaticParams() {
  return getWardGroups().map((group) => ({ category: categorySlug, group: group.slug }));
}

export default async function WardGroupPage(props: { params: Promise<{ category: string; group: string }> }) {
  const params = await props.params;
  const group = getWardGroupBySlug(params.group);
  if (params.category !== categorySlug || !group) notFound();

  const notes = getChiefComplaintsByWardGroup(group.slug);
  const parentHref = `/cc/category/${categorySlug}`;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/cc" className="transition hover:text-slate-950">CC</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={parentHref} className="transition hover:text-slate-950">{WARD_CATEGORY}</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{group.name}</span>
      </div>

      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm sm:p-8">
        <div className="text-xs uppercase text-slate-500">{WARD_CATEGORY}</div>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">{group.name}</h1>
      </header>

      {notes.length > 0 ? <div className="grid gap-3">
        {notes.map((note, index) => (
          <Link key={note.slug} href={`/cc/category/${Buffer.from(note.category, "utf-8").toString("base64url")}/${note.slug}${note.category === WARD_CATEGORY ? "" : "?tab=inpatient"}`} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-teal-300">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">{index + 1}</span>
              <span className="truncate font-medium text-slate-950">{note.title}</span>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          </Link>
        ))}
      </div> : <p className="border-t border-slate-200 py-6 text-sm text-slate-500">등록된 문서가 없습니다.</p>}

      <ParentPageFab href={parentHref} />
    </div>
  );
}
