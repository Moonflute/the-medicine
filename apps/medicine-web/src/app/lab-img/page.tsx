import Link from "next/link";
import { Calculator, ExternalLink, FlaskConical } from "lucide-react";
import { buildLabImgGroups } from "@/lib/lab-img-groups";
import { getLabImgNotes } from "@/lib/webdb";

export default function LabImgPage() {
  const groups = buildLabImgGroups(getLabImgNotes());
  const medCalcUrl = "https://chronic-disease-dun.vercel.app/";

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Lab & Img</div>
        <h1 className="page-title">Lab & Imaging</h1>
      </header>

      <section>
        <div className="mb-2 text-base font-semibold text-slate-950">Categories</div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          <a
            href={medCalcUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quick Medical Calculators (external site)"
            className="list-tile flex min-h-10 items-center gap-1.5 border-teal-200 bg-teal-50 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm md:min-h-24 md:flex-col md:justify-center md:px-2 md:py-3 md:text-center lg:min-h-28"
          >
            <span className="flex items-center gap-1.5">
              <Calculator className="h-4 w-4 shrink-0 text-teal-700 md:h-7 md:w-7 lg:h-8 lg:w-8" />
              <ExternalLink className="h-3 w-3 shrink-0 text-teal-700 md:hidden" aria-hidden="true" />
            </span>
            <span className="min-w-0 truncate md:overflow-visible md:whitespace-normal md:text-center md:leading-tight">01 MedCalc</span>
          </a>

          {groups.map((group, index) => (
            <Link
              key={group.slug}
              href={`/lab-img/category/${group.slug}`}
              className="list-tile flex min-h-10 items-center gap-1.5 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm md:min-h-24 md:flex-col md:justify-center md:px-2 md:py-3 md:text-center lg:min-h-28"
            >
              <FlaskConical className="h-4 w-4 shrink-0 text-teal-700 md:h-7 md:w-7 lg:h-8 lg:w-8" />
              <span className="min-w-0 truncate md:overflow-visible md:whitespace-normal md:text-center md:leading-tight">{String(index + 2).padStart(2, "0")} {group.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}