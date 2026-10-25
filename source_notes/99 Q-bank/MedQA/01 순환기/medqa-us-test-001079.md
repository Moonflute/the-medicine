---
type: qbank
schema_version: 1
id: medqa-us-test-001079
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1602263c3f4474d98a2a9db8b9ad2e68b6e52484e5486535be66020028ce9f2a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "무맥성 심실세동"
  - "심정지"
  - "아미오다론"
  - "pulseless ventricular fibrillation"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

ST분절 상승 심근경색으로 입원한 지 48시간 후 75세 남성이 심장중환자실에서 맥박이 없어졌다. 혈압 50/20 mmHg이고 심전도 모니터에서 P파나 QRS군 없이 빠르고 불규칙한 파형이 보였다. 제세동을 두 차례 시행하고 에피네프린 1 mg을 정맥 투여하고 다시 한 차례 제세동한 뒤에도 맥박이 없고 혈압 60/35 mmHg이며 심전도 변화가 없었다. 다음으로 가장 적절한 약물은?

## 선택지

A. 아미오다론
B. 에피네프린
C. 도파민
D. 아트로핀

## 해설

정답은 A이다. 원문은 두 차례 제세동과 epinephrine 투여 뒤 다시 제세동했는데도 VF가 지속되는 상황이다. 난치성 VF/pVT에서는 고품질 CPR과 반복 제세동을 지속하면서 amiodarone 또는 lidocaine을 고려할 수 있고, 제시된 선택지 중 A가 적합하다. amiodarone은 제세동·CPR을 대신하지 않으며 epinephrine도 알고리즘에 따라 반복 투여한다. 무맥성 VF에 atropine을 사용하는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 영어 원문의 epinephrine 뒤 세 번째 제세동이 번역에서 빠져 복원; CPR/제세동을 대체하지 않는 항부정맥제 역할 설명.
- https://professional.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-ACLS-CA-Circular-250620.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001079
