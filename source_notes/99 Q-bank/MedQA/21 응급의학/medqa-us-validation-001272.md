---
type: qbank
schema_version: 1
id: medqa-us-validation-001272
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7bf0bcbf810f9bb4f06375d1a9b423b1778614fdb26e9aa6f79e61c952f1a633
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "대동맥 박리"
  - "종격동 확장"
  - "사지 맥박 차이"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 갑자기 시작된 찢어지는 듯한 극심한 흉통으로 응급실에 왔다. 오른팔 혈압은 195/90 mm Hg, 왼팔은 160/80 mm Hg이고 오른쪽 다리 맥박은 소실, 왼쪽은 약하다. 흉부 X선에서 종격동이 넓어져 있다. 가장 적절한 다음 처치는?

## 선택지

A. CT 촬영
B. 수술
C. D-이합체 검사
D. 정맥 초음파

## 해설

갑작스러운 찢어지는 흉통, 양팔 혈압 차이, 하지 맥박 감소와 넓어진 종격동은 급성 대동맥박리를 강하게 의심하게 한다. 혈역학적으로 CT를 시행할 수 있는 이 상황에서는 조영 CT 혈관조영술(A)로 박리 범위와 분지 혈류 장애를 신속하게 평가하는 것이 적절하다. 단순 흉부 X선은 확진 검사가 아니며 고확률 사례에서 D-dimer로 평가를 늦추지 않는다. CT가 곤란하거나 이동이 위험한 상황에서는 경식도 심초음파 등 다른 영상이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고확률 급성 대동맥증후군의 조영 CT A를 유지하되 모든 환경에서 가장 빠르고 가장 정확하다는 단정을 제거한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001272
