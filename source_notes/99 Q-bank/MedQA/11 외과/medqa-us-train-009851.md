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
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

침대에 누워 지내는 83세 남성에게 천골 위에 얕게 열린 궤양과 붉은 상처 바닥이 보인다. 추가 진찰에서 양쪽 외측 복사뼈에 압박해도 창백해지지 않는 홍반 부위도 있다. 다음 중 어떤 중재를 했더라면 이 상태를 가장 잘 예방할 수 있었는가?

## 선택지

A. 영양 보충
B. 국소 항생제
C. 항응고제
D. 자주 체위 변경

## 해설


압박궤양은 지속적인 압력으로 인해 조직이 괴사하면서 발생한다. 정기적인 체위 변경으로 압력을 분산시키면 발생을 예방할 수 있다. 따라서 가장 효과적인 예방은 자주 체위 변경이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009851 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 부동 노인의 천골 얕은 궤양·복사뼈 비창백 홍반은 압박손상이며 압력분산을 위한 체위변경 D가 적절하다. NICE 예방 권고와 대조했으며 모든 환자에 동일한 시간 간격을 강제하지 않았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/cg179/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009851
