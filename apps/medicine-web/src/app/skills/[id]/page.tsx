import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckSquare, ChevronRight, Info, Link2, ListOrdered, Stethoscope, VideoOff } from "lucide-react";
import { getAllSkills, getSkillById } from "@/lib/webdb";
import { ParentPageFab } from "@/components/parent-page-fab";
import { ReviewSaveButton } from "@/components/review-save-button";

export const dynamicParams = false;

export function generateStaticParams() {
  const skills = getAllSkills();
  return skills.length > 0 ? skills.map((skill) => ({ id: skill.id })) : [{ id: "__empty__" }];
}

export default async function SkillDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  if (params.id === "__empty__") return null;

  const skill = getSkillById(params.id);

  if (!skill) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/skills" className="transition hover:text-slate-950">
          Clinical Skills
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{skill.categoryName}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{skill.name}</span>
      </div>

      <div className="flex justify-end">
        <ReviewSaveButton item={{ type: "skill", id: `skill:${skill.id}`, title: skill.name, href: `/skills/${skill.id}`, category: skill.categoryName, summary: skill.summary[0] || skill.indications[0] || "" }} />
      </div>
      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <h1 className="flex items-center gap-3 text-4xl font-semibold  text-slate-950">
          <Stethoscope className="h-8 w-8 text-teal-700" />
          {skill.name}
        </h1>
        {skill.summary.length > 0 ? (
          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {skill.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </header>

      <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
        {skill.videoUrl ? (
          <iframe
            className="aspect-video w-full"
            src={skill.videoUrl}
            title={`Video showing ${skill.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center text-slate-300">
            <VideoOff className="mb-4 h-16 w-16 opacity-50" />
            <p className="text-lg font-medium">Video not added yet.</p>
          </div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          {skill.sources.length > 0 ? (
            <section className="rounded-lg border border-teal-200 bg-teal-50 p-5 shadow-sm">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-teal-900">
                <Link2 className="h-5 w-5" />
                Trusted Sources
              </h2>
              <ul className="space-y-2 text-sm text-teal-900">
                {skill.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-teal-400 underline-offset-2 transition hover:text-teal-700"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-950">
              <Info className="h-5 w-5 text-sky-600" />
              Indications
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {skill.indications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-950">
              <ListOrdered className="h-5 w-5 text-indigo-600" />
              Step by step
            </h2>

            <div className="space-y-4">
              {skill.steps.map((step) => (
                <div key={`${step.stepNumber}-${step.title}`} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-amber-50 text-sm font-semibold text-teal-700">
                    {step.stepNumber}
                  </div>
                  <div className="flex-1 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{step.description}</p>
                    {step.warning ? (
                      <div className="mt-3 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{step.warning}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-950">
              <CheckSquare className="h-5 w-5 text-emerald-600" />
              Supplies
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {skill.supplies.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-300 bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-red-200 bg-red-50/80 p-5 shadow-sm">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Precautions and complications
            </h2>
            <ul className="space-y-2.5 text-sm text-red-800">
              {skill.precautions.map((item) => (
                <li key={`precaution-${item}`} className="flex items-start gap-2">
                  <span className="mt-0.5">-</span>
                  <span>{item}</span>
                </li>
              ))}
              {skill.complications.length > 0 ? <div className="my-3 h-px bg-red-200" /> : null}
              {skill.complications.map((item) => (
                <li key={`complication-${item}`} className="flex items-start gap-2">
                  <span className="mt-0.5">-</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <ParentPageFab href={`/skills/category/${skill.categoryId}`} />
    </div>
  );
}
