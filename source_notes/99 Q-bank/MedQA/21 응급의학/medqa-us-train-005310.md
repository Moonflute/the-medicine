---
type: qbank
schema_version: 1
id: medqa-us-train-005310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd44bb4e4b951ce43fc5130d51989b1a699da90ca32d1bcc185b083a8cc720c2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "중증 화상"
  - "파크랜드 공식"
  - "화상 수액소생"
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

35세 여자가 주택 화재에서 구조된 45분 후 응급실에 왔다. 혼란스럽고 호흡곤란이 있으며 가슴과 복부, 상지 전면에 2~3도 화상이 있고 입과 코에 검은 잔해가 있다. 키 165 cm, 체중 55 kg, 맥박 125회/분, 호흡수 29회/분, 혈압 105/65 mmHg이다. 파크랜드 공식에 따른 가장 적절한 수액요법은?

## 선택지

A. 향후 24시간 동안 정질액 6 L 정맥 투여
B. 8시간 동안 콜로이드 4 L 정맥 투여
C. 12시간 동안 콜로이드 8 L 정맥 투여
D. 6시간 동안 콜로이드 5 L 정맥 투여

## 해설


파크랜드 공식은 4 mL × 체중(kg) × TBSA(%)를 24시간 총량으로 계산한다. 환자는 55 kg, 약 30% 화상을 입었으므로 4 × 55 × 30 ≈ 6 L가 필요하고, 처음 8시간에 절반을 투여한다. 따라서 정답은 A, 향후 24시간 동안 정질액 6 L 정맥 투여이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005310
