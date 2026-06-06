import Link from "next/link";
import { ArrowRight, Files, FolderHeart, HeartPulse, Microscope, Pill, Smartphone, Stethoscope } from "lucide-react";
import { getAllDiseases, getDiseaseSearchIndex, getManifest, getSpecialties } from "@/lib/webdb";
import { SearchPanel } from "@/components/search-panel";

export default function HomePage() {
  const diseases = getAllDiseases();
  const specialties = getSpecialties();
  const searchIndex = getDiseaseSearchIndex();
  const manifest = getManifest();

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[36px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-800">
            Phase 1 shell
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Obsidian 질병 노트를 웹에서 훑고 복습할 수 있는 새 껍데기입니다.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            원본 마크다운은 그대로 두고, <code>vault_medicine/02 Diseases</code>를 읽어서 과별 탐색과 상세 보기,
            북마크 복습까지 먼저 붙였습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/specialties" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm text-stone-50">
              Browse specialties
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/review" className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm text-stone-700">
              Open review
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[28px] border border-stone-200 bg-white/80 p-5">
            <Files className="h-5 w-5 text-stone-500" />
            <div className="mt-4 text-3xl font-semibold">{diseases.length}</div>
            <div className="mt-1 text-sm text-stone-600">disease notes connected</div>
          </div>
          <div className="rounded-[28px] border border-stone-200 bg-white/80 p-5">
            <FolderHeart className="h-5 w-5 text-stone-500" />
            <div className="mt-4 text-3xl font-semibold">{specialties.length}</div>
            <div className="mt-1 text-sm text-stone-600">specialty folders indexed</div>
          </div>
          <div className="rounded-[28px] border border-stone-200 bg-white/80 p-5">
            <Smartphone className="h-5 w-5 text-stone-500" />
            <div className="mt-4 text-3xl font-semibold">{manifest.domains.chiefComplaints.count}</div>
            <div className="mt-1 text-sm text-stone-600">chief complaints staged for web DB</div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <SearchPanel entries={searchIndex} />

        <div className="rounded-[32px] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
          <div className="mb-4">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Specialties</h2>
            <p className="mt-1 text-sm text-stone-600">현재 노트 폴더를 기준으로 자동 집계합니다.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {specialties.slice(0, 12).map((specialty) => (
              <Link
                key={specialty.slug}
                href={`/specialty/${specialty.slug}`}
                className="rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-4 transition hover:border-stone-300 hover:bg-white"
              >
                <div className="font-medium text-stone-900">{specialty.name}</div>
                <div className="mt-1 text-sm text-stone-600">{specialty.count} notes</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Domain Structure</h2>
          <p className="mt-1 text-sm text-stone-600">원본 vault에서 generated web DB로 분리한 도메인 구조입니다.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <Link href="/cc" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <HeartPulse className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Chief Complaint</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.chiefComplaints.count} notes</div>
          </Link>
          <Link href="/drugs" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Pill className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Drugs</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.drugs.count} notes</div>
          </Link>
          <Link href="/physiology" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Microscope className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Physiology</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.physiology.count} notes</div>
          </Link>
          <Link href="/pathology" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Files className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Pathology</div>
            <div className="mt-1 text-sm text-stone-600">{manifest.domains.pathology.count} notes</div>
          </Link>
          <Link href="/skills" className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition hover:border-stone-300 hover:bg-white">
            <Stethoscope className="h-5 w-5 text-stone-500" />
            <div className="mt-3 font-medium text-stone-900">Skills</div>
            <div className="mt-1 text-sm text-stone-600">manual placeholder</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
