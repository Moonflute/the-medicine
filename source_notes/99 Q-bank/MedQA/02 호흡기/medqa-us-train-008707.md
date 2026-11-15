---
type: qbank
schema_version: 1
id: medqa-us-train-008707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6c89e613f4966e24898b28d45fc12c44a702da08025f72093700d5bf57e7c85
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "vitamin A deficiency"
  - "Bitot spots"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEEg6rKw7ZWN7KadIChWaXRhbWluIEEgRGVmaWNpZW5jeSkubWQ
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

낭성섬유증과 췌장 외분비기능부전이 있는 3세 여아가 어두운 곳에서 예전보다 자주 부딪히고 넘어진다. 진찰에서 결막에 거품처럼 보이는 회백색 반점(비토 반점)이 있다. 보충해야 할 영양소는?

## 선택지

A. 아연
B. 비타민 A
C. 비타민 C
D. 리보플라빈

## 해설

야맹증과 결막의 비토 반점은 비타민 A 결핍에 합당하다. 낭성섬유증의 췌장 외분비기능부전은 지용성 비타민 흡수를 떨어뜨릴 수 있다. 결핍을 치료하면서 영양 상태와 췌장효소 보충을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비토 반점의 위치를 각막이 아닌 결막으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008707
- https://www.nice.org.uk/guidance/NG78/chapter/recommendations
