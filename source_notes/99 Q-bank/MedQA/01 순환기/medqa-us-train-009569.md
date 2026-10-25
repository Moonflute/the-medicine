---
type: qbank
schema_version: 1
id: medqa-us-train-009569
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9604da084661f47aa819d81458864f2057662bd7eba63d91b02746ef6b0755a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "recurrent pericardial effusion"
  - "재발성 심낭삼출"
  - "pericardial window"
  - "Recurrent pericardial effusion"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

류마티스관절염과 쇼그렌증후군 병력이 있는 63세 여성이 2차 의견을 위해 내원했다. 약 1년간 특발성 만성 심낭삼출이 있고 간헐적 흉통이 있다. 심낭천자를 두 번 시행했지만 매번 다시 차올랐으며 NSAID와 콜히친을 사용해도 크기가 변하지 않았다. 원인검사는 음성이다. 현재도 흉통을 호소하지만 목정맥 팽창은 없고 심전도에서 동성 리듬과 낮은 QRS 전압이 보인다. 치료와 진단을 동시에 할 수 있는 선택적 시술은 무엇인가?

## 선택지

A. 심낭창냄술
B. 반복 심낭천자
C. 심낭절제술
D. 비수술적 관리

## 해설


재발성 특발성 심낭삼출에 대해 심낭창을 만들면 삼출액이 지속적으로 배출돼 진단과 치료를 동시에 할 수 있다. 심낭천자는 반복해도 재발이 흔하고, 심낭절제술은 침습적이며 비수술적 관리만으로는 효과가 부족하다. 따라서 선택적 시술은 심낭창냄술이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 천자 뒤 재발한 증상성 삼출에서 조직 진단과 지속 배액을 위한 심낭창 A가 선택지 중 적합.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009569
