---
type: qbank
schema_version: 1
id: medqa-us-test-000627
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:496653e883ce849f787d327aa5a9e4ccca33536736ca29a670c43b63a12c4d76
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "횡문근융해증"
  - "코카인 중독"
  - "급성신손상"
question_type: mechanism
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 아파트에서 의식 없이 발견된 지 30분 후 어머니와 함께 응급실에 왔다. 병력을 제공할 수 없었고 졸리고 탈수되어 보였다. 체온 38.5°C(101.3°F), 맥박 110회/분, 혈압 170/100 mmHg였다. 팔뚝에 주사 흔적이 여러 개 있고 이마, 다리, 등에 큰 멍이 있었다. 입에서 피가 나왔고 도뇨관에서 차색 소변이 배출되었다. 요검사에서 pH 5.8, 비중 1.045, 혈액 3+, 포도당 3+, 단백질 1+, 케톤 1+, 적혈구 없음, 백혈구 0~1/고배율 시야였으며 독성검사에서 아편과 코카인이 양성이었다. 정맥 수액과 나트륨 니트로프루시드 주입을 시작했다. 다음 중 예상되는 소견은?

## 선택지

A. 혈청 칼륨 감소
B. 혈액요소질소 감소
C. 혈청 칼슘 증가
D. 혈청 크레아틴키나아제 증가

## 해설

코카인·opioid 노출과 의식저하·외상 뒤 차색 소변, dipstick 혈액 양성이면서 현미경 적혈구가 없는 것은 myoglobinuria 및 횡문근융해증을 시사한다. 따라서 혈청 CK 상승(D)이 예상된다. 초기에는 고칼륨·저칼슘 등이 나타날 수 있으나 이 환자에서 측정되었다고 가정하지 않는다. 케톤 양성 자체가 횡문근융해증의 진단 근거는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CK 상승 D의 근거를 본문에 없는 근육통·전해질 이상·케톤에서 heme 양성/RBC 부재의 myoglobinuria 및 압박·약물 노출로 수정한다.
- 공식/학회 근거: https://tsaco.bmj.com/content/7/1/e000836

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000627
