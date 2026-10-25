---
type: qbank
schema_version: 1
id: medqa-us-test-000274
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5b47157cac1b15fc20993233801d5db035cf3778854808d8afa305cb7906e5af
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "췌장암"
  - "췌장 외분비 기능부전"
  - "지방변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남성이 3주 동안 복부 팽만과 잦은 배변이 있어 병원에 왔다. 대변은 부피가 크고 악취가 나며 변기 물을 내려도 잘 내려가지 않는다고 한다. 4개월 동안 반복되는 둔한 상복부 통증도 있었는데 보통 며칠간 지속되고 식후 악화되며 제산제로 호전되지 않았다. 지난 4개월 동안 체중이 10 kg(22 lb) 감소했다. 중대한 질환의 개인력이나 가족력은 없다. 37년 동안 매일 담배 한 갑을 피웠고 12년 동안 매일 맥주 6~8병을 마셨다. 키 160 cm(5피트 3인치), 체중 52 kg(115 lb), BMI 20 kg/m²였다. 활력징후는 정상이었다. 복부 진찰에서 반발통이나 근육경직 없이 경미한 명치 압통이 있었고 장음은 정상이었다. 다음 중 진단을 위한 가장 적절한 다음 단계는?

## 선택지

A. 복부 CT
B. 내시경 초음파
C. 복부 초음파
D. 상부 위장관 내시경

## 해설

장기간 과음과 흡연, 반복되는 식후 상복부 통증 및 지방변·체중감소는 만성췌장염과 췌장 외분비기능부전을 의심하게 한다. 보기 중 A, 복부 CT로 췌장 석회화·위축·췌관 변화와 합병증 등을 평가하는 것이 적절하다. ACG 지침은 만성췌장염의 첫 영상 평가로 CT 또는 MRI를 권고하며, 불확실하면 내시경초음파 등으로 보완한다.

체중감소가 뚜렷하므로 종양도 감별해야 하지만, 현재 소견만으로 췌장암이라고 확진하지 않는다. CT가 모든 상황에서 EUS보다 가장 민감하다는 의미도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 과음·흡연/반복 통증·지방변의 만성췌장염 평가를 췌장암 확진처럼 설명한 오류 및 CT 최고민감도 과장을 교정.
- https://doi.org/10.14309/ajg.0000000000000535

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000274
