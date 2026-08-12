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
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 여아가 3주간 지속된 전신 피로감과 쉽게 멍이 드는 증상으로 내원하였다. 지난 일주일 동안 발열과 밤에 잠을 깰 정도의 심한 다리 통증이 있었다. 체온은 38.3°C, 맥박은 120회/분, 호흡수는 30회/분이다. 진찰상 경부 및 액와 림프절병증이 관찰된다. 복부는 부드럽고 압통은 없으며, 간은 우측 늑골 하단 3cm 아래에서, 비장은 좌측 늑골 하단 2cm 아래에서 촉진된다. 검사실 검사 결과는 다음과 같다: 혈색소 10.1 g/dL, 백혈구 수 63,000/mm3, 혈소판 수 27,000/mm3. 골수 흡인 검사에서 CD10, CD19, TdT 양성 반응을 보이는 미성숙 세포가 우세하게 나타났다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 호지킨 림프종(Hodgkin lymphoma)
B. 털세포 백혈병(Hairy cell leukemia)
C. 재생불량성 빈혈(Aplastic anemia)
D. 급성 림프모구 백혈병(Acute lymphoblastic leukemia)

## 해설


고백혈구수, 저혈소판, 골수에서 CD10·CD19·TdT 양성 전구세포는 전구 B‑세포 급성 림프모구성 백혈병을 나타낸다. 따라서 가장 가능성 높은 진단은 급성 림프모구 백혈병이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001024
