import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckSquare, ChevronRight, Info, ListOrdered, Stethoscope, VideoOff } from "lucide-react";
import { getAllSkills, getSkillById } from "@/lib/webdb";

export function generateStaticParams() {
  return getAllSkills().map((skill) => ({ id: skill.id }));
}

export default async function SkillDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const skill = getSkillById(params.id);

  if (!skill) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-stone-500">
        <Link href="/skills" className="transition hover:text-stone-900">
          Clinical Skills
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{skill.categoryName}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-stone-900">{skill.name}</span>
      </div>

      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <h1 className="flex items-center gap-3 font-serif text-4xl font-semibold tracking-tight text-stone-900">
          <Stethoscope className="h-8 w-8 text-amber-700" />
          {skill.name}
        </h1>
      </header>

      <div className="w-full overflow-hidden rounded-[32px] border border-stone-200 bg-stone-950 shadow-sm">
        {skill.videoUrl ? (
          <iframe
            className="aspect-video w-full"
            src={skill.videoUrl}
            title={`Video showing ${skill.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center text-stone-300">
            <VideoOff className="mb-4 h-16 w-16 opacity-50" />
            <p className="text-lg font-medium">Video not added yet.</p>
          </div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <section className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <Info className="h-5 w-5 text-sky-600" />
              Indications
            </h2>
            <ul className="space-y-2 text-sm text-stone-700">
              {skill.indications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <ListOrdered className="h-5 w-5 text-indigo-600" />
              Step by step
            </h2>

            <div className="space-y-4">
              {skill.steps.map((step) => (
                <div key={`${step.stepNumber}-${step.title}`} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-sm font-semibold text-amber-700">
                    {step.stepNumber}
                  </div>
                  <div className="flex-1 rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                    <h3 className="font-semibold text-stone-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-stone-700">{step.description}</p>
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
          <section className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <CheckSquare className="h-5 w-5 text-emerald-600" />
              Supplies
            </h2>
            <ul className="space-y-3 text-sm text-stone-700">
              {skill.supplies.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-stone-300 bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border border-red-200 bg-red-50/80 p-5 shadow-sm">
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
    </div>
  );
}
