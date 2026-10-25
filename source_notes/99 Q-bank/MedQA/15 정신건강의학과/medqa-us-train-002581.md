---
type: qbank
schema_version: 1
id: medqa-us-train-002581
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff32d4a7e58872d69afde98816a63d700cf4f01d95697334432cc3085e93bdd8
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "posttraumatic stress disorder"
  - "SSRI"
  - "escitalopram"
  - "hyperarousal"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2UvOu2gOucr-q4sOq4sOyepeyVoCAoRXhjb3JpYXRpb24gRGlzb3JkZXIpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

88세 남성이 불면으로 일차진료의를 방문했다. 전쟁 중 동료 병사들과 겪은 사건이 강한 기억으로 떠오르고, 작은 소리에도 놀라며 식은땀을 흘리며 깬다. 최근 친구의 장례식 후 악화되었고 수주간 양질의 수면을 취하지 못했다. 다음 중 가장 적절한 초기 약물치료는?

## 선택지

A. 부프로피온
B. 부스피론
C. 클로나제팜
D. 에스시탈로프람

## 해설

외상 관련 침투 기억·과각성·수면장애는 PTSD를 시사한다. 원문은 제시된 선택지 중 SSRI인 에스시탈로프람을 정답으로 삼지만, 2023 VA/DoD 지침에서 에스시탈로프람의 PTSD 효과는 권고를 내리기에 근거가 충분하지 않다. 약물 근거가 더 확립된 세르트랄린·파록세틴·벤라팍신과 외상 중심 정신치료가 선택지에 빠져 있다는 한계가 있다. 따라서 에스시탈로프람이 보편적으로 우수한 1차 약이라는 기존 설명은 맞지 않으며, 특히 고령 환자는 저나트륨혈증·상호작용 등 안전성을 따로 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002581

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PTSD에 에스시탈로프람이 보편적 권고 1차라는 단정 교정. 원문 D는 제한된 선지 내 SSRI 선택으로 보존하되 현행 근거 부족과 권고 약제 누락을 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp
