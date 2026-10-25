---
type: qbank
schema_version: 1
id: medqa-us-train-009162
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33f49b899496a7a3633cf31398c63377af69d051eea3d3e5aa61293365d9f54b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypothyroidism in pregnancy"
  - "임신 중 갑상선기능저하증"
  - "Hashimoto thyroiditis"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

25세 여성이 월경이 한 번 빠지고 아침에 간헐적인 오심이 있어 내원했다. 이전 월경 주기는 규칙적이었다. 2년 전 진단받은 하시모토 갑상선염으로 인한 갑상선기능저하증이 있으며 레보티록신 50 μg을 매일 복용해 정상 갑상선 기능을 유지하고 있다. 피임약을 포함한 다른 약물은 복용하지 않는다. 혈압 120/80 mmHg, 심박수 68회/분, 호흡수 12회/분, 체온 36.5℃이다. 유방이 약간 팽창하고 유두 색소침착이 증가했으며, 부인과 진찰에서 자궁경부가 부드럽고 움직임이 증가했다. 자궁은 커져 있고 부속기 종괴는 없다. 갑상선 검사에서 TSH 3.41 mU/L, 총 T4 111 nmol/L, 유리 T4 20 pmol/L이다. 치료를 어떻게 조정해야 하는가?

## 선택지

A. 레보티록신 용량을 30% 줄인다
B. 레보티록신을 중단한다
C. 레보티록신 용량을 20~30% 늘린다
D. 레보티록신 용량을 매주 5%씩 최대 50%까지 늘린다

## 해설


정답 C. 무월경·오심과 자궁 변화는 임신을 시사하므로 확인한다. 기존 갑상선기능저하로 LT4를 복용하는 환자는 임신 확인 시 대개 초기 약25%(20–30%) 증량을 고려한다. 임신 전 TSH와 용량에 따라 개별화하고 약4주 간격 검사로 추가 조정한다. 임신 중 약을 중단하거나 매주 고정 비율로 계속 올리는 방식은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009162 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신 의심 확인과 2026 ATA의 약25% LT4 초기 증량 C, 반복 TSH기반 조절 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://journals.sagepub.com/doi/pdf/10.1177/10507256261445624?download=true

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009162
