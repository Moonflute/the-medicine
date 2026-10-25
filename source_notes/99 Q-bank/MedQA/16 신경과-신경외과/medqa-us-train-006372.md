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
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_stpztmIjshLEg64eM7KG47KSRIChIZW1vcnJoYWdpYyBTdHJva2UpLm1k
difficulty: complex
answer: A
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

67세 남성이 두통으로 응급실에 내원했다. 증상은 30분 전에 시작되었다. 집을 페인트칠하던 중 갑작스럽고 심한 두통이 발생해 사다리에서 떨어져 머리를 부딪혔다. 이후 두 차례 구토했고 걷기 어려웠다. 과거력으로 고혈압, 비만 및 심방세동이 있다. 리시노프릴, 리바록사반, 아토르바스타틴 및 메트포르민을 복용한다. 체온은 99.5°F(37.5°C), 혈압은 150/105 mmHg, 맥박은 분당 90회, 호흡수는 분당 15회, 실내 공기에서 산소포화도는 98%이다. 신체진찰에서 두통은 후두부에 국한되어 있다. 심장 진찰에서 속도와 리듬은 정상이다. 폐 진찰에서 양쪽 기저부에 경미한 수포음이 들린다. 신경학적 진찰에서 안면 표정 근육에 경미한 근력 약화가 있고, 제3뇌신경 검사에서 뚜렷한 안진이 보인다. 양쪽 발꿈치-정강이 검사가 비정상이며 보행은 뚜렷하게 실조성이다. 비조영 두부 CT를 기다리는 중이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 소뇌 출혈
B. 교뇌 출혈
C. 시상 출혈
D. 지주막하출혈

## 해설

정답은 A, 소뇌 출혈이다. 갑작스러운 심한 후두부 두통과 구토에 안진, 양측 발꿈치-정강이 검사 이상 및 현저한 보행실조가 동반되어 소뇌 병변을 시사한다. 고혈압과 항응고제 복용은 출혈 위험을 높인다. 지주막하출혈도 갑작스러운 심한 두통을 유발하지만, 제시된 뚜렷한 소뇌성 운동실조를 종합하면 선택지 중 소뇌 출혈이 가장 적절하다. 임상 소견만으로 출혈을 확진하거나 허혈성 뇌졸중을 배제할 수는 없으며, 본문처럼 긴급 비조영 두부 CT가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 영어 원문의 '제3뇌신경 검사에서 안진'은 안진을 특정 제3뇌신경 장애로 오해하게 할 수 있는 원문 표현이다. 안진은 안구운동 관찰 소견으로 해석하며, 이 표현 단독이 아니라 소뇌성 실조를 근거로 답을 판단하였다. CT는 대기 중이므로 영상 누락 문항이 아니다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/management-of-intracerebral-hemorrhage/emergency-management-of-intracerebral-hemorrhage

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006372
