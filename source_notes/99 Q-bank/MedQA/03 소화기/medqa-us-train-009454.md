---
type: qbank
schema_version: 1
id: medqa-us-train-009454
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d92459bbb9fb66a0617f1894c3a73dc9bc75e674ebd92d0563e04c4c00b833e8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute liver failure"
  - "급성 간부전"
  - "N-acetylcysteine"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_soITqsqnshLEg6rCE7Je8IChGdWxtaW5hbnQgSGVwYXRpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
---

# MedQA US 임상문제

## 문제

만성 간질환이 없던 44세 여성이 황달이 생긴 지 엿새 만에 혼돈과 자세고정불능이 나타났다. INR 4.6이고 AST·ALT는 1,000 U/L를 넘는다. 중환자 치료와 원인 평가를 시작했다. 다음으로 바로 해야 할 일은?

## 선택지

A. 리팍시민만 투여하며 반응 확인
B. 황달이 일주일 더 지속되면 전원 논의
C. 간이식 가능 센터에 즉시 의뢰
D. 조직검사 결과가 나올 때까지 전원 보류

## 해설


기존 간경변 없이 급성 간손상, 응고장애 및 간성뇌증이 동반되면 급성 간부전이다. 원인 치료와 지지 치료를 계속하면서 이식 가능 센터 평가를 서두른다. 약물 치료 반응이나 원인검사 결과를 기다렸다가 의뢰하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009454 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: NAC C의 보조치료 취지 유지하되 간이식이 효과 없다는 위험한 배제를 삭제하고 급성 HBV 확진 조건·간성뇌병증 범위 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/sites/default/files/2022-07/AcuteLiverFailureUpdate201journalformat1.pdf
- https://www.dgvs.de/new-leitlinien/chapter_69dd0a7e0a788/chapter_69dd0a7e0e86a/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009454
- https://www.aasld.org/practice-guidelines/management-acute-liver-failure
- https://doi.org/10.1097/HEP.0000000000001644
