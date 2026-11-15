---
type: qbank
schema_version: 1
id: medqa-us-train-001024
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55d9e7965811b016ba2a00b0b9cbb991abe67a63570b08c261d33f56a013fd5f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Hodgkin lymphoma"
  - "Hairy cell leukemia"
  - "Aplastic anemia"
  - "Acute lymphoblastic leukemia"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YuOyngO2CqCDrprztlITsooUgKEhvZGdraW4gTHltcGhvbWEpLm1k
  - MDkg7ZiI7JWhL-yerOyDneu2iOufieyEsSDruYjtmIggKEFBKSAoQXBsYXN0aWMgQW5lbWlhIChBQSkpLm1k
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 아이가 열, 창백, 멍과 지속되는 다리 통증을 보인다. 혈소판은 27,000/μL이고 간비장비대가 있다. 골수의 미성숙 세포에서 CD19·CD10·TdT가 확인됐으며 골수과산화효소는 음성이다. 진단은?

## 선택지

A. 급성 골수성 백혈병
B. T 림프모구성 백혈병
C. B 림프모구성 백혈병
D. 재생불량성 빈혈

## 해설


TdT는 미성숙 림프계 세포의 단서이고, CD19와 CD10 발현은 B계열 림프모구성 백혈병에 합당하다. 정확한 아형과 위험도는 추가 유전검사로 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001024
- https://pubmed.ncbi.nlm.nih.gov/21800074/
