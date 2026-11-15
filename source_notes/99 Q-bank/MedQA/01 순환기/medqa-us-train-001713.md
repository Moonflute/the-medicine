---
type: qbank
schema_version: 1
id: medqa-us-train-001713
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:394ae26559e102115b2239339b692cbdb422f94e38d9324c9279488a2838155f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "heart failure with reduced ejection fraction"
  - "beta blocker"
  - "metoprolol succinate"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 좌심실 박출률 30%의 심부전으로 외래 추적 중이다. 사쿠비트릴/발사르탄, 다파글리플로진, 스피로노락톤을 복용한다. 혈압 122/74 mmHg, 맥박 84회/분이고 악화나 울혈 소견은 없다. 예후 개선을 위해 추가할 약물은?

## 선택지

A. 아테놀롤
B. 디곡신
C. 카르베딜롤
D. 베라파밀

## 해설


혈역학적으로 안정된 박출률 감소 심부전에서 카르베딜롤은 사망률 감소 근거가 있는 베타차단제다. 아테놀롤을 같은 근거로 대체하지 않는다. 디곡신은 일부 환자의 입원 감소에 쓰일 수 있지만 예후 개선 베타차단제를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정된 수축기HF 치료 맥락에서 metoprolol succinate C를 tartrate와 구별. ACEI에 ARB를 무조건 중복 추가하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001713
- https://doi.org/10.4070/kcj.2023.0047
