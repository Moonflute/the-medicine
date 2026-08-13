"""Persist high-confidence Q-bank medication references in source Markdown.

The generated UI must not guess from a question at runtime.  This pass scans
the question stem, all answer choices and the explanation against canonical
drug-note titles, aliases and uniquely identifiable brand names, then writes
the resulting drug slugs into ``related_drug_slugs`` front matter.

Only exact, unambiguous mention matches are accepted.  Drug-class words and
ambiguous aliases are intentionally left out until a canonical class document
exists.
"""
from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
QBANK_ROOTS = (
    ROOT / "source_notes" / "99 Q-bank" / "MedQA",
    ROOT / "source_notes" / "99 Q-bank" / "Theory",
)
DRUGS_PATH = ROOT / "_webapp" / "data" / "drugs.json"
REPORT = ROOT / "reports" / "qbank-drug-link-audit.json"


def split_frontmatter(raw: str) -> tuple[str, str]:
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, re.S)
    return (match.group(1), raw[match.end():]) if match else ("", raw)


def read_list(frontmatter: str, key: str) -> list[str]:
    match = re.search(rf"(?ms)^{re.escape(key)}:\s*\n(.*?)(?=^[^ \t-][^:]*:|\Z)", frontmatter)
    if not match:
        return []
    return [item.strip().strip('"\'') for item in re.findall(r"(?m)^\s*-\s*(.+?)\s*$", match.group(1))]


def replace_list(frontmatter: str, key: str, values: list[str]) -> str:
    block = key + ":\n" + "\n".join(f"  - {value}" for value in values)
    pattern = rf"(?ms)^{re.escape(key)}:\s*(?:\n(?:[ \t]*-.*)*)"
    if re.search(pattern, frontmatter):
        return re.sub(pattern, block, frontmatter, count=1).rstrip()
    return frontmatter.rstrip() + "\n" + block


def candidate_pattern(term: str) -> re.Pattern[str]:
    escaped = re.escape(term)
    # Latin drug names require letter/digit boundaries so e.g. "morphine" is
    # not harvested from a longer compound token. Korean terms can be adjacent
    # to punctuation or particles; exact text remains the conservative test.
    if re.search(r"[A-Za-z0-9]", term):
        return re.compile(rf"(?<![A-Za-z0-9]){escaped}(?![A-Za-z0-9])", re.I)
    return re.compile(escaped)


def build_candidates(drugs: list[dict[str, object]]) -> dict[str, list[dict[str, str]]]:
    by_term: dict[str, set[str]] = defaultdict(set)
    labels: dict[tuple[str, str], str] = {}
    for drug in drugs:
        slug = str(drug["slug"])
        title = str(drug["title"])
        meta = drug.get("drugMeta") if isinstance(drug.get("drugMeta"), dict) else {}
        raw_terms = [title, *(drug.get("aliases") or []), *((meta or {}).get("brands") or [])]
        for raw in raw_terms:
            term = re.sub(r"\s+", " ", str(raw)).strip()
            # Short items create too many accidental Korean/abbreviation hits.
            compact = re.sub(r"[^A-Za-z0-9가-힣]", "", term)
            if len(compact) < 3:
                continue
            key = term.casefold()
            by_term[key].add(slug)
            labels[(key, slug)] = term
    candidates: dict[str, list[dict[str, str]]] = {}
    for key, slugs in by_term.items():
        if len(slugs) != 1:
            continue
        slug = next(iter(slugs))
        candidates[key] = [{"slug": slug, "term": labels[(key, slug)]}]
    return candidates


def question_text(body: str) -> str:
    # All body sections are intentionally included: the user needs option and
    # explanation medications too, not just medications in the stem.
    return re.sub(r"<!--.*?-->", "", body, flags=re.S)


def main() -> None:
    drugs = json.loads(DRUGS_PATH.read_text(encoding="utf-8"))
    candidates = build_candidates(drugs)
    # One combined expression is dramatically faster than testing every drug
    # against every one of ~9,000 questions.  Entries are ordered longest-first
    # so a full product/generic name wins over a contained short alias.
    term_entries = [(entry["term"], entry["slug"]) for values in candidates.values() for entry in values]
    term_entries.sort(key=lambda item: len(item[0]), reverse=True)
    term_lookup = {term.casefold(): slug for term, slug in term_entries}
    mention_pattern = re.compile("|".join(re.escape(term) for term, _ in term_entries), re.I)
    changed = 0
    linked_questions = 0
    mention_counter: Counter[str] = Counter()
    per_drug: Counter[str] = Counter()
    ambiguous_existing: list[str] = []

    for root in QBANK_ROOTS:
        if not root.exists():
            continue
        for path in root.rglob("*.md"):
            if path.name.lower() in {"index.md", "readme.md"}:
                continue
            raw = path.read_text(encoding="utf-8")
            frontmatter, body = split_frontmatter(raw)
            if not frontmatter or not re.search(r"(?m)^type:\s*qbank\s*$", frontmatter):
                continue
            matches: dict[str, set[str]] = defaultdict(set)
            text = question_text(body)
            for match in mention_pattern.finditer(text):
                term = match.group(0)
                slug = term_lookup.get(term.casefold())
                if not slug:
                    continue
                if re.search(r"[A-Za-z0-9]", term):
                    before = text[match.start() - 1] if match.start() else ""
                    after = text[match.end()] if match.end() < len(text) else ""
                    if (before and before.isascii() and before.isalnum()) or (after and after.isascii() and after.isalnum()):
                        continue
                matches[slug].add(term)
            slugs = sorted(matches)
            existing = read_list(frontmatter, "related_drug_slugs")
            if existing and existing != slugs:
                ambiguous_existing.append(str(path.relative_to(ROOT)))
            if slugs:
                linked_questions += 1
                for slug, terms in matches.items():
                    per_drug[slug] += 1
                    for term in terms:
                        mention_counter[term] += 1
                new_frontmatter = replace_list(frontmatter, "related_drug_slugs", slugs)
            else:
                # Preserve hand-curated fields if present; this script only
                # writes a no-match field when none existed.
                new_frontmatter = frontmatter if existing else frontmatter
            # Q-bank source notes deliberately keep one blank line between
            # front matter and the document heading. Preserve that shape even
            # for no-match documents so this pass never creates cosmetic diffs.
            rendered = "---\n" + new_frontmatter + "\n---\n\n" + body
            if rendered != raw:
                path.write_text(rendered, encoding="utf-8")
                changed += 1

    slug_title = {str(item["slug"]): str(item["title"]) for item in drugs}
    payload = {
        "source": "canonical drug-note title/alias/unique-brand exact match",
        "drugCatalogCount": len(drugs),
        "candidateTermCount": len(candidates),
        "linkedQuestionCount": linked_questions,
        "changedQuestionCount": changed,
        "existingFieldConflictPaths": ambiguous_existing,
        "linksByDrug": [
            {"slug": slug, "title": slug_title.get(slug, slug), "questionCount": count}
            for slug, count in per_drug.most_common()
        ],
        "matchedTerms": [{"term": term, "questionCount": count} for term, count in mention_counter.most_common()],
    }
    REPORT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"linkedQuestions": linked_questions, "changed": changed, "drugs": len(per_drug), "conflicts": len(ambiguous_existing)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
