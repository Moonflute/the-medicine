---
type: qbank
schema_version: 1
id: medqa-us-train-005980
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a0f2ec3972db4c17f7a6a4a98505b159d21071928bd2768ef871de148bd0e14
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "펠라그라"
  - "나이아신 결핍"
  - "설사와 치매"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uyoOultOuLiOy8gC3svZTrpbTsgqzsvZTtlIQg7Kad7ZuE6rWwIChXZXJuaWNrZS1Lb3JzYWtvZmYgU3luZHJvbWUpLm1k
question_type: diagnosis
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

55세 여성이 수 주 동안 지속되고 호전되지 않는 설사로 내원했다. 얼굴이 특히 달아오르는 느낌도 있다. 체온은 99°F(37.2°C), 혈압은 125/63 mmHg, 맥박은 분당 100회, 호흡수는 분당 15회, 산소포화도는 97%이다. 폐에서 천명이 들린다. 증상 약을 처방받고 퇴원했으나 2주 후 설사, 피부 건조, 비특이적 발진 및 뚜렷한 기억력 저하로 돌아왔다. 다음 중 최근 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 카테콜아민 증가
B. 세로토닌 증가
C. 혈관활성 장 펩타이드 증가
D. 나이아신 결핍

## 해설

홍조·천명·설사는 carcinoid증후군을 시사하고, 이어진 피부염·설사·인지변화는 niacin 결핍 D의 pellagra에 부합한다. 종양의 serotonin 합성에 tryptophan이 많이 사용되어 niacin 합성이 부족해질 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Carcinoid→tryptophan소모→niacin결핍 D의 연결을 보완.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005980
