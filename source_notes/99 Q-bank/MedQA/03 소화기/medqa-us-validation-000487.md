---
type: qbank
schema_version: 1
id: medqa-us-validation-000487
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7b14b086952509f0ddd2a35397a438663182e69df8673abf96916dca59f6ba6e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "담석성 췌장염"
  - "복부 초음파"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: investigation
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

39세 여성이 저녁 식사 후 갑자기 시작된 10/10 명치 통증과 메스꺼움, 구토로 응급실에 왔다. 과거에도 저절로 호전되는 복통이 있었지만 이번에는 훨씬 심하다. 백혈구는 정상이고 AST 387, ALT 297, ALP 168 U/L, 리파아제 650 U/L이며 칼슘은 6.9 mg/dL이다. 다음 평가 단계로 가장 적절한 것은?

## 선택지

A. 조영제 없이 복부 CT
B. 복부 MRI
C. 복부 초음파
D. 서서 촬영한 흉부 및 복부 방사선촬영

## 해설


정답 C. 특징적 통증과 정상 상한의 3배를 넘는 lipase는 급성 췌장염을 지지한다. 반복 식후 통증과 높은 ALT 등을 고려해 초음파로 담낭결석 및 담도 확장 등 원인을 평가하는 것이 적절하다. 초음파가 췌장 전체나 부종을 항상 잘 보여주는 것은 아니다. CT는 진단 불확실, 임상 악화 또는 합병증 평가 등에서 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000487 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: US C는 주로 담석/담도 원인 평가이지 췌장 부종을 가장 잘 보는 보편적 영상이 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000487
