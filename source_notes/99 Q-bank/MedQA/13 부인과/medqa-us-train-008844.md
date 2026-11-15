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
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
difficulty: simple
answer: D
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

24세 여성의 가동성 유방 종괴가 5개월 동안 2 cm에서 4 cm로 커졌다. 중심바늘생검 결과는 세포성 섬유상피성 병변이며 엽상종양을 배제할 수 없다고 한다. 다음 조치는?

## 선택지

A. 나이가 어리므로 확정적 섬유선종으로 보고 종료
B. 호르몬 치료 뒤 크기만 추적
C. 낭종으로 보고 바늘로 배액
D. 유방외과에 의뢰해 종괴를 완전히 절제하여 조직 평가

## 해설

섬유선종과 엽상종양은 일부 중심바늘 검체에서 구분하기 어렵다. 빠르게 커지고 엽상종양을 배제할 수 없으면 진단적 완전 절제를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 섬유낭성 변화는 보통 움직이지 않는다고 잘못 일반화한 감별 설명을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008844
- https://pubmed.ncbi.nlm.nih.gov/41123921/
