---
type: qbank
schema_version: 1
id: medqa-us-train-000646
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5555e8f57440946cd3471244fb1eb1ddf997610dd3ab5757601ebe19284e152
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "atrial fibrillation"
  - "osteoarthritis"
  - "retroperitoneal hemorrhage"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

와파린을 복용하는 72세 환자의 CT에서 큰 후복막 혈종과 활동성 출혈이 보인다. INR은 4.9다. 와파린을 중단하고 출혈을 통제하면서 신속하게 항응고를 역전할 처치는?

## 선택지

A. 4인자 프로트롬빈 복합농축제와 정맥 비타민 K
B. 정맥 비타민 K 단독
C. 프로타민
D. 혈소판 수혈 단독

## 해설

와파린 관련 중대한 출혈에서는 4인자 프로트롬빈 복합농축제로 즉시 응고인자를 보충하고 비타민 K로 지속적인 회복을 돕는다. 농축제가 없으면 혈장을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 와파린 관련 후복막 대량출혈 의심에서 비타민 K+4인자 PCC C를 유지하되 측정되지 않은 INR 상승을 관찰 사실처럼 단정하지 않는다.
- 공식/학회 근거: https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000646
- https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2020/07/10/11/26/2020-acc-expert-consensus-decision-pathway-on-bleeding
