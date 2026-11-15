---
type: qbank
schema_version: 1
id: medqa-us-train-002576
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ffa4ae35907adfc07d674af9817989a1e48a5e7bed7fb42e76177d2b03618463
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperosmolar hyperglycemic state"
  - "severe hyperglycemia"
  - "pneumonia trigger"
  - "blood glucose measurement"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 65세 남성이 발열과 기침 뒤 혼돈이 생겨 응급실에 왔다. 기도·호흡·순환을 평가 중이며 채혈 결과는 아직 없다. 교정 가능한 혈당 이상을 수분 안에 확인할 검사는?

## 선택지

A. 정맥혈 당화혈색소
B. 소변 당 검사
C. 현장 혈당 측정
D. 혈청 프럭토사민

## 해설

의식 변화 환자에서는 현장 혈당 측정으로 저혈당을 즉시 찾고 고혈당성 위기도 가려낸다. 고혈당이면 케톤·산염기·삼투질농도로 원인을 구분하고, 감염 평가는 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 미측정 혈당과 삼투질농도만으로 HHS/폐렴을 확진한 해설을 즉시 혈당 측정 및 감별 설명으로 수정.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002576
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.2337/dci24-0032
