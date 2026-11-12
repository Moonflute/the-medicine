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

/** External evidence may be displayed, but never receives our same-origin router bridge. */
export function referenceTarget(value: unknown, origin: string, basePath = "") {
  const internal = referenceLocation(value, origin, basePath);
  if (internal) return { ...internal, external: false as const };
  if (typeof value !== "string" || /[\\\u0000-\u001f]/.test(value)) return null;
  try {
    const url = new URL(value, origin);
    if (url.protocol !== "https:" || url.origin === origin || url.username || url.password) return null;
    return { href: url.href, route: "", external: true as const };
  } catch {
    return null;
  }
}

/** A newly started related quiz assigns its session ID after navigation. */
export function referenceNavigationMatches(expected: string, actual: string, origin: string, basePath = "") {
  const before = referenceLocation(expected, origin, basePath);
  const after = referenceLocation(actual, origin, basePath);
  if (!before || !after) return false;
  if (before.href === after.href) return true;
  const left = new URL(before.href, origin), right = new URL(after.href, origin);
  if (left.pathname !== right.pathname || !before.route.startsWith("/review/qbank/session/") || left.hash !== right.hash) return false;
  if (!left.searchParams.has("session")) right.searchParams.delete("session");
  left.searchParams.delete("resume"); right.searchParams.delete("resume");
  left.searchParams.sort(); right.searchParams.sort();
  return left.search === right.search;
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
