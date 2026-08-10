# Theory QBank Development Plan

## 1. Goal

Add an internal **theory-question bank** alongside the existing MedQA clinical-vignette QBank.

- Clinical QBank: externally sourced, patient-vignette multiple-choice questions.
- Theory QBank: questions derived from this repository's disease, CC, drug, ECG/image, and Infection Hub content.
- The aim is retention of high-yield clinical knowledge, not mechanical conversion of every page into the same number of questions.

This plan is the working guide for GPT-5.6 Luna at `xhigh` reasoning. The model must prioritize appropriate *selection* of what to ask before it writes questions.

## 2. Core rule: adaptive coverage, not uniform coverage

Do **not** create one fixed question set per disease or CC.

| Coverage class | Expected count | Use when | Example |
| --- | ---: | --- | --- |
| `none` | 0 | Index page, duplicate, narrow low-yield detail, or insufficiently supported note | A short navigational disease page |
| `essential` | 1-2 | One action or recognition rule is the only item worth retaining | Anaphylaxis: immediate IM epinephrine |
| `standard` | 3-5 | Common disease with distinct definition, diagnosis, and management decisions | Asthma, heart failure |
| `expanded` | 6-10 | Broad, high-frequency topic with several independently testable decisions | Hypertension, diabetes, atrial fibrillation |
| `hub-linked` | 0-3 new items plus links | Existing specialized quiz already covers the topic well | Infection pathways, antibiotic spectrum |

Question count is a consequence of independently useful learning objectives. It is not a quota.

## 3. Input sources and routing

### 3.1 Primary source hierarchy

1. The target disease, CC, or drug markdown page.
2. Linked disease pages and the relevant specialty roadmap/TOC for context.
3. Existing structured resources in the repository: Infection Hub, antibiotic spectrum, microbiology relations, EKG/image content, and existing QBank metadata.
4. Existing external source links already recorded in the note.

Do not introduce unsupported facts from memory when the note does not provide enough evidence. Mark the target `defer` instead.

### 3.2 Routing rules

- **Disease page**: derive questions from its defined high-yield concepts and connect every item back to the disease slug.
- **CC page**: ask history, red flags, initial workup, immediate disposition, and high-priority differential reasoning. Do not duplicate disease-page recall questions.
- **Drug page**: prioritize drug-class concepts and the representative drugs that must be distinguished in practice. Test mechanism, high-value indication, serious adverse effect, contraindication, interaction, monitoring, or reversal only when the note supports it. Do not assign a quota to every individual drug.
- **Arrhythmia / ECG topic**: prefer rhythm-recognition questions only when an existing ECG image or clearly described tracing is available. Do not invent an image or claim that one exists.
- **Infection topic**: reuse, link to, or extend Infection Hub/antibiotic-spectrum questions. Avoid near-duplicate organism-drug questions already present there.
- **Image / procedure topic**: use recognition only when the repository contains the actual asset and a stable interpretation.

## 4. Phase A — Create the curriculum manifest first

Before generating any theory questions, create a machine-readable manifest, one record per candidate disease/CC/drug.

Suggested file: `source_notes/07 QBank/theory_manifest.json` (final location can be adjusted during implementation).

```json
{
  "target_type": "disease",
  "target_slug": "example-slug",
  "target_title": "Example disease",
  "specialty": "01 순환기",
  "drug_class": null,
  "linked_targets": [
    { "type": "disease", "slug": "example-related-disease" }
  ],
  "coverage_class": "standard",
  "planned_question_count": 4,
  "learning_objectives": [
    {
      "id": "dx-core",
      "priority": "must-know",
      "concept": "diagnostic definition or key recognition feature",
      "format": "single_best_answer",
      "source_sections": ["Definition", "Diagnosis"]
    }
  ],
  "reuse": {
    "infection_hub": false,
    "existing_quiz_ids": [],
    "image_asset": null
  },
  "exclusions": ["unsupported detail"],
  "rationale": "Why this amount and these objectives are appropriate",
  "review_status": "proposed"
}
```

### Manifest constraints

- `planned_question_count` must equal the number of learning objectives.
- Each objective must be independently useful; merge objectives that only restate the same fact.
- At least one `must-know` objective is required for `essential`, `standard`, and `expanded` coverage.
- A target may be `none` or `defer`; these are valid decisions, not failures.
- Do not mark an image format unless the repository contains the image asset.
- Record existing Infection Hub/quiz reuse rather than silently duplicating it.
- For drug targets, record both `drug_class` and the disease/CC context where the same decision may already be tested.

## 5. Phase B — Generate questions only from approved manifest records

Each approved learning objective generates at most one base question. The expected format is a Korean, four-option, single-best-answer question.

Suggested frontmatter:

```yaml
type: qbank
source: internal-theory
source_split: theory
id: theory-disease-example-slug-dx-core
specialty: 01 순환기
related_diseases:
  - Example disease
related_chief_complaints: []
related_drugs: []
question_type: recognition
theory_objective_id: dx-core
theory_format: single_best_answer
evidence_sections:
  - Definition
  - Diagnosis
review_status: draft
```

Required body sections:

```md
## 문제

## 선택지
A. ...
B. ...
C. ...
D. ...

## 해설
```

## 6. Question design rules

### 6.1 Appropriate formats

- **Core recall / definition**: only for facts that are genuinely foundational.
- **Recognition**: characteristic pattern, diagnostic criterion, ECG or image when available.
- **Mechanism**: use when the mechanism changes clinical reasoning or prevents a predictable error.
- **Next action / safety**: immediate management, contraindication, red flag, escalation.
- **Discrimination**: differentiate two commonly confused conditions using one decisive feature.
- **Sequencing**: only where order materially matters, such as anaphylaxis first-line treatment.

### 6.2 What to avoid

- Four paraphrases of the same fact for one disease.
- Trivia, isolated numeric minutiae, or unsupported guideline thresholds.
- Fabricated clinical images, ECG strips, laboratory values, citations, or patient details.
- Ambiguous stems with two plausible answers.
- “All of the above”, “none of the above”, and negatively worded stems unless unavoidable.
- Recreating an existing clinical QBank vignette as a shallow recall question.

### 6.3 Options and explanation

- One answer must be clearly best from the source content.
- Distractors should represent realistic misconceptions or nearby diagnoses, never nonsense.
- Keep the explanation concise: answer, decisive reason, and why the key alternative is wrong when useful.
- State uncertainty as `defer` in the manifest instead of guessing.

## 7. Required special handling

### Hypertension and other broad diseases

Use `expanded` only when each item covers a distinct high-yield decision: definition/measurement, secondary causes, initial medication selection, target-organ damage, and emergency distinction are examples. Do not inflate count with minor variants.

### Anaphylaxis and other immediate-action topics

Use `essential` if one irreversible safety principle dominates the topic. For anaphylaxis, the core question must verify immediate IM epinephrine; additional questions require a separate, well-supported learning objective.

### Arrhythmias

Use EKG recognition only when a source image or faithful structured tracing exists. Pair recognition with a management question only if the two objectives are genuinely different.

### Infection

Audit Infection Hub and existing quiz IDs before creating a new item. Prefer link/reuse over duplication. New questions should fill a documented gap, such as a disease-specific treatment pathway not already covered by the hub.

### CC

Favor action-oriented reasoning: red flags, first questions, initial examination, first test, and disposition. A CC item should not merely ask for the title of a linked disease.

### Drugs

Use a class-first, representative-drug approach.

- Good targets: mechanism that changes use, first-line indication, high-risk adverse effect, major contraindication, clinically important interaction, required monitoring, dose adjustment principle, and reversal/antidote when relevant.
- Prefer one discriminating question for a drug class over near-identical questions for every member.
- Add a representative-drug question only when it has a clinically meaningful exception (for example, a unique toxicity, indication, route, or reversal strategy).
- Cross-check linked disease and CC objectives before generation. If the same decision is already tested there, create the item once and link it to both targets instead of duplicating it.
- Infection/antibiotic questions must audit the Infection Hub and antibiotic-spectrum quiz before adding a new drug item.

## 8. Luna execution protocol

### Pass 1: selection only

For a bounded batch (one specialty or 25-50 targets), inspect the sources and produce only manifest entries. Do not create QBank markdown in this pass.

Return a compact batch summary:

- targets considered;
- count by coverage class;
- planned item total;
- records deferred or excluded, with reasons;
- required Infection Hub/image reuse decisions.

### Pass 2: challenge the manifest

Before question generation, check each objective for:

- overlap with another objective;
- factual support in the note;
- existing Hub/QBank duplication;
- whether a lower coverage class is more appropriate;
- a clearly testable single-best-answer format.

Revise the manifest before moving on.

### Pass 3: generate QBank markdown

Generate only approved entries, preserving stable IDs. Keep the question concise and the explanation short. Write no more than the manifest count.

### Pass 4: local QA

For each generated entry, verify:

- source-linked disease/CC/drug and specialty are correct;
- exactly four options A-D exist;
- answer key matches explanation;
- Korean rendering is clean;
- no Fahrenheit, nonexistent image, fabricated citation, or duplicated objective remains;
- related disease/CC links are populated where appropriate.

## 9. Batch order

1. Build and review the manifest for one high-yield pilot specialty.
2. Generate only the approved pilot set.
3. Review the distribution and quality before expanding.
4. Process remaining specialties in bounded batches, prioritizing high-yield diseases and CCs.
5. Run a repository-wide duplicate and metadata audit only after a large batch is complete.

Recommended first pilot: cardiovascular or emergency/allergy, because they demonstrate both expanded coverage (hypertension/arrhythmia) and essential coverage (anaphylaxis).

## 10. Acceptance criteria

- Every generated question maps to a manifest learning objective.
- Question counts vary by topic importance and breadth, never by a fixed page quota.
- Existing specialized quizzes are reused or linked instead of duplicated.
- Drug questions use class-first coverage and do not duplicate disease, CC, or Infection Hub objectives.
- Each question has a stable ID, correct links, and a concise explanation.
- No generated item depends on facts or media absent from the repository source material.
- The generated markdown remains compatible with the existing QBank build pipeline.

## 11. Explicit non-goals for the first implementation

- Do not automatically generate theory questions for every page.
- Do not generate novel medical illustrations or ECG images.
- Do not replace the existing MedQA clinical-vignette QBank.
- Do not attempt exhaustive guideline coverage before the manifest and pilot quality are accepted.
