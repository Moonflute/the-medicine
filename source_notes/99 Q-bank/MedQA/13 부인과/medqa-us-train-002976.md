---
type: qbank
schema_version: 1
id: medqa-us-train-002976
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a133a42d30bdb0e0cff884c1c1460af73c0b4a4bd928a18313a12d67b833a3b6
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Sheehan syndrome"
  - "postpartum hypopituitarism"
  - "postpartum hemorrhage"
  - "lactation failure"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDquLDriqXsoIDtlZjspp0gKEh5cG9waXR1aXRhcmlzbSkubWQ
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압 병력이 있는 임신 33주 28세 여성이 두통과 시야 흐림으로 응급실에 왔다. 혈압 186/102 mmHg, 심박수 102회/분, 호흡수 15회/분, 체온 98.9°F이다. 즉시 제왕절개를 시행했고 수술 중 대량 출혈이 있었지만 이후 입원 경과는 합병증이 없었다. 4주 후 시야 흐림이 지속되고 수유가 되지 않는다고 내원했다. 프로락틴 수치는 10 ng/mL(정상 100 ng/mL)였다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 산모와 아기의 상호작용을 관찰한다
B. 뇌 MRI
C. 두부 CT
D. 유방 초음파

## 해설

대량 산후출혈 후 수유 실패는 Sheehan증후군 등 뇌하수체 기능저하를 의심하게 하며 시야 증상과 함께 뇌하수체 MRI(B)로 평가한다. 산후 PRL은 수유 자극·시점에 따라 달라 100 ng/mL를 모든 산모의 정상값으로 단정하지 않는다. 코르티솔·갑상선 등 호르몬축도 평가하고 부신부전 응급치료를 검사 때문에 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산후PRL정상100은고정기준아님;Sheehan외뇌하수체질환·부신축평가보강.
- https://www.ajnr.org/content/ajnr/early/2008/02/22/ajnr.A1016.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002976
