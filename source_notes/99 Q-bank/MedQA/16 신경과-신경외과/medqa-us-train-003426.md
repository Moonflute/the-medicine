---
type: qbank
schema_version: 1
id: medqa-us-train-003426
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3a32158b0fd1202f7d46a2e2e39e123addd9cad213b6edacc1f7f1114244017
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "tuberous sclerosis"
  - "renal angiomyolipoma"
  - "ash-leaf macules"
  - "shagreen patch"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rKw7KCI7ISxIOqyve2ZlOymnSAoVHViZXJvdXMgU2NsZXJvc2lzKS5tZA
difficulty: complex
answer: B
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

7세 아이가 영아기부터 뇌전증이 있고, 몸에 잎사귀 모양 저색소반이 세 개 이상 있다. 허리에는 오렌지 껍질 같은 거친 판이 보이고 복부 영상에서는 양쪽 신장 혈관근지방종이 확인됐다. 가장 가능성 높은 진단은?

## 선택지

A. 제1형 신경섬유종증
B. 결절성 경화증
C. 스터지–웨버 증후군
D. 폰히펠–린다우병

## 해설

여러 저색소반, 샤그린반과 신장 혈관근지방종은 결절성 경화증의 중요한 단서다. 신장, 신경계 등 여러 장기를 계획적으로 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문의 여러 저색소반을 9개로 임의 수량화한 오류와 ash-leaf·shagreen·신장 혈관근지방종 용어 오류를 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003426
- https://pubmed.ncbi.nlm.nih.gov/34399110/
