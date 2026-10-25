---
type: qbank
schema_version: 1
id: medqa-us-train-009249
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3cd3171d324b0a14d1c3cc6f450da55b46a25debd6b561322caad0f3135aac5a
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "seborrheic keratosis"
  - "지루각화증"
  - "benign skin lesion"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVheyEsSDtnZHsg4nsooUgKE1hbGlnbmFudCBNZWxhbm9tYSkubWQ
difficulty: complex
answer: C
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

68세 남자가 3개월 동안 목에 통증 없는 피부 병변이 있어 내원했다. 병변은 점점 색이 짙어졌고 때때로 가렵다. 허리 아래에도 비슷한 병변이 하나 생겼다. 은퇴한 정원사이며 40년간 하루 반 갑을 흡연했다. 체온 36.7°C, 맥박 72회/분, 혈압 123/78 mmHg이다. 진찰에서 목에 0.8 cm, 허리 아래에 0.6 cm 크기의 과색소침착 구진이 있고 둘 다 기름지고 밀랍 같은 표면을 보인다. 목 병변 사진이 제시되었다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 흑자 악성종
B. 기저세포암
C. 지루각화증
D. 피부섬유종

## 해설

노인의 여러 기름지고 밀랍 같은 과색소 구진은 지루각화증(C)을 가장 지지한다. 다른 선지에도 색소 병변이 있을 수 있어 단순한 색소침착 여부만으로 배제하지 않는다. 병변의 표면·경계·변화와 필요 시 피부경·조직검사로 악성 병변을 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 지루각화증 C를 유지하되 다른 선지는 색소침착을 설명하지 못한다는 잘못된 감별을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009249
