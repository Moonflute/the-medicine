---
type: qbank
schema_version: 1
id: medqa-us-train-008512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2251495451ce39e3e20f6f50603283041e9bfcb5d2ecd604335fb01f3158ddaf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "transient ischemic attack"
  - "carotid artery stenosis"
  - "aspirin"
question_type: management
difficulty: simple
answer: A
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

71세 여성이 약 1시간 만에 회복된 일시적인 오른팔과 손의 근력 저하로 내원했다. 정원 일을 하던 중 증상이 시작되었다. 과거력으로 고혈압, 당뇨병, 불안, 이상지질혈증이 있다. 현재 인슐린, 메트포르민, 플루옥세틴을 복용한다. 진찰에서 왼쪽 경동맥 잡음이 들린다. 경동맥 초음파에서 오른쪽과 왼쪽 경동맥 협착은 각각 35%와 50%였다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 아스피린
B. 왼쪽 경동맥 내막절제술만 시행
C. 관찰
D. 와파린

## 해설


경동맥 협착 50% 미만인 경우 1차 예방으로 저용량 아스피린이 권장된다. 수술적 중재는 70% 이상 협착에만 적용되며, 항응고제는 동맥성 병변에 필요하지 않다. 따라서 다음 적절한 처치는 아스피린이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008512
