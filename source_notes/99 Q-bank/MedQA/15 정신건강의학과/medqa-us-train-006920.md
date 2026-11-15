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
answer: D
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

35세 환자가 8일째 거의 자지 않아도 피곤하지 않다고 한다. 말이 빨라지고 과소비가 늘었으며, 자신이 회사를 지배할 능력이 있다는 확고한 믿음 때문에 입원했다. 물질 사용이나 의학적 유발 요인은 확인되지 않았다. 급성 치료로 적절한 조합은?

## 선택지

A. 설트랄린 단독
B. 졸피뎀 단독
C. 라모트리진과 플루옥세틴
D. 리튬과 올란자핀

## 해설


입원이 필요할 정도의 조증에 과대망상이 동반된 상황이다. 국내 조증 치료 알고리듬에서는 정신병적 조증에서 기분조절제와 비정형 항정신병약의 병합을 우선한다. 약물 선택은 금기와 부작용을 함께 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006920
- https://www.jknpa.org/DOIx.php?id=10.4306%2Fjknpa.2026.65.2.108

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영한 본문·선지·답·해설 재대조. 조증을 시사하는 과대사고·수면 감소·기능장애를 설명하고 항우울제의 조증 악화/전환 위험을 명시. CANMAT/ISBD 2023 성인 급성 조증에서 divalproex 1차·haloperidol 2차라는 우선순위에 한해 발프로산 원정답 유지. 할로페리돌도 조증·급성 초조/정신병적 증상 조절에 유효하고 NICE는 초기 치료 선택지로 권고하므로 보편적 오답이 아님을 학습자용 해설에 명시. 사례·선지·원정답은 변경하지 않음.
- 의학 검수 수준: evidence-reviewed (인용 지침의 성인 급성 조증 치료 우선순위와 항우울제 주의에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- CANMAT/ISBD 2023 update, Box 1 및 급성 조증 치료 단계: https://psychiatryonline.org/doi/10.1176/appi.focus.20230009
- NICE CG185, 권고 1.5.2–1.5.6: https://www.nice.org.uk/guidance/cg185/chapter/recommendations
- CANMAT/ISBD 2018, 급성 초조 치료 및 항우울제 관련 조증 전환 주의: https://www.canmat.org/wp-content/uploads/2019/07/Yatham-LN-2018-CANMAT-ISBD-guidelines-for-bipolar-disorder-Bipol-Disord.pdf
