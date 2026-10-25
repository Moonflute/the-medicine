---
type: qbank
schema_version: 1
id: medqa-us-train-008979
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a47e8ad81589931a4a628e048a5b7227feb79f70228c17be9d44f1c017dcc39
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "Proteus mirabilis"
  - "catheter-associated urinary tract infection"
  - "urease-positive bacteria"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

87세 여성이 12시간 동안 점점 심해지는 혼란과 기면으로 요양원에서 응급실로 이송되었다. 아침에 침대에서 나오려 하지 않고 평소보다 반응이 적었다. 알츠하이머병, 고혈압, 신장결석 병력이 있고 만성적이고 조절되지 않는 요실금으로 유치도뇨관을 사용한다. 갈란타민, 메만틴, 라미프릴을 복용한다. 체온 38.5°C(101.3°F), 맥박 112회/분, 호흡수 16회/분, 혈압 108/76mmHg이다. 하복부에 경미한 압통이 있고 사람에 대해서만 지남력이 있다. 소변 pH 8.2, 포도당 1+, 단백 2+, 적혈구 5/고배율시야, 백혈구 35/고배율시야, 세균 중등도, 아질산염 양성이다. 가장 가능성 높은 원인균은 무엇인가?

## 선택지

A. Proteus mirabilis
B. Enterococcus faecalis
C. Staphylococcus saprophyticus
D. Klebsiella pneumoniae

## 해설

Proteus mirabilis는 urease로 요소(urea)를 분해하여 암모니아를 만들고 소변을 알칼리화할 수 있다. 유치카테터·결석력과 pH 8.2의 감염 소변 맥락에서 A가 가장 적절하다. 요산을 분해하거나 요산성 세균이라는 설명은 맞지 않는다. 알칼리성 소변만으로 균을 확정할 수는 없으나 선지 중 대표적 원인이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Proteus가 요산을 분해한다는 오류를 urease에 의한 요소 분해로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008979
