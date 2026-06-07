import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChiefComplaintCard } from "@/components/chief-complaint-card";
import { RichTextLines } from "@/components/rich-text-lines";
import { getChiefComplaintByCategoryAndSlug, getChiefComplaintCategories, getChiefComplaintsByCategory } from "@/lib/webdb";

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

  if (!note) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-stone-500">
        <Link href="/cc" className="transition hover:text-stone-900">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/cc/category/${params.category}`} className="transition hover:text-stone-900">
          {note.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-stone-900">{note.title}</span>
      </div>

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
