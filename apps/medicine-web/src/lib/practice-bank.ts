import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { isPracticeRevisionId, type PracticeIndex } from "@/lib/practice-selection";
import type { QbankQuestion } from "@/lib/types";

// Both editions stay behind the DB's approved-user policy. Never import their
// contents into the static build or alias a revision to its original ID.
const revisionTable = "private_qbank_revision_items";

export async function loadPracticeIndex(includeRevisions = false): Promise<{ questions: PracticeIndex[]; message: string }> {
  const client = getSupabaseBrowserClient();
  if (!client) return { questions: [], message: "실전문제의 비공개 계정 연결을 준비 중입니다." };
  const { data: { session } } = await client.auth.getSession();
  if (!session) return { questions: [], message: "Google 계정으로 로그인하면 실전문제 접근 권한을 확인합니다." };
  const [original, revisions] = await Promise.all([
    client.rpc("private_qbank_index"),
    includeRevisions ? client.from(revisionTable).select("index_data").order("id") : null,
  ]);
  const { data, error } = original;
  const { data: currentAuth } = await client.auth.getSession();
  if (currentAuth.session?.user.id !== session.user.id) return { questions: [], message: "로그인 계정이 변경되었습니다. 다시 확인해주세요." };
  if (error) {
    if (error.code === "PGRST202") return { questions: [], message: "실전문제의 비공개 DB 연결을 준비 중입니다. 연결 후 승인된 계정으로 이용할 수 있습니다." };
    throw new Error("실전문제를 불러오지 못했습니다. 접근 권한이나 연결 상태를 확인해주세요.");
  }
  // A missing revision schema during a staged rollout must not affect the original bank.
  const questions = [
    ...((data ?? []) as PracticeIndex[]),
    ...(revisions?.data ?? []).map(row => row.index_data as PracticeIndex),
  ];
  return { questions, message: "실전문제는 승인된 계정에만 제공됩니다. 승인 여부를 확인해주세요." };
}

export async function loadPracticeQuestions(ids: string[]): Promise<QbankQuestion[]> {
  if (!ids.length) return [];
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("실전문제는 승인된 계정으로 로그인해야 합니다.");
  const { data: auth } = await client.auth.getSession();
  if (!auth.session) throw new Error("실전문제는 승인된 계정으로 로그인해야 합니다.");
  const result: QbankQuestion[] = [];
  for (const revised of [false, true]) {
    const group = ids.filter(id => isPracticeRevisionId(id) === revised);
    for (let start = 0; start < group.length; start += 100) {
      const batch = group.slice(start, start + 100);
      if (revised) {
        const { data, error } = await client.from(revisionTable).select("payload").in("id", batch).order("id");
        if (error) throw new Error("실전 개정판 접근 권한이나 연결 상태를 확인해주세요.");
        result.push(...(data ?? []).map(row => row.payload as QbankQuestion));
      } else {
        const { data, error } = await client.rpc("private_qbank_questions", { requested_ids: batch });
        if (error) throw new Error("실전문제 접근 권한이나 연결 상태를 확인해주세요.");
        result.push(...((data ?? []) as QbankQuestion[]));
      }
    }
  }
  const { data: currentAuth } = await client.auth.getSession();
  if (currentAuth.session?.user.id !== auth.session.user.id) throw new Error("로그인 계정이 변경되었습니다. 다시 시작해주세요.");
  return result;
}
