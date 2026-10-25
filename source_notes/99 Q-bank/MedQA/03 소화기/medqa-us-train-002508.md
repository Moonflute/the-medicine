---
type: qbank
schema_version: 1
id: medqa-us-train-002508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7b2f1a886dca344039433b889b60eba5df9e2b3cdeefa72ec5afd16ff05c05f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "peptic ulcer disease"
  - "gastric ulcer"
  - "gastrointestinal hemorrhage"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsnqXqtIAg7ZiI6rSA7KeI7ZmYLm1k
question_type: risk_factor
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

35세 남성이 2개월간 식후 즉시 발생하는 상복부 통증으로 내원했다. 통증은 날카롭고 심와부에 국한되며 방사되지 않는다. 통증을 피하려고 식사 횟수를 줄여 4 kg 체중이 감소했다. 20년간 하루 담배 한 갑을 피우고 매일 맥주 3병을 마신다. 상복부에 경미한 압통이 있지만 경직이나 반발통은 없고 검사실 결과는 정상이다. 이 환자는 다음 중 어떤 상태의 위험이 가장 큰가?

## 선택지

A. 악성 변환
B. 담도 감염
C. 위장관 출혈
D. 간 아래 농양 형성

## 해설

식사 직후 심와부 통증으로 식사를 줄이는 양상은 위궤양을 시사하며, 소화성 궤양의 주요 합병증인 위장관 출혈 C가 선택지 중 가장 적절하다. 본문에는 NSAID 사용이 제시되지 않았다. 체중감소가 있으므로 실제로는 내시경 등으로 악성 병변도 평가해야 하며 양성 궤양의 악성 전환으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식후 즉시 통증의 위궤양에서 출혈 C는 유지. 본문에 없는 NSAID 복용을 사실처럼 추가한 해설 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002508
