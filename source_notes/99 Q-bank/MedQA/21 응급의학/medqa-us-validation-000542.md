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

베타차단제 중독으로 온 환자에게 저혈압과 서맥이 지속된다. 혈당은 교정했고 수액과 승압제에도 쇼크가 남아 있다. 독성학 자문과 함께 심근 수축을 돕기 위해 고려할 치료는?

## 선택지

A. 고용량 인슐린 치료와 포도당·칼륨 감시
B. 날록손
C. 플루마제닐
D. 정맥 비타민 K

## 해설

중증 베타차단제 중독의 지속적인 저혈압에는 승압제와 함께 고용량 인슐린 요법을 사용할 수 있다. 저혈당과 저칼륨혈증을 막도록 혈당과 전해질을 밀접하게 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 글루카곤이 심장 베타수용체를 자극한다는 오류를 별도 수용체를 통한 cAMP 증가로 교정한다. A는 보기 중 보조 치료로 유지하며 고용량 인슐린 등 현행 중증 치료와 구별한다.
- 공식/학회 근거: https://atlanticcanadapoisoncentre.ca/glucagon-adult.html
- 공식/학회 근거: https://www.vumc.org/poison-control/toxicology-question-week/march-27-2019-why-do-we-give-glucagon-beta-blocker-overdose

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000542
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
