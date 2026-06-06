import { notFound } from "next/navigation";
import { DiseaseCard } from "@/components/disease-card";
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

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Specialty</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">{title}</h1>
      </header>

      <div className="grid gap-6">
        {notes.map((note) => (
          <DiseaseCard key={note.slug} note={note} compact />
        ))}
      </div>
    </div>
  );
}
