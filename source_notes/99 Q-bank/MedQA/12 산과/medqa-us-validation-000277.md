---
type: qbank
schema_version: 1
id: medqa-us-validation-000277
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:07ffe952d56c76458452325820a089f21056738550a630e778177d07ca1bdca6
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전자간증"
  - "단백뇨"
  - "만삭 임신"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
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

임신 37주인 35세 여성(임신 3회, 출산 2회)이 산전 진료를 받으러 왔다. 본인은 건강하다고 느끼지만 바쁜 업무 때문에 정기적으로 산부인과를 방문하지 못했다. 이전 두 번의 임신과 분만은 합병증이 없었다. 초기 산과 진료 당시 혈압은 127/75 mmHg였으나 현재 혈압은 145/95 mmHg이고 하지에 2+ 부종이 있다. 소변검사에서 단백질 3+, 혈액 음성, 적혈구 1~2/고배율시야, 적혈구 원주 음성이었다. 4시간 관찰 후에도 활력징후는 변하지 않았다. 가장 적절한 처치는?

## 선택지

A. 분만 유도
B. 메틸도파 투여
C. 안심시키고 관찰
D. 지속적 심전도 태아감시

## 해설

37주에 새 고혈압과 단백뇨는 전자간증에 합당하다. 주어진 혈압·부종·단백뇨만으로 중증 소견이나 고혈압 위기라고 부르지 않는다. 중증 소견이 없어도37주에는 분만을 권고하므로 A가 적절하며 산모·태아 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단백뇨3+·부종만으로 중증/고혈압위기로 분류한 오류 수정.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000277
