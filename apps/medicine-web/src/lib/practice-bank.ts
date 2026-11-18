import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { indexPracticeVersions, isPracticeRevisionId, type PracticeIndex } from "@/lib/practice-selection";
import type { QbankQuestion } from "@/lib/types";

// The index carries the original slot and its available versions. Payload
// reads stay exact by ID, so a new release cannot regrade a saved session.
const revisionTable = "private_qbank_revision_items";
type RevisionPayload = QbankQuestion & { revisionReason?: string };

function practiceRevisionPayload(payload: RevisionPayload): QbankQuestion {
  const reason = typeof payload.revisionReason === "string" ? payload.revisionReason.trim() : "";
  return {
    ...payload,
    questionType: "실전",
    explanation: reason ? `수정 이유: ${reason}\n\n${payload.explanation}` : payload.explanation,
  };
}

export async function loadPracticeIndex(includeRevisions = true): Promise<{ questions: PracticeIndex[]; message: string }> {
  const client = getSupabaseBrowserClient();
  if (!client) return { questions: [], message: "실전문제 목록을 불러오지 못했습니다." };
  const { data: { session } } = await client.auth.getSession();
  const [original, revisions] = await Promise.all([
    client.rpc("private_qbank_index"),
    session && includeRevisions ? client.from(revisionTable).select("index_data").order("id") : null,
  ]);
  const { data: currentAuth } = await client.auth.getSession();
  if (currentAuth.session?.user.id !== session?.user.id) return { questions: [], message: "문제 목록을 다시 불러와 주세요." };
  if (original.error || revisions?.error) throw new Error("실전문제 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
  const questions = indexPracticeVersions(
    (original.data ?? []) as PracticeIndex[],
    (revisions?.data ?? []).map(row => row.index_data as PracticeIndex),
  );
  return { questions, message: "이 범위에 해당하는 실전문제가 없습니다." };
}

export async function loadPracticeQuestions(ids: string[]): Promise<QbankQuestion[]> {
  if (!ids.length) return [];
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("실전문제를 불러오지 못했습니다.");
  const { data: { session } } = await client.auth.getSession();
  const result: QbankQuestion[] = [];
  for (const revised of [false, true]) {
    if (revised && !session) continue;
    const group = ids.filter(id => isPracticeRevisionId(id) === revised);
    for (let start = 0; start < group.length; start += 100) {
      const batch = group.slice(start, start + 100);
      if (revised) {
        const { data, error } = await client.from(revisionTable).select("payload").in("id", batch).order("id");
        if (error) throw new Error("실전문제를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
        result.push(...(data ?? []).map(row => practiceRevisionPayload(row.payload as RevisionPayload)));
      } else {
        const { data, error } = await client.rpc("private_qbank_questions", { requested_ids: batch });
        if (error) throw new Error("실전문제를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
        result.push(...((data ?? []) as QbankQuestion[]));
      }
    }
  }
  const { data: currentAuth } = await client.auth.getSession();
  if (currentAuth.session?.user.id !== session?.user.id) throw new Error("문제은행에서 다시 열어 주세요.");
  return result;
}
