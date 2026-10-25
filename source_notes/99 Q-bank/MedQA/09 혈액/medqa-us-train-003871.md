---
type: qbank
schema_version: 1
id: medqa-us-train-003871
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6f4ff1dd0b905d8e98f6156791aa97f3028ed49b010591a1af4b9f0e74646931
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "acute ischemic stroke"
  - "dactylitis"
  - "exchange transfusion"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

5세 남아가 갑작스러운 구음장애, 단어 찾기 어려움, 오른쪽 상하지 근력 및 감각 소실로 내원했다. 1세 때 손발의 심한 통증과 연조직 부종이 있었고 뇌 MRI에서 왼쪽 뇌경색이 진행 중이었다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 교환수혈
B. 정맥 조직 플라스미노겐 활성제
C. 하이드록시우레아
D. 아스피린

## 해설


이전 손발 지염 병력과 급성 편마비·실어증/뇌경색은 SCD 관련 뇌졸중을 의심하게 한다. 신속한 수혈이 필요하고 가능하면 교환수혈 A로 HbS를 낮추면서 과점도를 피한다. 교환을 즉시 시행할 수 없고 Hb가 낮으면 전문가 협의 아래 단순수혈을 우선하여 지연을 피할 수 있다. Hydroxyurea는 급성 뇌경색을 즉시 되돌리는 약이 아니고 5세 SCD 소아에서 정주 tPA는 권고되는 대체 초기치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003871 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소아 SCD 급성 뇌졸중의 신속 수혈/교환 A 유지; 교환 준비 때문에 수혈을 지연하지 않는 조건 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7189278/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003871
