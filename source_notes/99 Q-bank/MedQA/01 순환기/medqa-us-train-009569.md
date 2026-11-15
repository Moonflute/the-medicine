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
explanation_status: "manual-reviewed"
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

63세 여성이 큰 심낭삼출로 영상 유도 심낭천자와 카테터 배액을 두 차례 받았다. 두 번 모두 배액 뒤 호흡곤란이 줄었지만 삼출과 증상이 다시 생겼다. 현재 혈압은 안정적이고 심낭이 수축하는 소견은 없다. 재발 방지를 위해 고려할 시술은?

## 선택지

A. 수술로 심낭창을 만들어 배액한다
B. 심낭 전체를 절제한다
C. 흉관만 삽입해 흉막을 배액한다
D. 심낭천자는 필요 없으므로 이뇨제만 증량한다

## 해설


크고 증상이 있는 심낭삼출이 배액 후에도 반복되면 심낭창을 통한 수술적 배액을 고려한다. 현재의 문제는 재발성 삼출이므로, 만성 수축성 심낭염에 시행하는 심낭절제술과 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 천자 뒤 재발한 증상성 삼출에서 조직 진단과 지속 배액을 위한 심낭창 A가 선택지 중 적합.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009569
- https://doi.org/10.1093/eurheartj/ehaf192
