---
type: qbank
schema_version: 1
id: medqa-us-test-000412
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eb4822a269d9e90b82759e5a750cb25234a0ac9487998aa76d9acff98f5f715f
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "포진상 피부염"
  - "셀리악병"
  - "글루텐 민감성 장병증"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
difficulty: standard
answer: B
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 여아가 반복되는 설사, 철결핍과 심하게 가려운 엉덩이 발진으로 내원했다. 혈청 IgA 조직 트랜스글루타미나제 항체가 정상 상한의 5배다. 가장 가능성 높은 기저질환은?

## 선택지

A. 크론병
B. 셀리악병
C. 공통가변면역결핍증
D. 헤노흐-쇤라인 자반증

## 해설

철결핍과 설사, 가려운 발진에 IgA 조직 트랜스글루타미나제 항체 상승이 동반되면 셀리악병을 의심한다. 포진피부염이 피부 소견으로 동반될 수 있다. 이 항체 수치 하나만으로 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 포진피부염을 두드러기성피부염으로 오역한 해설 수정, tTG5배를 단독확진으로 단정하지 않음. celiac B 유지.
- 공식/학회 근거: https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/digestive-diseases/dermatitis-herpetiformis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000412
