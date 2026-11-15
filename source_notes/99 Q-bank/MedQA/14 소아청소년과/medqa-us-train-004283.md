---
type: qbank
schema_version: 1
id: medqa-us-train-004283
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15c7624b443cc905ffc6510ce36d73650188ebd0dd5011edb855fb3f1fcdc0f5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "레트 증후군"
  - "손 비비기"
  - "발달 퇴행"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
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

18개월 여아가 이전에 쓰던 단어와 손으로 먹던 능력을 잃었다. 반복적으로 손을 비비며 머리둘레 성장도 둔해졌다. 움직임과 발달 퇴행을 설명하는 대표 진단은?

## 선택지

A. 자폐스펙트럼장애만으로 판단
B. 레트증후군
C. 다운증후군
D. 듀센 근이영양증

## 해설

이전에 배운 목적성 손동작과 언어를 잃고 손 비비기 같은 상동행동이 생기면 레트증후군을 의심한다. 임상 평가와 MECP2 유전자 검사가 진단에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문에 없는 신장 성장 감속을 삭제하고 레트 증후군의 목적성 손 기능 소실을 유지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004283
- https://pubmed.ncbi.nlm.nih.gov/32984552/
