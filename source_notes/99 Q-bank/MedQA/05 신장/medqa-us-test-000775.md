---
type: qbank
schema_version: 1
id: medqa-us-test-000775
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:59e9ba41110377db6d721777116b6019df283aa0073f0bbb5e518af27fc1e88f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "겸상적혈구병"
  - "신장 수질 손상"
  - "소변 농축능 저하"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: prognosis
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9UcmFtYWRvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 흑인 남성이 정기 혈액검사를 위해 일차 진료를 받으러 왔다. 겸상적혈구병으로 히드록시우레아와 필요 시 트라마돌을 사용한다. 신장에 악영향을 줄 수 있는지 묻는다. 다음 중 겸상적혈구병의 신장 합병증은?

## 선택지

A. 막성 사구체신염
B. 근위 신세뇨관산증
C. 소변 희석능 저하
D. 소변 농축능 저하

## 해설


겸상적혈구병에서는 장기 저산소증으로 신장 수질이 손상돼 물을 농축하는 능력이 감소한다. 이는 소변 농축능 저하(hyposthenuria)로 나타난다. 따라서 가장 흔한 신장 합병증은 소변 농축능 저하이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 겸상적혈구병의 수질 손상은 소변 농축장애/hyposthenuria D로 연결. 희석장애나 근위 RTA를 대표 소견으로 고르지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000775
