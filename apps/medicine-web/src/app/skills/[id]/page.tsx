import { ChatSenderProvider } from "@/components/chat-contact";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckSquare, ChevronRight, Info, ListOrdered, Stethoscope } from "lucide-react";
import { DocumentToolbar } from "@/components/document-toolbar";
import { SkinDocumentIntro, SkinDocumentSections, type SkinDocumentSection } from "@/components/skin-document";
import { RichTextLines } from "@/components/rich-text-lines";
import { getAllSkills, getSkillById } from "@/lib/webdb";
import { ParentPageFab } from "@/components/parent-page-fab";
import { DocumentEditButton } from "@/components/document-edit-button";
import { ReviewSaveButton } from "@/components/review-save-button";
import type { ClinicalSkill } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  const skills = getAllSkills();
  return skills.length ? skills.map(skill => ({ id: skill.id })) : [{ id: "__empty__" }];
}

const sectionLabels: Record<string, string> = {
  Indications: "적응증", Supplies: "준비물", Precautions: "주의사항",
  Complications: "합병증", Steps: "단계별 절차",
};

function sectionIcon(title: string) {
  if (title === "주의사항" || title === "합병증" || title === "합병증·사후 관리") return <AlertTriangle className="h-5 w-5 text-red-700" />;
  if (title === "단계별 절차" || title === "시행") return <ListOrdered className="h-5 w-5 text-indigo-600" />;
  if (title === "준비물" || title === "결과") return <CheckSquare className="h-5 w-5 text-emerald-600" />;
  return <Info className="h-5 w-5 text-teal-700" />;
}

/** Keep legacy manifests readable until the source-data sync has run. */
function documentSections(skill: ClinicalSkill) {
  if (skill.sections?.length) return skill.sections;
  return [
    { title: "Indications", content: skill.indications },
    { title: "Supplies", content: skill.supplies },
    { title: "Precautions", content: skill.precautions },
    { title: "Complications", content: skill.complications },
    { title: "Steps", content: skill.steps.flatMap(step => [
      `### ${step.stepNumber}. ${step.title}`, ...step.description.split(/\r?\n/),
      ...(step.warning ? [`Warning: ${step.warning}`] : []),
    ]) },
  ].filter(section => section.content.length);
}

export default async function SkillDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  if (id === "__empty__") return null;
  const skill = getSkillById(id);
  if (!skill) notFound();
  const sections: SkinDocumentSection[] = documentSections(skill).map((section, index) => {
    const title = sectionLabels[section.title] || section.title;
    return {
      id: `skill-${skill.id}-section-${index}`, title, icon: sectionIcon(title),
      content: <RichTextLines bulletStyle="plain" lines={section.content.map(line =>
        line.replace(/^Warning:\s*/, "**주의:** "))} className="space-y-2.5 text-sm leading-7 text-slate-700" />,
    };
  });

  return (
    <ChatSenderProvider name={skill.categoryName}><div className="page-stack">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <Link href="/skills" className="transition hover:text-slate-950">술기 및 처치</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/skills/category/${skill.categoryId}`} className="transition hover:text-slate-950">{skill.categoryName}</Link>
        {skill.subcategory ? <><ChevronRight className="h-4 w-4" /><span>{skill.subcategory}</span></> : null}
      </div>
      <DocumentToolbar title={skill.name}>
        <DocumentEditButton sourcePath={skill.sourcePath} title={skill.name} />
        <ReviewSaveButton compact item={{ type: "skill", id: `skill:${skill.id}`, title: skill.name, href: `/skills/${skill.id}`, category: skill.categoryName, summary: skill.summary[0] || skill.indications[0] || "" }} />
      </DocumentToolbar>
      <SkinDocumentIntro title={skill.name} category={skill.categoryName}>
        <header className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm sm:p-6">
          <h1 className="flex items-center gap-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
            <Stethoscope className="h-7 w-7 shrink-0 text-teal-700" />{skill.name}
          </h1>
          {skill.summary.length && !skill.sections?.some(section => section.title === "개요·원리") ? <div className="mt-4"><RichTextLines lines={skill.summary} bulletStyle="plain" /></div> : null}
        </header>
      </SkinDocumentIntro>
      <SkinDocumentSections sections={sections} className="space-y-4" plainSectionClassName="rounded-lg border border-slate-200 bg-white/85 p-4 shadow-sm sm:p-5" />
      {skill.videoUrl ? (
        <details className="rounded-lg border border-slate-200 bg-white/85 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-teal-700">교육 영상</summary>
          <div className="skin-skill-video mt-3 overflow-hidden rounded-lg bg-slate-950">
            <iframe loading="lazy" className="aspect-video w-full" src={skill.videoUrl} title={`${skill.name} 교육 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </details>
      ) : null}
      {skill.sources.length ? <footer aria-label="참고 자료" className="border-t border-slate-200 px-1 pt-3 text-xs leading-5 text-slate-500">
        <span className="mr-2 font-medium">출처</span>
        {skill.sources.map((source, index) => <span key={`${source.label}-${source.url}`}>
          {index > 0 ? <span aria-hidden="true" className="mx-2">·</span> : null}
          <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-slate-300 underline-offset-2 hover:text-teal-700">{source.label}</a>
        </span>)}
      </footer> : null}
      <ParentPageFab href={`/skills/category/${skill.categoryId}`} />
    </div></ChatSenderProvider>
  );
}
