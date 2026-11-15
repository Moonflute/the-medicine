---
type: qbank
schema_version: 1
id: medqa-us-train-002267
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:14f6cef192aba5632db653b3d24c68ddb440b3821fe81c6290236acef60e6977
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "erythropoietin-induced hypertension"
  - "end-stage renal disease"
  - "erythropoietin"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: adverse_effect
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

혈액투석 중인 47세 여성의 혈압은 안정적이었다. 에포에틴을 시작한 뒤 혈압이 반복해서 169/108 mmHg로 오르고 Hb도 9에서 12 g/dL로 상승했다. 체중, 초여과량과 항고혈압제는 변하지 않았다. 새로 확인된 혈압 상승과 가장 관련된 약은?

## 선택지

A. 칼시트리올
B. 에포에틴
C. 세벨라머
D. 기저 인슐린

## 해설


조혈자극제는 혈압을 상승시키거나 기존 고혈압을 악화시킬 수 있다. 혈압과 Hb 상승 속도를 확인해 용량을 조정하고, Hb를 정상 범위까지 일률적으로 올리지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 투석 직후 체액과다 소견 없이 EPO 시작 후 새 고혈압은 erythropoietin B의 이상반응과 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002267
- https://kdigo.org/guidelines/anemia-in-ckd/
