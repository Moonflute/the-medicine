---
type: qbank
schema_version: 1
id: medqa-us-train-001650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a9cc1a40ea77de11be368e50bf9a9df485340632137f65da5c85fda2ef7b4f6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "anion gap closure"
  - "treatment endpoint"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: DKA 해소 기준을 ketone·산증의 회복으로 교정."
curation_status: "revised"
curation_reason: "DKA 해소 기준을 ketone·산증의 회복으로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

제1형 당뇨병 병력이 있는 27세 남성이 의식 변화로 응급실에 내원했다. 지난 하루 동안 점점 무기력하고 혼란스러워져 룸메이트가 데려왔다. 체온은 99.0°F (37.2°C), 혈압은 107/68 mmHg, 맥박은 120회/분, 호흡수는 17회/분, 산소포화도는 98%이다. 혈청 Na+ 144 mEq/L, Cl− 100 mEq/L, K+ 6.3 mEq/L, HCO3− 16 mEq/L, BUN 20 mg/dL, 포도당 599 mg/dL, 크레아티닌 1.4 mg/dL, Ca2+ 10.2 mg/dL이다. 이 환자에게 의심되는 DKA를 치료할 때, 생화학적 해소를 판단하는 적절한 기준은 무엇인가?

## 선택지

A. 임상적으로 무증상
B. 혈중 beta-hydroxybutyrate <0.6 mmol/L이고, 정맥 pH ≥7.3 또는 HCO3 ≥18 mmol/L
C. 정상 혈당
D. 활력징후 안정

## 해설

심한 고혈당과 음이온차 산증은 DKA를 의심하게 하며 혈중 ketone 등으로 확인한다. DKA 해소는 혈중 beta-hydroxybutyrate <0.6 mmol/L에 더해 정맥 pH ≥7.3 또는 HCO3 ≥18 mmol/L로 판단한다. 혈당만 정상화되거나 음이온차만 닫힌 것으로 충분하지 않다. 회복 후에도 기저 인슐린을 유지하며 정주에서 피하 인슐린으로 안전하게 전환해야 하므로 모든 치료를 중단한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: DKA 해소 기준을 ketone·산증의 회복으로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001650

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
