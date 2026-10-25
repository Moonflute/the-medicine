---
type: qbank
schema_version: 1
id: medqa-us-test-000980
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e1b73c3c2becce2f0ac69d4b53c53a3ba4e174401d078922aa2dc68310c4cbc1
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "삼출성 흉수"
  - "림프종"
  - "라이트 기준"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: diagnosis
difficulty: standard
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

67세 남성이 호흡곤란과 가슴의 무거운 느낌으로 응급실에 왔다. 지난 한 달 동안 점점 숨이 차 계단을 오르지 못해 거실에서 잠을 잔다. 두통과 피로도 있다. 오른쪽 호흡음이 감소하고 타진에서 둔탁했으며 흉부 X선에서 오른쪽 흉수가 보였다. 흉강천자액 단백질 5.8 g/dL, 혈청 단백질 7.0 g/dL, LDH 258 U/L였다. 이 흉수 소견을 일으킬 수 있는 질환은?

## 선택지

A. 울혈성 심부전
B. 간경변
C. 림프종
D. 신증후군

## 해설


흉수/혈청 단백비는 5.8/7.0으로 0.5를 넘어 삼출성 흉수에 해당한다. 선택지 중 림프종(C)이 삼출의 원인이 될 수 있고 나머지는 전형적으로 여출성 원인이다. 이것만으로 림프종 확진이나 가장 흔한 원인이라는 뜻은 아니며 혈청 LDH 정보 없이 LDH비를 계산하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000980 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흉수/혈청 단백비 0.83의 exudate와 lymphoma C 유지. 혈청 LDH 없이 LDH상승 판정·림프종이 삼출의 최흔원인이라는 과장 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000980
