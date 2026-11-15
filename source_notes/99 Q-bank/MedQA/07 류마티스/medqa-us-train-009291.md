---
type: qbank
schema_version: 1
id: medqa-us-train-009291
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca260461207fe0369352125202dc85a490c6395412cec314a0c3972bd0a1c4f2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "IgA vasculitis"
  - "IgA 혈관염"
  - "leukocytoclastic vasculitis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

7세 여아가 양쪽 정강이와 엉덩이에 만져지는 자주색 발진과 발목 통증, 산통성 복통으로 내원했다. 혈소판 수는 정상이고 소변에 현미경적 혈뇨가 있다. 가장 가능성 높은 진단은?

## 선택지

A. 면역성 혈소판감소증
B. 소아 특발성 관절염
C. 혈청병 유사반응
D. IgA 혈관염

## 해설


혈소판감소 없이 생긴 하지 촉지자색반에 관절·위장관 증상과 혈뇨가 동반되면 IgA 혈관염에 부합한다. 혈압과 단백뇨를 추적해 신장 침범을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009291 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 만들어진 질환명 히스톤-구스코증을 IgA vasculitis(Henoch-Schonlein)로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009291
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11666671/
