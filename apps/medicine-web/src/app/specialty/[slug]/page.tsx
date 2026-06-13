import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getDiseasesBySpecialty, getSpecialties } from "@/lib/webdb";

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

export function generateStaticParams() {
  return getSpecialties().map((specialty) => ({ slug: specialty.slug }));
}

function sortLabels(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

function cleanClassification(note: DiseaseNote) {
  return note.classification
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function isOverviewNoteForLabel(note: DiseaseNote, label: string) {
  return note.title.trim() === label.trim();
}

function buildGroups(notes: DiseaseNote[], specialtyLabel: string): FirstLevelGroup[] {
  const firstLevel = new Map<string, DiseaseNote[]>();

  for (const note of notes) {
    const classification = cleanClassification(note);
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
      return sortLabels(a, b);
    })
    .map(([title, items]) => {
      const overviewNote = items.find((note) => isOverviewNoteForLabel(note, title));
      const secondLevelMap = new Map<string, DiseaseNote[]>();

      for (const note of items) {
        if (overviewNote && note.slug === overviewNote.slug) {
          continue;
        }

        const classification = cleanClassification(note);
        const secondary = classification[1] || "";
        const bucket = secondLevelMap.get(secondary) ?? [];
        bucket.push(note);
        secondLevelMap.set(secondary, bucket);
      }

      const secondLevel = [...secondLevelMap.entries()]
        .sort(([a], [b]) => {
          if (!a && b) return -1;
          if (a && !b) return 1;
          return sortLabels(a || title, b || title);
        })
        .map(([secondaryTitle, secondLevelItems]) => {
          const parentNotes: DiseaseNote[] = [];
          const thirdLevelMap = new Map<string, DiseaseNote[]>();

          for (const note of secondLevelItems) {
            const classification = cleanClassification(note);
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
            .sort(([a], [b]) => sortLabels(a, b))
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
            notes: parentNotes.slice().sort((a, b) => sortLabels(a.title, b.title)),
            thirdLevel,
          };
        });

      return { title, overviewNote, secondLevel };
    });
}

function DiseaseLinks({ notes }: { notes: DiseaseNote[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <Link
          key={note.slug}
          href={`/disease/${note.slug}`}
          className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3 transition hover:border-stone-300 hover:bg-white"
        >
          <span className="pr-3 text-sm font-medium text-stone-900">{note.title}</span>
          <ChevronRight className="h-4 w-4 shrink-0 text-stone-400" />
        </Link>
      ))}
    </div>
  );
}

export default async function SpecialtyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const notes = getDiseasesBySpecialty(slug);
  const title = notes[0]?.specialty;

  if (notes.length === 0) {
    notFound();
  }

  const specialtyLabel = title.replace(/^\d+\s*/, "").trim();
  const grouped = buildGroups(notes, specialtyLabel);
  const specialtyOverviewNote = grouped.find((group) => group.title === specialtyLabel)?.overviewNote;

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Specialty</div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="font-serif text-4xl font-semibold tracking-tight">{title}</h1>
          {specialtyOverviewNote ? (
            <Link
              href={`/disease/${specialtyOverviewNote.slug}`}
              className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-stone-600 transition hover:border-stone-300 hover:bg-white hover:text-stone-900"
            >
              {specialtyLabel} overview
            </Link>
          ) : null}
        </div>
      </header>

      <div className="space-y-5">
        {grouped.map((group) => (
          <section key={group.title} className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-200" />
              <h2 className="shrink-0 font-serif text-xl font-semibold tracking-tight text-stone-900">{group.title}</h2>
              <div className="h-px flex-1 bg-stone-200" />
            </div>

            <div className="space-y-5">
              {group.secondLevel.map((secondGroup) => (
                <div key={`${group.title}-${secondGroup.title}`} className="space-y-3">
                  {!(secondGroup.title === group.title && secondGroup.thirdLevel.length === 0) ? (
                    <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 px-4 py-3">
                      <h3 className="font-serif text-lg font-semibold tracking-tight text-stone-900">
                        {secondGroup.title}
                      </h3>
                    </div>
                  ) : null}

                  {secondGroup.notes.length > 0 ? <DiseaseLinks notes={secondGroup.notes} /> : null}

                  {secondGroup.thirdLevel.map((thirdGroup) => (
                    <div key={`${group.title}-${secondGroup.title}-${thirdGroup.title}`} className="space-y-3 pl-1">
                      <div className="flex items-center gap-3 px-1">
                        <div className="h-px flex-1 bg-stone-200" />
                        <h4 className="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                          {thirdGroup.title}
                        </h4>
                        <div className="h-px flex-1 bg-stone-200" />
                      </div>
                      <DiseaseLinks notes={thirdGroup.notes} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
