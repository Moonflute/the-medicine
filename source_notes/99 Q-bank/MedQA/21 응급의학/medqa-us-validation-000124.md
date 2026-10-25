---
type: qbank
schema_version: 1
id: medqa-us-validation-000124
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e2a9843eab3662cdf728d58112d24c3a2fd8ff0c2e156501cce7274da89175c3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "지방색전증"
  - "장골 골절"
  - "점상출혈"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-yngOuwqSDsg4nsoITspp0gKEZhdCBFbWJvbGlzbSkubWQ
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

대퇴경부 골절로 고관절 반치환술을 받은 지 얼마 지나지 않아 80세 여성이 갑자기 호흡곤란을 보였다. 수술 후 청색증, 졸림, 저산소혈증, 발열, 빈맥과 흉부 점상출혈이 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 지방색전증
B. 갑상선중독 위기
C. 악성 고체온증
D. 수막염

## 해설

대퇴경부 골절과 고관절 수술 뒤 저산소혈증, 의식 변화와 흉부 점상출혈이 함께 나타나 지방색전증후군(A)을 시사한다. 골수 지방의 미세혈관 색전과 염증 반응이 폐와 전신 손상에 기여한다. 이 조합을 설명하는 데 가장 적절하다는 뜻이지 모든 고관절 수술에서 가장 흔한 합병증이라는 뜻은 아니다. 제시된 다른 선지는 이 특징적인 소견의 조합을 덜 잘 설명한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 지방색전증 A의 호흡·신경·점상출혈 조합은 유지하되 고관절 수술의 가장 흔한 합병증이라는 근거 없는 주장을 삭제한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000124
