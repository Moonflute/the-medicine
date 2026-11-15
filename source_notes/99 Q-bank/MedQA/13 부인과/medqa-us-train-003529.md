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
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
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

완전 포상기태를 제거한 뒤 혈청 hCG가 꾸준히 감소한다. 초음파에서 양쪽 난소가 여러 개의 얇은 벽 낭종으로 커져 있지만 통증·염전·출혈은 없다. 난소 병변의 관리는?

## 선택지

A. 악성 난소종양으로 간주해 바로 양측 난소를 제거
B. 증상을 기다리지 않고 양쪽 난소를 응급 수술
C. hCG 추적을 이어가고 난포막황체낭종의 자연 소실을 관찰
D. 낭종이 없어질 때까지 예방적 항암치료

## 해설

높은 hCG가 난소를 자극해 양측 난포막황체낭종을 만들 수 있다. 합병증이 없으면 대부분 난소를 보존하며 추적하고, 낭종은 hCG보다 늦게 줄 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포상기태의 병리와 난포막황체낭종을 비표준적인 수포성 기형 용어로 설명한 오류를 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003529
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7813445/
