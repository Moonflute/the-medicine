---
type: qbank
schema_version: 1
id: medqa-us-train-007350
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:432d47317917bc660a7c66d408a391e27d796c4718e482dabe9ab2293ff2ca1b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "구형적혈구"
  - "용혈성 빈혈"
  - "색소성 담석"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: prognosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

2세 남아가 창백과 황달로 내원했다. 신생아 때 황달로 광선치료를 받았다. 비장이 만져지고 혈색소는 9.8 g/dL, 평균 적혈구 혈색소 농도(MCHC)는 38 g/dL이다. 직접항글로불린검사는 음성이다. 유전구형적혈구증이 확인되었다면 장기적으로 위험이 증가하는 합병증은?

## 선택지

A. 담낭의 콜레스테롤 용종
B. 만성 췌장염
C. 급성 골수성 백혈병
D. 색소 담석에 의한 담낭염

## 해설


만성 용혈로 빌리루빈 배출이 늘어나면 색소 담석이 생길 수 있다. 유전구형적혈구증의 장기 합병증으로 담석과 그에 따른 담낭염이 중요하다. MCHC 상승과 직접항글로불린검사 음성은 감별에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007350 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: DAT 음성·높은 MCHC·신생아 및 반복 용혈의 HS와 색소담석 관련 담낭염 D를 실제 텍스트 근거로 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007350
