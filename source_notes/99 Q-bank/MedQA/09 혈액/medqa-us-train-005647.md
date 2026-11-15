---
type: qbank
schema_version: 1
id: medqa-us-train-005647
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee4212d9d619c5f00e2e73f43cc1d73a687f6b7cc266e84cc846f7110d8896ea
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 골수성 백혈병"
  - "Auer 소체"
  - "범혈구감소증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

66세 남성이 3개월간 지속된 피로로 내원했다. 혈색소 8.0 g/dL, 백혈구 80,000/mm³, 혈소판 34,000/mm³이다. 말초혈액도말에서 핵소체가 뚜렷하고 세포질에 가느다란 붉은 바늘 모양 봉입체를 가진 모세포가 다수 보인다. 가장 가능성이 높은 진단은?

## 선택지

A. 급성 림프모구성 백혈병
B. 골수형성이상증후군
C. 만성 림프구성 백혈병
D. 급성 골수성 백혈병

## 해설


바늘 모양 세포질 봉입체는 아우어 막대(Auer rod)로, 모세포가 골수계임을 시사한다. 빈혈과 혈소판감소를 동반하고 말초혈액에 이런 모세포가 다수 보이므로 급성 골수성 백혈병이 가장 가능성이 높다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005647 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모세포의 Auer rod와 혈구감소가 AML D를 지지함을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005647
