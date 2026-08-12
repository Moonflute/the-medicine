---
type: qbank
schema_version: 1
id: medqa-us-train-008977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa7c6b89096e5703f5d5e765a2c06308993a5eb8cb36011549a4c19c4db9a31d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "postrenal acute kidney injury"
  - "urinary retention"
  - "oliguria"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2Mpe2bhCDquInshLEg7L2p7YylIOyGkOyDgSAoUG9zdHJlbmFsIEFjdXRlIEtpZG5leSBJbmp1cnkpLm1k
question_type: investigation
difficulty: complex
answer: C
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

58세 남성이 하루나 이틀 동안 소변을 보지 못하고 3시간 동안 심한 치골상부 통증이 있어 응급실에 내원했다. 양성 전립선비대증으로 프라조신과 타다라필 치료 중이다. 혈압 180/100mmHg, 맥박 80회/분, 호흡수 23회/분, 체온 36.5°C(97.7°F)이다. 방광 스캔에서 소변 700mL가 보였고 폴리 카테터를 삽입해 배액했다. 입원 시와 8시간 후 검사에서 크레아티닌 1.4→1.6mg/dL, BUN 64→62mg/dL, 소변량 250→260mL였다. 신장내과 협진을 제안한 이유를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 혈청 크레아티닌
B. 혈청 BUN
C. 소변량
D. 추정 사구체여과율(eGFR)

## 해설


배뇨량이 250 mL 이하인 저량뇨는 사구체 여과율 감소를 의미한다. 사구체 여과율을 정확히 평가하려면 eGFR 계산이 필요하다. 따라서 소변량이 아닌 eGFR이 신장내과 협진 판단 근거가 된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008977
