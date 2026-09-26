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
  Ear,
  Eye,
  HeartPulse,
  Network,
  ScanFace,
  Scissors,
  ShieldAlert,
  ShieldPlus,
  Siren,
  UserRound,
  Utensils,
  Venus,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { getSpecialties } from "@/lib/webdb";

type SpecialtyGroup = {
  title: string;
  description: string;
  items: ReturnType<typeof getSpecialties>;
};

type HubItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  className: string;
  iconClassName: string;
};

const iconByIndex: Record<number, LucideIcon> = {
  1: HeartPulse,
  2: Wind,
  3: Utensils,
  4: Activity,
  5: Droplets,
  6: ShieldAlert,
  7: Bone,
  8: Bug,
  9: Droplet,
  11: Scissors,
  12: Baby,
  13: Venus,
  14: UserRound,
  15: Brain,
  16: BrainCircuit,
  17: Ear,
  18: Eye,
  19: ScanFace,
  20: CircleDot,
  21: Siren,
  22: Bone,
};

export default function SpecialtiesPage() {
  const specialties = getSpecialties();
  const parseIndex = (name: string) => Number.parseInt(name.slice(0, 2), 10);
  const infectionSpecialty = specialties.find(
    (specialty) => specialty.name.replace(/^\d+\s*/, "").trim() === "\uAC10\uC5FC",
  );

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

  const hubItems: HubItem[] = [
    ...(infectionSpecialty
      ? [
          {
            title: "\uAC10\uC5FC Hub",
            href: `/specialty/${infectionSpecialty.slug}/hub`,
            icon: Network,
            className: "border-teal-200 bg-teal-50 text-teal-950 hover:border-teal-400 hover:bg-teal-100",
            iconClassName: "text-teal-700",
          },
        ]
      : []),
    {
      title: "\uC0B0\uBD80\uC18C\uC544 Hub",
      href: "/maternal-child-hub",
      icon: Baby,
      className: "border-rose-200 bg-rose-50 text-rose-950 hover:border-rose-400 hover:bg-rose-100",
      iconClassName: "text-rose-700",
    },
    {
      title: "\uC2E0\uACBD\uACC4 Hub",
      href: "/nervous-system-hub",
      icon: BrainCircuit,
      className: "border-indigo-200 bg-indigo-50 text-indigo-950 hover:border-indigo-400 hover:bg-indigo-100",
      iconClassName: "text-indigo-700",
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

            <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
              {group.items.map((specialty) => {
                const index = parseIndex(specialty.name);
                const SpecialtyIcon = iconByIndex[index] ?? ShieldPlus;

                return (
                  <Link
                    key={specialty.slug}
                    href={`/specialty/${specialty.slug}`}
                    className="list-tile flex min-h-10 items-center gap-1.5 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm md:min-h-24 md:flex-col md:justify-center md:px-2 md:py-3 md:text-center lg:min-h-28"
                  >
                    {index === 10 ? (
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center text-sm leading-none md:h-8 md:w-8 md:text-3xl" aria-hidden="true">
                        🦀
                      </span>
                    ) : (
                      <SpecialtyIcon className="h-4 w-4 shrink-0 text-teal-700 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                    )}
                    <span className="min-w-0 truncate md:overflow-visible md:whitespace-normal md:text-center md:leading-tight">{specialty.name}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <section>
          <div className="mb-2 flex items-end justify-between gap-4">
            <h2 className="text-base font-semibold text-slate-950">Hub</h2>
            <div className="text-xs font-semibold text-slate-500">Clinical tools</div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
            {hubItems.map(({ title, href, icon: HubIcon, className, iconClassName }) => (
              <Link
                key={href}
                href={href}
                className={`flex min-h-10 items-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition hover:shadow-sm sm:gap-2 sm:px-3 sm:text-sm md:min-h-24 md:flex-col md:justify-center md:px-2 md:py-3 md:text-center lg:min-h-28 ${className}`}
              >
                <HubIcon className={`h-4 w-4 shrink-0 md:h-7 md:w-7 lg:h-8 lg:w-8 ${iconClassName}`} />
                <span className="min-w-0 truncate md:overflow-visible md:whitespace-normal md:text-center md:leading-tight">{title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
