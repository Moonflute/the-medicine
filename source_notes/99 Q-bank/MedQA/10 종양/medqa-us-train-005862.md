---
type: qbank
schema_version: 1
id: medqa-us-train-005862
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c185ac2e8731655309a64e8818cb46adedcec00a3be3935f1f05df64a8fb0eb
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "랑게르한스세포 조직구증"
  - "두개골 골용해성 병변"
  - "소아 골병변"
  - "Langerhans cell histiocytosis"
related_disease_slugs:
  - MTAg7KKF7JaRL-uekeqyjOultO2VnOyKpCDshLjtj6wg7KGw7KeB6rWs7KadIChMYW5nZXJoYW5zIENlbGwgSGlzdGlvY3l0b3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

6세 여아가 한 달 동안 두피의 통증과 점점 커지는 부종으로 내원했다. 해당 부위의 외상은 없었고 중증 질환의 개인력이나 가족력도 없다. 활력징후는 정상이다. 우측 두정골 위에 3cm 크기의 단일 압통성 종괴가 있고 두개골 X선에서 단일 골용해성 병변이 보인다. 혈색소는 10.9 g/dL, 백혈구는 7,300/mm³, 혈청 Na⁺ 136 mEq/L, K⁺ 3.7 mEq/L, Cl⁻ 103 mEq/L, 칼슘 9.1 mg/dL, 포도당 71 mg/dL이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 다발골수종
B. 랑게르한스세포 조직구증
C. 유잉 육종
D. 골 거대세포종

## 해설


어린 소아의 통증성 두개골 종괴와 단일 골용해 병변은 보기 중 Langerhans cell histiocytosis B에 가장 부합한다. LCH는 골수계 유래 수지상세포 계열의 clonal 질환으로 MAPK 경로 변이 등이 관여할 수 있어 단순 양성 염증성 병변으로만 부르는 것은 부정확하다. 국소 골병변부터 다기관 질환까지 다양하며 조직·면역표현형과 범위 평가로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005862 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: LCH를 단순 양성 염증성 골병변이라고 부른 오류를 clonal myeloid-derived dendritic cell 질환으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/langerhans/hp/langerhans-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005862
