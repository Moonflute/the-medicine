---
type: qbank
schema_version: 1
id: medqa-us-train-002998
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d276493d0d015f66580b5af1cabef39ac0af7fb2191c8b7a560812d3ddf905e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "isoniazid-induced peripheral neuropathy"
  - "pyridoxine supplementation"
  - "tuberculosis treatment"
  - "vitamin B6 deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: prevention
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

항결핵 치료를 시작한 환자가 2개월 후 추적 진료를 받으러 왔다. 상태는 좋지만 6일 동안 발과 발목의 저림과 양측성 무감각이 있었다. 입술은 건조하고 비늘이 있으며 약간 부어 있다. 신경학적 검사에서 발, 발목, 종아리 원위부의 통각과 가벼운 촉각이 감소했다. 혈색소 10.8 g/dL, 평균적혈구용적 78 fL, ALT 44 U/L, AST 52 U/L이다. 다음 중 무엇을 투여했다면 신경학적 증상을 예방할 수 있었을 가능성이 가장 높은가?

## 선택지

A. 비타민 B12
B. 비타민 E
C. 피리독신
D. 철분

## 해설


이소니아지드 치료는 비타민 B6(피리독신) 결핍으로 말초신경병증을 일으키므로, 치료 시작 시 피리독신을 보충하면 예방 가능하다. 다른 비타민이나 철분은 이 부작용 예방에 효과가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002998 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Isoniazid의 pyridoxine 대사 방해와 B6 보충 C의 말초신경병증 예방을 원문 및 허가사항과 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b46d1d-2300-457d-a7bd-a88a3f8d2235

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002998
