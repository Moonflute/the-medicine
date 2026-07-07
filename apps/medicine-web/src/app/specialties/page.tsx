import Link from "next/link";
import {
  Activity,
  Baby,
  Bone,
  Brain,
  BrainCircuit,
  Bug,
  CircleDot,
  Droplet,
  Droplets,
  Dumbbell,
  Ear,
  Eye,
  HeartPulse,
  Ribbon,
  ScanFace,
  Scissors,
  ShieldAlert,
  ShieldPlus,
  Utensils,
  Venus,
  Wind,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { getSpecialties } from "@/lib/webdb";

type SpecialtyGroup = {
  title: string;
  description: string;
  items: ReturnType<typeof getSpecialties>;
};

const iconByIndex: Record<number, LucideIcon> = {
  1: HeartPulse,
  2: Wind,
  3: Utensils,
  4: Activity,
  5: Droplets,
  6: Bug,
  7: Bone,
  8: ShieldAlert,
  9: Droplet,
  10: Ribbon,
  11: Baby,
  12: Venus,
  13: Scissors,
  14: Brain,
  15: BrainCircuit,
  16: ScanFace,
  17: Eye,
  18: Ear,
  19: CircleDot,
  20: Siren,
  21: Bone,
  22: Dumbbell,
};

export default function SpecialtiesPage() {
  const specialties = getSpecialties();
  const parseIndex = (name: string) => Number.parseInt(name.slice(0, 2), 10);

  const groups: SpecialtyGroup[] = [
    {
      title: "\uB0B4\uACFC",
      description: "01-10",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 1 && index <= 10;
      }),
    },
    {
      title: "\uC678\uC0B0\uC18C",
      description: "11-14",
      items: specialties.filter((specialty) => {
        const index = parseIndex(specialty.name);
        return index >= 11 && index <= 14;
      }),
    },
    {
      title: "\uB9C8\uC774\uB108",
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
              {group.items.map((specialty) => {
                const SpecialtyIcon = iconByIndex[parseIndex(specialty.name)] ?? ShieldPlus;

                return (
                  <Link
                    key={specialty.slug}
                    href={`/specialty/${specialty.slug}`}
                    className="list-tile flex min-h-10 items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-950"
                  >
                    <SpecialtyIcon className="h-4 w-4 shrink-0 text-teal-700" />
                    <span className="truncate">{specialty.name}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}