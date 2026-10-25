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
answer: C
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

42세 여성이 3일간의 질 분비물로 내원하였다. 배뇨통, 성교통, 가려움증, 또는 작열감은 없다. 환자는 두 명의 남성 파트너와 성생활을 하고 있으며 콘돔을 일관되게 사용하지 않는다. 성관계 사이에 자주 질 세척(douche)을 한다. 골반 검사에서 묽고 회백색의 질 분비물이 관찰된다. 분비물의 pH는 5.1이다. 습식 도말 검사(wet mount exam)에서 질 상피세포의 1/4이 작은 구균간균(coccobacilli)으로 덮여 있다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 환자를 세프트리악손(ceftriaxone)과 아지트로마이신(azithromycin)으로 치료한다
B. 환자와 파트너를 메트로니다졸(metronidazole)로 치료한다
C. 환자를 메트로니다졸(metronidazole)로 치료한다
D. 환자와 파트너를 국소 케토코나졸(ketoconazole)로 치료한다

## 해설

묽은 분비물·pH>4.5·clue cell≥20%는 BV를 지지한다. 환자의 메트로니다졸(C)이 적절하며 질세척은 피한다. 현행ACOG는 특히재발BV에서 동시파트너치료를 고려하고 첫증상에서도 공동결정을 권고하므로 파트너를 절대 치료하지 않는다고 하지 않는다. B의파트너 metronidazole단독 일괄처방은 최신 권고요법과 같지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: clue cell·BV진단 근거 수정 및2025파트너치료 갱신 반영.
- https://www.cdc.gov/std/treatment-guidelines/BV.htm
- https://www.acog.org/news/news-releases/2025/10/acog-recommends-concurrent-sexual-partner-treatment-recurrent-bacterial-vaginosis-first-time

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001075
