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

임신 38주인 30세 여성(임신 2회, 출산 1회)이 점점 빈번해지는 규칙적이고 통증성인 자궁수축으로 병원에 왔다. 임신성 당뇨병이 있어 인슐린으로 치료 중이다. 골반검사에서 자궁경부는 50% 소실되고 4 cm 개대되었으며 태아 선진부는 -1 station이다. 초음파는 정상이다. 복부에 자궁수축 감시기와 태아 심박동 도플러 모니터를 부착했다. 태아 심박동의 기저선은 145회/분, 변이도는 15회/분 이상이다. 20분 기록 동안 자궁수축 7회, 가속 4회, 최저점이 30초 이내에 나타나는 감속 3회가 있었다. 감속은 자궁수축과의 상대적 시점이 서로 달랐다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 일상적 모니터링
B. 진동음향 자극
C. 응급 제왕절개 분만
D. 자궁수축억제제 투여

## 해설


태아 심박동 변이도가 15회/분 이상이지만 가속과 변동이 정상 범위이며 감속이 자궁수축과 시점이 맞지 않아 비변동성 감속으로 간주된다. 이는 태아가 현재는 양호한 상태임을 의미하므로 특별한 중재 없이 일상적인 모니터링을 지속하면 된다. 따라서 일상적 모니터링이 가장 적절한 처치이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007774
