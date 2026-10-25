---
type: qbank
schema_version: 1
id: medqa-us-train-002028
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fddc596ede9b3682b724b452d1b3068017e41ff7cff434268fb6d7147c02c816
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperosmolar hyperglycemic state"
  - "seizure"
  - "severe hyperglycemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
question_type: diagnosis
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

74세 남성이 요양원에서 점점 심해지는 혼란으로 응급실에 왔다. 뇌졸중으로 휠체어를 사용하며 최근 clozapine을 시작했다. 체온 38.7°C (101.66°F), 혈압 100/72 mm Hg, 맥박 105/min이고 혈당 945 mg/dL, 나트륨 120 mEq/L, 혈청 삼투압 338 mOsm/kg, beta-hydroxybutyrate 음성, 소변 백혈구 다수와 케톤 미량이다. 다음 중 더 가능성 높은 증상은 무엇인가?

## 선택지

A. 과일 냄새 호흡
B. 경련
C. 오심 또는 구토
D. 빠르고 깊은 호흡

## 해설

심한 고혈당·고삼투압과 케톤 음성은 HHS에 부합한다. 고삼투압에 의한 신경학적 증상에는 의식 변화와 발작이 포함될 수 있어 B가 선택지 중 적절하다. 모든 HHS에서 발작이 흔하거나 필수라는 뜻은 아니다. 과일 냄새 호흡·Kussmaul 호흡은 케톤산증과 더 관련된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HHS의 고삼투압 신경학적 합병증으로 발작 B가 가능하나 흔히 반드시 나타난다는 표현은 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002028
