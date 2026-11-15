---
type: qbank
schema_version: 1
id: medqa-us-train-006866
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f6c6009fc4df9f6cfc7d2a6d6e05aebf2fea2451e98924a722c51056255b8a0
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "외부 두정위 교정술"
  - "Rh 동종면역"
  - "Rh 음성 임신"
  - "Rh alloimmunization"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 37주 둔위 산모에게 외회전술을 시행했다. 산모는 RhD 음성이고 항-D 항체는 없으며 태아 RhD는 알 수 없다. 시술 후 감작 예방을 위해 할 일은?

## 선택지

A. 산모의 항-D 항체가 검출될 때까지 기다린다
B. 태아 심박동이 정상이면 감작 예방을 생략한다
C. 둔위 교정 성공 여부만으로 예방 필요성을 판단한다
D. 항-D 면역글로불린을 투여한다

## 해설

외회전술은 태아 혈액이 모체 순환으로 들어갈 수 있는 사건이다. 항-D에 감작되지 않은 RhD 음성 산모에서 태아가 RhD 양성이거나 미확인이라면 항-D 면역글로불린으로 예방한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ECV 관련 태아모체출혈 예방의 조건 및 투여 시점 명료화.
- https://www.rmf.harvard.edu/Risk-Prevention-and-Education/Guidelines-and-Algorithms-Catalog-Page/Guidelines-Algorithms/2026/OB-Guideline-Files/Appendix-E-Breech-Version-or-External-Cephalic-Version

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006866
- https://sogc.org/common/Uploaded%20files/ACSC/ACSC2024/gui448CPG2404E.pdf
