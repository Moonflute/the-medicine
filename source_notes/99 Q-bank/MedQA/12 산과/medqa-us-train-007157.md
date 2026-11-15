---
type: qbank
schema_version: 1
id: medqa-us-train-007157
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb410af4264831f16d634bacff31f94935c7c4c0ea25a37ae49e19d43fc2ab45
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "알파 지중해빈혈"
  - "태아수종"
  - "알파 글로빈 유전자 결실"
  - "헤모글로빈 바트"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 11주 산모와 배우자의 유전자검사에서 각각 같은 염색체에 있는 알파글로빈 유전자 두 개가 결실된 보인자(--/αα)로 확인됐다. 이 임신에서 두 부모의 결실을 모두 물려받을 경우 가장 우려하는 태아 상태는?

## 선택지

A. 베타 지중해빈혈 중증형
B. 태아 RhD 감작
C. 유전성 구형적혈구증
D. Hb Bart 태아수종

## 해설

두 부모가 각각 같은 염색체에 알파글로빈 유전자 두 개의 결실을 가지고 있으면 태아가 네 개 모두 결실된 상태를 물려받을 수 있다. 중증 태아빈혈과 수종이 발생할 수 있어 유전상담과 산전 진단을 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원정답 A와 반대로 Rh 부적합을 답으로 설명한 해설을 알파글로빈 네 유전자 결실·Hb Bart 태아수종의 기전으로 교체했다.
- https://medlineplus.gov/genetics/condition/alpha-thalassemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007157
- https://www.ncbi.nlm.nih.gov/books/NBK1435/
