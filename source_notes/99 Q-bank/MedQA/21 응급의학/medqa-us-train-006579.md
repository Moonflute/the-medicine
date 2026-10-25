---
type: qbank
schema_version: 1
id: medqa-us-train-006579
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:842bdbb8bc59d66e1c0bac4bfb468a7e88139dbde577da756309f04d919f7181
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "투약 오류"
  - "적신호 사건"
  - "페니토인 독성"
question_type: ethics
related_disease_slugs: []
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재발성 경련에 대해 정맥 페니토인을 잘못된 용량으로 투여받은 9세 여아에게 서맥과 무수축이 발생했다. 즉시 심폐소생술을 시작했고 15분 후 혈압은 120/75 mm Hg, 맥박은 분당 105회, 호흡수는 분당 14회로 자발호흡을 한다. 중환자실로 옮겨 모니터링과 기계환기를 시행했다. 지시에 따르지만 심한 불안으로 진정이 필요하다. 다음 중 이 환자에게 발생한 예기치 않은 사건을 가장 정확히 설명하는 용어는?

## 선택지

A. 니어미스
B. 적신호 사건
C. 잠재적 오류
D. 활성 오류

## 해설

잘못된 정맥 페니토인 투여 뒤 서맥과 무수축이 발생하여 심폐소생술과 집중치료가 필요했으므로 실제로 중대한 위해가 발생한 사건이다. 환자가 회복 중이더라도 이는 생명 유지 중재가 필요했던 중대한 일시적 위해에 해당하여 센티널 사건(B)으로 분류할 수 있다. 환자에게 위해가 도달하지 않은 near miss와는 다르다. 투약 과정에 능동적 오류가 있었다는 설명과 별개로, 이 문항은 사건 결과의 안전 분류를 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 심정지 후 소생·집중치료가 필요했던 사건을 무해한 near miss로 설명한 오류를 교정한다. 중대한 일시적 위해가 발생한 sentinel event B를 유지한다.
- 공식/학회 근거: https://www.jointcommission.org/en-us/knowledge-library/sentinel-events

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006579
