---
type: qbank
schema_version: 1
id: medqa-us-train-008033
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d32d9cda0a6367aa6c92acb43f044bab1e658fe4f128eeecd4aec1a42b78b7e9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "anemia of chronic kidney disease"
  - "decreased erythropoietin"
  - "chronic kidney disease"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
curation_status: "revised"
curation_reason: "심잡음 위치 번역과 ferritin만으로 철 결핍·출혈을 배제한 설명 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

eGFR 18 mL/min/1.73m²인 55세 여성이 피로로 내원했다. Hb 9.2 g/dL, MCV 87 fL이고 망상적혈구가 적다. 철 상태, 비타민 B12와 엽산은 정상이며 출혈 증거가 없다. 빈혈의 가장 가능성 높은 기전은?

## 선택지

A. 신장의 에리트로포이에틴 생성 감소
B. 말초에서 적혈구의 자가면역 파괴
C. 비타민 B12 흡수 장애
D. 골수 내 철 결핍

## 해설

진행된 만성콩팥병에서는 에리트로포이에틴 생성이 불충분해 정구성 저생산성 빈혈이 생길 수 있다. 만성콩팥병 환자라도 철 부족, 출혈과 다른 교정 가능한 원인을 먼저 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008033
- https://kdigo.org/guidelines/anemia-in-ckd/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 심잡음 위치 번역과 ferritin만으로 철 결핍·출혈을 배제한 설명 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
