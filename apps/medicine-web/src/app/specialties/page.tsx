import Link from "next/link";
import { getSpecialties } from "@/lib/webdb";

export default function SpecialtiesPage() {
  const specialties = getSpecialties();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Browse</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Specialties</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
          `02 Diseases` 폴더 구조를 그대로 반영합니다. 과 폴더가 바뀌면 이 목록도 같이 바뀝니다.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {specialties.map((specialty) => (
          <Link
            key={specialty.slug}
            href={`/specialty/${specialty.slug}`}
            className="rounded-[28px] border border-stone-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Specialty</div>
            <div className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900">{specialty.name}</div>
            <div className="mt-3 text-sm text-stone-600">{specialty.count} notes connected</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
