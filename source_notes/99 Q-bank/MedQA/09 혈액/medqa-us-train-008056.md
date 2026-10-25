---
type: qbank
schema_version: 1
id: medqa-us-train-008056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7c5014290b9428ee93fe31819615045cf98a97f154df14f4747988b2f186d7f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "microcytic anemia"
  - "anemia of chronic disease"
  - "soluble transferrin receptor"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

55세 여성이 피로로 내원했다. 증상은 하루 종일 지속되고 4개월 전부터 서서히 시작되었다. 류마티스관절염으로 메토트렉세이트, 제2형 당뇨병으로 메트포르민을 복용한다. 발열은 없고 활력징후는 정상이다. 점막이 창백하고 혈액검사에서 헤모글로빈 7.9 g/dL, 헤마토크릿 22%, MCV 79 fL이다. 다음 중 가장 적절한 다음 진단검사는?

## 선택지

A. 혈청 페리틴
B. 혈청 페리틴과 혈청 철
C. 혈청 페리틴과 가용성 트랜스페린 수용체
D. 혈청 철

## 해설


만성 질환성 빈혈을 구분하려면 혈청 페리틴과 가용성 트랜스페린 수용체를 함께 측정하면 철 결핍과 염증성 빈혈을 구별할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008056 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 염증 RA 배경 소구성 빈혈에서 ferritin+sTfR C를 이용한 철결핍/염증빈혈 감별이 원문과 부합함을 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008056
