---
type: qbank
schema_version: 1
id: medqa-us-train-006731
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:77f046d62f0d0271683cb59e3497bf289685f9453e5ca0f5eb5f62d684a0dcf7
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "인슐린 저항성"
  - "경구 포도당부하검사"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: standard
answer: C
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

51세 남성이 갈증 증가, 빈뇨 및 피로감으로 내원했다. 증상은 지난 3년 동안 서서히 증가했다. 과거력과 현재 복용 약물은 없고 내분비 또는 심혈관질환 가족력도 없다. 혈압은 140/90 mm Hg, 심박수는 분당 71회, 발열은 없다. 체질량지수는 35.4kg/m²이다. 목 뒤에 지방조직이 증가하고 겨드랑이와 서혜부 주름에 과색소침착이 있다. 다음 중 가장 가능성 높은 상태를 진단하는 검사 결과는?

## 선택지

A. HbA1c 5.9%
B. 공복 혈장 포도당 123 mg/dL
C. 경구 포도당 부하 2시간 후 혈장 포도당 209 mg/dL
D. 혈청 인슐린 10 μU/mL

## 해설


경구 포도당 부하 검사에서 2시간 후 혈당이 209 mg/dL(>200)인 경우 제2형 당뇨병 진단 기준에 해당한다. 공복 혈당만으로는 진단이 되지 않으며 HbA1c도 경계값이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006731
