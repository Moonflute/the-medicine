---
type: qbank
schema_version: 1
id: medqa-us-train-004411
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2cfdf5c73d46ebdb395ad27c8df6a1044c4ef24e807c0a1c1d7c8fc54ed7215c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "2세 발달 이정표"
  - "표현 언어 지연"
  - "소아 발달 평가"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24개월 아이가 간단한 두 단계 지시를 이해하고 사람과 잘 어울리지만 단어를 이어서 말하지 못한다. 신생아 청각 선별은 정상이었다. 적절한 다음 조치는?

## 선택지

A. 표현 언어 지연 가능성이 있어 청력과 발달·언어를 평가한다
B. 지시를 알아들으므로 청력 평가는 하지 않는다
C. 말이 나올 때까지 취학 전에는 평가하지 않는다
D. 뇌 MRI로 표현 언어 장애를 먼저 확진한다

## 해설

24개월에 자발적인 두 단어 조합이 없으면 표현 언어를 평가할 이유가 된다. 지시를 이해하고 신생아 선별을 통과했어도 이후의 청력 문제 가능성을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 2세에서 반드시 50~100단어/2~3단어 문장을 사용해야 한다는 단일 숫자 기준 대신 CDC의 두 단어 연결 이정표로 표현언어 지연 근거를 명확히 했다.
- https://www.cdc.gov/act-early/milestones/2-years.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004411
- https://www.nhis.or.kr/renewal_popup/poster/20261013_poster_longdesc_1.html
- https://doi.org/10.1542/peds.2023-063288
