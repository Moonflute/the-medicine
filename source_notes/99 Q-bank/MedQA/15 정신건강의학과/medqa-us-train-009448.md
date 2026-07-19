---
type: qbank
schema_version: 1
id: medqa-us-train-009448
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ea709155d2984845f7a2552c5332166846723b47b9a4038cef702bf8dd50e48
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "alcohol-induced sleep disturbance"
  - "알코올 유발 수면장애"
  - "REM suppression"
question_type: mechanism
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

52세 남자가 정기검진을 위해 내원했다. 늘 잠들기 어렵고 최근 몇 달간 잠들거나 잠을 유지하기가 더 어려워졌다. 낮에 피곤하고 졸리지만 낮잠 잘 시간은 없다. 아침에 커피 한 잔을 마시고 매일 밤 술 3잔을 마신다. 본태성 고혈압으로 리시노프릴을 복용한다. 체온 36.9°C, 혈압 132/83 mmHg, 심박수 82회/분이고 신체검사는 정상이다. 밤에 술을 마시는 것이 수면 주기에 미치는 영향은 무엇인가?

## 선택지

A. N1 단계 증가
B. REM(빠른 안구운동) 반동
C. REM 억제
D. 총 REM 수면 증가

## 해설


알코올은 REM 수면을 억제하고, 특히 수면 후반부의 REM 비율을 감소시킨다. 따라서 밤에 술을 마시는 것이 REM 억제를 초래한다. 다른 선택지는 알코올의 실제 효과와 맞지 않는다. 따라서 정답은 REM 억제이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009448
