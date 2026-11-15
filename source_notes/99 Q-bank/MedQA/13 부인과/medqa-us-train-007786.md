---
type: qbank
schema_version: 1
id: medqa-us-train-007786
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bde1f6211527cc1495cfb1f39bce3e1198e0ebfd5822551c0eaf8511435e2d9e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "bicornuate uterus"
  - "Müllerian duct anomaly"
  - "incomplete Müllerian fusion"
  - "Bicornuate uterus"
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 반복 임신 소실로 평가받는다. 3차원 질식 초음파에서 하나의 자궁경부 위로 자궁강이 둘로 나뉘고, 자궁저부 바깥 윤곽이 중앙에서 1.5 cm 깊이로 패여 있다. 가장 맞는 기형은?

## 선택지

A. 중격자궁
B. 궁상자궁
C. 단각자궁
D. 쌍각자궁

## 해설

쌍각자궁은 자궁각이 갈라지고 바깥 저부가 깊게 함몰된다. 중격자궁은 자궁강 내부가 나뉘지만 바깥 저부의 함몰은 없거나 얕다. 감별은 수술 계획에 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 하나의 자궁경부를 가진 두 자궁강을 곧바로 이중자궁이라고 한 분류 혼동을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007786
- https://integration.asrm.org/practice-guidance/practice-committee-documents/asrm-mullerian-anomalies-clasification-2021/
