---
type: qbank
schema_version: 1
id: medqa-us-train-001130
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19b33edf37474665520487c3764cf7d053cf3b838d38e0cfae561f25d866d771
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "acute myelogenous leukemia"
  - "type 1 diabetes mellitus"
  - "infectious mononucleosis"
  - "acute renal failure"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

25세 대학생이 3주간의 발열, 권태감, 피로를 주소로 내원하여 급성 골수성 백혈병(acute myelogenous leukemia)을 진단받았다. 환자는 제1형 당뇨병, 소아기 다발성 중이염, 고등학교 시절 전염성 단핵구증의 과거력이 있다. 현재 하루에 담배 1갑을 피우고 와인 1잔을 마시며, 불법 약물 사용은 부인한다. 활력징후는 체온 36.7°C, 혈압 126/74 mm Hg, 심박수 87회/분, 호흡수 17회/분이다. 신체 검진상 맥박은 도약맥(bounding pulse)을 보이고 안색은 창백하나 호흡음은 깨끗하다. 급속히 진행하는 형태의 백혈병으로 확인되어 정맥 내 항암화학요법을 시작할 예정이다. 치료 중 급성 신부전 발생을 예방하거나 그 가능성을 낮추기 위해 이 환자에게 투여해야 할 치료는 무엇인가?

## 선택지

A. Sulfinpyrazone
B. Probenecid
C. Allopurinol
D. Colchicine

## 해설


Allopurinol(C)은 xanthine oxidase를 억제해 항암 후 고요산혈증·요산 관련 신손상 위험을 낮추는 예방약이다. 수액과 검사 감시가 기본이며 TLS 위험도·기존 요산과 신기능에 따라 rasburicase를 선택할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001130 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AML 항암 전 TLS 예방 약물선지 C 유지. 급성 요산증 비표준 표현 정리, 위험도별 수액·rasburicase 고려 추가.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/prophylaxis-and-treatment/108-prevention-of-tumour-lysis-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001130
