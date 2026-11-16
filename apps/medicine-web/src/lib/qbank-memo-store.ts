export const MEMO_LIMIT = 6000;
export const MEMO_PREFIX = "medicine:qbank-memos:v1:";
export type QuestionMemo = { user_id: string; question_id: string; body: string; revision: number; updated_at: string };
type Draft = { body: string; revision: number; token: string };
export type MemoEntry = { owner: string; questionId: string; remote?: QuestionMemo; draft?: Draft; conflict: boolean };
export type MemoApi = {
  read: (owner: string) => Promise<QuestionMemo[]>;
  save: (owner: string, id: string, body: string, revision: number) => Promise<{ row: QuestionMemo; accepted: boolean }>;
};
type Storage = Pick<globalThis.Storage, "getItem" | "setItem" | "key" | "length">;

function validRow(row: QuestionMemo, owner: string, id = row?.question_id) {
  return row && row.user_id === owner && row.question_id === id && typeof id === "string" && id.length > 0 &&
    typeof row.body === "string" && row.body.length <= MEMO_LIMIT && Number.isSafeInteger(row.revision) && row.revision > 0;
}

/** Account-scoped, per-question drafts survive navigation/offline use. Never share the progress-reset store. */
export class QuestionMemoStore {
  private entries = new Map<string, MemoEntry>();
  private listeners = new Set<() => void>();
  private version = 0;
  private stopped = false;
  private prefix: string;
  syncing = false;
  loaded = false;
  storageOK = true;
  error = false;

  constructor(readonly owner: string, private storage: Storage, private pending: () => void) {
    this.prefix = `${MEMO_PREFIX}${owner}:`;
    this.refreshLocal();
  }
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getVersion = () => this.version;
  get(id: string) { return this.entries.get(id); }
  hasPending() { return [...this.entries.values()].some(entry => entry.draft && !entry.conflict); }
  hasUnsaved() { return [...this.entries.values()].some(entry => entry.draft); }
  private notify() { this.version++; this.listeners.forEach(listener => listener()); }
  private key(id: string) { return this.prefix + encodeURIComponent(id); }
  private readKey(key: string) {
    // A failed disk write leaves a newer in-memory draft. Do not replace it with the old disk copy.
    if (!this.storageOK) return;
    try {
      const entry = JSON.parse(this.storage.getItem(key) ?? "null") as MemoEntry | null;
      if (!entry || entry.owner !== this.owner || typeof entry.questionId !== "string" || key !== this.key(entry.questionId)) return;
      if (entry.remote && !validRow(entry.remote, this.owner, entry.questionId)) return;
      if (entry.draft && (typeof entry.draft.body !== "string" || entry.draft.body.length > MEMO_LIMIT || !Number.isSafeInteger(entry.draft.revision) || entry.draft.revision < 0 || typeof entry.draft.token !== "string")) return;
      this.entries.set(entry.questionId, entry);
    } catch { /* A corrupt cache never overwrites account data. */ }
  }
  refreshLocal() {
    try { for (let i = 0; i < this.storage.length; i++) { const key = this.storage.key(i); if (key?.startsWith(this.prefix)) this.readKey(key); } }
    catch { this.storageOK = false; }
    this.notify();
  }
  private persist(entry: MemoEntry) {
    this.entries.set(entry.questionId, entry);
    try { this.storage.setItem(this.key(entry.questionId), JSON.stringify(entry)); }
    catch { this.storageOK = false; }
  }
  edit(id: string, body: string) {
    if (this.stopped || !id || body.length > MEMO_LIMIT) return;
    this.readKey(this.key(id));
    const entry = this.get(id) ?? { owner: this.owner, questionId: id, conflict: false };
    if (!entry.draft && body === (entry.remote?.body ?? "")) return;
    this.persist({ ...entry, draft: { body, revision: entry.draft?.revision ?? entry.remote?.revision ?? 0, token: crypto.randomUUID() } });
    this.notify();
    this.pending();
  }
  resolve(id: string, choice: "local" | "remote") {
    if (this.stopped) return;
    this.readKey(this.key(id));
    const entry = this.get(id);
    if (!entry?.conflict || !entry.draft) return;
    this.persist({ ...entry, conflict: false, draft: choice === "remote" ? undefined : { ...entry.draft, revision: entry.remote?.revision ?? 0, token: crypto.randomUUID() } });
    this.notify();
    this.pending();
  }
  private merge(row: QuestionMemo) {
    if (!validRow(row, this.owner)) return;
    this.readKey(this.key(row.question_id));
    const entry = this.get(row.question_id) ?? { owner: this.owner, questionId: row.question_id, conflict: false };
    if ((entry.remote?.revision ?? 0) > row.revision) return;
    const draft = entry.draft?.body === row.body ? undefined : entry.draft;
    this.persist({ ...entry, remote: row, draft, conflict: !!draft && draft.revision !== row.revision });
  }
  private acknowledge(id: string, sent: Draft, row: QuestionMemo, accepted: boolean) {
    this.readKey(this.key(id));
    const entry = this.get(id);
    if (!entry || !validRow(row, this.owner, id) || (entry.remote?.revision ?? 0) > row.revision) return;
    if (!accepted) { this.merge(row); return; }
    const draft = entry.draft?.token === sent.token ? undefined : entry.draft;
    // Typing continued while this exact base revision was being uploaded.
    const nextDraft = draft?.revision === sent.revision ? { ...draft, revision: row.revision } : draft;
    this.persist({ ...entry, remote: row, draft: nextDraft, conflict: !!nextDraft && nextDraft.revision !== row.revision });
  }
  async sync(api: MemoApi, isCurrent: () => boolean) {
    if (this.syncing || this.stopped || !isCurrent()) return;
    this.syncing = true;
    this.notify();
    try {
      const rows = await api.read(this.owner);
      if (this.stopped || !isCurrent()) return;
      this.refreshLocal();
      rows.forEach(row => this.merge(row));
      this.loaded = true;
      for (const [id, entry] of this.entries) {
        if (!entry.draft || entry.conflict) continue;
        if (this.stopped || !isCurrent()) return;
        const sent = { ...entry.draft };
        const result = await api.save(this.owner, id, sent.body, sent.revision);
        if (this.stopped || !isCurrent()) return;
        this.acknowledge(id, sent, result.row, result.accepted);
      }
      this.error = false;
    } catch { if (!this.stopped && isCurrent()) this.error = true; }
    finally { this.syncing = false; if (!this.stopped && isCurrent()) this.notify(); }
  }
  stop() { this.stopped = true; this.listeners.clear(); }
}
