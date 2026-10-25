---
type: qbank
schema_version: 1
id: medqa-us-train-007561
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8193d5713e739f545913cb59c7dbc8ac8416574d362bd94b5487b693498eb91d
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "긴장성 기흉"
  - "기관 편위"
  - "바늘 감압"
  - "폐쇄성 쇼크"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4tOyepeyEsSDquLDtnYkgKFRlbnNpb24gUG5ldW1vdGhvcmF4KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남자가 식당에서 저녁을 먹던 중 갑자기 숨이 차 아내와 함께 응급실에 내원했다. 20갑년의 흡연력이 있다. 의식은 명료하고 말도 할 수 있지만 중등도의 호흡곤란이 있다. 체온은 37°C(98.6°F), 혈압 85/56 mmHg, 맥박 102회/분, 호흡수 20회/분, 비강 캐뉼라 2L에서 산소포화도 88%이다. 구강인두검사는 정상이다. 기관이 왼쪽으로 편위되어 있고 심폐검사에서 오른쪽 하폐야 호흡음이 감소하며 경정맥 팽창은 없다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 흉부 X선
B. 응급 바늘 감압
C. D-이합체 측정
D. 알부테롤 네뷸라이저

## 해설

급성 호흡곤란에 저혈압, 저산소혈증, 오른쪽 호흡음 감소와 왼쪽 기관 편위가 동반되어 긴장성 기흉을 강하게 의심한다. 경정맥 팽창이 없더라도 이를 배제할 수 없다. 이런 불안정 상태에서는 X선을 기다리지 않고 응급 감압(B)을 시행한다. 바늘 감압은 압력을 해소하기 위한 임시 구조 처치로 실패할 수 있으며, 이후 확실한 흉막강 배액과 지속 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저혈압·저산소혈증·일측 호흡음 감소·반대쪽 기관 편위가 있어 즉시 감압 B를 유지한다. 바늘 감압의 한계와 후속 배액을 명시한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007561
