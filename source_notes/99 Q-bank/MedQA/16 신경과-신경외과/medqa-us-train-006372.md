---
type: qbank
schema_version: 1
id: medqa-us-train-006372
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48a4ce0800d95b294f52624743b195bca15ea4f615c3d6c4981853a3b0f734b4
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "소뇌 출혈"
  - "급성 두통"
  - "운동실조"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_stpztmIjshLEg64eM7KG47KSRIChIZW1vcnJoYWdpYyBTdHJva2UpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
---

# MedQA US 임상문제

## 문제

67세 환자가 갑작스러운 후두부 두통과 구토 뒤 의식이 떨어졌다. CT에 20 mL 소뇌출혈, 제4뇌실 압박과 폐쇄성 수두증이 보인다. 진행할 조치는?

## 선택지

A. 경구 항고혈압제를 투여한 뒤 다음 날 CT를 찍는다
B. 요추천자로 압력을 낮춘다
C. 뇌실 배액만 하고 소뇌혈종은 평가하지 않는다
D. 즉시 신경외과와 혈종 제거 및 필요한 뇌실 배액을 진행한다

## 해설

소뇌출혈에서 의식이 악화되거나 뇌간 압박·수두증이 있으면 긴급 혈종 제거가 필요하다. 뇌실 배액은 필요에 따라 함께 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 영어 원문의 '제3뇌신경 검사에서 안진'은 안진을 특정 제3뇌신경 장애로 오해하게 할 수 있는 원문 표현이다. 안진은 안구운동 관찰 소견으로 해석하며, 이 표현 단독이 아니라 소뇌성 실조를 근거로 답을 판단하였다. CT는 대기 중이므로 영상 누락 문항이 아니다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/management-of-intracerebral-hemorrhage/emergency-management-of-intracerebral-hemorrhage

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006372
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000407
