import { ReviewPageClient } from "@/components/review-page-client";
import {
  getAllDiseases,
  getAllSkills,
  getChiefComplaints,
  getDrugs,
  getLabImgNotes,
} from "@/lib/webdb";
import type { ReviewCatalogItem } from "@/lib/review-store";

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

export default function ReviewPage() {
  const catalog: ReviewCatalogItem[] = [
    ...getAllDiseases().map((note) => ({
      type: "disease" as const,
      id: note.slug,
      title: note.title,
      href: `/disease/${note.slug}`,
      category: note.specialty,
      summary: note.definition || note.overview?.[0] || "",
    })),
    ...getChiefComplaints().map((note) => ({
      type: "cc" as const,
      id: note.id,
      title: note.title,
      href: `/cc/category/${toBase64Url(note.category || "湲고?")}/${note.slug}`,
      category: note.category || "Chief Complaint",
      summary: note.concept[0] || note.differentials[0] || "",
    })),
    ...getDrugs().map((note) => ({
      type: "drug" as const,
      id: note.id,
      title: note.title,
      href: `/drugs/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
    ...getLabImgNotes().map((note) => ({
      type: "lab" as const,
      id: note.id,
      title: note.title,
      href: `/lab-img/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
    ...getAllSkills().map((skill) => ({
      type: "skill" as const,
      id: `skill:${skill.id}`,
      title: skill.name,
      href: `/skills/${skill.id}`,
      category: skill.categoryName,
      summary: skill.summary[0] || skill.indications[0] || "",
    })),
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Review</div>
        <h1 className="page-title">?듯빀 蹂듭뒿</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          ??ν븳 吏덈퀝쨌利앹긽쨌?쎈Ъ쨌寃??룹닠湲걔룹깮由ы븰???ㅻ뒛 蹂듭뒿?섍퀬, ?댄빐?꾩뿉 ?곕씪 ?ㅼ쓬 蹂듭뒿?쇱쓣 議곗젙?⑸땲??
        </p>
      </header>
      <ReviewPageClient catalog={catalog} />
    </div>
  );
}
