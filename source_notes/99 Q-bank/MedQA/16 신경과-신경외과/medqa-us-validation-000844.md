---
type: qbank
schema_version: 1
id: medqa-us-validation-000844
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4ff60fe89722d710233d65c1f560c3176ca14a462421b62f7549d751c7b60c6e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "소뇌경색"
  - "척추동맥 박리"
  - "급성 현훈"
question_type: localization
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

53세 여성이 갑자기 시작된 심한 어지러움과 균형장애로 응급실에 왔다. 오른쪽으로 기울고 손가락-코와 발뒤꿈치-무릎 검사가 비정상이다. 혈관조영술에서 박리가 가장 가능성 높은 혈관은?

## 선택지

A. 전대뇌동맥
B. 중대뇌동맥
C. 척추동맥
D. 전척수동맥

## 해설

급성 중추성 현훈과 심한 보행실조·겨냥이상은 소뇌/후순환 허혈을 시사한다. 보기 중 척추동맥(C)의 박리가 후순환 혈류를 장애하여 이런 증상을 일으킬 수 있다. 척수동맥과는 다른 혈관이다. 전척수동맥 병변은 주로 척수성 운동마비·통각/온도각 장애를 만들며 본문의 소뇌 국소화를 가장 잘 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척추동맥(vertebral)과 척수동맥(spinal)을 혼동한 중대한 해설 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000844
