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
answer: D
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

65세 남성이 2일 전부터 시작된 우하복부와 오른쪽 옆구리 통증으로 응급실에 내원했다. 이 기간 동안 어지럽고 현기증이 나며 숨이 찼다고 한다. 최근 외상이나 유발 사건은 부인한다. 체온 37.1°C, 심박수 분당 118회, 혈압 74/46 mmHg, 호흡수 분당 18회, 산소포화도 96%이다. 진찰에서 불규칙한 불규칙 심장 리듬과 오른쪽 옆구리의 멍이 보인다. 과거력으로 심방세동, 고혈압, 고지혈증이 있고 아토르바스타틴, 로사르탄, 와파린을 복용한다. 응급실에서 정맥 수액을 투여하자 혈압이 100/60 mmHg로 상승하고 심박수는 분당 98회로 감소했다. 다음 중 이 환자의 진단을 확인하고 향후 치료를 결정하는 데 가장 유용한 검사는?

## 선택지

A. 오른쪽 옆구리 초음파
B. 복부 및 골반 방사선촬영
C. 복부 및 골반 MRI
D. 복부 및 골반 CT

## 해설

와파린을 복용하는 환자의 비외상성 옆구리 통증·반상출혈과 쇼크는 자발성 후복막 출혈을 의심하게 한다. 초기 소생 후 혈압과 맥박이 호전된 상태에서는 복부·골반 CT(D)가 진단과 혈종 범위 평가에 유용하며 조영 검사는 활동성 출혈도 평가할 수 있다. 후복막 출혈은 복강 내 출혈과 해부학적으로 다르다. 영상 검사와 함께 혈색소·응고 상태를 평가하고 필요한 항응고 역전·수혈 및 출혈 통제를 진행하며, 불안정성이 지속되면 검사가 이를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 와파린 복용자의 자발성 후복막 출혈 가능성을 복강 내 출혈과 구별한다. 소생 반응 후 CT D를 유지하되 불안정 환자에서 무조건 영상 우선으로 일반화하지 않는다.
- 공식/학회 근거: https://gravitas.acr.org/ACPortal/GetDataForOneTopic?topicId=302
- 공식/학회 근거: https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009913
