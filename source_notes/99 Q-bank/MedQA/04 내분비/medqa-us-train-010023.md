---
type: qbank
schema_version: 1
id: medqa-us-train-010023
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d18ce9c421ae92eaf32bc0750fdf784d337b193e3d019b09104d63407cf3863c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "음이온차"
  - "치료 종료 기준"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 음이온차 단독 대신 DKA 해소 기준 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "음이온차 단독 대신 DKA 해소 기준 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

27세 남성이 당뇨병성 케톤산증으로 정맥 인슐린을 받고 있다. 혈당은 184 mg/dL로 낮아졌다. 성인 합의 기준에서 케톤산증의 해소를 확인할 소견은?

## 선택지

A. 혈중 β-하이드록시부티레이트 <0.6 mmol/L이고, 정맥 pH ≥7.3 또는 중탄산염 ≥18 mmol/L
B. 혈당 <200 mg/dL이면 혈중 케톤 수치와 관계없이 해소
C. 요 케톤이 음성이면 혈중 케톤 수치와 관계없이 해소
D. 음이온차가 줄면 산증이나 혈중 케톤을 확인할 필요 없음

## 해설

호전은 혈중 케톤이 사라지고 산증이 회복되었는지로 판단한다. 혈당만 먼저 정상에 가까워질 수 있고, 대량 수액 이후 정상 음이온차 대사산증이 남을 수도 있다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 음이온차 단독 대신 DKA 해소 기준 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010023
- https://doi.org/10.2337/dci24-0032

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
