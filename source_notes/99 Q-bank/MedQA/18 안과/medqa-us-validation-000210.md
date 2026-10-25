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
answer: D
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

47세 남성이 교통사고 후 오른쪽 안구 적출술을 받고 퇴원한 지 2주 후 왼쪽 눈의 시력저하와 충혈로 안과에 왔다. 가장 가능성 높은 진단은?

## 선택지

A. 전방 포도막염
B. 정상적인 수술 후 시각 적응
C. 계절성 알레르기
D. 교감성 안염

## 해설

한쪽 안구의 심한 외상 및 수술 뒤 반대쪽 눈에 시력저하·충혈이 생기면 D, 교감성 안염을 의심해야 한다. 외상으로 노출된 안구 항원에 대한 자가면역 반응으로 양안 포도막 염증이 생길 수 있는 희귀 질환이지 교감신경 자극으로 생긴 흔한 안구표면 염증이 아니다. 이미 안구적출을 받았다고 항원 노출 후 발현 가능성을 절대 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 교감성 안염의 기전을 교감신경 자극/흔한 안구표면 염증으로 설명한 오류를 희귀 자가면역 포도막염으로 교정.
- 공식/학회 근거: https://eyewiki.aao.org/Sympathetic_Ophthalmia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000210
