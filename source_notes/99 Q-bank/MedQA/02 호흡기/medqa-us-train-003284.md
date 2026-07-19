---
type: qbank
schema_version: 1
id: medqa-us-train-003284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:60784a3250398b46a6e6e967dbf86f671e6fcbc6fef233afe7fa69a48269bff6
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "emphysema"
  - "chronic bronchitis"
  - "decreased DLCO"
  - "COPD differentiation"
question_type: diagnosis
difficulty: complex
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

55세 남성이 5년 동안 지속된 기침과 1년 동안 운동 시 호흡곤란으로 내원했다. 10년 동안 규칙적으로 흡연했고 여러 의사를 방문해 검사를 받았지만 영구적인 호전은 없었다. 진찰에서 통형 흉곽, 양측 호기말 천명과 산재한 수포음이 있다. 혈액검사, 흉부방사선, 동맥혈가스, 폐기능검사로 만성 폐쇄성 폐질환을 확인했다. 의사는 폐기종과 만성기관지염을 한 가지 단서로 구분했다. 다음 중 감별에 가장 도움이 된 단서는?

## 선택지

A. 장기간 담배 연기 노출력
B. 혈액검사에서 헤마토크리트 증가
C. 동맥혈가스에서 만성 호흡성 산증
D. 일산화탄소에 대한 폐 확산능(DLCO) 감소

## 해설


폐기종은 폐포 파괴로 폐확산능(DLCO)이 감소하는 것이 특징이며, 만성 기관지염은 주로 가래·기침이 두드러진다. 따라서 두 질환을 구분하는 가장 유용한 검사는 DLCO 감소이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003284
