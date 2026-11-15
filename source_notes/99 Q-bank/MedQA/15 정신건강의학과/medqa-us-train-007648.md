---
type: qbank
schema_version: 1
id: medqa-us-train-007648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b52f194c0a802cae538b1ff3c2eb7f783a56028dc6a0dda126802c07147a7817
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "disruptive mood dysregulation disorder"
  - "temper outbursts"
  - "irritability"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2MjOq0tOyggSDquLDrtoQg7KGw7KCIIOu2gOyghCDsnqXslaAgKERpc3J1cHRpdmUgTW9vZCBEeXNyZWd1bGF0aW9uIERpc29yZGVyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 아이가 1년 넘게 집과 학교에서 주 4회 정도 상황에 비해 심하게 화를 폭발시킨다. 폭발 사이에도 거의 매일 과민하며, 수개월씩 괜찮아지거나 기분이 고양된 시기는 없었다. 가장 가능성 높은 진단은?

## 선택지

A. 제1형 양극성장애
B. 파괴적 기분조절부전장애
C. 간헐적 폭발장애
D. 품행장애

## 해설

어린 시절부터 여러 환경에서 반복되는 심한 분노 폭발과 그 사이의 지속적인 과민성이 핵심이다. 조증처럼 뚜렷이 구분되는 기분 삽화는 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007648

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. DMDD 지속기간을 3개월 이상으로 잘못 설명한 오류를 12개월 이상으로 교정. 발작 사이 지속 과민과 반복 폭발의 구별 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nimh.nih.gov/health/publications/disruptive-mood-dysregulation-disorder
