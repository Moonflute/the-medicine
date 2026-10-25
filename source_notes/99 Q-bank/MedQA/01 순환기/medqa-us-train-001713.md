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
explanation_status: machine-generated
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

72세 남성이 외래에 내원했다. 뉴욕심장협회 III등급 심부전이 있고 캅토프릴, 푸로세미드, 염화칼륨, 로수바스타틴 및 아스피린을 복용한다. 대체로 괜찮고 최근 악화는 없으며 양측 하지에 미세한 함요부종만 있다. 다음 중 심부전 치료에 추가할 약물은 무엇인가?

## 선택지

A. 로사르탄
B. 메토프롤롤 타르타르산염
C. 메토프롤롤 숙시네이트
D. 디곡신

## 해설


중증 HFrEF 환자에게는 베타 차단제 중 장시간 작용형 메토프롤롤 숙시네이트가 표준 치료에 추가된다. 다른 선택지는 이미 복용 중이거나 효과가 제한적이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정된 수축기HF 치료 맥락에서 metoprolol succinate C를 tartrate와 구별. ACEI에 ARB를 무조건 중복 추가하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001713
