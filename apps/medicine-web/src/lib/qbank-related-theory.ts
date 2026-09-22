import type { QbankQuestionIndex, RelatedTheoryDocument } from "./types";

export type RelatedTheoryTopic = RelatedTheoryDocument & {
  /** The canonical page plus any descendant/compatible pages covered by this topic. */
  scopeSlugs?: string[];
};

export type RelatedTheoryTopicRef = Pick<RelatedTheoryTopic, "type" | "slug">;
export type RelatedTheoryTopicStat = RelatedTheoryTopic & {
  count: number;
  questionIds: string[];
};

export type RelatedTheoryTopicStats = {
  topics: RelatedTheoryTopicStat[];
  /** Unique matching questions, retained in catalog order. */
  questions: QbankQuestionIndex[];
  questionIds: string[];
};

function cleanSlug(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function topicScope(topic: RelatedTheoryTopicRef & { scopeSlugs?: string[] }): Set<string> {
  const values = (topic.scopeSlugs?.length ? topic.scopeSlugs : [topic.slug]).map(cleanSlug).filter(Boolean);
  // A supplied descendant scope must never make the selected page itself disappear.
  const slug = cleanSlug(topic.slug);
  if (slug) values.push(slug);
  return new Set(values);
}

export function relatedTheoryTopicKey(topic: RelatedTheoryTopicRef): string {
  const slug = cleanSlug(topic.slug);
  return slug && (topic.type === "disease" || topic.type === "cc")
    ? `${topic.type}:${encodeURIComponent(slug)}`
    : "";
}

export function parseRelatedTheoryTopicKeys(
  value: string | readonly string[] | null | undefined,
): RelatedTheoryTopicRef[] {
  const chunks = (Array.isArray(value) ? value : [value ?? ""])
    .flatMap((item) => item.split(","))
    .map((item) => item.trim())
    .filter(Boolean);
  const parsed: RelatedTheoryTopicRef[] = [];
  const seen = new Set<string>();

  for (const chunk of chunks) {
    const separator = chunk.indexOf(":");
    const type = chunk.slice(0, separator);
    if (separator < 1 || (type !== "disease" && type !== "cc")) continue;
    let slug = "";
    try {
      slug = cleanSlug(decodeURIComponent(chunk.slice(separator + 1)));
    } catch {
      continue;
    }
    if (!slug) continue;
    const topic = { type, slug } as RelatedTheoryTopicRef;
    const key = relatedTheoryTopicKey(topic);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    parsed.push(topic);
  }
  return parsed;
}

export function serializeRelatedTheoryTopicKeys(topics: readonly RelatedTheoryTopicRef[]): string {
  return [...new Set(topics.map(relatedTheoryTopicKey).filter(Boolean))].join(",");
}

function questionMatchesTopic(question: QbankQuestionIndex, topic: RelatedTheoryTopic): boolean {
  if (question.questionBank !== "theory") return false;
  const scope = topicScope(topic);
  if (!scope.size) return false;

  if (topic.type === "disease") {
    return (question.targetType === "disease" && scope.has(question.targetSlug))
      || question.relatedDiseaseSlugs.some((slug) => scope.has(slug));
  }
  return (question.targetType === "cc" && scope.has(question.targetSlug))
    || question.relatedCcSlugs.some((slug) => scope.has(slug));
}

export function filterRelatedTheoryQuestions(
  index: readonly QbankQuestionIndex[],
  topics: readonly RelatedTheoryTopic[],
): QbankQuestionIndex[] {
  if (!topics.length) return [];
  const seen = new Set<string>();
  return index.filter((question) => {
    if (seen.has(question.id) || !topics.some((topic) => questionMatchesTopic(question, topic))) return false;
    seen.add(question.id);
    return true;
  });
}

export function buildRelatedTheoryTopicStats(
  index: readonly QbankQuestionIndex[],
  topics: readonly RelatedTheoryTopic[],
): RelatedTheoryTopicStats {
  const topicStats = topics.map((topic) => {
    const questions = filterRelatedTheoryQuestions(index, [topic]);
    return { ...topic, count: questions.length, questionIds: questions.map((question) => question.id) };
  });
  const questions = filterRelatedTheoryQuestions(index, topics);
  return { topics: topicStats, questions, questionIds: questions.map((question) => question.id) };
}
