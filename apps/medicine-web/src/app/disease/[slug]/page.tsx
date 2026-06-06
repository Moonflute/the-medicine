import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DiseaseCard } from "@/components/disease-card";
import { getAllDiseases, getDiseaseBySlug } from "@/lib/webdb";

export function generateStaticParams() {
  return getAllDiseases().map((note) => ({ slug: note.slug }));
}

export default async function DiseaseDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getDiseaseBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href={`/specialty/${Buffer.from(note.specialty, "utf-8").toString("base64url")}`}
        className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {note.specialty}
      </Link>

      <DiseaseCard note={note} />

      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 text-sm text-stone-600 shadow-sm">
        Source file:
        <div className="mt-2 break-all font-mono text-xs text-stone-500">{note.sourcePath}</div>
      </section>
    </div>
  );
}
