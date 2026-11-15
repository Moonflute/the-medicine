---
type: qbank
schema_version: 1
id: medqa-us-train-000395
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:88305b9eec4b77ec6156ab2134c9af6814b85f78deff137969b501841ad43d99
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute myocardial infarction"
  - "percutaneous coronary intervention"
  - "diffuse ST elevations"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 심근경색 후 심낭염의 약제 선택지·해설 교정."
curation_status: "revised"
curation_reason: "심근경색 후 심낭염의 약제 선택지·해설 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

70세 남성이 심근경색으로 관상동맥중재술을 받은 지 10일 뒤 체위성·흉막성 가슴 통증으로 내원했다. 여러 유도의 ST분절 상승과 심낭 마찰음이 있다. 재경색과 시술 합병증을 평가해 배제했고 약물 금기는 없다. 심근경색 후 심낭염의 초기 약물치료는?

## 선택지

A. 항염증 용량 아스피린과 콜히친
B. 프레드니솔론 단독
C. 와파린 단독
D. 레보플록사신 단독

## 해설

심근경색 뒤 심낭염의 항염증 치료에는 아스피린을 우선하고 금기가 없으면 재발을 줄이기 위해 콜히친을 병용한다. 시술 뒤 새 통증을 처음부터 심낭염으로 단정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 심근경색 후 심낭염의 약제 선택지·해설 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000395
- ESC 심근염·심낭염 진료지침(2025): https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
