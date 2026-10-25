---
type: qbank
schema_version: 1
id: medqa-us-train-002659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b7a2374ae01de8897a4e7ed7726ce59aad37d8762e0db1868513cfdf6f0264fb
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "chronic venous stasis ulcer"
  - "squamous cell carcinoma"
  - "Marjolin ulcer"
  - "punch biopsy"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDtjrjtj4nsg4HtlLzslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: complex
answer: D
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

54세 여성이 6년간 지속된 왼쪽 발목 궤양으로 내원했다. 여러 차례 생겼다가 상처관리로 호전되었으며 현재 왼쪽 안쪽 복사뼈 위에 7.5 cm 크기의 궤양, 융기되고 딱딱한 가장자리, 괴사성 바닥, 하지 정맥류, 양측 2+ 부종, 피부 과색소침착이 있다. 다음 중 현재 상태의 가장 적절한 치료의 다음 단계는?

## 선택지

A. 왼쪽 다리 CT
B. 퍼테스 검사
C. 트렌델렌버그 검사
D. 펀치 생검

## 해설

정답은 D, 펀치 생검이다. 정맥류·부종·과색소침착은 만성 정맥질환을 지지하지만, 오래 지속된 궤양에 융기되고 딱딱한 가장자리와 괴사성 바닥이 있으면 편평세포암 등 악성 병변을 배제해야 한다. 의심 부위의 적절한 깊이와 위치에서 조직을 채취하며 병변에 따라 여러 표본이나 다른 생검 방식이 필요할 수 있다. 펀치 생검이 모든 만성 궤양에서 가장 정확하거나 한 번의 음성 결과가 악성을 완전히 배제한다는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 융기·경화 가장자리의 만성 정맥궤양에서 악성변화 배제 위한 생검 D 유지. punch가 항상 가장 정확하다는 과장 삭제.
- 공식/학회 근거: https://www.bad.org.uk/pils/squamous-cell-carcinoma

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002659
