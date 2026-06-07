import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getDiseasesBySpecialty, getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return getSpecialties().map((specialty) => ({ slug: specialty.slug }));
}

export default async function SpecialtyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const notes = getDiseasesBySpecialty(slug);
  const title = notes[0]?.specialty;

  if (notes.length === 0) {
    notFound();
  }

  const grouped = new Map<string, typeof notes>();

  for (const note of notes) {
    const groupKey = note.classification[0]?.trim() || note.category || "기타";
    const bucket = grouped.get(groupKey) ?? [];
    bucket.push(note);
    grouped.set(groupKey, bucket);
  }

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Specialty</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">{title}</h1>
      </header>

      <div className="space-y-5">
        {[...grouped.entries()].map(([groupName, items]) => (
          <section key={groupName} className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-200" />
              <h2 className="shrink-0 font-serif text-xl font-semibold tracking-tight text-stone-900">{groupName}</h2>
              <div className="h-px flex-1 bg-stone-200" />
            </div>

            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {items
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title, "ko"))
                .map((note) => (
                  <Link
                    key={note.slug}
                    href={`/disease/${note.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3 transition hover:border-stone-300 hover:bg-white"
                  >
                    <span className="pr-3 text-sm font-medium text-stone-900">{note.title}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-stone-400" />
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
