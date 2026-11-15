---
type: qbank
schema_version: 1
id: medqa-us-train-003382
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:518378d2cda75a275133189cf7441c832004936795e1c211aff345e7b7f629df
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "primary myelofibrosis"
  - "JAK2 mutation"
  - "dry tap"
  - "allogeneic bone marrow transplantation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDqs6jsiJjshKzsnKDspp0gKFBNRikgKFByaW1hcnkgTXllbG9maWJyb3NpcyAoUE1GKSkubWQ
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

원발성 골수섬유증으로 확진된 58세 환자다. 예후 점수상 고위험이고 전신 상태는 좋아 이식을 견딜 수 있으며 적합한 공여자도 있다. 장기 관해뿐 아니라 잠재적 완치를 목표로 할 치료는?

## 선택지

A. 간헐적 적혈구 수혈만 시행한다
B. 동종 조혈모세포이식을 시행한다
C. 룩솔리티닙을 완치 목적으로 단독 투여한다
D. 비장절제술로 골수 질환을 제거한다

## 해설


동종 조혈모세포이식은 골수섬유증에서 잠재적으로 완치가 가능한 치료다. 고위험이라도 동반질환, 공여자와 이식 위험을 종합해 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003382 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 잠재적 완치요법 B 유지하되 모든 환자에 즉시 적응증이라는 오해와 ABVD/imatinib도 PMF 증상요법이라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13432685/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003382
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
