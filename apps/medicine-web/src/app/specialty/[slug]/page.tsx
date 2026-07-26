import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, CheckCircle2, ChevronRight } from "lucide-react";
import { ParentPageFab } from "@/components/parent-page-fab";
import { InfectionToolEntry } from "@/components/infection-tool-entry";
import { getDiseasesBySpecialty, getSpecialties, getSpecialtyRoadmap, getSpecialtyToc, isSpecialtyIndexDisease } from "@/lib/webdb";

const THIRD_LEVEL_MIN_ITEMS = 4;

type DiseaseNote = ReturnType<typeof getDiseasesBySpecialty>[number];

type ThirdLevelGroup = {
  title: string;
  notes: DiseaseNote[];
};

type SecondLevelGroup = {
  title: string;
  notes: DiseaseNote[];
  thirdLevel: ThirdLevelGroup[];
};

type FirstLevelGroup = {
  title: string;
  overviewNote?: DiseaseNote;
  secondLevel: SecondLevelGroup[];
};

type TocOrder = {
  first: Map<string, number>;
  second: Map<string, number>;
  third: Map<string, number>;
};

export function generateStaticParams() {
  return getSpecialties().map((specialty) => ({ slug: specialty.slug }));
}

function sortLabels(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

function buildTocOrder(toc: ReturnType<typeof getSpecialtyToc>): TocOrder {
  const first = new Map<string, number>();
  const second = new Map<string, number>();
  const third = new Map<string, number>();

  toc?.items.forEach((item, index) => {
    const [a, b, c] = item.path;
    if (a && !first.has(a)) first.set(a, index);
    if (a && b && !second.has(`${a}\u0000${b}`)) second.set(`${a}\u0000${b}`, index);
    if (a && b && c && !third.has(`${a}\u0000${b}\u0000${c}`)) third.set(`${a}\u0000${b}\u0000${c}`, index);
  });

  return { first, second, third };
}

function compareWithOrder(a: string, b: string, order: Map<string, number>, fallbackA = a, fallbackB = b) {
  const aOrder = order.get(a);
  const bOrder = order.get(b);
  if (aOrder !== undefined && bOrder !== undefined) return aOrder - bOrder;
  if (aOrder !== undefined) return -1;
  if (bOrder !== undefined) return 1;
  return sortLabels(fallbackA, fallbackB);
}

function cleanClassification(note: DiseaseNote, specialtyLabel: string) {
  const classification = specialtyLabel === "응급의학" && note.emergencyClassification.length > 0
    ? note.emergencyClassification
    : specialtyLabel === "종양" && note.oncologyClassification.length > 0
      ? note.oncologyClassification
      : note.classification;

  return classification
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function isOverviewNoteForLabel(note: DiseaseNote, label: string) {
  const normalize = (value: string) => value
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim();

  return normalize(note.title) === normalize(label);
}

function buildGroups(notes: DiseaseNote[], specialtyLabel: string, tocOrder: TocOrder): FirstLevelGroup[] {
  const firstLevel = new Map<string, DiseaseNote[]>();

  for (const note of notes) {
    const classification = cleanClassification(note, specialtyLabel);
    const primary = classification[0] || note.category || specialtyLabel;
    const bucket = firstLevel.get(primary) ?? [];
    bucket.push(note);
    firstLevel.set(primary, bucket);
  }

  return [...firstLevel.entries()]
    .sort(([a], [b]) => {
      const aIsTop = a === specialtyLabel;
      const bIsTop = b === specialtyLabel;
      if (aIsTop && !bIsTop) return -1;
      if (!aIsTop && bIsTop) return 1;
      return compareWithOrder(a, b, tocOrder.first);
    })
    .map(([title, items]) => {
      const overviewNote = items.find((note) => isOverviewNoteForLabel(note, title));
      const secondLevelMap = new Map<string, DiseaseNote[]>();

      for (const note of items) {
        const classification = cleanClassification(note, specialtyLabel);
        const secondary = classification[1] || "";
        const bucket = secondLevelMap.get(secondary) ?? [];
        bucket.push(note);
        secondLevelMap.set(secondary, bucket);
      }

      const secondLevel = [...secondLevelMap.entries()]
        .sort(([a], [b]) => {
          if (!a && b) return -1;
          if (a && !b) return 1;
          return compareWithOrder(`${title}\u0000${a || title}`, `${title}\u0000${b || title}`, tocOrder.second, a || title, b || title);
        })
        .map(([secondaryTitle, secondLevelItems]) => {
          const sectionOverviewNote = secondLevelItems.find((note) => isOverviewNoteForLabel(note, secondaryTitle || title));
          const parentNotes: DiseaseNote[] = [];
          const thirdLevelMap = new Map<string, DiseaseNote[]>();

          for (const note of secondLevelItems) {
            const classification = cleanClassification(note, specialtyLabel);
            const tertiary = classification[2];

            if (!tertiary) {
              parentNotes.push(note);
              continue;
            }

            const bucket = thirdLevelMap.get(tertiary) ?? [];
            bucket.push(note);
            thirdLevelMap.set(tertiary, bucket);
          }

          const thirdLevel = [...thirdLevelMap.entries()]
            .sort(([a], [b]) => compareWithOrder(`${title}\u0000${secondaryTitle || title}\u0000${a}`, `${title}\u0000${secondaryTitle || title}\u0000${b}`, tocOrder.third))
            .reduce<ThirdLevelGroup[]>((groups, [thirdTitle, thirdItems]) => {
              if (thirdItems.length >= THIRD_LEVEL_MIN_ITEMS) {
                groups.push({
                  title: thirdTitle,
                  notes: thirdItems.slice().sort((a, b) => sortLabels(a.title, b.title)),
                });
              } else {
                parentNotes.push(...thirdItems);
              }

              return groups;
            }, []);

          return {
            title: secondaryTitle || title,
            notes: parentNotes.slice().sort((a, b) => {
              const aIsOverview = overviewNote?.slug === a.slug || sectionOverviewNote?.slug === a.slug;
              const bIsOverview = overviewNote?.slug === b.slug || sectionOverviewNote?.slug === b.slug;
              if (aIsOverview && !bIsOverview) return -1;
              if (!aIsOverview && bIsOverview) return 1;
              return sortLabels(a.title, b.title);
            }),
            thirdLevel,
          };
        });

      return { title, overviewNote, secondLevel };
    });
}


function SpecialtyRoadmapSection({ roadmap }: { roadmap: NonNullable<ReturnType<typeof getSpecialtyRoadmap>> }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-teal-700">
            <CalendarDays className="h-4 w-4" />
            Roadmap
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">{roadmap.title}</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{roadmap.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {roadmap.sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
            >
              {source.label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {roadmap.lanes.map((lane) => (
          <div key={lane.title} className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-700">{lane.title}</h3>
            <div className="overflow-x-auto pb-2">
              <div className="relative flex min-w-[760px] gap-3 pr-2">
                <div className="absolute left-4 right-4 top-5 h-px bg-slate-200" aria-hidden="true" />
                {lane.items.map((item) => (
                  <article key={`${lane.title}-${item.time}-${item.title}`} className="relative z-10 w-56 shrink-0 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {item.time}
                    </div>
                    <h4 className="text-sm font-semibold leading-5 text-slate-950">{item.title}</h4>
                    <ul className="mt-2 space-y-1.5 text-xs leading-5 text-slate-600">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DiseaseLinks({ notes, specialtyLabel }: { notes: DiseaseNote[]; specialtyLabel: string }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <Link
          key={note.slug}
          href={`/disease/${note.slug}`}
          className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
        >
          <span className="min-w-0 pr-3">
            <span className="block text-sm font-medium text-slate-950">{note.title}</span>
            {note.specialty.replace(/^\d+\s*/, "").trim() !== specialtyLabel ? (
              <span className="mt-1 block text-xs text-slate-500">{note.specialty.replace(/^\d+\s*/, "").trim()}</span>
            ) : null}
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
        </Link>
      ))}
    </div>
  );
}

export default async function SpecialtyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const notes = getDiseasesBySpecialty(slug);
  const specialty = getSpecialties().find((item) => item.slug === slug);
  const title = specialty?.name;

  if (notes.length === 0 || !title) {
    notFound();
  }

  const specialtyLabel = title.replace(/^\d+\s*/, "").trim();
  const toc = getSpecialtyToc(slug);
  const specialtyOverviewNote = notes.find((note) => isSpecialtyIndexDisease(note));
  const grouped = buildGroups(notes.filter((note) => !isSpecialtyIndexDisease(note)), specialtyLabel, buildTocOrder(toc));
  const visibleGroups = grouped.filter((group) => !(group.title === specialtyLabel && group.secondLevel.length === 0));
  const roadmap = getSpecialtyRoadmap(slug);

  return (
    <div className="space-y-6">
      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase  text-slate-500">Specialty</div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold ">{title}</h1>
          {specialtyOverviewNote ? (
            <Link
              href={`/disease/${specialtyOverviewNote.slug}`}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium uppercase  text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
            >
              {specialtyLabel} overview
            </Link>
          ) : null}
        </div>
      </header>

      
      {specialtyLabel === "감염" ? <InfectionToolEntry specialtySlug={slug} /> : null}
      {roadmap ? <SpecialtyRoadmapSection roadmap={roadmap} /> : null}

      <div className="space-y-5">
        {visibleGroups.map((group) => (
          <section key={group.title} className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-200" />
              <h2 className="shrink-0 text-xl font-semibold  text-slate-950">{group.title}</h2>
              <div className="h-px flex-1 bg-stone-200" />
            </div>

            <div className="space-y-5">
              {group.secondLevel.map((secondGroup) => (
                <div key={`${group.title}-${secondGroup.title}`} className="space-y-3">
                  {!(secondGroup.title === group.title && secondGroup.thirdLevel.length === 0) ? (
                    <div className="border-l-4 border-teal-600 py-1 pl-3">
                      <h3 className="text-sm font-semibold text-slate-700">{secondGroup.title}</h3>
                    </div>
                  ) : null}

                  {secondGroup.notes.length > 0 ? <DiseaseLinks notes={secondGroup.notes} specialtyLabel={specialtyLabel} /> : null}

                  {secondGroup.thirdLevel.map((thirdGroup) => (
                    <div key={`${group.title}-${secondGroup.title}-${thirdGroup.title}`} className="space-y-3 pl-1">
                      <div className="flex items-center gap-3 px-1">
                        <div className="h-px flex-1 bg-stone-200" />
                        <h4 className="shrink-0 text-sm font-semibold uppercase  text-slate-500">
                          {thirdGroup.title}
                        </h4>
                        <div className="h-px flex-1 bg-stone-200" />
                      </div>
                      <DiseaseLinks notes={thirdGroup.notes} specialtyLabel={specialtyLabel} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <ParentPageFab href="/specialties" />
    </div>
  );
}




