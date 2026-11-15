---
type: qbank
schema_version: 1
id: medqa-us-train-001075
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8fe6f001f86810b25472d8f5a1b02866b02c8c175cb79db37f6e094fc7f72ed
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "bacterial vaginosis"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEuOq3oOyEsSDsp4jsl7wgKEJhY3RlcmlhbCBWYWdpbm9zaXMpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 처음 발생한 악취 나는 회백색 질 분비물로 내원했다. 질 pH 5.1, 아민 냄새검사 양성, 습식 도말에서 단서세포가 보인다. 환자에게 적절한 약물은?

## 선택지

A. 플루코나졸 경구 1회
B. 메트로니다졸 경구 7일
C. 세프트리악손 근육 주사 1회
D. 아시클로버 경구

## 해설

묽은 분비물, pH 상승, 아민 냄새와 단서세포는 세균성 질증의 진단 소견이다. 증상이 있으면 메트로니다졸로 치료한다. 질 세척은 피하도록 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: clue cell·BV진단 근거 수정 및2025파트너치료 갱신 반영.
- https://www.cdc.gov/std/treatment-guidelines/BV.htm
- https://www.acog.org/news/news-releases/2025/10/acog-recommends-concurrent-sexual-partner-treatment-recurrent-bacterial-vaginosis-first-time

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001075
- https://stiguide.kr/%EC%A7%88%EC%97%BC-vaginitis/
- https://www.cdc.gov/std/treatment-guidelines/bv.htm
