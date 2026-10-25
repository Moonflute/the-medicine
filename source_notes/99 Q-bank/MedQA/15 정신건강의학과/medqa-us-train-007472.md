---
type: qbank
schema_version: 1
id: medqa-us-train-007472
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:47d559e955fd499a7d859037cf09013d98ed48607cd0f13afb79440590195711
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 폭식증"
  - "러셀 징후"
  - "구토"
  - "저염소성 대사성 알칼리증"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEse2PreyLneymnSAoQnVsaW1pYSBOZXJ2b3NhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여대생이 진료를 받기 위해 내원했다. 특별한 과거력은 없고 일정한 체중을 유지하기 어렵다는 것 외에는 불편감이 없다. 체온은 98.6°F(37.0°C), 혈압 100/65 mmHg, 맥박 62회/분, 호흡수 12회/분, BMI 19.5이다. 신체검사에서 손가락 관절 위 굳은살과 치아 법랑질 침식이 보인다. 다음 중 어떤 검사실 이상이 나타날 가능성이 가장 높은가?

## 선택지

A. 염소 감소, 칼륨 감소, 중탄산염 감소
B. 염소 감소, 칼륨 감소, 중탄산염 증가
C. 염소 감소, 칼륨 증가, 중탄산염 증가
D. 염소 증가, 칼륨 감소, 중탄산염 감소

## 해설

손등 관절 굳은살과 치아 법랑질 침식은 반복적인 자기 유발 구토를 시사한다. 위산/염소 소실과 체액 감소에 따른 신장 반응은 저염소·저칼륨 대사성 알칼리증, 즉 B의 패턴을 만들 수 있다. 본문에는 식욕부진이 없고, 신경성폭식증의 확진에는 폭식·보상행동 등을 추가 확인해야 하지만 이 문항의 전해질 기전 판단은 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 본문에 없는 식욕부진을 제거하고 구토 관련 전해질 기전과 폭식증 확진을 구별했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007472
