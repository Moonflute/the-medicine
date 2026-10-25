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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
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

항정신병약 시작 후 발열·근강직·의식 변화·발한과 콜라색 소변은 신경이완제 악성증후군과 횡문근융해를 시사한다. 제시된 노출 약물 중 클로르프로마진이 적절하다. 이를 자가면역성 근육분해라고 부르지 않으며 CK·신기능·전해질 등을 평가하고 원인 약물 중단과 응급 지지치료가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008780

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. NMS 횡문근융해를 자가면역성 근육분해로 설명한 오류 교정. 클로르프로마진 정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bc22941e-d2e7-4165-91ea-7239c8b9882d
