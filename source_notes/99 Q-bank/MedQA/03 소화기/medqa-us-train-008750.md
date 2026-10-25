---
type: qbank
schema_version: 1
id: medqa-us-train-008750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f13596aba7aec33a5c8b5b23ccc5497c90bd07b6ba80215f5d759e323a6ab2a3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute cholecystitis"
  - "biliary colic"
  - "gallbladder ultrasound"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

47세 여성이 심한 복통과 불편감으로 남편과 함께 응급실에 내원했다. 통증은 이틀 전 시작되었고 등으로 방사되며 오심을 동반한다. 과거에도 기름진 식사 후 비슷한 통증이 있었으나 저절로 호전되었다. 사회적으로 음주하고 15갑년 흡연력이 있다. 맥박 121회/분, 혈압 121/71mmHg, 체온 103.1°F(39.5°C)이다. 오른쪽 상복부와 심와부에 압통, 방어, 반발통이 있고 장음은 감소되어 있다. 혈색소 11g/dL, 백혈구 13,400/mm³, 호중구 80%, 림프구 15%, 단핵구 5%, ESR 45mm/h, CRP 9.9mg/dL이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 충수 초음파
B. 담낭 초음파
C. 상부 위장관 내시경
D. 혈청 리파아제 측정

## 해설


반복 식후 RUQ 통증에 고열·백혈구증가와 압통이 동반되어 담낭염 등 담도질환을 의심하며 초기 영상으로 담낭 초음파(B)가 적절하다. HIDA 등보다 항상 가장 민감해서가 아니라 접근성·결석/담도 평가 장점 때문에 우선한다. 등으로 방사되는 통증은 췌장염도 감별해야 하므로 lipase 등 검사를 병행할 수 있고, 반발통·빈맥이 있어 합병증 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008750 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 담낭염 의심의 초기 초음파 B 유지. 초음파를 모든 검사 중 가장 민감하다고 한 오류 교정하고 복막자극·빈맥은 신속평가 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gravitas.acr.org/ACPortal/GetDataForOneTopic?topicId=132

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008750
