---
type: qbank
schema_version: 1
id: medqa-us-train-003451
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21ffd72c824e86b577d96de1f9bc21639c6b42c20f11941f5a140030ed814c59
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "autism spectrum disorder"
  - "social communication deficit"
  - "restricted repetitive behavior"
  - "male predominance"
question_type: association
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
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

4세 여아가 또래 여아들보다 말을 훨씬 적게 하고 사회적 상호작용이 부족해 소아과에 왔다. 2세 때 사용할 수 있었던 단어는 5~6개뿐이었고, 관심 있는 것을 가리키기 위해 검지를 사용한 적이 없었다. 생일파티를 즐기지 않고 다른 아이들과 놀지 않으며, 인형의 목을 반복적으로 굽혔다 펴는 행동을 한다. 큰 소리에 민감하고 몸을 흔든다. 이 환자가 앓는 질환의 역학적 특징은?

## 선택지

A. 여아보다 남아에서 4배 흔하다
B. 어머니가 25세 이전에 출산하면 발생률이 증가한다
C. 어머니가 임신 중 흡연하면 위험이 증가한다
D. 산전 모체 혈청 비타민 D가 낮으면 위험이 증가한다

## 해설

사회적 의사소통 결함과 반복 행동은 자폐스펙트럼장애를 시사한다. 남아에서 더 자주 확인된다는 A가 원문의 역학적 출제 의도다. 다만 '4배'는 고정된 생물학적 상수가 아니다. CDC가 2025년에 발표한 2022년 ADDM 8세 감시자료의 남녀 유병비는 약 3.4였으며 연령·집단·발견 차이에 따라 달라진다. 다른 보기의 산전 요인을 단일한 확정 원인으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 남녀 비를 고정된 보편적 4배로 가르치지 않도록 원문의 근사적 역학 문구와 현재 CDC 감시 수치를 구분했다.
- https://www.cdc.gov/mmwr/volumes/74/ss/ss7402a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003451
