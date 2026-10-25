---
type: qbank
schema_version: 1
id: medqa-us-train-008387
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5586650acd1fb31f0c6a9970594ab018929b28aa0e714b67c631837234398a4f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hairy cell leukemia"
  - "TRAP-positive cells"
  - "cladribine"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: management
difficulty: complex
answer: B
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
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9GaWxncmFzdGltLm1k
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
---

# MedQA US 임상문제

## 문제

72세 남자가 점진적인 피로와 체중 감소로 일차 진료를 받으러 왔다. 고콜레스테롤혈증, 제2형 당뇨병, 대동맥 협착, 만성 신기능부전이 있다. 수면 후에는 개운하지만 낮에 빠르게 피곤해지고 한 달 동안 체중이 15파운드 줄었다. 창백한 결막과 멍이 있고 백혈구 1,100/mm³, 호중구 920/mm³, 헤모글로빈 8.4 g/dL, 혈소판 45,000/mm³이다. 골수 생검에서 CD19+, CD20+, CD11c+이며 산성 인산분해효소 5 및 타르타르산 저항성으로 염색되는 세포가 보인다. 이 질환의 다음 치료는?

## 선택지

A. 하이드록시우레아
B. 클라드리빈
C. 필그라스팀
D. 독소루비신

## 해설


CD11c 및 TRAP 양성 B세포와 증상성 다계열 감소는 classic HCL을 지지하여 선택지 B cladribine이 적절한 치료 중 하나다. 추가 면역표현형/분자검사로 변이형 등을 구별하고 감염·신기능을 고려한다. 만성 신기능부전이 있어 purine analog 독성/투여 적합성을 전문적으로 평가하며 모든 환자에 같은 용량을 자동 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008387 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 증상성 HCL의 cladribine B 유지; CKD·감염위험·변이형 감별을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/hairy-cell-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008387
