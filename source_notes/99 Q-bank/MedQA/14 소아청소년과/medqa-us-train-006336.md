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

큰 심실중격결손이 있는 신생아를 심장외과에 의뢰했다. 체중 증가가 불량하고 수유에 어려움이 있다. 호흡곤란을 피하기 위해 푸로세미드와 캅토프릴이 필요하다. 체온은 36.9°C(98.4°F), 맥박은 분당 158회, 호흡수는 분당 30회, 혈압은 94/62 mm Hg이다. 흉부 청진에서 왼쪽 하부 흉골 경계를 따라 전수축기 잡음과 심첨부에서 중간 이완기 저음의 웅웅거림이 들린다. 복부 진찰에서 간비대가 확인된다. 심초음파에서 막성 심실중격결손이 확인되었고 혈역학 검사에서 Qp:Qs 비율은 2.8:1이다. 다음 중 가장 적절한 치료 방법은?

## 선택지

A. 약물치료를 계속하며 결손이 자연 폐쇄될 것이라고 안심시킨다
B. 현재 약물에 디곡신을 추가하고 자연 폐쇄될 때까지 정기적으로 추적한다
C. 결손을 외과적으로 폐쇄한다
D. 결손을 경피적 카테터로 폐쇄한다

## 해설

큰 막성 VSD, Qp:Qs 2.8:1, 약물치료에도 성장불량·수유 곤란·간비대가 있어 외과적 폐쇄(C)가 적절하다. 자연 폐쇄만 기다리면 심부전과 폐혈관 손상이 지속될 수 있다. 단락비 한 숫자만으로 모든 연령·형태의 VSD 수술을 일률 결정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VSD 수술 적응증을 Qp:Qs 숫자 단독이 아니라 지속 심부전·성장불량과 통합.
- https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/ventricular-septal-defect-vsd

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006336
