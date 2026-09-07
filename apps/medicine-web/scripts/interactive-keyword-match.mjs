// Short Latin acronyms must not match fragments such as NCCN or ADHD.
export function matchesInteractiveKeyword(text, keyword) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return /^[a-z0-9 +.-]+$/i.test(keyword)
    ? new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, "i").test(text)
    : text.includes(keyword);
}
