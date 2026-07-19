---
type: qbank
schema_version: 1
id: medqa-us-train-004188
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5f9beacd012059893cd7eaf1c94806aa561e6fcf1922e742a43c7b66b59d340
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "헤로인 중독"
  - "호흡성 산증"
  - "고탄산혈증"
question_type: 임상증례 객관식
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

60세 노숙 남자가 의식 변화로 응급실에 왔다. 질문에 대답하지 않는다. 과거력은 알 수 없다. 정맥혈가스검사에서 pH 7.2, PaO2 80 mmHg, PaCO2 80 mmHg, HCO3− 24 mEq/L이다. 이 환자 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 아스피린 과다복용
B. 당뇨병성 케톤산증
C. 에틸렌글리콜 중독
D. 헤로인 과다복용

## 해설


ABG에서 pH 7.2, PaCO₂ 80 mmHg, HCO₃⁻ 정상은 호흡성 산증을 나타낸다. 헤로인 과다복용은 호흡 억제로 고탄산혈증을 일으킨다. 따라서 가장 가능성 높은 원인은 헤로인 과다복용이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004188
