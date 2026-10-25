---
type: qbank
schema_version: 1
id: medqa-us-train-003336
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5a604ce14eb66c30d2cf759c6e0186956f876f55e4ce1da939d3b50700542e8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "secondary polycythemia"
  - "smoking-related erythrocytosis"
  - "chronic hypoxemia"
  - "phlebotomy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
---

# MedQA US 임상문제

## 문제

40세 남성이 피로감, 발한, 다리의 가려움증으로 내원했다. 만성 기관지염이 있고 24년간 하루 2갑의 담배를 피웠다. 비만하며 얼굴이 붉고 입술이 청색을 띤다. 검사에서 적혈구 690만/mm3, 헤모글로빈 20 g/dL, 백혈구 13,000/mm³, MCV 91 fL, 혈소판 54만/mm3, 혈청 페리틴 감소가 확인되었다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 체중 감량
B. 하이드록시우레아
C. 흡입 부데소니드
D. 사혈

## 해설


증상성으로 매우 높은 Hb20 g/dL의 적혈구증이 있어 보기 중 사혈 D가 가장 부합한다. 원문 RBC6.9×10^6/µL와 MCV91 fL로 계산한 Hct는 약63%이다. 단, 흡연·기관지염만으로 2차 적혈구증을 확정할 수 없고 백혈구·혈소판 증가 및 낮은 ferritin은 PV도 의심하게 하므로 산소화, EPO와 JAK2 등을 확인한다. 저산소성 폐질환의 2차 적혈구증에서는 원인·산소화 치료가 기본이며 과점도 증상 또는 Hct>56% 등에 선별적으로 사혈을 고려한다. 모든 2차 적혈구증에 일률적으로 적용하거나 PV와 같은 낮은 Hct 목표로 과도하게 사혈하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003336 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모든 2차 적혈구증에 사혈이라는 오류 제거. 백혈구·혈소판 증가 및 철결핍으로 PV도 의심해야 함을 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6519221/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003336
