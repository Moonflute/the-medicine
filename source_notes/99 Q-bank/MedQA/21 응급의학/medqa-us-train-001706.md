---
type: qbank
schema_version: 1
id: medqa-us-train-001706
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:34107952927afb2da58b2472222688fd801c02a629aa717b9fceea168457bb7b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "cyanide poisoning"
  - "smoke inhalation"
  - "hydroxocobalamin"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR64-FIChQb2lzb25pbmcpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

밀폐 공간 화재 환자가 고농도 산소를 받고 있지만 혈압 86/52 mmHg로 낮고 혼돈이 있다. 입 주위에 그을음이 있고 젖산은 14 mmol/L다. 시안화물 중독을 의심할 때 즉시 고려할 해독제는?

## 선택지

A. 플루마제닐
B. 포메피졸
C. 하이드록소코발라민
D. 날록손

## 해설

밀폐 화재 뒤 쇼크와 심한 젖산산증은 시안화물 동시 중독을 의심할 단서다. 산소 공급과 기도·순환 관리를 계속하면서 하이드록소코발라민을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 시안화물 독성과 하이드록소코발라민·티오황산의 작용을 교정하고 병용이 언제나 필수는 아니라는 점을 명시했다. 강한 임상 의심 상황에서 선지 D를 유지한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d56fcc8d-bd64-46ab-b0c0-2124bd745a6b

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001706
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
