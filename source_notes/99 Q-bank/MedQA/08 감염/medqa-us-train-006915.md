---
type: qbank
schema_version: 1
id: medqa-us-train-006915
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1d13657ad09b59af7607612ba910e01136c4ee091aaa921a71937fc07d6dbc8a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 신우신염"
  - "당뇨병 합병 요로감염"
  - "경구 항생제 전환"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWVyb3BlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

급성 신우신염으로 세프트리악손을 정맥 투여한 비임신 환자가 이틀째 열이 없고 식사가 가능하다. 소변의 대장균은 트리메토프림/설파메톡사졸에 감수성이고 플루오로퀴놀론에는 내성이다. 신기능과 칼륨은 정상이다. 적절한 경구 전환 약제는?

## 선택지

A. 니트로푸란토인
B. 시프로플록사신
C. 트리메토프림/설파메톡사졸
D. 포스포마이신 트로메타몰 단회

## 해설


배양 감수성이 확인되고 경구 복용이 가능하면 트리메토프림/설파메톡사졸로 전환할 수 있다. 니트로푸란토인과 방광염용 단회 포스포마이신은 신실질 감염에 적합하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006915 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신우신염 경구전환 D 유지; ceftriaxone 반응이 TMP-SMX 감수성을 보장한다는 설명과 임의 기간 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006915
- https://doi.org/10.3947/ic.2018.50.1.67
