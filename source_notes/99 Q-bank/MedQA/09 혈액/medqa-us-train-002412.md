---
type: qbank
schema_version: 1
id: medqa-us-train-002412
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:899f377353724c9246c7964d6c587e7134ccf3198430de56c688e6cdd5982cb4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "acute hemolytic transfusion reaction"
  - "ABO incompatibility"
  - "intravascular hemolysis"
question_type: adverse_effect
difficulty: complex
answer: A
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

62세 여성이 급성 골수성 백혈병으로 입원해 항암치료 후 범혈구감소증이 발생했다. 농축적혈구 수혈 중 39.3°C 발열, 저혈압, 빈맥, 흉통과 호흡곤란이 생겨 수혈을 중단하고 수액과 혈액배양을 시행했다. 다음 날 짙은 소변이 보이며 LDH와 총 빌리루빈은 상승하고 합토글로빈은 감소했으며 D-dimer는 정상이다. 흉부 X선도 정상이다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. ABO 부적합
B. 파종성 혈관내응고
C. 수혈 관련 순환 과부하
D. 수혈 관련 급성 폐손상

## 해설


수혈 후 급성 발열, 저혈압, 흉통, 용혈성 소변, LDH와 빌리루빈 상승은 ABO 부적합에 의한 급성 용혈성 수혈 반응을 시사한다. 이는 혈관내 용혈이 특징이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002412
