---
type: qbank
schema_version: 1
id: medqa-us-train-007859
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c76d26913d211b89e48905d3e055f7e9f5753695703029aefdbe22c94abd83db
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "essential hypertension"
  - "lifestyle modification"
  - "weight loss"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 체중 자료 없이 체중감량을 강제한 정답을 반복 2기 고혈압 치료로 교정."
curation_status: "revised"
curation_reason: "체중 자료 없이 체중감량을 강제한 정답을 반복 2기 고혈압 치료로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 남성의 외래 혈압이 세 차례 160/100 mmHg 안팎이었다. 가정혈압도 평균 158/99 mmHg이다. 증상이나 급성 표적장기 손상 소견은 없고, 평소 음식을 짜게 먹고 자주 음주한다. 적절한 초기 관리는?

## 선택지

A. 생활습관만 교정하고 6개월 뒤 혈압을 확인한다
B. 정맥 혈압강하제로 당일 정상 혈압까지 낮춘다
C. 증상이 생길 때까지 약물치료를 미룬다
D. 항고혈압제를 시작하고 염분 제한·절주·운동을 병행한다

## 해설

반복된 진료실 혈압이 국내 2기 범위에 해당하고 가정혈압도 높으므로 생활습관 교정과 함께 약물치료를 시작한다. 동반질환과 내약성에 따라 저용량 2제 병합을 고려할 수 있다. 급성 표적장기 손상이 없어 정맥제로 혈압을 급격히 낮출 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 체중 자료 없이 체중감량을 강제한 정답을 반복 2기 고혈압 치료로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007859
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
