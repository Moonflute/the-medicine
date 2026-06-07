import { DomainNoteCard } from "@/components/domain-note-card";
import { getDrugs, type DomainNote } from "@/lib/webdb";

type DrugLeafGroup = {
  title: string;
  notes: DomainNote[];
};

type DrugMiddleGroup = {
  title: string;
  notes: DomainNote[];
  detailGroups: DrugLeafGroup[];
};

type DrugTopGroup = {
  title: string;
  middleGroups: DrugMiddleGroup[];
};

function sortLabels(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

function getPriorityRank(note: DomainNote) {
  if (note.drugMeta?.clinicalCore) return 0;
  if (note.drugMeta?.priority === "tier_1") return 1;
  if (note.drugMeta?.priority === "tier_2") return 2;
  if (note.drugMeta?.priority === "general") return 3;
  return 4;
}

function sortDrugNotes(notes: DomainNote[]) {
  return notes
    .slice()
    .sort((a, b) => getPriorityRank(a) - getPriorityRank(b) || sortLabels(a.title, b.title));
}

function buildDrugGroups(notes: DomainNote[]): DrugTopGroup[] {
  const topMap = new Map<string, DomainNote[]>();

  for (const note of notes) {
    const topKey = note.drugMeta?.topClass || note.folder || "기타";
    const bucket = topMap.get(topKey) ?? [];
    bucket.push(note);
    topMap.set(topKey, bucket);
  }

  return [...topMap.entries()]
    .sort(([a], [b]) => sortLabels(a, b))
    .map(([topTitle, topNotes]) => {
      const middleMap = new Map<string, DomainNote[]>();

      for (const note of topNotes) {
        const middleKey = note.drugMeta?.middleClass || note.drugMeta?.detailClass || topTitle;
        const bucket = middleMap.get(middleKey) ?? [];
        bucket.push(note);
        middleMap.set(middleKey, bucket);
      }

      const middleGroups = [...middleMap.entries()]
        .sort(([a], [b]) => sortLabels(a, b))
        .map(([middleTitle, middleNotes]) => {
          const directNotes: DomainNote[] = [];
          const detailMap = new Map<string, DomainNote[]>();

          for (const note of middleNotes) {
            const detailKey = note.drugMeta?.detailClass?.trim();

            if (!detailKey || detailKey === middleTitle) {
              directNotes.push(note);
              continue;
            }

            const bucket = detailMap.get(detailKey) ?? [];
            bucket.push(note);
            detailMap.set(detailKey, bucket);
          }

          return {
            title: middleTitle,
            notes: sortDrugNotes(directNotes),
            detailGroups: [...detailMap.entries()]
              .sort(([a], [b]) => sortLabels(a, b))
              .map(([detailTitle, detailNotes]) => ({
                title: detailTitle,
                notes: sortDrugNotes(detailNotes),
              })),
          };
        });

      return {
        title: topTitle,
        middleGroups,
      };
    });
}

export default function DrugsPage() {
  const notes = getDrugs();
  const groups = buildDrugGroups(notes);

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Drugs</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Pharmacology</h1>
      </header>

      <div className="space-y-5">
        {groups.map((group) => (
          <section key={group.title} className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-200" />
              <h2 className="shrink-0 font-serif text-xl font-semibold tracking-tight text-stone-900">{group.title}</h2>
              <div className="h-px flex-1 bg-stone-200" />
            </div>

            <div className="space-y-5">
              {group.middleGroups.map((middleGroup) => (
                <div key={`${group.title}-${middleGroup.title}`} className="space-y-3">
                  {!(middleGroup.title === group.title && middleGroup.detailGroups.length === 0) ? (
                    <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 px-4 py-3">
                      <h3 className="font-serif text-lg font-semibold tracking-tight text-stone-900">{middleGroup.title}</h3>
                    </div>
                  ) : null}

                  {middleGroup.notes.length > 0 ? (
                    <div className="grid gap-4 lg:grid-cols-2">
                      {middleGroup.notes.map((note) => (
                        <DomainNoteCard key={note.slug} note={note} href={`/drugs/${note.slug}`} />
                      ))}
                    </div>
                  ) : null}

                  {middleGroup.detailGroups.map((detailGroup) => (
                    <div key={`${group.title}-${middleGroup.title}-${detailGroup.title}`} className="space-y-3 pl-1">
                      <div className="flex items-center gap-3 px-1">
                        <div className="h-px flex-1 bg-stone-200" />
                        <h4 className="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                          {detailGroup.title}
                        </h4>
                        <div className="h-px flex-1 bg-stone-200" />
                      </div>

                      <div className="grid gap-4 lg:grid-cols-2">
                        {detailGroup.notes.map((note) => (
                          <DomainNoteCard key={note.slug} note={note} href={`/drugs/${note.slug}`} />
                        ))}
                      </div>
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
