---
type: qbank
schema_version: 1
id: medqa-us-train-003529
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:944026cfcc6b15f52453c0c57be2bbf80f2fdbd21fcba509b8b17a501f9e5447
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "theca lutein cysts"
  - "molar pregnancy"
  - "high beta-hCG"
  - "bilateral ovarian enlargement"
question_type: mechanism
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 G2P0A2 여성이 가벼운 질 출혈로 내원했다. 2주 전 빈 임신낭으로 흡인 소파술을 받았고 병리에서 태아 조직 없이 증식성 수포성 영양막 융모가 보였다. 현재 베타-hCG는 101,005 mIU/mL로 2주 전 63,200보다 상승했다. 골반 초음파에서 양쪽 난소가 커져 있고 2~3 cm 크기의 얇은 벽 낭종이 여러 개 보였다. 다음 중 부속기 종괴의 가장 가능성 높은 원인은?

## 선택지

A. 황체 낭종
B. 자궁외 임신
C. 자궁내막종
D. 난포막 황체 낭종

## 해설

태아 조직 없이 수종성 융모와 영양막 증식이 있고 hCG가 매우 높은 경과는 포상기태성 임신을 시사한다. 높은 hCG가 난소를 자극하면 양측성·다발성 난포막황체낭종(theca lutein cysts)이 생길 수 있어 D가 적절하다. 이는 단일 황체낭종이나 자궁내막종과 구별된다. 소파술 후 hCG 상승에 대한 후속 진료 방침을 이 기전 문항만으로 정한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포상기태의 병리와 난포막황체낭종을 비표준적인 수포성 기형 용어로 설명한 오류를 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003529
