---
type: qbank
schema_version: 1
id: medqa-us-train-009913
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ce00b1722b729364d654b5a7b8d8fcef7a4cb4af81d0050fd60b47418c6eced
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "후복막 출혈"
  - "와파린"
  - "출혈성 쇼크"
question_type: investigation
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

와파린을 복용하는 65세 남성이 외상 없이 새 옆구리 통증과 어지럼증으로 내원했다. 옆구리에 멍이 있고 혈색소가 감소했다. 초기 소생으로 혈압이 안정돼 후복막 출혈을 의심한다. 확인할 영상검사는?

## 선택지

A. 복부 단순촬영
B. 신장 초음파만
C. 조영증강 복부·골반 CT
D. 흉부 CT

## 해설

후복막 혈종은 진찰이나 FAST만으로 놓칠 수 있다. 조영 CT는 혈종 범위와 활동성 출혈을 평가하는 데 유용하며 소생과 항응고 역전 평가를 함께 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 와파린 복용자의 자발성 후복막 출혈 가능성을 복강 내 출혈과 구별한다. 소생 반응 후 CT D를 유지하되 불안정 환자에서 무조건 영상 우선으로 일반화하지 않는다.
- 공식/학회 근거: https://gravitas.acr.org/ACPortal/GetDataForOneTopic?topicId=302
- 공식/학회 근거: https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009913
