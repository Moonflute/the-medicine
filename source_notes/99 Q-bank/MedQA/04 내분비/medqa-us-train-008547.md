---
type: qbank
schema_version: 1
id: medqa-us-train-008547
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:577d5c24ab429ee20b5b2f1b0c9f3035f4d2afa2e6c14d47293274beba852943
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "cerebral edema"
  - "papilledema"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 27세 남성이 혈당 492mg/dL를 측정하고 응급실에서 재확인된 뒤 급히 내원했다. 가벼운 산통 외에는 특별한 증상이 없다. 체온 37°C(98.6°F), 호흡수 15회/분, 맥박 67회/분, 혈압 122/88mmHg이다. 혈액검사 결과는 다음과 같다.
혈청 pH 7.0, pCO₂ 32mmHg, HCO₃⁻ 15.2mEq/L, 나트륨 122mEq/L, 칼륨 4.8mEq/L
소변검사에서 케톤체 양성이다. 입원해 정맥 중탄산염을 투여한 뒤 인슐린 지속주입과 생리식염수를 시작했다. 7시간 후 혼란스러워하며 심한 두통을 호소하는 상태로 발견되었다. 체온 37°C(98.6°F), 맥박 50회/분, 호흡수 13회/분의 불규칙 호흡, 혈압 137/95mmHg이다. 이 환자에게서 예상되는 추가 검사 소견은 무엇인가?

## 선택지

A. 저혈당
B. 췌장염
C. 유두부종
D. 말초부종

## 해설


DKA 치료 중 혈청 pH가 7.0 이하로 급격히 낮아지면 뇌부종이 발생할 위험이 크다. 뇌부종의 특징적인 소견은 안구유두부종(유두부종)이다. 따라서 예상되는 추가 검사 소견은 유두부종이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008547
