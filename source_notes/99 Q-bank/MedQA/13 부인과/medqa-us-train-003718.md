---
type: qbank
schema_version: 1
id: medqa-us-train-003718
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8117c482881f2692be4f76daf2c4072035009571338d22e1df622a36a8c7e42c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "genitourinary syndrome of menopause"
  - "vaginal atrophy"
  - "dyspareunia"
  - "topical estrogen"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ychOy2leyEsSDsp4jsl7wgKEF0cm9waGljIFZhZ2luaXRpcykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여성이 5개월간 지속된 성교통, 질 건조, 간헐적인 점상출혈로 내원했다. 마지막 월경은 8개월 전이었고 진찰에서 음순 지방패드 감소, 치모 후퇴, 맑은 질 분비물이 보였다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 경구 플루코나졸
B. 국소 니스타틴
C. 국소 에스트로겐 크림
D. 경구 메트로니다졸

## 해설

폐경이행기의 저에스트로겐성 질 위축은 건조감·성교통을 일으킨다. 보기 중 국소 에스트로겐 C가 이에 맞는 치료다. 8개월 무월경만으로 폐경을 확정하지 않는다. 반복 점상출혈을 위축 탓으로 단정하지 말고 자궁경부·자궁내막 등 출혈 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 국소 에스트로겐 C 유지. 마지막 월경 8개월은 확정 폐경이 아니고 동반 출혈 평가 누락을 보완.
- https://www.acog.org/womens-health/faqs/hormone-therapy-for-menopause

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003718
