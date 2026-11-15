---
type: qbank
schema_version: 1
id: medqa-us-train-004253
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f7f1f6bc3e5f79c4ce530876e51ee74a8f3797626d7c02ab3f39021659b4440
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "아미오다론 유발 갑상샘기능저하증"
  - "갑상샘기능저하증"
  - "TSH 상승"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGhlb3BoeWxsaW5lLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

심실성 부정맥 때문에 아미오다론이 계속 필요한 환자가 추위불내성과 변비를 호소한다. TSH 16 mIU/L, 유리 T4는 정상보다 낮다. 심장내과와 약제 필요성을 확인한 뒤 적절한 처치는?

## 선택지

A. 현성 갑상선기능저하인데도 약 없이 관찰
B. 아미오다론을 유지하면서 레보티록신을 보충
C. 아미오다론을 유지하면서 메티마졸을 투여
D. 방사성요오드 치료

## 해설


아미오다론이 필요한 경우 현성 기능저하 때문에 일률적으로 끊지 않는다. 레보티록신을 보충하고 심장 상태와 갑상선기능에 맞춰 조절한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TSH상승·T4감소와 부정맥약 병력은 amiodarone B 유발저하와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004253
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5869486/
