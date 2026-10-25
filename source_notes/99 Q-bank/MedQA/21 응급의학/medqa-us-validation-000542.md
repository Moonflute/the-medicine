---
type: qbank
schema_version: 1
id: medqa-us-validation-000542
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:45e8a1ab6d1ae7f6ee62435b864cd1ea073905dd95c9e60c583bd52a081d7d03
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "베타차단제 중독"
  - "서맥"
  - "글루카곤 해독"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-q4ieyEsSDspJHrj4Ug7LSd66GgIChHZW5lcmFsIE1hbmFnZW1lbnQgb2YgQWN1dGUgUG9pc29uaW5nKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 정체불명의 약 25정을 자살 목적으로 복용한 지 4시간 후 응급실에 왔다. 체온 36.7°C, 맥박 41회/분, 혈압 88/55 mmHg, 혼란과 저혈당이 있고 심전도에서 PR 연장과 좁은 QRS가 보인다. 기도 확보, 수액, 포도당, 아트로핀을 투여한 뒤 맥박은 51회/분으로 올랐지만 여전히 서맥이다. 다음으로 가장 적절한 처치는?

## 선택지

A. 글루카곤
B. 활성탄
C. 중탄산나트륨
D. 혈액투석

## 해설

서맥, PR 연장, 저혈압과 저혈당은 베타차단제 중독을 시사한다. 초기 수액·포도당·아트로핀 뒤에도 문제가 지속되면 보기 중 글루카곤(A)을 보조 치료로 고려할 수 있다. 글루카곤은 베타아드레날린 수용체를 직접 자극하지 않고 별도 수용체를 통해 심근 cAMP를 증가시킬 수 있다. 효과가 일시적이거나 불충분할 수 있어 독성학 자문과 혈역학 감시가 필요하며, 중증 중독에서는 고용량 인슐린-포도당 및 승압제 등 다른 치료를 병행한다. 기도 확보와 저혈당 교정도 계속 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 글루카곤이 심장 베타수용체를 자극한다는 오류를 별도 수용체를 통한 cAMP 증가로 교정한다. A는 보기 중 보조 치료로 유지하며 고용량 인슐린 등 현행 중증 치료와 구별한다.
- 공식/학회 근거: https://atlanticcanadapoisoncentre.ca/glucagon-adult.html
- 공식/학회 근거: https://www.vumc.org/poison-control/toxicology-question-week/march-27-2019-why-do-we-give-glucagon-beta-blocker-overdose

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000542
