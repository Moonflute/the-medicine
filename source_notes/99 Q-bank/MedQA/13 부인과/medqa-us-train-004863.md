---
type: qbank
schema_version: 1
id: medqa-us-train-004863
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d0f2cd904f5593f7588cb7a3fd3447bac27587ba232ee1db46e1b0a0d640c4aa
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Rh 부적합"
  - "태아-모체 출혈"
  - "로제트 검사"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 임신 38주, 임신 2회·출산 1회의 여자가 활동성 진통으로 응급실에 왔다. 산전 진찰은 모두 받았고 첫 임신과 분만은 합병증이 없었다. 산모는 Rh 음성이다. 도착 4시간 후 건강한 3650 g 여아를 분만했으나 태반이 남아 심한 질출혈이 발생했다. 1시간 뒤 태반을 수동으로 제거하자 출혈이 멎었다. 신생아는 Rh 양성이며 산모에게 항-D 면역글로불린 1회가 투여되었다. 다음으로 시행할 가장 적절한 처치는?

## 선택지

A. 유세포분석 시행
B. 로제트 검사 시행
C. 클라인하우어-베트케 검사 시행
D. 쿰스 검사 시행

## 해설

RhD 음성 산모가 RhD 양성아를 출산한 뒤 로제트 검사(B)로 모체 혈액의 태아 RhD 양성 적혈구를 선별한다. 양성이면 Kleihauer–Betke 또는 유세포분석으로 출혈량을 정량하여 추가 항-D 용량을 결정한다. 로제트는 간접 쿰스검사가 아니며 수주 뒤 감작 확인을 기다리는 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 로제트 B는 감작 항체검사가 아니라 태아모체출혈 선별검사이다. 2–4주 항체 전환 설명 삭제.
- https://professionaleducation.blood.ca/en/transfusion/clinical-guide/hemolytic-disease-fetus-and-newborn-and-perinatal-immune

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004863
