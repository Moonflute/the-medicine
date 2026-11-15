---
type: qbank
schema_version: 1
id: medqa-us-validation-000970
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ea716f858e42b1cfa95dfab1f4f166082c4252b6c8886d29990e26f4bb55fcbe
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "강직성 척추염"
  - "천장관절염"
  - "천장관절 MRI"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: standard
answer: C
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
---

# MedQA US 임상문제

## 문제

25세 남성이 2년 동안 야간 및 아침에 심하고 운동하면 완화되는 허리 통증을 겪고 있다. 천장관절 단순촬영은 뚜렷한 이상이 없으나 축성 척추관절염이 의심된다. 활동성 염증을 찾을 다음 검사는?

## 선택지

A. 요추 전후면 단순촬영 반복
B. 하지직거상검사만 시행
C. 천장관절 MRI
D. HLA-B27 검사만으로 확진

## 해설


초기 축성 척추관절염에서는 X선이 정상일 수 있다. 천장관절 MRI로 활동성 염증을 평가하고 결과를 증상·진찰과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000970 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 천장관절MRI C는 적절하나 MRI단독만으로 언제나확진·일반첫검사라는 과장 제거. 원문 병력/약물 누락복구.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000970
- https://www.nice.org.uk/guidance/ng65/chapter/recommendations
