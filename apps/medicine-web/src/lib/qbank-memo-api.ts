import type { SupabaseClient } from "@supabase/supabase-js";
import type { MemoApi, QuestionMemo } from "./qbank-memo-store";

const TABLE = "qbank_question_memos";
const FIELDS = "user_id,question_id,body,revision,updated_at";

export function questionMemoApi(client: SupabaseClient): MemoApi {
  return {
    async read(owner) {
      const rows: QuestionMemo[] = [];
      for (;;) {
        const query = client.from(TABLE).select(FIELDS).eq("user_id", owner).order("question_id").limit(500);
        const cursor = rows.at(-1)?.question_id;
        const { data, error } = await (cursor ? query.gt("question_id", cursor) : query).returns<QuestionMemo[]>();
        if (error) throw error;
        if (!data?.length) return rows;
        rows.push(...data);
      }
    },
    async save(owner, id, body, revision) {
      const { data: auth } = await client.auth.getSession();
      if (auth.session?.user.id !== owner) throw new Error("메모 계정이 변경되었습니다.");
      const request = revision === 0
        ? client.from(TABLE).insert({ user_id: owner, question_id: id, body })
        : client.from(TABLE).update({ body }).eq("user_id", owner).eq("question_id", id).eq("revision", revision);
      const { data, error } = await request.select(FIELDS).maybeSingle<QuestionMemo>();
      if (data && !error) return { row: data, accepted: true };
      if (error && error.code !== "23505") throw error;
      const latest = await client.from(TABLE).select(FIELDS).eq("user_id", owner).eq("question_id", id).single<QuestionMemo>();
      if (latest.error) throw latest.error;
      // Idempotent retry after a successful write whose response was lost.
      return { row: latest.data, accepted: latest.data.body === body };
    },
  };
}
