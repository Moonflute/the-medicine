---
type: qbank
schema_version: 1
id: medqa-us-train-004705
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cbb48ccdcdcde803e1e4a6460ff387ff277318321e059b12456dcd2cb7b0c05b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "거대세포동맥염"
  - "측두동맥염"
  - "적혈구 침강속도"
  - "giant cell arteritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xhdGFub3Byb3N0Lm1k
---

# MedQA US 임상문제

## 문제

68세 여성이 반복되는 두통과 머리를 빗을 때의 통증으로 내원했다. 과거력으로 고혈압, 녹내장과 오른쪽 다리의 만성 심부정맥혈전증이 있다. 리바록사반, 라타노프로스트와 베나제프릴을 복용한다. 활력징후는 혈압 130/82 mm Hg, 맥박 분당 74회, 호흡수 분당 14회, 체온 36.6°C (97.9°F)이다. 신체검사에서 목이 뻣뻣하고 하지 통증 때문에 일어서기 어렵다. 양측 상하지 근력은 5/5이다. 다음 중 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 요추천자
B. 적혈구 침강속도
C. 측두동맥 생검
D. 안저검사

## 해설


고령의 새 두통·두피 압통과 통증성 근위부 뻣뻣함은 GCA/PMR을 의심하게 한다. 선택지 중 ESR(B)을 포함한 염증수치 평가가 적절하다. 그러나 정상 ESR이라고 GCA를 배제하지 못하며 CRP·혈구와 임상상, 측두동맥 생검/혈관영상 등을 함께 본다. 시각허혈 등 의심이 높으면 검사결과 때문에 glucocorticoid를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004705 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ESR 상승을 GCA 진단의 필수조건으로 잘못 표현한 부분을 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004705
