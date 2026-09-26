import { getSupabaseBrowserClient } from "./supabase/client";
import { mergeHighlights, HIGHLIGHT_COLORS, type PersonalHighlight } from "./highlight-anchor";

type Snapshot = { rows: PersonalHighlight[]; pending: PersonalHighlight[] };
export function validHighlight(value: unknown): value is PersonalHighlight {
  if (!value || typeof value !== "object") return false;
  const row = value as PersonalHighlight;
  return typeof row.id === "string" && typeof row.user_id === "string" && typeof row.document_key === "string" &&
    HIGHLIGHT_COLORS.includes(row.color) && typeof row.deleted === "boolean" &&
    typeof row.anchor?.exact === "string" && typeof row.anchor.prefix === "string" && typeof row.anchor.suffix === "string" &&
    typeof row.anchor.block === "string" && Number.isInteger(row.anchor.start);
}

// Each annotation has its own UUID. Devices write only changed annotations;
// deleting creates a tombstone, so an offline device cannot resurrect it.
export class HighlightStore {
  private snapshot: Snapshot = { rows: [], pending: [] };
  private syncing = false;
  private stopped = false;
  private locallySaved = true;
  private key: string;
  constructor(readonly user: string, readonly document: string, private changed: (rows: PersonalHighlight[], status: string) => void) {
    this.key = "medicine:highlights:v1:" + user + ":" + document;
    this.readLocal();
    this.changed(this.snapshot.rows, this.snapshot.pending.length ? "이 기기에 저장 · 동기화 대기" : "형광펜 불러오는 중…");
  }
  private readLocal() {
    try {
      const value = JSON.parse(localStorage.getItem(this.key) ?? "null") as Snapshot | null;
      if (!value) return;
      const own = (rows: unknown) => Array.isArray(rows) ? rows.filter(validHighlight).filter(row => row.user_id === this.user && row.document_key === this.document) : [];
      this.snapshot = { rows: mergeHighlights(this.snapshot.rows, own(value.rows)), pending: mergeHighlights(this.snapshot.pending, own(value.pending)) };
    } catch { /* invalid cache never replaces remote records */ }
  }
  private persist() {
    try { localStorage.setItem(this.key, JSON.stringify(this.snapshot)); this.locallySaved = true; }
    catch { this.locallySaved = false; }
  }
  write(rows: PersonalHighlight[]) {
    if (this.stopped) return;
    this.readLocal();
    this.snapshot = { rows: mergeHighlights(this.snapshot.rows, rows), pending: mergeHighlights(this.snapshot.pending, rows) };
    this.persist();
    this.changed(this.snapshot.rows, this.locallySaved ? "이 기기에 저장 · 동기화 중" : "기기 저장 실패 · 계정에 동기화 중");
    void this.sync();
  }
  async sync() {
    if (this.syncing || this.stopped) return;
    const client = getSupabaseBrowserClient();
    if (!client) return;
    this.syncing = true;
    try {
      const { data } = await client.auth.getSession();
      if (data.session?.user.id !== this.user || this.stopped) return;
      this.readLocal();
      while (this.snapshot.pending.length && !this.stopped) {
        const sent = this.snapshot.pending.slice(0, 100);
        const { error } = await client.from("personal_highlights").upsert(sent, { onConflict: "user_id,id" });
        if (error) throw error;
        if (this.stopped) return;
        this.readLocal();
        this.snapshot.pending = this.snapshot.pending.filter(row => !sent.some(item => item.id === row.id && item.deleted === row.deleted));
        this.persist();
      }
      const remote: PersonalHighlight[] = [];
      for (let from = 0; !this.stopped; from += 1000) {
        const { data, error } = await client.from("personal_highlights").select("id,user_id,document_key,color,anchor,deleted")
          .eq("user_id", this.user).eq("document_key", this.document).order("id").range(from, from + 999);
        if (error) throw error;
        remote.push(...(data ?? []).filter(validHighlight));
        if (!data || data.length < 1000) break;
      }
      if (this.stopped) return;
      this.readLocal();
      this.snapshot.rows = mergeHighlights(this.snapshot.rows, remote, this.snapshot.pending);
      this.persist();
      this.changed(this.snapshot.rows, this.snapshot.pending.length ? "동기화 대기" : "계정에 저장됨");
    } catch {
      if (!this.stopped) this.changed(this.snapshot.rows, this.locallySaved ? "이 기기에 저장 · 연결되면 다시 동기화" : "저장 실패 · 연결 후 동기화되기 전에는 창을 닫지 마세요.");
    } finally {
      this.syncing = false;
    }
  }
  stop() { this.stopped = true; }
}
