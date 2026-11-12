export const QBANK_REFERENCE_FRAME = "medicine-qbank-reference";
export const QBANK_REFERENCE_SEARCH_EVENT = "medicine:qbank-reference-search";

export const qbankReferenceInitScript = `try{if(window.parent!==window&&window.name==="${QBANK_REFERENCE_FRAME}")document.documentElement.dataset.qbankReference="true";}catch(e){}`;

/** Only same-origin app URLs may be sent between the question and reference panes. */
export function referenceLocation(value: unknown, origin: string, basePath = "") {
  if (typeof value !== "string" || !value || /[\\\u0000-\u001f]/.test(value)) return null;
  try {
    const url = new URL(value, origin);
    const base = basePath.replace(/\/$/, "");
    if (!/^https?:$/.test(url.protocol) || url.origin !== origin || url.username || url.password) return null;
    if (base && url.pathname !== base && !url.pathname.startsWith(`${base}/`)) return null;
    let pathname = url.pathname.slice(base.length) || "/";
    if (!pathname.endsWith("/") && !pathname.split("/").at(-1)?.includes(".")) pathname += "/";
    const suffix = url.search + url.hash;
    return { href: `${base}${pathname}${suffix}`, route: `${pathname}${suffix}` };
  } catch {
    return null;
  }
}

/** Keep session/navigation actions on the left; open actual reference links on the right. */
export function isQuestionReferenceRoute(route: string) {
  return /^\/(search|specialties|specialty|disease|cc|drugs|lab-img|skills|interactive|atlas|maternal-child-hub|nervous-system-hub)(\/|\?|#|$)/.test(route);
}

export type ReferenceHistory = { entries: string[]; index: number };

export function visitReference(history: ReferenceHistory, href: string, replace = false): ReferenceHistory {
  if (history.entries[history.index] === href) return history;
  if (replace) {
    const entries = [...history.entries];
    entries[history.index] = href;
    return { entries, index: history.index };
  }
  const entries = [...history.entries.slice(0, history.index + 1), href];
  return { entries, index: entries.length - 1 };
}

export function moveReference(history: ReferenceHistory, delta: number): ReferenceHistory {
  const index = Math.max(0, Math.min(history.entries.length - 1, history.index + delta));
  return index === history.index ? history : { ...history, index };
}
