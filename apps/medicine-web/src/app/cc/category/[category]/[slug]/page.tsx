import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChiefComplaintCard } from "@/components/chief-complaint-card";
import { ChiefComplaintRecommendationPicker } from "@/components/chief-complaint-recommendation-picker";
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

      <ChiefComplaintCard note={note} />

      <section className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div className="mb-3 text-xs uppercase  text-slate-500">Full sections</div>
        <div className="space-y-4">
          {note.sections.map((section) => {
            const isPatientEducation = section.title.includes("환자교육");

            return (
              <section key={section.title} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-medium text-slate-950">{isPatientEducation ? "감별진단" : section.title}</h3>
                {isPatientEducation ? (
                  <div className="mt-3 space-y-4">
                    <details className="rounded-md border border-slate-200 bg-slate-50/70">
                      <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950">
                        상세
                      </summary>
                      <RichTextLines
                        lines={section.content}
                        className="border-t border-slate-200 px-3 py-3 text-sm leading-6 text-slate-700"
                      />
                    </details>
                    <ChiefComplaintRecommendationPicker recommendations={note.recommendations} />
                  </div>
                ) : (
                  <RichTextLines lines={section.content} className="mt-2 space-y-2 text-sm leading-6 text-slate-700" />
                )}
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}


