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
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
difficulty: standard
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

3세 남아가 최근 친구와 놀지 않고 눈맞춤을 하지 않으며 흥분하거나 화가 나면 손을 펄럭이고 물건을 일렬로 배열하는 놀이만 좋아해 내원했다. 단일단어를 사용한다(영어 원문은 이를 연령에 맞는 언어라고 기술하지만 3세 발달 수준과 맞지 않아 주의가 필요하다). 가장 가능성 높은 진단은?

## 선택지

A. 자폐 스펙트럼 장애
B. 아스퍼거 장애
C. 레트 장애
D. 달리 분류되지 않은 전반적 발달장애

## 해설

사회적 상호작용/눈맞춤 감소와 손 펄럭임·경직된 반복 놀이는 ASD(A)를 지지한다. 언어 지연은 ASD의 필수 조건이 아니며 과거 아스퍼거·PDD-NOS는 현재 DSM-5에서 ASD 범주로 통합된다. 따라서 다른 보기들은 정상 언어가 드물다는 기존 감별은 맞지 않는다. 원문의 3세 단일단어 사용은 정상 언어라는 서술과도 모순되며 이를 정상 발달로 가르치지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 3세의 단일단어 사용을 정상 언어로 표시한 원문의 모순을 명시하고 ASD와 옛 아스퍼거/PDD-NOS의 분류 관계를 바로잡았다.
- https://www.cdc.gov/autism/hcp/diagnosis/index.html
- https://www.cdc.gov/act-early/milestones/2-years.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005497
