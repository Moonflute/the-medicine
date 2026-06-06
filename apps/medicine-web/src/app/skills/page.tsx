import { getSkillsManifest } from "@/lib/webdb";

export default function SkillsPage() {
  const skills = getSkillsManifest();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Skills</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Clinical Skills</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
          이 도메인은 원본 vault 소스가 아직 정해지지 않아 빈 껍데기만 먼저 준비해뒀습니다.
        </p>
      </header>
      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-6 shadow-sm">
        <p className="text-stone-700">Source: {skills.source}</p>
        <p className="mt-2 text-stone-600">{skills.note}</p>
      </section>
    </div>
  );
}
