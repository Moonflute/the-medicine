---
type: qbank
schema_version: 1
id: medqa-us-train-004735
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5631c95f1db03fcce7d21f3642c5af59e3b4321ac85e55dcbee920dcdf29b84
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 충수염"
  - "급성 충수염"
  - "임신 중 복통"
question_type: investigation
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3hpdGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 30주 산모가 발열과 오른쪽 복통으로 왔다. 외과에 의뢰한 상태로 초음파를 했으나 충수가 보이지 않았고 통증은 지속된다. 혈역학적으로 안정적이고 MRI를 바로 시행할 수 있다. 다음 영상은?

## 선택지

A. 가돌리늄 없이 복부·골반 MRI
B. 복부 단순촬영으로만 충수염을 배제
C. 흉부 CT
D. 영상 추가 없이 분만까지 기다림

## 해설

임신 중 충수염을 의심하는데 초음파로 판단하기 어렵다면 가능한 경우 비조영 MRI로 평가한다. MRI를 기다리는 것이 위험하거나 이용할 수 없으면 필요한 진단과 수술 판단을 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 후기 우상복부 충수염 가능성 및 확진 전 평가 한계 보강.
- https://www.sages.org/publications/guidelines/guidelines-for-diagnosis-treatment-and-use-of-laparoscopy-for-surgical-problems-during-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004735
- https://doi.org/10.1001/jamasurg.2025.6218
