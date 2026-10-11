import type { SupabaseClient } from "@supabase/supabase-js";
import { studyRecordFrom, type StudyRecord } from "./study-flow-model";
import { getStudySnapshot, pendingStudyRecords, receiveStudyRecords } from "./study-flow-store";

export async function syncStudyFlows(client: SupabaseClient, userId: string, isCurrent: () => boolean, since: string | null): Promise<string | null> {
  const sent = pendingStudyRecords();
  for (let start = 0; start < sent.length; start += 100) {
    if (!isCurrent() || getStudySnapshot().account !== userId) return since;
    const batch = sent.slice(start, start + 100);
    const { data, error } = await client.from("study_flow_records")
      .upsert(batch.map(record => ({ user_id: userId, id: record.id, kind: record.kind, fields: record.fields })), { onConflict: "user_id,id" })
      .select("id,kind,fields");
    if (error) throw error;
    if (!isCurrent()) return since;
    const records = (data ?? []).map(studyRecordFrom).filter((record): record is StudyRecord => Boolean(record));
    if (records.length !== batch.length) throw new Error("일부 기록의 저장을 확인하지 못했습니다.");
    receiveStudyRecords(records, batch);
  }
  let cursor = since;
  const overlap = since ? new Date(Date.parse(since) - 60000).toISOString() : null;
  let after: { at: string; id: string } | null = null;
  for (;;) {
    if (!isCurrent()) return since;
    let query = client.from("study_flow_records").select("id,kind,fields,updated_at").eq("user_id", userId).order("updated_at").order("id").limit(500);
    if (overlap) query = query.gte("updated_at", overlap);
    if (after) query = query.or("updated_at.gt." + after.at + ",and(updated_at.eq." + after.at + ",id.gt." + after.id + ")");
    const { data, error } = await query;
    if (error) throw error;
    if (!isCurrent()) return since;
    const records: StudyRecord[] = [];
    for (const row of data ?? []) {
      const record = studyRecordFrom(row);
      if (!record) throw new Error("동기화 기록의 형식을 확인하지 못했습니다.");
      records.push(record);
      if (typeof row.updated_at === "string" && (!cursor || row.updated_at > cursor)) cursor = row.updated_at;
    }
    receiveStudyRecords(records);
    if ((data?.length ?? 0) < 500) break;
    const last = data![data!.length - 1];
    if (typeof last.updated_at !== "string") throw new Error("동기화 시점을 확인하지 못했습니다.");
    after = { at: last.updated_at, id: last.id };
  }
  return cursor;
}
