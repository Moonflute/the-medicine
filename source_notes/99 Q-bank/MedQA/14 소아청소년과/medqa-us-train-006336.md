---
type: qbank
schema_version: 1
id: medqa-us-train-006336
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f90cad1d4e34340aa6089c08291a12aea180ec57f201ad83cd511491b16f0acb
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "큰 심실중격결손"
  - "울혈성 심부전"
  - "좌우 단락"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 3개월 영아에게 큰 막주위 심실중격결손이 있다. 이뇨제를 쓰고 열량 섭취를 늘렸는데도 수유 중 호흡곤란과 체중 증가 부진이 지속된다. 좌심실 용적 과부하도 확인된다. 다음 단계는?

## 선택지

A. 약만 조정하면서 자연 폐쇄까지 기다린다
B. 동맥관 폐쇄를 위해 이부프로펜을 준다
C. 수술적 폐쇄를 위해 소아심장외과와 상의한다
D. 증상이 사라질 때까지 심초음파 추적을 중단한다

## 해설

큰 결손에서 의미 있는 좌우 단락으로 심부전과 성장부진이 지속되면 약물만으로 기다리지 않는다. 결손의 위치와 크기를 확인해 외과적 폐쇄를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VSD 수술 적응증을 Qp:Qs 숫자 단독이 아니라 지속 심부전·성장불량과 통합.
- https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/ventricular-septal-defect-vsd

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006336
- https://www.jacc.org/doi/full/10.1016/j.jacc.2025.11.020
