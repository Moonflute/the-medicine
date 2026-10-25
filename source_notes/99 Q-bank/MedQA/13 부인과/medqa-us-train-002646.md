---
type: qbank
schema_version: 1
id: medqa-us-train-002646
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f08141a27c7bf873f03ffb89cf410b6d8cb9aa3a65f8578b3efd9c8fe9ee5818
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "quad screen"
  - "Down syndrome"
  - "maternal age risk"
  - "aneuploidy"
question_type: risk_factor
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv64uk7Jq0IOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 G2P0 여성이 임신 16주 산전 선별검사 결과를 상담하러 내원했다. 쿼드검사에서 AFP와 비포합 에스트리올은 낮고 β-hCG와 인히빈 A는 높았다. 다음 중 제시된 결과에 대한 설명으로 옳은 것은?

## 선택지

A. 100% 치명적인 태아 질환과 관련된다
B. 산모의 나이는 이 검사 결과가 시사하는 질환의 중요한 위험 요인이다
C. 35세 이상 여성에서는 정상일 수 있다
D. 성염색체 관련 비배수성 위험 증가를 의미한다

## 해설

AFP와 비포합 에스트리올(uE3)이 낮고 β-hCG와 인히빈 A가 높은 쿼드검사 패턴은 21번 삼염색체증 위험 증가와 관련된다. 산모 연령은 이 위험에 기여하므로 B가 적절하다. 이는 선별검사이지 확진이 아니며 연령 35세에서 위험이 갑자기 이분법적으로 바뀌거나 그 이상에서는 이 패턴이 정상이라는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 쿼드검사의 비포합 에스트리올을 에스트라디올로 잘못 쓴 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002646
