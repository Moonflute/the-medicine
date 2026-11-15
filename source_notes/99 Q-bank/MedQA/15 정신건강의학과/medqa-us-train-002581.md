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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 환자가 외상후스트레스장애를 진단받았다. 반복 악몽과 회피로 생활이 어렵다. 외상 중심 심리치료를 설명했고, 환자는 우선 약물치료를 원한다. 근거가 있는 약은?

## 선택지

A. 세르트랄린
B. 에스시탈로프람
C. 부스피론
D. 클로나제팜

## 해설

세르트랄린·파록세틴·벤라팍신은 PTSD 약물치료 근거가 있다. 치료 선택에 환자의 선호를 반영하고 외상 중심 심리치료도 계속 안내한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002581
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=201007672

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PTSD에 에스시탈로프람이 보편적 권고 1차라는 단정 교정. 원문 D는 제한된 선지 내 SSRI 선택으로 보존하되 현행 근거 부족과 권고 약제 누락을 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp
