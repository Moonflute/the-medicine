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
      title: "Internal medicine",
      description: "01-10",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 1 && index <= 10;
      }),
    },
    {
      title: "Core specialties",
      description: "11-14",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 11 && index <= 14;
      }),
    },
    {
      title: "Other specialties",
      description: "15+",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 15;
      }),
    },
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Browse</div>
        <h1 className="page-title">Specialties</h1>
      </header>

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="mb-3 flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-950">{group.title}</h2>
              <div className="text-xs font-semibold text-slate-500">{group.description}</div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {group.items.map((specialty) => (
                <Link key={specialty.slug} href={`/specialty/${specialty.slug}`} className="list-tile block p-4">
                  <div className="eyebrow">Specialty</div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">{specialty.name}</div>
                  <div className="mt-2 text-sm text-slate-600">{specialty.count} notes</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

