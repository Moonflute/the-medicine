---
type: qbank
schema_version: 1
id: medqa-us-train-001357
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:610f10ec826c80fb872c1097823b42a18e0d11676908c1e3cd344a471a440793
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "opioid withdrawal"
  - "heroin withdrawal"
  - "Opioid withdrawal"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성이 6시간 동안의 복통, 콧물 및 오한으로 응급실에 내원했다. 설사와 수면 곤란도 있다. 과민해 보인다. 체온은 37.1°C (98.8°F), 맥박은 110회/분, 혈압은 140/90 mm Hg이다. 피부는 차고 축축하며 소름이 돋아 있다. 동공은 양쪽 모두 직경 7 mm로 크기가 같다. 심폐 진찰은 정상이다. 복부에 압통이 있고 장음은 항진되어 있다. 심부건반사는 양측 3+이다. 다음 중 어떤 물질의 금단이 이 증상을 일으킨 가장 가능성 높은 원인인가?

## 선택지

A. 감마-하이드록시부티르산
B. 대마
C. 펜시클리딘
D. 헤로인

## 해설

비루, 오한, 불면, 동공확대, 소름돋음, 위장관 항진과 빈맥의 조합은 오피오이드 금단에 합당하므로 D, heroin이 가장 적절하다. 오피오이드 중독의 축동·호흡억제와는 반대 양상이다. 이 사례에서 제시하지 않은 안진이나 고열을 진단 근거로 만들어 넣을 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 오피오이드 금단의 원정답 D를 유지하며 본문에 없는 안진·고열을 근거로 추가한 설명을 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001357
