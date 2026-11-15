---
type: qbank
schema_version: 1
id: medqa-us-train-004364
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9dcc66ddb0dee46bbd8aa11001fe7b3ab66a74623916b8e553ac945d7f35292b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "골수이형성증후군"
  - "급성 골수성 백혈병"
  - "범혈구감소증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-qzqOyImO2YleyEseydtOyDgSDspp3tm4TqtbAgKE15ZWxvZHlzcGxhc3RpYyBTeW5kcm9tZSwgTURTKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

골수형성이상종양을 추적 중인 73세 환자에게 피로와 잇몸 출혈이 심해졌다. 혈색소와 혈소판이 더 떨어졌고 반복 검사에서 말초혈액 골수모세포가 28%다. 가장 우려되는 변화는?

## 선택지

A. 만성 림프구성 백혈병 발생
B. 철결핍성 빈혈의 악화
C. 급성 골수성 백혈병으로 진행
D. 골수형성이상종양의 관해

## 해설


추적 중 다계열 혈구감소가 악화되고 골수계 모세포가 뚜렷하게 늘면 급성 골수성 백혈병으로의 진행을 의심한다. 골수와 유전검사로 세부 분류를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004364 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MDS 병력과 진행성 전신증상·혈구 이상에서 선택지 중 AML로의 진행 A를 원문 대조 유지. 확진된 모세포 결과를 만들어내지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004364
- https://doi.org/10.1038/s41375-022-01613-1
- https://ashpublications.org/blood/article/140/12/1345/485985
