import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ParentPageFab } from "@/components/parent-page-fab";
import { getCanonicalCategorySlugForLegacy, getChiefComplaintCategories, getChiefComplaints, getChiefComplaintsByCategory, getWardGroups, WARD_CATEGORY } from "@/lib/webdb";

export function generateStaticParams() {
  const current = getChiefComplaintCategories().map((category) => category.slug);
  const legacy = getChiefComplaints()
    .filter((note) => note.legacyCategory)
    .map((note) => Buffer.from(note.legacyCategory!, "utf-8").toString("base64url"));
  return [...new Set([...current, ...legacy])].map((category) => ({ category }));
}

export default async function ChiefComplaintCategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const canonical = getCanonicalCategorySlugForLegacy(params.category);
  if (canonical) redirect(`/cc/category/${canonical}`);
  const category = getChiefComplaintCategories().find((item) => item.slug === params.category);
  if (!category) notFound();
  const groups = category.name === WARD_CATEGORY ? getWardGroups() : null;
  const notes = getChiefComplaintsByCategory(params.category);
  const title = category.name;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/cc" className="transition hover:text-slate-950">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{title}</span>
      </div>

      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase  text-slate-500">Chief Complaint Category</div>
        <h1 className="mt-3 text-4xl font-semibold ">{title}</h1>
      </header>

      <div className="grid gap-3">
        {groups ? groups.map((group, index) => (
          <Link key={group.slug} href={`/cc/category/${params.category}/group/${group.slug}`} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-teal-300">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">{index + 1}</span>
              <span className="font-medium text-slate-950">{group.name}</span>
              {group.count > 0 && <span className="text-sm text-slate-500">{group.count}</span>}
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          </Link>
        )) : notes.map((note, index) => (
          <Link
            key={note.slug}
            href={`/cc/category/${params.category}/${note.slug}`}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-slate-300"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {index + 1}
              </span>
              <span className="truncate font-medium text-slate-950">{note.title}</span>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          </Link>
        ))}
      </div>
      <ParentPageFab href="/cc" />
    </div>
  );
}
