---
type: qbank
schema_version: 1
id: medqa-us-train-005497
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d2140662816573e1a3686d2e53671854f61b399939de4f980e5fac6def9519b1
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "자폐 스펙트럼 장애"
  - "사회적 의사소통 결핍"
  - "제한적 반복행동"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
difficulty: standard
answer: D
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

3세 아이는 관심 있는 물건을 다른 사람에게 보여 주거나 가리키는 일이 거의 없다. 또래와 주고받는 놀이보다 같은 물건을 줄 세우는 놀이를 반복하고, 순서가 달라지면 몹시 힘들어한다. 청력은 정상이다. 다음 조치는?

## 선택지

A. 만 5세까지 기다렸다가 언어 발달을 다시 확인한다
B. 발달 평가 없이 발음 교정 치료만 시작한다
C. 뇌파검사로 자폐 여부를 먼저 확인한다
D. 자폐를 포함해 종합 발달 평가를 의뢰하고 필요한 조기 지원을 연결한다

## 해설

사회적 상호작용의 어려움과 제한적·반복적 행동이 함께 있으면 자폐스펙트럼장애 평가가 필요하다. 분명한 발달 어려움이 있으면 진단 확정을 기다리지 않고 지원을 연결한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 3세의 단일단어 사용을 정상 언어로 표시한 원문의 모순을 명시하고 ASD와 옛 아스퍼거/PDD-NOS의 분류 관계를 바로잡았다.
- https://www.cdc.gov/autism/hcp/diagnosis/index.html
- https://www.cdc.gov/act-early/milestones/2-years.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005497
- https://doi.org/10.1542/peds.2019-3447
- https://www.nice.org.uk/guidance/cg128
