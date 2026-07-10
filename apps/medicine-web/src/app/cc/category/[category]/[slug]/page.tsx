import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChiefComplaintDetailTabs } from "@/components/chief-complaint-detail-tabs";
import { getChiefComplaintByCategoryAndSlug, getChiefComplaintCategories, getChiefComplaintsByCategory, getDiseaseLinks } from "@/lib/webdb";

export function generateStaticParams() {
  return getChiefComplaintCategories().flatMap((category) =>
    getChiefComplaintsByCategory(category.slug).map((note) => ({
      category: category.slug,
      slug: note.slug,
    })),
  );
}

export default async function ChiefComplaintDetailByCategoryPage(props: { params: Promise<{ category: string; slug: string }> }) {
  const params = await props.params;
  const note = getChiefComplaintByCategoryAndSlug(params.category, params.slug);
  const diseaseLinks = getDiseaseLinks();

  if (!note) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/cc" className="transition hover:text-slate-950">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/cc/category/${params.category}`} className="transition hover:text-slate-950">
          {note.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{note.title}</span>
      </div>

      <ChiefComplaintDetailTabs note={note} diseaseLinks={diseaseLinks} />
    </div>
  );
}
