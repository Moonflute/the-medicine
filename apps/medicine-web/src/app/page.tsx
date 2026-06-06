import Link from "next/link";
import { ArrowRight, HeartPulse, Microscope, Pill, Stethoscope } from "lucide-react";
import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex, getManifest } from "@/lib/webdb";

export default function HomePage() {
  const searchIndex = getDiseaseSearchIndex();
  const manifest = getManifest();

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="rounded-[36px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-800">
          v 0.0.1
        </div>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          질병 노트를 웹에서 빠르게 찾고 복습하는 공부용 셸입니다.
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/specialties"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-stone-900/20 [&_svg]:text-white"
          >
            Browse specialties
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/review" className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm text-stone-700">
            Open review
          </Link>
        </div>
      </section>

      <SearchPanel entries={searchIndex} />

      <section className="rounded-[32px] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
        <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight">Domain Structure</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Link href="/cc" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <HeartPulse className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Chief Complaint</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.chiefComplaints.count} notes</div>
          </Link>
          <Link href="/drugs" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Pill className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Drugs</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.drugs.count} notes</div>
          </Link>
          <Link href="/physiology" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Microscope className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Physiology</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.physiology.count} notes</div>
          </Link>
          <Link href="/skills" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Stethoscope className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Skills</div>
            <div className="mt-1 text-sm text-stone-600">legacy structure imported</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
