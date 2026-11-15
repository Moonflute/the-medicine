---
type: qbank
schema_version: 1
id: medqa-us-train-009851
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:201bc66c1e7400d8c653938c035c9bca1aa91d63743ec5dcc9cdeaebe20619d6
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "욕창"
  - "압박궤양"
  - "체위 변경"
  - "Pressure ulcer"
related_disease_slugs: []
question_type: prevention
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

83세 환자가 스스로 자세를 바꾸지 못하고 침대에서 생활한다. 발뒤꿈치에 아직 피부 손상은 없다. 천골과 발뒤꿈치의 압박손상을 줄일 일상 관리로 우선할 것은?

## 선택지

A. 압력분산 지지면을 쓰고 정기적으로 체위를 바꾸며 뒤꿈치를 띄운다
B. 피부가 붉어질 때마다 해당 부위를 마사지한다
C. 압력분산 매트리스를 사용하면 체위 변경은 하지 않는다
D. 피부 손상이 없어도 매일 항생제 연고를 바른다

## 해설


장기간 압력이 집중되는 부위의 피부를 확인하고 환자 상태에 맞춰 체위를 바꾼다. 압력분산 지지면과 뒤꿈치 압력 제거를 병행하며 지지면만으로 체위 변경을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009851 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 부동 노인의 천골 얕은 궤양·복사뼈 비창백 홍반은 압박손상이며 압력분산을 위한 체위변경 D가 적절하다. NICE 예방 권고와 대조했으며 모든 환자에 동일한 시간 간격을 강제하지 않았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/cg179/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009851
- https://www.internationalguideline.com/repositioning
- https://www.internationalguideline.com/heels
