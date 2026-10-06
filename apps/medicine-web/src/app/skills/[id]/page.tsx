import { ChatSenderProvider } from "@/components/chat-contact";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckSquare, ChevronRight, Info, Link2, ListOrdered, Stethoscope, VideoOff } from "lucide-react";
import { DocumentToolbar } from "@/components/document-toolbar";
import { SkinDocumentIntro, SkinDocumentSections, SkinTextBlocks, type SkinDocumentSection } from "@/components/skin-document";
import { getAllSkills, getSkillById } from "@/lib/webdb";
import { ParentPageFab } from "@/components/parent-page-fab";
import { DocumentEditButton } from "@/components/document-edit-button";
import { ReviewSaveButton } from "@/components/review-save-button";

export const dynamicParams = false;

export function generateStaticParams() {
  const skills = getAllSkills();
  return skills.length > 0 ? skills.map((skill) => ({ id: skill.id })) : [{ id: "__empty__" }];
}

function TextItems({ items, label }: { items: string[]; label: string }) {
  return <SkinTextBlocks className="space-y-2 text-sm leading-6 text-slate-700" blocks={items.map((item) => ({
    kind: "text", label, content: <p>{item}</p>,
  }))} />;
}

export default async function SkillDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  if (params.id === "__empty__") return null;
  const skill = getSkillById(params.id);
  if (!skill) notFound();
  const sections: SkinDocumentSection[] = [
    ...(skill.sources.length ? [{ id: `skill-${skill.id}-sources`, title: "검증된 자료", icon: <Link2 className="h-5 w-5 text-teal-700" />,
      content: <SkinTextBlocks className="space-y-2 text-sm leading-6" blocks={skill.sources.map(source => ({ kind: "text", label: "참고 자료", content: <a href={source.url} target="_blank" rel="noreferrer" className="text-teal-700 underline underline-offset-2">{source.label}</a> }))} />,
    } satisfies SkinDocumentSection] : []),
    { id: `skill-${skill.id}-indications`, title: "적응증", icon: <Info className="h-5 w-5 text-sky-600" />,
      content: <TextItems items={skill.indications} label="적응증" /> },
    { id: `skill-${skill.id}-steps`, title: "단계별 절차", icon: <ListOrdered className="h-5 w-5 text-indigo-600" />,
      content: <SkinTextBlocks className="space-y-4 text-sm leading-6 text-slate-700" blocks={skill.steps.map(step => ({
        kind: "text", label: `절차 ${step.stepNumber}`, content: <div>
          <h4 className="font-semibold text-slate-950">{step.stepNumber}. {step.title}</h4>
          <p className="mt-1">{step.description}</p>
          {step.warning ? <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /><span>{step.warning}</span></div> : null}
        </div>,
      }))} /> },
    { id: `skill-${skill.id}-supplies`, title: "준비물", icon: <CheckSquare className="h-5 w-5 text-emerald-600" />,
      content: <TextItems items={skill.supplies} label="준비물" /> },
    { id: `skill-${skill.id}-precautions`, title: "주의사항 및 합병증", icon: <AlertTriangle className="h-5 w-5 text-red-700" />,
      content: <SkinTextBlocks className="space-y-2 text-sm leading-6 text-red-800" blocks={[
        ...skill.precautions.map(item => ({ kind: "text" as const, label: "주의사항", content: <p>{item}</p> })),
        ...skill.complications.map(item => ({ kind: "text" as const, label: "합병증", content: <p className="font-medium">{item}</p> })),
      ]} /> },
  ];

  return <ChatSenderProvider name={skill.categoryName}><div className="space-y-6">
    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500"><Link href="/skills" className="transition hover:text-slate-950">Clinical Skills</Link><ChevronRight className="h-4 w-4" /><span>{skill.categoryName}</span><ChevronRight className="h-4 w-4" /><span className="font-medium text-slate-950">{skill.name}</span></div>
    <DocumentToolbar title={skill.name}>
      <DocumentEditButton sourcePath={skill.sourcePath} title={skill.name} />
      <ReviewSaveButton compact item={{ type: "skill", id: `skill:${skill.id}`, title: skill.name, href: `/skills/${skill.id}`, category: skill.categoryName, summary: skill.summary[0] || skill.indications[0] || "" }} />
    </DocumentToolbar>
    <SkinDocumentIntro title={skill.name} category={skill.categoryName}>
      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <h1 className="flex items-center gap-3 text-3xl font-semibold text-slate-950 sm:text-4xl"><Stethoscope className="h-8 w-8 shrink-0 text-teal-700" />{skill.name}</h1>
        {skill.summary.length ? <div className="mt-4"><TextItems items={skill.summary} label="술기 요약" /></div> : null}
      </header>
    </SkinDocumentIntro>
    <div className="skin-skill-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
      {skill.videoUrl ? <iframe className="aspect-video w-full" src={skill.videoUrl} title={`Video showing ${skill.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <div className="flex aspect-video flex-col items-center justify-center px-6 text-center text-slate-300"><VideoOff className="mb-4 h-12 w-12 opacity-50" /><p className="text-base font-medium">검증 가능한 실무 교육 영상을 선별 중입니다.</p><p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">장비·기관 프로토콜에 따라 달라지는 술기는 일반 설명 영상 대신 해당 기관의 교육 자료를 우선합니다.</p></div>}
    </div>
    <SkinDocumentSections sections={sections} className="grid items-start gap-4 lg:grid-cols-2" plainSectionClassName="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm" />
    <ParentPageFab href={`/skills/category/${skill.categoryId}`} />
  </div></ChatSenderProvider>;
}
