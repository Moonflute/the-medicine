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

8세 여아가 엉덩이에 심한 가려움이 있는 병변으로 소아과에 왔다(그림 참조). 병변은 간헐적으로 나타나지만 시간이 지나며 악화되었다. 철결핍으로 황산철을 복용 중이며 간헐적인 경미한 설사가 있어 이전에 유당불내증으로 진단받았다. 키는 연령과 성별 기준 30백분위수, 체중은 25백분위수였다. 면역글로불린 A 조직 트랜스글루타미나제 역가는 정상 상한의 5배였다. 다음 중 이 상태의 가장 가능성 높은 원인은?

## 선택지

A. 크론병
B. 셀리악병
C. 공통가변면역결핍증
D. 헤노흐-쇤라인 자반증

## 해설

철결핍·간헐적 설사·소양성 엉덩이 병변과 상승한 IgA tTG는 셀리악병(B)과 그 피부 표현인 포진피부염을 시사한다. 포진피부염은 일반 두드러기와 같은 질환이 아니다. 사진은 없지만 장질환·혈청검사 단서로 원인선택이 가능하다. tTG가 정상상한5배라는 결과 하나만으로 모든 소아에서 생검 없이 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 포진피부염을 두드러기성피부염으로 오역한 해설 수정, tTG5배를 단독확진으로 단정하지 않음. celiac B 유지.
- 공식/학회 근거: https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/digestive-diseases/dermatitis-herpetiformis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000412
