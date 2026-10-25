---
type: qbank
schema_version: 1
id: medqa-us-train-001482
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2deab707491cfb55369a82d68866e8f1d8f479479da2a1d72f7dfd434a6cf3a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "rotavirus vaccine contraindication"
  - "intussusception"
  - "cystic fibrosis"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4개월 남아가 영유아 건강검진을 위해 부모와 함께 내원했다. 신생아 선별검사로 낭성섬유증을 진단받았다. 자주 먹고 양이 많으며 기름진 변을 본다. 4세 형은 자폐증이 있다. 기관지확장제, 췌장효소 보충제 및 지용성 비타민을 복용한다. 키는 18백분위수, 체중은 15백분위수이다. 양쪽 폐야에서 산발적인 천명음이 들리고 복부는 팽창되고 고막음이 나지만 압통이나 근육 방어는 없다. 다음 중 현재 한 가지 이상 정기 예방접종을 시행하는 데 금기가 되는 병력은 무엇인가?

## 선택지

A. 이전 예방접종 후 체온 38.2°C (100.7°F)의 발열
B. 낭성섬유증 병력
C. 열성경련 병력
D. 장중첩증 병력

## 해설

장중첩증 병력(D)은 낭성섬유증 여부와 무관하게 로타바이러스 백신 금기다. 경미한 접종 후 발열, 낭성섬유증 자체, 열성경련 병력은 이 접종의 절대 금기가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 장중첩 병력 D는 로타바이러스 백신 금기. 낭성섬유증에만 적용되는 조건처럼 쓴 설명 수정.
- https://www.cdc.gov/rotavirus/hcp/vaccine-considerations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001482
