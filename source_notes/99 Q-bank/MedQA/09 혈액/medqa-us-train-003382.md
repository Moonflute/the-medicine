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

62세 남성이 추적 진료를 받으러 왔다. 1개월 전 비장비대가 발견되었고 수개월간 야간발한과 5 kg의 의도하지 않은 체중감소가 있었다. 검사에서 혈색소 9 g/dL, 백혈구 1만2천/mm3, 혈소판 26만/mm3였으며 초음파에서 비장 크기는 15 cm였다. 말초혈액도말에서 눈물방울 모양과 유핵 적혈구, 미성숙 골수계 세포가 보였다. 골수흡인은 매우 어려웠고 세 계열 모두의 증식이 관찰되었다. TRAP 검사는 음성, JAK-2는 양성이었으며 9번과 22번 염색체 전좌는 없었다. 다음 중 가장 적절한 완치 목적의 치료는?

## 선택지

A. 아드리아마이신, 블레오마이신, 빈블라스틴, 다카바진 병용요법
B. 동종 골수이식
C. 이마티닙 메실산염
D. 비장절제술

## 해설


JAK2 양성, leukoerythroblastic smear와 눈물방울 적혈구, dry tap 및 비장비대는 원발성 골수섬유증에 부합한다. 동종 조혈모세포이식 B는 현재 잠재적으로 완치를 기대할 수 있는 치료이다. 실제 시행은 예후 위험도·동반질환·공여자와 이식 관련 위험을 종합해 결정한다. ABVD는 Hodgkin lymphoma, imatinib은 BCR::ABL1 양성 질환 치료로 이 사례의 일반적인 PMF 증상완화 치료라고 설명할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003382 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 잠재적 완치요법 B 유지하되 모든 환자에 즉시 적응증이라는 오해와 ABVD/imatinib도 PMF 증상요법이라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13432685/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003382
