---
type: qbank
schema_version: 1
id: medqa-us-train-005004
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3b0cec3a688e52e56e2d8a9c036a0e16b15c9f8b4d325b18068d6cc647b2276
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "독성 표피 괴사용해"
  - "스티븐스-존슨 증후군"
  - "시프로플록사신 유발 중증 피부약물이상반응"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남자가 3일 동안 피부가 아프게 벗겨져 내원했다. 목의 작은 홍반성 반점이 빠르게 몸통, 얼굴, 엉덩이로 퍼져 느슨한 수포와 전체 체표면적의 40% 이상 표피 박리가 발생했다. 1주 전 요로감염으로 시프로플록사신을 복용하기 시작했고 니콜스키 징후가 양성이다. 다음 중 가장 적절한 진단검사는?

## 선택지

A. 병변 주변 생검의 간접 면역형광검사
B. 혈액 배양검사
C. 피부 생검과 조직병리검사
D. 혈청 포도상구균 표피박리 독소 PCR

## 해설

약물 노출 후 통증성 홍반·이완수포와 체표면적 40%를 넘는 표피 박리는 독성표피괴사용해증(TEN)에 합당하다. 선지 중 피부 생검·조직병리검사(C)가 표피 괴사와 분리를 확인하고 감별하는 데 적절하다. SJS는 박리 <10%, overlap은 10~30%, TEN은 >30%로 구분하며 생검 결과는 임상 소견과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. >40% 표피 박리는 TEN이며 SJS로 잘못 분류한 설명을 교정한다. 진단 검사 C는 유지한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005004
