---
type: qbank
schema_version: 1
id: medqa-us-train-001337
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1d42236d8e27608b7e2de2658f4bc05f36befea40ccaa37749a3e04da16c1aa0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteomalacia"
  - "vitamin D deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67mE7YOA66-8IEQg6rKw7ZWN7KadIChWaXRhbWluIEQgRGVmaWNpZW5jeSkubWQ
question_type: investigation
difficulty: standard
answer: A
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

70세 여성이 전신 골통과 가벼운 동작 뒤 생긴 골절로 내원했다. 장기간 카르바마제핀을 복용하며 실외 활동은 거의 없다. 혈청 인은 낮고 알칼리인산분해효소는 높다. 골연화증이 의심될 때 비타민 D 결핍을 평가할 검사는?

## 선택지

A. 혈청 25-하이드록시비타민 D
B. 혈청 1,25-디하이드록시비타민 D
C. 혈청 비타민 D 결합단백
D. 24시간 소변 칼슘

## 해설

체내 비타민 D 상태는 혈청 25-하이드록시비타민 D로 평가한다. 활성형 1,25-디하이드록시비타민 D는 결핍에서도 정상 또는 높을 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 25OH-D를 모든 골연화증의 확진검사라고 한 과장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001337
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9760769/
