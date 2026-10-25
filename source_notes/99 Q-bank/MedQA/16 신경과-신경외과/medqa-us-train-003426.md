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

7세 남아가 3개월간 4.5 kg의 체중감소와 복통, 복부팽만으로 내원했다. 수주간 소변이 분홍색으로 보였고 최근 학교 성적이 떨어지며 집중하지 못했다. 영아기에 여러 차례 경련이 있었다. 진찰에서 복부 종괴와 왼쪽 늑골척추각 압통이 있었다. 등과 다리에 타원형 저색소 반점이 여러 개 있고 오른쪽 허리에는 주변 피부와 같은 색의 거칠고 움푹 패인 판이 있었다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 제1형 신경섬유종증
B. 스터지-웨버 증후군
C. 결절성 경화증
D. 제2형 신경섬유종증

## 해설

영아기 발작, 여러 잎사귀모양 저색소반(ash-leaf macules)과 요부의 거칠고 오렌지껍질 같은 샤그린 반점(shagreen patch)은 결절성 경화증(C)을 시사한다. 신장 혈관근지방종은 복부 종괴·혈뇨·옆구리 증상을 일으킬 수 있는 연관 병변이다. 이를 단순한 신장 혈관종이나 피부소견이라고 부르지 않는다. TSC1/TSC2 이상에 따른 mTOR 경로 활성화가 관련된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문의 여러 저색소반을 9개로 임의 수량화한 오류와 ash-leaf·shagreen·신장 혈관근지방종 용어 오류를 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003426
