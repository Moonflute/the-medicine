---
type: qbank
schema_version: 1
id: medqa-us-test-000012
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:59c83d4493b20f1930055a5a49aca32f51c88491063935f83304add6856ae9f3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "일차성 골수섬유증"
  - "JAK2 돌연변이"
  - "룩솔리티닙"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDqs6jsiJjshKzsnKDspp0gKFBNRikgKFByaW1hcnkgTXllbG9maWJyb3NpcyAoUE1GKSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

일차성 골수섬유증이 확진된 72세 환자에게 비장비대로 인한 조기 포만과 야간발한이 심하다. 혈색소 11.2g/dL, 혈소판 18만/μL이며 현재 이식을 하지 않기로 했다. 비장 크기와 전신 증상 조절에 적절한 약은?

## 선택지

A. 클라드리빈
B. 이마티닙
C. 룩솔리티닙
D. 경구 철분

## 해설


룩솔리티닙은 골수섬유증의 증상과 비장비대를 줄이는 데 사용할 수 있다. 완치 치료는 아니며, 혈액 수치와 감염 위험을 확인하며 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000012 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 증상성 JAK2+ 골수섬유증에서 D 유지. 질병진행 억제를 보장한 해설 제거, 심한 빈혈·혈소판 저하에서 별도 안정화·용량 고려 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.fda.gov/media/163792/download

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000012
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13432685/
