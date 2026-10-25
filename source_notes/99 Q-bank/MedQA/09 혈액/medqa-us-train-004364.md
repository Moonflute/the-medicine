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
question_type: 임상증례 객관식
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

73세 남자가 2일간 지속된 발열과 가래 기침으로 응급실에 왔다. 2주간 피로와 호흡곤란이 점점 심해졌고 3kg의 체중 감소가 있었다. 1년 전 골수이형성증후군으로 항암화학요법을 받았으며 현재 지지요법과 정기 수혈을 받고 있다. 체온 38.5°C, 맥박 93회/분, 호흡수 18회/분, 혈압 110/65 mmHg이다. 하지 말단 점상출혈과 몸통·사지의 자반, 양측 겨드랑이 및 경부 림프절 비대, 왼쪽 하엽 수포음이 있다. 헤모글로빈 9 g/dL, 평균적혈구용적 95 μm³, 백혈구 18,000/mm³, 혈소판 40,000/mm³, PT 11초이다. 이 환자에서 가장 발생했을 가능성이 높은 것은 무엇인가?

## 선택지

A. 급성 골수성 백혈병
B. 버킷 림프종
C. 비심인성 폐부종
D. 소세포폐암

## 해설


골수이형성증후군 환자에서 급성 골수성 백혈병(AML)으로 전이될 위험이 높으며, 빈혈·백혈구증가·혈소판감소와 전신 증상이 AML을 시사한다. 따라서 가장 가능성 높은 진단은 급성 골수성 백혈병이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004364 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MDS 병력과 진행성 전신증상·혈구 이상에서 선택지 중 AML로의 진행 A를 원문 대조 유지. 확진된 모세포 결과를 만들어내지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004364
