---
type: qbank
schema_version: 1
id: medqa-us-train-001237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b76ff89420756225e76613c5ecbc165703b2244446be36f8e3956a25982b0ab
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "foreign body aspiration"
  - "peanut aspiration"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riw64-EIOuCtCDsnbTrrLwgKEZvcmVpZ24gQm9keSBBc3BpcmF0aW9uKS5tZA
question_type: management
difficulty: standard
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

3세 여아가 땅콩을 먹다가 갑자기 심하게 기침했다. 한 시간 뒤에도 오른쪽 폐에만 천명이 들리고 호흡음이 줄었다. 산소포화도는 안정적이고 단순 흉부 X선에서 땅콩은 보이지 않았다. 다음 단계는?

## 선택지

A. X선이 정상이므로 이물 흡인을 배제하고 귀가시킨다
B. 흡입 스테로이드를 시작하고 수주 뒤 외래에서 본다
C. 소아 기도팀에 긴급 의뢰해 기관지경으로 확인하고 제거한다
D. 이물이 위에 있다고 보고 상부위장관 내시경을 시행한다

## 해설

명확한 사레 병력과 지속되는 한쪽 천명·호흡음 감소는 기도 이물을 시사한다. 땅콩은 단순 X선에 직접 보이지 않을 수 있으므로 정상 영상으로 배제하지 않는다. 전문 기도팀이 기관지경으로 확인하고 제거한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 앙와위 흡인의 중력 의존 분절을 설명하고 땅콩을 방사선불투과성이라고 가정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001237
- https://doi.org/10.1183/13993003.00901-2017
