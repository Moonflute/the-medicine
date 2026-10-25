---
type: qbank
schema_version: 1
id: medqa-us-train-008844
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0206b18826e60d4bc774175f15696da5757183d819ddd42fcc48cfc8521999fc
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "fibroadenoma"
  - "benign breast mass"
  - "mobile breast lump"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

자궁내막증 외에는 특별한 병력이 없는 24세 여성이 6개월 전 처음 발견한 2cm 크기의 왼쪽 유방 종괴로 외래에 내원했다. 종괴는 아프지 않고 처음 발견한 이후 크기가 크게 증가하지 않았다고 한다. 신체검사에서 지름 약 2cm의 둥글고 고무 같은 느낌이며 잘 움직이는 종괴가 만져진다. 병변의 특성과 환자의 연령을 고려할 때 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 섬유낭성 변화
B. 섬유선종
C. 엽상 낭성육종
D. 유관상피내암

## 해설

젊은 여성의 작고 둥글며 고무 같고 잘 움직이는 안정된 단일 종괴는 섬유선종(B)에 부합한다. 섬유낭성 변화는 주기적 통증·팽만감과 다발성/미만성 결절 등으로 나타날 수 있으며 모든 병변이 작고 단단하고 움직이지 않는 것은 아니다. 비가동성 하나를 일반적인 정상 섬유낭성 변화의 정의로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 섬유낭성 변화는 보통 움직이지 않는다고 잘못 일반화한 감별 설명을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008844
