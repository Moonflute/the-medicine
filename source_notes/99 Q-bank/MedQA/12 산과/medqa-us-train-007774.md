---
type: qbank
schema_version: 1
id: medqa-us-train-007774
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ae294d86551fcd58b3810783f7677f8100f541aa2de5926ff08b53d5426c86f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "variable fetal heart rate decelerations"
  - "reassuring fetal status"
  - "intrapartum monitoring"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 38주인 30세 여성(임신 2회, 출산 1회)이 점점 빈번해지는 규칙적이고 통증성인 자궁수축으로 병원에 왔다. 임신성 당뇨병이 있어 인슐린으로 치료 중이다. 골반검사에서 자궁경부는 50% 소실되고 4 cm 개대되었으며 태아 선진부는 -1 station이다. 초음파는 정상이다. 복부에 자궁수축 감시기와 태아 심박동 도플러 모니터를 부착했다. 태아 심박동의 기저선은 145회/분, 변이도는 15회/분 이상이다. 20분 기록 동안 자궁수축 7회, 가속 4회, 최저점이 30초 이내에 나타나는 감속 3회가 있었다. 감속은 자궁수축과의 상대적 시점이 서로 달랐다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 일상적 모니터링
B. 진동음향 자극
C. 응급 제왕절개 분만
D. 자궁수축억제제 투여

## 해설

최저점까지 30초 미만이고 수축과 상대 시점이 다른 감속은 변이감속이다. 기저선 145, 가속과 보존된 변이도, 비반복적 감속은 즉시 제왕절개보다 계속 평가·감시(A)가 적절하다는 의도이다. 다만 감속 깊이·기간 및 변이도의 상한이 없어 모든 패턴을 정상으로 단정하지 않고, 반복·지연 회복 등 우려 소견이면 체위 변경과 원인 교정 등을 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 급속·가변 시점 감속은 비변동성이 아니라 변이감속임.
- https://obgyn.onlinelibrary.wiley.com/doi/full/10.1016/j.ijgo.2015.06.020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007774
