---
type: qbank
schema_version: 1
id: medqa-us-train-010076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e5449441d9a9f99b11a8efe3e41ab83fa03d67da99fe5868b881375f8219b62
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신동맥 협착"
  - "섬유근육성 이형성증"
  - "경피적 혈관성형술"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: management
difficulty: standard
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "모든 양측 신동맥 협착에 혈관성형이 즉시 1차라는 일반화 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

31세 여성이 정기 건강검진을 위해 내원했다. 건강하고 현재 호소는 없다. 중대한 질환 병력이나 복용 약물은 없다. 혈압은 185/110 mmHg, 맥박 분당 75회, 호흡수 분당 12회이며 두 번째 방문에서도 고혈압이 확인되었다. 신경학적 진찰은 정상이다. 복부 양쪽 상부 중앙선 근처에서 잡음이 들린다. 나머지 진찰은 정상이고 전혈구검사, 신장기능검사, 요검사도 정상이다. 혈관조영술에서 양측 병변이 확인되었다. 이 환자의 고혈압 조절을 위해 가장 적절히 권할 치료는?

## 선택지

A. 식이 염분 제한
B. 경피적 혈관성형술
C. 수술적 내막절제술
D. 열량 제한과 체중 감량

## 해설

젊은 여성의 심한 고혈압·복부 잡음과 신동맥 병변은 FMD에 의한 신혈관성 고혈압을 의도한 사례다. 혈역학적으로 의미 있는 FMD에서 선택지 중 경피 풍선혈관성형술이 적합할 수 있다. 죽상경화성 협착에 일률적으로 적용하지 않으며 병변 형태·압력 차·치료 필요성을 전문 평가한다. 혈압 정상화가 보장되는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010076

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 모든 양측 신동맥 협착에 혈관성형이 즉시 1차라는 일반화 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ahajournals.org/doi/10.1161/HYP.0000000000000217
