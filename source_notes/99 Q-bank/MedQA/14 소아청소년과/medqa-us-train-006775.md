---
type: qbank
schema_version: 1
id: medqa-us-train-006775
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f97fae04f8fce5711f9725d0ccff5a1664024057a785d6c5c120010c53071d37
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "선천성 풍진 증후군"
  - "동맥관 개존증"
  - "자반성 발진"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yEoOyynOyEsSDtko3sp4Qg7Kad7ZuE6rWwIChDb25nZW5pdGFsIFJ1YmVsbGEgU3luZHJvbWUpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-Z66el6rSAIOqwnOyhtOymnSAoUGF0ZW50IER1Y3R1cyBBcnRlcmlvc3VzKS5tZA
difficulty: complex
answer: C
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

생후 1일 된 신생아가 발진으로 평가받고 있다. 임신 39주에 산전 진찰을 받지 않은 과테말라 출신 이민자(Gravida 3, Para 2)에게서 태어났다. 이전 임신은 순조로웠고 B군 연쇄상구균 선별검사 병력은 없으며 분만 전에 페니실린을 주사받았다. 아프가 점수는 1분 7점, 5분 9점이다. 체온은 37°C(98.6°F), 맥박은 분당 145회, 호흡수는 분당 33회이다. 심장 청진에서 기계음 같은 심잡음이 들리고 사진과 같은 미만성 자반성 발진이 있다. 다음 중 감염의 원인으로 가장 가능성 높은 것은?

## 선택지

A. 매독
B. 거대세포바이러스
C. 풍진
D. 조기 발현 B군 연쇄상구균 패혈증

## 해설

출생 직후 자반성 발진과 PDA를 시사하는 기계음 잡음의 조합은 선천성 풍진(C)을 지지한다. 실제 사진이 없어 발진의 세부 모양은 판단하지 않는다. 다른 선천감염도 발진을 일으킬 수 있고 매독이 반드시 수주 뒤에만 나타나는 것은 아니다. 임상적으로는 원인 감염 검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 풍진 판단을 임상 PDA·자반 단서에 한정하고 매독·GBS의 발진 시기를 배제한 오류를 삭제.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006775
