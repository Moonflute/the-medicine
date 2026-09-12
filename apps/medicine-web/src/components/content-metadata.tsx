import type { ContentMeta } from "@/lib/types";

const STATUS_LABELS: Record<string, string> = {
  draft: "초안", reviewed: "검토 완료", verified: "검증 완료",
  source_checked: "출처 확인", clinically_reviewed: "임상 검토 완료", needs_update: "갱신 필요",
};

export function ContentMetadata({ meta }: { meta?: ContentMeta }) {
  const items = [
    meta?.contentUpdatedAt?.trim() ? `내용 수정일 ${meta.contentUpdatedAt.trim()}` : "",
    meta?.guidelineYear?.trim() ? `근거 연도 ${meta.guidelineYear.trim()}` : "",
    meta?.reviewStatus?.trim() ? `검토 상태: ${STATUS_LABELS[meta.reviewStatus.trim()] ?? meta.reviewStatus.trim()}` : "",
    meta?.reviewedAt?.trim() ? `검토일 ${meta.reviewedAt.trim()}` : "",
  ].filter(Boolean);
  if (!items.length) return null;
  return <p className="mt-3 text-xs leading-5 text-slate-500">{items.join(" · ")}</p>;
}
