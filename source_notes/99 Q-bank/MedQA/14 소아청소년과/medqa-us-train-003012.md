---
type: qbank
schema_version: 1
id: medqa-us-train-003012
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6eb7f2ceced6586d826954845f9d39288a4121d7d3271f40c5bcb181a39bee46
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "acute appendicitis"
  - "pediatric right lower quadrant pain"
  - "ultrasound first-line imaging"
  - "appendiceal inflammation"
question_type: investigation
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 남아가 어제부터 시작된 복통, 발열, 오심, 구토, 식욕부진으로 어머니와 함께 응급실에 왔다. 처음에는 단순한 장염이라고 생각했지만 점점 상태가 나빠져 걱정하고 있다. 체온은 102.3°F, 맥박 110회/분, 혈압 120/89 mmHg, 호흡수 16회/분, 산소포화도 100%이다. 복부 진찰에서 오른쪽 하복부에 통증이 있다. 정맥 수액과 진통제 외에 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 정맥 조영제를 사용한 복부 CT
B. 복부 기립 및 앙와위 방사선촬영
C. 오른쪽 하복부 초음파
D. 가돌리늄 조영 복부 MRI

## 해설

소아의 충수염 의심에서 제시된 영상 중 복부 초음파(C)가 적절한 초기 검사이다. 초음파가 비진단적이면서 의심이 지속되면 MRI 또는 CT 등 추가 평가가 필요할 수 있다. CT가 어떤 상황에서도 불필요하다는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 소아 충수염에서 초음파 우선과 비진단적 검사 후 추가 영상의 조건을 구분.
- https://academic.oup.com/cid/article/79/Supplement_3/S94/7706132

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003012
