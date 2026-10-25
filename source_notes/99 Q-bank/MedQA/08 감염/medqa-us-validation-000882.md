---
type: qbank
schema_version: 1
id: medqa-us-validation-000882
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:822103e0a58b24bb8f8fd17170ef291ce4664e3918bdcad947204cbead5d863c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "만성 육아종성 질환"
  - "백혈구 접착 결핍"
  - "유세포분석"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66eM7ISxIOycoeyVhOyiheyEsSDsp4jtmZggKENocm9uaWMgR3JhbnVsb21hdG91cyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
answer: B
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

생후 32일 남아가 배꼽의 화농성 분비물과 항문 주위 궤양, 하루 25~30회의 설사로 진료를 받으러 왔다. 제대가 생후 25일에 떨어졌고 배꼽 주위 발적과 경결, 간비장비대, 백혈구 73,000/mm³, 말초도말에서 과분엽 호중구와 독성 과립이 보인다. 정확한 진단에 가장 도움이 되는 검사는?

## 선택지

A. 복부 및 골반 초음파
B. 유세포분석
C. 자기공명영상
D. 전체혈구검사

## 해설


제대 분리 지연과 제대염, 현저한 호중구증가는 백혈구 부착결핍(LAD)을 의심하게 하며 유세포분석(B)으로 CD18/CD11 등 표면 발현을 평가할 수 있다. 과분엽/독성과립은 원문의 말초도말 소견이지 골수검사 결과가 아니다. LAD에서는 전형적으로 고름 형성이 적은데 이 원문은 화농성 분비물도 기술하므로 그 비전형성을 인지하고 표현형·기능검사를 종합해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000882 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제대분리지연·심한 호중구증가·제대염은 LAD/flow B. 과분엽 호중구를 골수소견이라고 하고 purulence를 무시한 과도한 단정 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://rupress.org/jhi/article/1/1/e20250003/277390

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000882
