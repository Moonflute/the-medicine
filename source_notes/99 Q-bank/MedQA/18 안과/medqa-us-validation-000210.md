---
type: qbank
schema_version: 1
id: medqa-us-validation-000210
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:37f80dd9d92471191d6489aad20bd42e44caeb944f09ada6a179d0360d6edcaa
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "교감성 안염"
  - "안구 외상"
  - "양측성 포도막염"
  - "Sympathetic ophthalmia"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-yViOq1rCDsmbjsg4EubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

한쪽 눈의 심한 관통손상 수술을 받은 환자가 수주 뒤 반대쪽 눈의 시력저하와 눈부심으로 왔다. 세극등에서 반대쪽 눈에 육아종성 포도막염이 보인다. 가장 의심되는 진단은?

## 선택지

A. 수술과 무관한 계절성 알레르기
B. 교감성 안염
C. 급성 폐쇄각 녹내장
D. 단순 결막하출혈

## 해설

한쪽 안구 손상 뒤 반대쪽 눈에 육아종성 포도막염이 생기면 드물지만 교감성 안염을 의심한다. 남은 시력을 보호하기 위해 신속한 안과 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 교감성 안염의 기전을 교감신경 자극/흔한 안구표면 염증으로 설명한 오류를 희귀 자가면역 포도막염으로 교정.
- 공식/학회 근거: https://eyewiki.aao.org/Sympathetic_Ophthalmia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000210
- https://pubmed.ncbi.nlm.nih.gov/35647958/
