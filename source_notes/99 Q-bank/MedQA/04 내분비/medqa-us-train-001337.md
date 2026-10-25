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

70세 여성이 연례 건강검진을 위해 내원했다. 최근 다리와 등에 통증이 생겼다고 한다. 지난해 장을 보다가 왼팔을 들어 올리는 중 골절이 발생했다. 유제품을 먹지 않고 다리와 등 통증 때문에 외출도 자주 하지 않는다. 간질로 카바마제핀을 복용 중이다. 활력징후는 정상이다. 골연화증을 의심할 때 이를 확인하기 위한 다음 단계로 어떤 검사를 해야 하는가?

## 선택지

A. 25-하이드록시비타민 D
B. 1,25-하이드록시비타민 D
C. 비타민 D3 전구체
D. 식이성 비타민 D2

## 해설

정답은 A이다. 유제품 섭취와 일광 노출 부족, carbamazepine 사용은 vitamin D 결핍 위험을 높이며 골통·취약골절에 대해 25-hydroxyvitamin D로 저장/영양 상태를 평가한다. 1,25-dihydroxyvitamin D는 결핍 때도 정상 또는 높을 수 있어 이를 대신하지 못한다. 모든 원인의 골연화증이 25OH-D 한 검사로 확진되는 것은 아니며 Ca/P/ALP/PTH와 영상도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 25OH-D를 모든 골연화증의 확진검사라고 한 과장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001337
