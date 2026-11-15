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

59세 여성이 심한 두통에 이어 혼돈을 보이고 혈압이 202/128 mmHg다. 뇌 MRI에서 양쪽 두정·후두엽에 혈관성 부종이 있고 출혈은 없다. 고혈압뇌증으로 판단했다. 초기 조치는?

## 선택지

A. 경구 혈압약으로만 조절하고 퇴원한다
B. 수분 제한만 한다
C. 혈압이 정상이 되도록 한 번에 크게 떨어뜨린다
D. 감시하에 정맥 니카르디핀으로 혈압을 단계적으로 낮춘다

## 해설

뇌 장기 손상이 동반된 고혈압 응급에서는 조절 가능한 정맥 혈압약을 사용한다. 뇌관류가 떨어지지 않도록 갑작스러운 정상화는 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고혈압뇌증 의심에서 니카르디핀 B를 유지하되 사진 없이 PRES 영상과 시력변화를 보았다고 쓰지 않고 통제된 감압을 설명했다.
- 공식/학회 근거: https://doi.org/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001643
