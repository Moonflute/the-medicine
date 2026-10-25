---
type: qbank
schema_version: 1
id: medqa-us-train-008565
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca58e2fb42a7eeddc5d88cb396b1b9dd2cbefc8902a435f81e2c616a26137d6d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "traumatic finger amputation"
  - "amputated digit preservation"
  - "replantation"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

35세 남성이 피 묻은 붕대로 오른손을 감싼 채 응급의료서비스에 의해 응급실로 이송되었다. 목수인 환자는 집 수리 작업을 위해 나무를 자르던 중 한눈을 팔아 원형 테이블톱에 손가락을 다쳤다고 한다. 검지가 잘려나갔고 아내가 그것을 가져오고 있다. 활력징후는 안정적이고 정상이며, 오른손 두 번째 손가락이 근위지간관절 원위부에서 일부 소실되어 있다. 최상의 결과를 위해 절단된 손가락을 병원으로 어떻게 운반해야 하는가?

## 선택지

A. 수건으로 감싼다
B. 멸균 수돗물 봉지에 넣는다
C. 생리식염수로 적신 멸균 거즈로 감싸 방수 비닐봉지에 넣는다
D. 생리식염수로 적신 멸균 거즈로 감싸 밀봉한 방수 비닐봉지에 넣은 뒤 봉지를 얼음 위에 둔다

## 해설


절단지는 생리식염수로 살짝 적신 멸균 거즈로 감싸고, 밀봉되는 방수 비닐봉지에 넣은 뒤 그 봉지를 얼음이 든 용기에 두어 간접 냉각한다(D). 조직 자체를 물에 담그거나 얼음에 직접 접촉시키지 말고 얼리지 않는다. 환자와 함께 신속히 전문기관으로 운반한다. 저온 보존은 대사를 줄이지만 온도를 무조건4°C 이하로 낮추거나 냉동하는 것이 목표는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008565 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 거즈·봉지의 순서를 임상적으로 명확히 번역하고4°C 이하라는 무조건적 냉각 표현을 비동결 간접 냉각으로 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.orthoinfo.org/diseases--conditions/fingertip-injuries-and-amputations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008565
