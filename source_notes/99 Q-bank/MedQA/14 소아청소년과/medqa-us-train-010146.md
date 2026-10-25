---
type: qbank
schema_version: 1
id: medqa-us-train-010146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb276f922bf432f4836b84bffddc12dcf297388f5f3c04d5c6f65067f321fba6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "홍역"
  - "아급성 경화성 범뇌염"
  - "코플릭 반점"
question_type: prognosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmN7JetIChNZWFzbGVzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 11세 남아가 3일 동안 지속된 발열, 기침, 콧물로 응급실에 내원했다. 그동안 분홍색의 가려운 눈도 있었다. 2주 전 시리아에서 이민했고 부모는 6개월 전 사망했다. 아직 정기 소아 예방접종을 받지 않았다. 다른 난민 10명과 위탁가정에서 지내며 두 명에게 비슷한 증상이 있다. 불안해하고 땀을 흘린다. 체온 39.2°C, 맥박 분당 100회, 호흡수 분당 20회, 혈압 125/75 mmHg이다. 양쪽 결막염과 구강 협점막 및 연구개에 홍반 바탕의 청회색 병변이 여러 개 보인다. 다음 중 이 환자에게 위험이 증가하는 합병증은?

## 선택지

A. 재생불량성 위기
B. 관상동맥류
C. 아급성 경화성 범뇌염
D. 면역성 혈소판감소성 자반증

## 해설

고열·기침·콧물·결막염과 Koplik 반점은 홍역을 시사한다. 수년 후 생길 수 있는 아급성 경화성 범뇌염(C)은 중추신경계의 지속적 홍역바이러스 감염과 연관된 진행성 신경질환이다. 감염 후 급성 면역매개 뇌염과 동일한 기전으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: SSPE를 면역매개 합병증으로만 설명한 오류를 지속 홍역바이러스 감염으로 교정.
- https://www.cdc.gov/mmwr/volumes/65/wr/mm6501a3.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010146
