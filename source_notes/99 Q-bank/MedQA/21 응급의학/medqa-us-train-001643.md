---
type: qbank
schema_version: 1
id: medqa-us-train-001643
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56c61f1ad2b733d4850161265e2124a0de3c653fffa1be49706993f3d84c6a0f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "posterior reversible encephalopathy syndrome"
  - "hypertensive emergency"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmljYXJkaXBpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 여성이 혼란으로 응급실에 내원했다. 2시간 전까지 평소와 같았으나 약장 안에서 냉동 피자를 요리하려는 모습으로 발견되었고 남편에게 심한 두통을 호소했다. 여러 약물로도 조절이 어려운 고혈압 병력이 있다. 체온은 37.1°C (98.8°F), 맥박은 75회/분, 혈압은 202/128 mm Hg이다. 사람만 인지하고 신경학적 국소 결손은 없다. 비조영 머리 CT는 정상이고 뇌 MRI T2 영상이 제시되어 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 로라제팜 정맥주사
B. 니카르디핀 정맥주사
C. 페니토인 정맥주사
D. 반코마이신, 세프트리악손 및 암피실린 정맥주사

## 해설

혈압 202/128 mmHg와 급성 두통·혼란은 고혈압성 응급상황, 특히 고혈압뇌증/PRES를 의심하게 하므로 조절 가능한 정맥 니카르디핀(B)이 적절하다. MRI 사진을 확인할 수 없어 특정 T2 병변을 관찰했다고 단정하지 않으며 시각증상도 본문에 없다. 일반적으로 면밀한 감시하에 첫 시간 평균동맥압을 약 20–25% 이내로 낮추고 이후 단계적으로 조절하며 즉시 정상 혈압까지 급격히 내리지 않는다. 실제로 다른 급성 뇌질환도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고혈압뇌증 의심에서 니카르디핀 B를 유지하되 사진 없이 PRES 영상과 시력변화를 보았다고 쓰지 않고 통제된 감압을 설명했다.
- 공식/학회 근거: https://doi.org/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001643
