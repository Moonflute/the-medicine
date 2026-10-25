---
type: qbank
schema_version: 1
id: medqa-us-train-003288
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:53b3d4acaefb9aa35f39a649d674e9bf98dd970590d3352f641267e3f9bf8f1a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "cannabis intoxication"
  - "marijuana use"
  - "conjunctival injection"
  - "impaired reaction time"
  - "Cannabis intoxication"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

22세 여성이 이상행동으로 룸메이트와 함께 응급실에 왔다. 파티에서 술과 기분전환용 약물을 섭취했지만 무엇을 먹고 마셨는지는 모른다. 건강하고 복용약은 없으며 불안해 보인다. 체온 37.5°C, 맥박 110회/분, 호흡수 16회/분, 혈압 145/82 mmHg이다. 점막이 건조하고 양측 결막 충혈이 있으며 폐와 복부 진찰은 정상이다. 추가 평가에서 다음 중 가장 가능성 높은 소견은?

## 선택지

A. 호흡억제
B. 식욕감소
C. 동공수축
D. 반응속도 저하(반응시간 연장)

## 해설

결막 충혈, 구강 건조, 빈맥과 행동 변화의 조합은 대마초 중독을 시사한다. 추가로 반응속도 저하, 즉 반응시간 연장(D)이 나타날 수 있다. 여기서 impaired reaction time은 더 빨리 반응한다는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: impaired reaction time을 반응시간이 짧아진다는 뜻으로 읽힐 수 있게 번역한 오류를 반응속도 저하·반응시간 연장으로 명확히 했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003288
