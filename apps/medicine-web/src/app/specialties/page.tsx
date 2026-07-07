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
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Browse</div>
        <h1 className="page-title">Specialties</h1>
      </header>

      <div className="space-y-7">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="mb-2 flex items-end justify-between gap-4">
              <h2 className="text-base font-semibold text-slate-950">{group.title}</h2>
              <div className="text-xs font-semibold text-slate-500">{group.description}</div>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {group.items.map((specialty) => (
                <Link
                  key={specialty.slug}
                  href={`/specialty/${specialty.slug}`}
                  className="list-tile flex min-h-10 items-center px-3 py-2 text-sm font-semibold text-slate-950"
                >
                  <span className="truncate">{specialty.name}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}