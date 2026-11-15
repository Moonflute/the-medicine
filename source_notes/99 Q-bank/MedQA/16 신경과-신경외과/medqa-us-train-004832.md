---
type: qbank
schema_version: 1
id: medqa-us-train-004832
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95bd6eb52236dfccbd9fe3935f2956468fe2e03bc78ea156e074131eb44c4b4c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "수막종"
  - "뇌종양"
  - "발작"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsooXslpEgKEJyYWluIHR1bW9yKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 환자가 처음 발작을 겪었다. 뇌 MRI에서 경막에 넓게 붙어 있는 경계 뚜렷한 축외 종괴가 균일하게 조영되고, 인접 뇌 조직을 밀고 있다. 가장 가능성 높은 진단은?

## 선택지

A. 교모세포종
B. 원발성 중추신경계 림프종
C. 수막종
D. 뇌농양

## 해설

경막에 넓게 접하는 축외 종괴의 균일한 조영증강은 수막종의 대표적 영상 단서다. 영상에 비전형적 소견이 있으면 다른 경막 병변도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 문자 영상만으로 가장 가능성 높은 수막종 D를 유지하되 본문에 없는 경막 부착을 추가하거나 모든 다른 종양은 침습적이라고 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004832
- https://pubmed.ncbi.nlm.nih.gov/34181733/
