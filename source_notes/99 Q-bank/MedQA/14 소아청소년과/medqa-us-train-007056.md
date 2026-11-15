---
type: qbank
schema_version: 1
id: medqa-us-train-007056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0080504ea96069fc0b43e4fe2c9ef6dbeec556b5a17d5e6aa081d98919cc0bc
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "주기성 구토 증후군"
  - "편두통 관련 구토"
  - "비담즙성 구토"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISk7IKsIChEaWFycmhlYSkubWQ
difficulty: standard
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

5세 남아가 10개월 동안 다섯 차례, 이른 아침에 시작해 하루가량 지속되는 심한 비담즙성 구토를 겪었다. 매번 경과가 비슷하고 사이에는 증상 없이 잘 자란다. 신경학적 진찰과 기본 검사, 상부위장관 조영검사는 정상이다. 어머니에게 편두통이 있다. 진단은?

## 선택지

A. 위식도역류질환
B. 주기성 구토 증후군
C. 복부편두통
D. 반추증후군

## 해설

유사한 구토 삽화가 반복되고 사이에 건강을 회복하는 양상은 주기성 구토 증후군을 시사한다. 복부편두통은 구토보다 복통이 주된 증상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 주기성 구토를 신경성/심리성으로 단정한 설명을 임상 패턴·감별 중심으로 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007056
- https://pubmed.ncbi.nlm.nih.gov/40836301/
