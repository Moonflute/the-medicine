---
type: qbank
schema_version: 1
id: medqa-us-validation-000328
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5220c1357ba4e29cc75bea58e444623931fd7225e979e1e65244ad7d9606c383
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "알코올성 케톤산증"
  - "음주 후 고음이온차 대사성 산증"
  - "탈수"
  - "Alcohol intoxication"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남자 대학생이 의식변화로 응급실에 왔다. 주말 내내 보드카와 진을 여러 잔 마셨고 소파에 구토물이 묻은 채 축 늘어져 발견되었다. 체온 36.9°C, 혈압 128/60 mmHg, 맥박 100회/분, 호흡수 25회/분, 실내 공기 산소포화도 95%이다. 동공은 양측 동일하고 빛에 반응하며 떨림이나 근간대경련은 없다. 혈액검사에서 나트륨 138, 염소 90, 칼륨 4.0, 중탄산염 20 mEq/L, BUN 30 mg/dL, 포도당 100 mg/dL, 크레아티닌 0.8 mg/dL이고 동맥혈가스 pH 7.32, pCO₂ 34, pO₂ 89이다. 여자친구가 호흡이 힘들어 보인다고 걱정할 때 어떻게 설명할 것인가?

## 선택지

A. 간성뇌증을 시사하는 호흡이다
B. 수액이 필요함을 시사하는 호흡이다
C. 주요우울장애를 시사하는 호흡이다
D. 당신은 의료 대리인이 아니므로 말할 수 없다

## 해설

음이온차는 138−90−20=28 mEq/L로 증가되어 있고, pH 감소와 빈호흡은 산증에 대한 호흡 반응을 시사한다. 과음·구토와 높은 BUN은 수분 부족 가능성을 뒷받침하여 보기 B의 수액 필요성을 설명할 수 있다. 다만 호흡수만으로 깊은 Kussmaul 호흡을 확정하거나 케톤 측정 없이 알코올성 케톤산증을 확진할 수는 없다. 기도·혈당·전해질과 다른 중독 원인도 평가한다. 의사결정능력이 저하된 환자를 돌보는 동반자에게 임상적으로 필요한 정보를 설명하는 것이 정식 의료 대리인이 아니라는 이유만으로 항상 금지되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 산증과 수분 부족 가능성에서 B를 유지하되 단순 빈호흡만으로 Kussmaul 호흡이나 알코올성 케톤산증을 확진하지 않는다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg174/chapter/Recommendations
- 공식/학회 근거: https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000328
