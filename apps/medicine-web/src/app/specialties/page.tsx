import Link from "next/link";
import { getSpecialties } from "@/lib/webdb";

type SpecialtyGroup = {
  title: string;
  description: string;
  items: ReturnType<typeof getSpecialties>;
};

export default function SpecialtiesPage() {
  const specialties = getSpecialties();
  const parseIndex = (name: string) => Number.parseInt(name.slice(0, 2), 10);

  const groups: SpecialtyGroup[] = [
    {
      title: "내과",
      description: "01-10",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 1 && index <= 10;
      }),
    },
    {
      title: "외산소",
      description: "11-14",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 11 && index <= 14;
      }),
    },
    {
      title: "마이너",
      description: "15+",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 15;
      }),
    },
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Browse</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Specialties</h1>
      </header>

      <div className="space-y-5">
        {groups.map((group) => (
          <section key={group.title} className="rounded-[32px] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
            <div className="mb-4 flex items-end justify-between gap-4 border-b border-stone-200 pb-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900">{group.title}</h2>
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-stone-500">{group.description}</div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {group.items.map((specialty) => (
                <Link
                  key={specialty.slug}
                  href={`/specialty/${specialty.slug}`}
                  className="rounded-[24px] border border-stone-200 bg-stone-50/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white"
                >
                  <div className="text-[11px] uppercase tracking-[0.2em] text-stone-500">Specialty</div>
                  <div className="mt-2 font-serif text-lg font-semibold tracking-tight text-stone-900">{specialty.name}</div>
                  <div className="mt-2 text-sm text-stone-600">{specialty.count} notes</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
