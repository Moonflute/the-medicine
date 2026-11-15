---
type: qbank
schema_version: 1
id: medqa-us-validation-000670
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5aa54cc3320786f255c1c9422fe7c64164e34471c525e11ee50a89671537d410
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "과민성장증후군"
  - "로마 IV 기준"
  - "복통과 배변 관련성"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
question_type: diagnosis
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

22세 여성이 9개월 동안 아랫배 통증이 반복된다고 한다. 최근 3개월은 매주 2–3일 아팠고, 아플 때 변이 평소보다 묽고 잦아지며 배변하면 대개 호전된다. 혈변·야간 설사·체중 감소는 없고 혈액검사는 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 기능성 설사
B. 셀리악병
C. 설사형 과민성장증후군
D. 궤양성 대장염

## 해설


반복되는 복통이 배변과 관련되고 배변 횟수와 변 형태가 바뀌는 양상이 수개월 지속돼 과민성장증후군에 부합한다. 기능성 설사는 반복 복통이 주된 증상은 아니다. 경고 증상이 생기면 기질적 질환을 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000670 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 현 선지 C는 Rome IV 기준으로서만 정확하므로 질문의 기준 버전을 명시; 2026 Rome V와 혼동하지 않게 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://theromefoundation.org/rome-iv/rome-iv-criteria/
- https://theromefoundation.org/rome-v-criteria/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000670
- https://doi.org/10.5056/jnm25007
