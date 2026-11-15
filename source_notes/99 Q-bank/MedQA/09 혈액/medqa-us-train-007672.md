---
type: qbank
schema_version: 1
id: medqa-us-train-007672
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9907526912567fbb85b3d17c4670a24881032b58336d1eeef0736407c121f733
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "erythropoiesis-stimulating agent"
  - "anemia of chronic kidney disease"
  - "darbepoetin"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: C
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

투석을 받지 않는 4기 만성콩팥병 환자가 피로를 호소한다. 혈색소 9.1 g/dL, 페리틴 25 ng/mL, 트랜스페린 포화도 10%이다. 현재 혈역학적으로 안정적이고 출혈은 보이지 않는다. 적혈구생성자극제(ESA) 투여를 고려할 때 먼저 할 처치는?

## 선택지

A. 혈색소가 10 g/dL 미만이므로 철 평가 없이 ESA부터 시작한다
B. 증상과 무관하게 수혈로 혈색소를 정상화한다
C. 철결핍의 원인을 평가하고 철을 보충한다
D. 철 보충 없이 엽산만 경험적으로 투여한다

## 해설


페리틴과 트랜스페린 포화도가 모두 낮아 철결핍을 교정해야 한다. ESA에 앞서 철결핍 등 교정 가능한 원인을 평가·치료한다. 비투석 만성콩팥병에서 ESA를 시작할지는 교정 후에도 남는 증상과 빈혈 정도, 수혈 필요성 및 치료 위험을 종합해 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007672 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Hb<10 조건 C를 자동 투여/모든 상황의 절대기준으로 일반화한 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0fd36cb9-c4f6-4167-93c9-8530865db3f9&type=display
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007672
- KDIGO 2026 만성콩팥병 빈혈 지침, Practice Point 3.1.2: https://kdigo.org/wp-content/uploads/2026/01/KDIGO-2026-Anemia-in-CKD-Guideline.pdf
