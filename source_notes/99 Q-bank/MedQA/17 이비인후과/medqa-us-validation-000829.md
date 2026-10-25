---
type: qbank
schema_version: 1
id: medqa-us-validation-000829
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:64261a526172b90a80f342140b41ab0b4c4c06b36b9611c674ccfb485631ae39
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "후두개염"
  - "기도 응급"
  - "Haemophilus influenzae type b"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 갑작스러운 연하곤란, 통증, 먹먹한 목소리와 흡기성 천명으로 응급실에 왔다. 고열, 불안, 목을 뒤로 젖힌 자세, 양측 경부 림프절병증과 설골 압통, 백혈구 18,000/mm³가 있다. 가장 가능성 높은 원인균은?

## 선택지

A. 녹농균
B. 디프테리아균
C. 파라인플루엔자 바이러스
D. B형 헤모필루스 인플루엔자

## 해설

급성 고열, 연하통·연하곤란, 먹먹한 목소리, 불안과 흡기성 천명은 후두개염/성문상부염에 합당하다. 제시된 네 원인 중 D, H. influenzae type b는 이 질환과 대표적으로 연관되는 세균이다. 다만 Hib 예방접종 이후의 성인 후두개염 원인균은 다양하므로 모든 성인에서 Hib가 가장 흔하다고 단정하거나 임상상만으로 혈청형을 확정할 수는 없다. 쉰 목소리와 먹먹한 목소리도 구별해야 하며 영어 원문은 muffled voice이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Hib를 현행 성인 후두개염의 일률적 최다 원인이라고 단정한 설명을 교정하고 선지 내 대표적 원인으로 한정.
- 공식/학회 근거: https://www.cdc.gov/hi-disease/hcp/clinicians/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000829
