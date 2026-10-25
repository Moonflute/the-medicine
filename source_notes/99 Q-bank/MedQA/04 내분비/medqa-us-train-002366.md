---
type: qbank
schema_version: 1
id: medqa-us-train-002366
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8154a6bec1ac8f42ccb58f8e87375b40ee61d80490785269e27d90875e4b3982
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperosmolar hyperglycemic state"
  - "severe dehydration"
  - "prerenal azotemia"
  - "BUN/creatinine ratio"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

80세 여성이 5일간 점점 악화된 혼란과 기면으로 응급실에 왔다. 아들은 3일 전 심한 구토와 설사에서 회복했지만 진료나 입원은 하지 않았다고 한다. 제2형 당뇨병과 고혈압이 있으며 히드로클로로티아지드, 메트포르민, 소아용 아스피린, 종합비타민을 복용하지만 순응도가 낮다. 구강점막이 건조하고 극도로 기면 상태지만 깨울 수 있으며 질문에 답하지 못한다. 나트륨 126 mEq/L, 칼륨 3.9 mEq/L, 염소 94 mEq/L, 중탄산염 25 mEq/L, 칼슘 8.1 mg/dL, 포도당 910 mg/dL, 소변 케톤은 미량이다. 다음 중 이 환자에게서 함께 나타날 수 있는 소견은?

## 선택지

A. 특징적인 호흡 냄새
B. 손을 펼 때 날개짓 떨림
C. BUN/크레아티닌 비율 증가
D. 미만성 복통

## 해설


고혈당, 고삼투성 탈수, 경미한 케톤증은 고삼투성 고혈당성 상태를 나타낸다. 이때는 전해질 손실과 탈수로 BUN/크레아티닌 비율이 상승한다. 따라서 BUN/크레아티닌 비율 증가가 동반될 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 극심한 고혈당·비산증·미량케톤과 탈수는 HHS; 신전성 BUN/Cr 증가 C가 가능.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002366
