---
type: qbank
schema_version: 1
id: medqa-us-train-001926
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:abd74ea5e96357727aa37ca8a09e0c8fb1ff4eb2eb30dcec5581bdb5e53d5f3f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ST-elevation myocardial infarction"
  - "inferior STEMI"
  - "percutaneous coronary intervention"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL1NU67aE7KCIIOyDgeyKuSDsi6zqt7zqsr3sg4nspp0gKFNURU1JKSAoU1QtRWxldmF0aW9uIE15b2NhcmRpYWwgSW5mYXJjdGlvbikubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 1시간째 지속되는 압박성 흉통과 식은땀으로 응급실에 왔다. 심전도에서 II, III, aVF에 지속적인 ST분절 상승이 보인다. 병원에서 즉시 관상동맥 중재술을 시작할 수 있다. 가장 적절한 재관류 방법은?

## 선택지

A. 베타차단제 투여만 하고 경과를 본다
B. 트로포닌이 상승할 때까지 재관류를 미룬다
C. 정맥 혈전용해를 먼저 하고 재관류 필요성을 다시 본다
D. 일차 경피적 관상동맥중재술을 즉시 시행한다

## 해설


현재 흉통이 있고 심전도가 STEMI에 합당하면 트로포닌 결과를 기다리지 않고 재관류한다. 적시에 시행할 수 있는 일차 PCI가 우선이다. 혈전용해는 적시 PCI가 어렵고 적응증과 금기를 확인한 상황에서 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 발병 1시간의 하벽 STEMI로 적시 시행 가능한 primary PCI D가 재관류 선택지 중 적절.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001926
- https://doi.org/10.4070/kcj.2026.0005
- https://doi.org/10.1161/CIR.0000000000001309
