---
type: qbank
schema_version: 1
id: medqa-us-train-005765
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84016e8c2575b7d23ade5f617b73a02e43dbe8a62dba9e7d8adc26b223aaffec
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "알레르기 접촉피부염"
  - "니켈 알레르기"
  - "금속 과민반응"
question_type: diagnosis
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
  - MTkg7ZS867aA6rO8L-ygkey0ie2UvOu2gOyXvCAoQ29udGFjdCBEZXJtYXRpdGlzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

특별한 병력, 수술력, 사회력 또는 가족력이 없는 6세 여아가 오른손 손가락에 새로 생긴 가려운 발진으로 응급진료를 받으러 왔다. 최근 이모에게 생일선물로 받은 은반지 한 쌍을 매우 좋아한다고 한다. 비슷한 발진 병력은 없다. 혈압은 123/76 mmHg, 맥박은 분당 67회, 호흡수는 분당 16회, 체온은 37.3°C(99.1°F)이다. 신체검사에서 우측 중지와 약지 기저부에 홍반성 인설성 판이 보인다. 이 새 반지에 가장 가능성 높게 포함된 금속 합금은 무엇인가?

## 선택지

A. 코발트
B. 수은
C. 토륨
D. 니켈

## 해설

반지 접촉부에 생긴 가려운 홍반성 인설판은 금속 알레르기 접촉피부염을 시사하고, 선지 중 니켈(D)이 가장 흔한 원인이다. 코발트 등 다른 금속도 알레르기를 유발할 수 있으므로 나머지 금속에 알레르기가 없다고 단정하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 니켈 D는 타당하지만 코발트 등 다른 금속은 알레르기를 일으키지 않는다는 오류 제거. 원문의 반지 한 쌍 정보 복원.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005765
