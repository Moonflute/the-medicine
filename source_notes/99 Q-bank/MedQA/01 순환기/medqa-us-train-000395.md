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

70세 남성이 2시간 전부터 시작된 흉통을 주소로 응급실에 내원하였다. 환자는 10일 전 급성 심근경색(acute myocardial infarction)으로 입원하여 경피적 관상동맥 중재술(percutaneous coronary intervention)을 성공적으로 받고 퇴원하였다. 신체 검진에서 환자는 흉통을 줄이기 위해 몸을 앞으로 숙이는 자세를 취하고 있다. 통증은 가슴 중앙에 위치하며 등 쪽으로 방사된다고 한다. 몸 상태가 좋지 않음에도 불구하고, 환자는 두근거림이나 호흡 곤란은 부인하였다. 활력 징후는 맥박 90회/분, 호흡수 20회/분, 혈압 134/82 mm Hg, 체온 36.8°C이다. 환자는 눈에 띄게 고통스러워하며, 깊게 숨을 들이마시면 흉통이 악화되기 때문에 얕은 호흡을 하고 있다. 심전도(ECG)에서 미만성 ST 분절 상승(diffuse ST elevations)이 관찰된다. 이 환자에게 투여해야 할 약물은 무엇인가?

## 선택지

A. 항염증 용량 아스피린과 콜히친
B. 레보플록사신
C. 프로프라놀롤
D. 와파린

## 해설

흉막성·체위성 흉통과 광범위 ST 상승은 심근경색 후 심낭염에 부합한다. 재허혈 등도 평가하면서 항염증 용량 aspirin을 우선 고려하며, 금기가 없다면 colchicine을 병용해 재발을 줄인다. 최근 MI 환자에서 ibuprofen을 일률적 첫 약으로 제시하는 대신 aspirin 중심 치료를 제시했다. 항생제·warfarin·propranolol은 심낭염 염증 치료를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 심근경색 후 심낭염의 약제 선택지·해설 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000395

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
