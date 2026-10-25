---
type: qbank
schema_version: 1
id: medqa-us-train-009289
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6ff34d5c42067615e68ea4c2f81af02a7d552abb5c19caba4cdeeaa67d0bf9a9
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Turner syndrome"
  - "터너증후군"
  - "benign nevi"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14세 여아가 초경이 없어 소아과에 내원했다. 어머니는 9세에 음모가 발달했다고 한다. 어린 시절부터 반복적인 장액성 중이염도 있었다. 체온 36.8°C, 맥박 88회/분, 혈압 128/78 mmHg, 호흡수 14회/분이다. 진찰에서 손발톱 형성저하, 짧은 네 번째와 다섯 번째 중수골, 양측 외반주가 보인다. 흉부에서 유방 발달이 없고 유두 간격이 넓으며 심음은 정상이고 잡음은 없다. 머리와 목에서 높은 아치형 입천장, 부정교합, 낮은 헤어라인이 보인다. 피부 진찰에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 흑색가시세포증
B. 피부 혈관종
C. 양성 모반 수 증가
D. 피부건조증

## 해설


정답 C. 사춘기 유방발달 지연, 넓은 유두 간격·외반주·짧은 중수골·낮은 헤어라인과 반복 중이염은 Turner 증후군을 시사한다. 피부에서 다수의 양성 색소모반이 관찰될 수 있다. 모든 피부색소가 정상이라는 일반화는 부적절하며 확진에는 핵형 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009289 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Turner–다수 양성모반 C 연관성 유지, 피부색소 정상이라는 무의미 일반화 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009289
