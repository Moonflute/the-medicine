---
type: qbank
schema_version: 1
id: medqa-us-train-006920
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2df0e47195cf2f7bd0cc9a0e9a183fe1901ac60f2c73f282b41805ff89f3d5ab
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 조증"
  - "양극성 장애"
  - "발프로산 치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 아내와 함께 응급실에 내원했다. 직장 동료가 회사 이사회 회의에 난입해 회사를 위한 훌륭한 아이디어를 떠들며 방해하고 있어 데려오라고 아내에게 전화했다. 사람들이 설득하려 하자 적대적으로 변해 미래를 위해 무엇이 최선인지 아는 자신이 CEO가 되어야 한다고 주장했다. 아내는 며칠 동안 밤새 깨어 있었지만 큰 프로젝트를 맡아 그런 줄 알았다고 한다. 특별한 의학적·정신과적 병력은 없다. 다음 중 이 상태에 가장 도움이 될 치료는?

## 선택지

A. 발프로산
B. 항우울제
C. 할로페리돌
D. 클로자핀

## 해설


과대사고(자신이 CEO가 되어야 한다는 주장), 며칠간의 수면 감소, 적대적이고 통제되지 않는 행동 및 뚜렷한 직장 기능장애는 단순한 업무 스트레스보다 급성 조증을 시사한다. 항우울제 단독 치료는 조증 치료가 아니며 조증을 유발하거나 악화시킬 수 있어 이 상황에 적절하지 않다.

발프로산은 항조증 효과가 있는 기분조절제이다. CANMAT/ISBD 2023 성인 급성 조증 권고에서는 divalproex(발프로산 계열)를 1차 단독 치료, 할로페리돌을 2차 치료로 분류하므로, 이 지침의 우선순위로 해석하면 제시된 선택지 중 발프로산을 우선 선택할 수 있다. 이 순위는 효과뿐 아니라 안전성·내약성과 다른 질병 단계의 치료 효과도 고려한 것이며, 발프로산만이 유일한 1차 약물이라는 뜻은 아니다.

할로페리돌 역시 조증에 효과가 있고 급성 초조나 동반 정신병적 증상을 조절하는 데 사용할 수 있으므로, 정신병적 증상이 명시되지 않았다는 이유만으로 부적절한 약물이 되지는 않는다. 실제로 NICE는 치료받지 않던 조증 환자의 초기 선택지에 할로페리돌을 포함한다. 따라서 발프로산을 고르는 근거는 지침에 따른 치료 우선순위이지 할로페리돌이 보편적으로 틀렸다는 주장이 아니다. 클로자핀은 이와 같은 첫 조증 의심 상황의 통상적 초기 약물이 아니라 치료저항성 상황에서 고려하는 후순위 약물이다. 실제 약물 선택에는 증상의 중증도, 신속한 진정 필요성, 부작용과 국가별 안전성 규제를 함께 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006920

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영한 본문·선지·답·해설 재대조. 조증을 시사하는 과대사고·수면 감소·기능장애를 설명하고 항우울제의 조증 악화/전환 위험을 명시. CANMAT/ISBD 2023 성인 급성 조증에서 divalproex 1차·haloperidol 2차라는 우선순위에 한해 발프로산 원정답 유지. 할로페리돌도 조증·급성 초조/정신병적 증상 조절에 유효하고 NICE는 초기 치료 선택지로 권고하므로 보편적 오답이 아님을 학습자용 해설에 명시. 사례·선지·원정답은 변경하지 않음.
- 의학 검수 수준: evidence-reviewed (인용 지침의 성인 급성 조증 치료 우선순위와 항우울제 주의에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- CANMAT/ISBD 2023 update, Box 1 및 급성 조증 치료 단계: https://psychiatryonline.org/doi/10.1176/appi.focus.20230009
- NICE CG185, 권고 1.5.2–1.5.6: https://www.nice.org.uk/guidance/cg185/chapter/recommendations
- CANMAT/ISBD 2018, 급성 초조 치료 및 항우울제 관련 조증 전환 주의: https://www.canmat.org/wp-content/uploads/2019/07/Yatham-LN-2018-CANMAT-ISBD-guidelines-for-bipolar-disorder-Bipol-Disord.pdf
