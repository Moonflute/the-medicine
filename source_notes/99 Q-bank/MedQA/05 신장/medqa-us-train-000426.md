---
type: qbank
schema_version: 1
id: medqa-us-train-000426
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ccb4e3fb8821f79f67e9f287909b3727fae120d87f7167ba51b13b9b8a5645f0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "crescentic glomerulonephritis"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 2주간의 피로, 무기력증, 하지 부종으로 내원하였다. 환자는 소변 색이 평소보다 어둡게 변한 것을 관찰하였으며, 최근 2일간 소변량이 감소하였다. 체온은 37.5°C, 맥박은 88회/분, 호흡수는 15회/분, 혈압은 154/98 mm Hg이다. 신체 검진상 양측 정강이 부위에서 2+의 부종이 관찰된다. 검사실 소견은 다음과 같다: 혈색소 10.9 g/dL, 백혈구 수 8200/mm3, 혈소판 수 220,000/mm3. 혈청: Na+ 137 mEq/L, Cl- 102 mEq/L, K+ 4.8 mEq/L, HCO3- 22 mEq/L, 포도당 85 mg/dL, 요소질소 34 mg/dL, 크레아티닌 1.4 mg/dL. 소변: 혈액 2+, 단백질 3+, 포도당 음성, 적혈구 10–12/HPF(이형성 적혈구 포함), 적혈구 원주 다수. 신장 생검 결과 사구체 내 초승달 형성(crescent formation)과 모세혈관외 세포 증식이 관찰된다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 리툭시맙(rituximab) 투여
B. 리시노프릴(lisinopril) 투여
C. 메틸프레드니솔론(methylprednisolone) 투여
D. 사이클로스포린 A(cyclosporine A) 투여

## 해설

정답은 C이다. 신염성 소변과 핍뇨·초승달/모세혈관외 증식은 빠르게 진행하는 사구체염을 우려하게 하므로 신속한 신장내과 평가와 원인검사가 필요하다. 면역매개 RPGN에서 methylprednisolone은 초기 염증 억제 치료에 포함될 수 있어 제시된 선택지에서 C가 적합하다. 다만 ANCA·anti-GBM·면역복합체·감염성 원인에 따라 추가 면역억제/혈장교환 여부가 달라지며 steroid 단독을 모든 초승달 신염의 표준 완결치료로 가르치지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초승달 신염의 원인별 치료 차이를 명시해 steroid 단독이 모든 RPGN의 완결치료라는 인상 제거.
- https://kdigo.org/wp-content/uploads/2024/05/KDIGO-2024-ANCA-Vasculitis-Guideline-Update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000426
