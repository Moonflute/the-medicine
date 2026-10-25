---
type: qbank
schema_version: 1
id: medqa-us-train-006160
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cbc3355f63ba113657084e8db38d10b9128dccb6200bad52571c250738562ca3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "비만"
  - "메트포르민"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 여성이 체중 문제로 가정의학과를 방문했다. 10년 동안 식단을 조절하지 못해 계속 체중이 늘었고 운동도 시도했지만 너무 게을러 효과가 없었다고 한다. 체온은 37°C(98.6°F), 호흡수는 분당 15회, 맥박은 분당 67회, 혈압은 122/88 mmHg, BMI는 30이다. 과거 검사에서 공복혈당 149 mg/dL, HbA1c 9.1%, 중성지방 175 mg/dL, LDL 102 mg/dL, HDL 35 mg/dL, 총 콜레스테롤 180 mg/dL, 크레아티닌 1.0 mg/dL, BUN 12 mg/dL, 알부민 4.2 g/dL, 알칼리성 인산분해효소 150 U/L, ALT 76 U/L, AST 88 U/L이다. 건강이 나아지지 않으면 생길 장기 문제를 설명하자 생활습관과 식단을 바꾸기로 했다. 다음 중 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 식이 조절만 시행
B. 메트포르민
C. 글리피지드
D. 시타글립틴

## 해설

체중증가 위험·신기능·혈당효과를 고려하면 제시 중 metformin B가 적절하다. 다만 A1c9.1%는 목표보다 상당히 높아 조기 병용치료와 체중/심혈관/신장 목표에 맞춘 다른 약제를 함께 고려한다. Metformin 단독만이 모든 환자의 유일한 초기전략이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Metformin B는 선택지 중 적절하나 A1c9.1의 모든 환자에 단독치료만이 현재1차라는 일반화 제한.
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006160
