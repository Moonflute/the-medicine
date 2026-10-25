---
type: qbank
schema_version: 1
id: medqa-us-train-008659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:343596508882a198328c0203901d35db223d93d1017325f86c5f956e2b502819
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "postpartum blues"
  - "postpartum depression differential"
  - "postpartum anxiety"
  - "Postpartum blues"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 출산 일주일 후 정신과를 방문했다. 진료를 기다리며 아기를 안고 울고 있다. 출산 하루 정도 후부터 감정을 억누르기 어려웠고 자주 슬프며 눈물을 참기 힘들다고 한다. 부끄러워하며 사람들 앞에서 이유 없이 울기도 한다. 좋은 엄마가 되지 못하고 실수할까 불안하다. 출산 후 잠을 많이 못 잤고 아기가 다칠까 봐 자주 걱정하며 사고를 피하려고 과도하게 안전 조치를 취한다. 활동에 대한 흥미 상실은 없고 자살 사고도 부인한다. 다음 중 가장 적절한 관리 방법은 무엇인가?

## 선택지

A. 매일 소량의 플루옥세틴을 시작한다
B. 즉시 입원시킨다
C. 2주 후 추적 방문한다
D. 전기경련요법을 예약한다

## 해설

출산 직후 시작된 눈물·감정 기복과 불안이 산후 1주에 있고 흥미 상실·자살사고·정신병적 증상이 제시되지 않아 산후 블루스가 가장 적합하다. 지지, 휴식·돌봄 지원과 안전 평가를 제공하고 선택지 C처럼 추적관찰한다. 보통 출산 후 1~2주 이내에 호전되어야 하므로 증상이 그 이상 지속되거나 악화되면 예정일을 기다리지 않고 우울증·불안장애 등을 재평가한다. 자해·아기 위해 사고, 망상·환청 또는 현저한 기능 저하는 즉시 평가가 필요하다. 단순히 ‘치료 없이 2주 뒤 방문’만 안내해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산후블루스의 지지·안전평가와 조기재내원 조건을 명시. C 유지하되 무조건2주동안 기다리라는 위험한 해석 방지.
- https://www.acog.org/womens-health/faqs/postpartum-depression
- https://www.acog.org/programs/perinatal-mental-health/summary-of-perinatal-mental-health-conditions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008659
