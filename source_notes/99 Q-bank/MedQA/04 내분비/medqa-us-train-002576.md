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

65세 남성이 2일간 진행된 기면과 혼란으로 응급실에 왔다. 5일간 오심과 빈뇨가 있었고 1주 전부터 기침이 생겼다. 고혈압과 뇌졸중 병력이 있으며 리시노프릴과 아스피린을 복용한다. 체온 38.5°C, 맥박 114회/분, 혈압 108/75 mmHg이다. 졸리고 사람에게만 지남력이 있으며 점막이 건조하고 피부긴장도가 감소되어 있다. 왼쪽 폐기저부에서 수포음이 들린다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 흉부 X선
B. 광범위 항생제
C. 혈당 측정
D. 동맥혈가스 분석

## 해설

의식저하 환자에서는 즉시 현장 혈당을 확인하여 저혈당을 놓치지 않고 고혈당성 응급상태도 평가해야 한다. 다뇨와 점막 건조, 피부긴장도 저하는 고혈당에 의한 삼투성 이뇨 가능성을 높이므로 보기 중 C, 혈당 측정이 우선이다.

혈당·케톤·산염기 및 삼투질농도 결과가 없으므로 아직 HHS나 DKA를 확진할 수 없다. 발열과 폐기저부 수포음은 폐 감염을 의심하게 하며, 혈당 평가와 함께 호흡·순환 평가, 감염 검사와 필요한 치료를 진행한다. 혈당을 재는 동안 감염성 쇼크 치료를 지연하라는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 미측정 혈당과 삼투질농도만으로 HHS/폐렴을 확진한 해설을 즉시 혈당 측정 및 감별 설명으로 수정.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002576
