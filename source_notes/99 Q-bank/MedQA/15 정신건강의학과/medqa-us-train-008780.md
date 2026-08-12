---
type: qbank
schema_version: 1
id: medqa-us-train-008780
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d0494f8960684d959762a4b0a90b0861f916dea4e8ebbabe8d8c51205eedd90
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "neuroleptic malignant syndrome"
  - "chlorpromazine"
  - "rhabdomyolysis"
question_type: diagnosis
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

16세 대학생이 3일 동안 지속된 발열, 근육 경직, 혼란으로 응급실에 내원했다. 2개월 전 조현병으로 새로운 약물을 시작했다. 인후통, 배뇨 시 작열감, 설사는 없다. 체온 38.6°C(101.5°F), 혈압 108/62mmHg, 맥박 120회/분, 호흡수 16회/분이다. 소변은 콜라색이고 땀을 많이 흘린다. 해열제와 정맥 수액 치료를 시작했다. 다음 중 이 환자 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 클로르프로마진
B. 디아제팜
C. 레보도파
D. 페니토인

## 해설


조현병 치료제인 클로르프로마진 사용 후 고열, 근육 강직, 자가면역성 근육분해(콜라색 소변) 등이 나타나는 것은 신경이완성 악성 증후군(NMS)이다. 다른 약물은 NMS와 연관성이 낮다. 따라서 클로르프로마진이 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008780
