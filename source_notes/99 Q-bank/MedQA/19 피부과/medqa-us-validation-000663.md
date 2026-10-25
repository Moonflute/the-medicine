---
type: qbank
schema_version: 1
id: medqa-us-validation-000663
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8506fcca42bcb81ac575bea6d15c3d67026f4494986e3342f436f629a6f7d70c
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "흑색가시세포증"
  - "위 선암"
  - "악성 종양 관련 피부소견"
question_type: diagnosis
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITslZQgKEdhc3RyaWMgQ2FuY2VyKS5tZA
difficulty: simple
answer: A
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

32세 비만 남성이 목 뒤의 검게 변한 부위로 피부과에 왔다. 혈당은 정상이고 최근 식욕저하와 약간의 체중감소가 있다. 새로 발견된 피부 변화를 일으킬 수 있는 원인은?

## 선택지

A. 위 선암
B. 요붕증
C. 당뇨병
D. 바렛 식도

## 해설

원정답은 A, 위 선암이다. 새로 발견된 흑색가시세포증과 식욕저하·체중감소에서는 위암 같은 악성종양 연관 가능성을 고려할 수 있다. 하지만 비만·인슐린저항성이 더 흔한 원인이며 단 한 번의 정상 혈당으로 전당뇨/인슐린저항성이나 당뇨를 완전히 배제할 수 없다. 이 정보만으로 위암이 확진되었다거나 당뇨가 이 피부소견을 일으키지 않는다고 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 흑색가시세포증은 당뇨/인슐린저항성과 무관하다는 잘못된 해설 수정. 원문 what could를 가능 원인으로 복원하며 A는 연관성 추론이지 암확진 아님.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/acanthosis-nigricans-causes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000663
