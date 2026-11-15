---
type: qbank
schema_version: 1
id: medqa-us-train-008088
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16e6dc67d1379f6f961e1dd1e0fea2a5503b7563dc8e71a0759c1069d1b4e03e
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "stimulant use disorder"
  - "cocaine intoxication"
  - "psychotherapy"
  - "Cocaine use disorder"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BY2FtcHJvc2F0ZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9OYWx0cmV4b25lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

각성제 사용장애 환자가 급성 중독에서 회복했다. 의학적 상태와 자살 위험을 평가했고, 본인은 재사용을 줄이는 치료를 원한다. 중독 전문진료에서 우선 연계할 행동치료는?

## 선택지

A. 급성 중독 치료를 마쳤으므로 추가 방문 없이 관찰
B. 알코올 금단교육 중심 프로그램
C. 치료 참여나 금단 유지에 긍정적 강화를 제공하는 강화관리 프로그램
D. 단기간 진정제를 복용하며 프로그램 없이 추적

## 해설

각성제 사용장애에서 강화관리는 근거가 강한 행동치료다. 전문기관에서 적용 가능성을 확인하고 인지행동치료 등과 함께 계획할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008088
- https://www.asam.org/quality-care/clinical-guidelines/stimulant-use-disorders

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 급성 각성제 중독의 위험한 초조에 정신치료만 일차로 쓴다는 해설 오류 교정. 안정 후 치료 연계의 정답으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://downloads.asam.org/sitefinity-production-blobs/docs/default-source/quality-science/stud_guideline_document_final.pdf
