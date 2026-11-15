---
type: qbank
schema_version: 1
id: medqa-us-train-006411
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b608fe1934cb0988c83d349a4ec99513b1b837490c79382c48c0fc48b0703a41
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "온난 자가면역 용혈성 빈혈"
  - "IgG 매개 용혈"
  - "전신홍반루푸스"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

루푸스 환자의 혈색소가 떨어지고 황달이 생겼다. 망상적혈구와 간접 빌리루빈이 증가했고 혈액도말에 구형적혈구가 보인다. 직접항글로불린검사에서 적혈구 표면 IgG 양성, C3 단독 양성은 아니다. 가장 가능성 높은 빈혈은?

## 선택지

A. 유전구형적혈구증
B. 한랭응집소병
C. 온난형 자가면역 용혈성 빈혈
D. 염증성 빈혈

## 해설


용혈과 적혈구 표면 IgG는 온난형 자가면역 용혈성 빈혈을 지지한다. 구형적혈구는 유전구형적혈구증에도 보이지만 일반적으로 그 질환의 직접항글로불린검사는 음성이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006411 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SLE·용혈·DAT 양성·구형적혈구에서 온난 IgG AIHA B 기전을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006411
- https://onlinelibrary.wiley.com/doi/10.1111/imj.70656
