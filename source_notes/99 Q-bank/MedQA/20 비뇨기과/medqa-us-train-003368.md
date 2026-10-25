---
type: qbank
schema_version: 1
id: medqa-us-train-003368
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0983792458a302196d43a49f9660787be5c2e4e3dfa5a8aa20a9b81c1b8c8724
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "left-sided varicocele"
  - "renal cell carcinoma"
  - "retroperitoneal mass"
  - "abdominal CT"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uNqeq1tOygleunpeulmCAoVmFyaWNvY2VsZSkubWQ
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 3개월간의 피로와 변비로 내원했다. 2주 전부터 왼쪽 등 중간 부위에 둔한 통증이 생겼고 이부프로펜을 복용해도 지속되었다. 아버지는 70세에 전립선암으로 사망했다. 환자는 45년간 하루 1갑의 담배를 피웠다. 신체검사에서 누운 자세와 선 자세 모두에서 왼쪽 정계정맥류가 보였다. 직장수지검사에서 전립선은 대칭적으로 커져 있었지만 종괴는 없었다. 혈색소 11.2 g/dL, 크레아티닌 1.0 mg/dL, 칼슘 11.8 mg/dL, 소변 단백 1+, 혈뇨 2+였다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 복부 CT
B. 소변 세포검사
C. 흉부 X선
D. 전립선 생검

## 해설

누워도 사라지지 않는 왼쪽 정계정맥류, 혈뇨와 옆구리 통증, 고칼슘혈증은 신장 종괴와 신정맥 배출 장애를 의심하게 한다. A, 복부 CT로 신세포암 등 신장 병변과 정맥 침범 여부를 평가하는 것이 적절하다. 단순히 신장이 후복막에 있다는 이유로 CT를 선택하는 것은 아니며 임상·검사 단서가 함께 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 비환원성 새 정계정맥류의 신정맥/하대정맥 배출 장애와 신장 종괴 평가 A를 연결.
- 공식/학회 근거: https://uroweb.org/guidelines/renal-cell-carcinoma/chapter/diagnostic-evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003368
