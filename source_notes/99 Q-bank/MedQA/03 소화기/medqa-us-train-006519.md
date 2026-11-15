---
type: qbank
schema_version: 1
id: medqa-us-train-006519
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a832a36a5520fab17914449f6b99cdc3732fcb427c644323b37d9fd089cb079
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "췌장 가성낭종"
  - "급성 췌장염 합병증"
  - "균일한 액체 저류"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqUg6rCA7ISx64Kt7KKFIChQYW5jcmVhdGljIFBzZXVkb2N5c3QpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

급성 췌장염이 발생한 지 6주 됐다. CT에서 췌장 주변에 벽이 뚜렷하고 내용물이 균일한 액체 저류가 보인다. 고형 잔해나 괴사 소견은 없다. 무엇인가?

## 선택지

A. 췌장 가성낭종
B. 피막화 괴사
C. 급성 괴사성 저류
D. 급성 췌장주위 액체 저류

## 해설


4주가 지난 뒤 벽이 형성되고 고형 괴사물 없이 액체만 찬 병변은 가성낭종이다. 피막화 괴사는 벽이 있어도 내부에 괴사물이 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염 약1개월후 균일한 액체의 피막성 저류는 pseudocyst A이며 고형괴사 포함 WON과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006519
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9840919/
