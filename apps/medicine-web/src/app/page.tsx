import Link from "next/link";
import { HeartPulse, Microscope, Pill, Stethoscope } from "lucide-react";
import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function HomePage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="grid gap-6 xl:min-h-[calc(100vh-10rem)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-stretch">
      <div className="xl:flex">
        <SearchPanel entries={searchIndex} className="xl:flex-1" />
      </div>

      <section className="rounded-[32px] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6 xl:flex xl:flex-col">
        <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight">Domain Structure</h2>
        <div className="grid gap-3 xl:flex-1">
          <Link href="/cc" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white xl:p-3.5">
            <HeartPulse className="h-5 w-5 text-stone-500" />
            <div className="mt-2 font-medium text-stone-900">Chief Complaint</div>
          </Link>
          <Link href="/drugs" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white xl:p-3.5">
            <Pill className="h-5 w-5 text-stone-500" />
            <div className="mt-2 font-medium text-stone-900">Drugs</div>
          </Link>
          <Link href="/physiology" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white xl:p-3.5">
            <Microscope className="h-5 w-5 text-stone-500" />
            <div className="mt-2 font-medium text-stone-900">Physiology</div>
          </Link>
          <Link href="/skills" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white xl:p-3.5">
            <Stethoscope className="h-5 w-5 text-stone-500" />
            <div className="mt-2 font-medium text-stone-900">Skills</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
