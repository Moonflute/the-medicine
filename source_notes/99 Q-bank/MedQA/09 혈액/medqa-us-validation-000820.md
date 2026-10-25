---
type: qbank
schema_version: 1
id: medqa-us-validation-000820
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8dd4be0424eb73a92e661fd8cbaaa94713d44f51c65d7fcba6add34980b132d6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 전골수구성 백혈병"
  - "t(15;17)"
  - "전트랜스레티노산"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

40세 남성이 체중감소와 멍이 쉽게 드는 증상으로 진료를 받으러 왔다. 빈혈, 혈소판감소증, 저피브리노겐혈증, 비장·간비대가 있고 세포유전학에서 t(15;17)이 확인되었다. 가장 적절한 치료는?

## 선택지

A. 사이클로포스파미드
B. 전트랜스레티노산
C. 동결침전제 수혈
D. 이마티닙

## 해설


t(15;17)은 PML::RARA 관련 APL을 지지한다. 의심 즉시 시작할 질환 표적 치료는 ATRA(B)이며 확진 후 위험도에 맞춘 ATO 또는 항백혈병 병합요법을 계획한다. 출혈·낮은 fibrinogen과 혈소판감소가 있으므로 혈액제제 보충과 면밀한 응고감시도 동시에 필요하다. Cryoprecipitate는 보조 지혈치료이지 ATRA를 대체하는 항백혈병 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000820 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: t(15;17)의 APL에서 즉시 ATRA B 유지하되 단독 완결치료로 과장하지 않고 동반 응고장애 혈액제제 보충도 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000820
