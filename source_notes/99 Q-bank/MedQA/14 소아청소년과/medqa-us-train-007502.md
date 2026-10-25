---
type: qbank
schema_version: 1
id: medqa-us-train-007502
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9f7ed7e2090458fa487bc310f4b1a0a7cc828d417443d3ddce541b8adefb9d9
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "흔들린 아기 증후군"
  - "아동학대"
  - "경막하 출혈"
  - "망막출혈"
question_type: ethics
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Z2U65Ok66awIOyVhOq4sCDspp3tm4TqtbAgKFNoYWtlbiBCYWJ5IFN5bmRyb21lKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3개월 된 남아가 최근 넘어져 호흡곤란이 발생하여 어머니와 함께 응급실에 내원했다. 오늘 매트리스에서 굴러 단단한 나무 바닥에 떨어졌다고 한다. 광범위한 신체검사에서 자주색 멍이 여러 개와 망막출혈이 보인다. 조영제 없이 시행한 머리 CT에서 경막하 출혈이 보였다. 입원 치료 후 완전히 회복되었다. 다음 중 가장 중요한 추적 계획은 무엇인가?

## 선택지

A. 아동보호서비스에 신고한다
B. 부모에게 예방적 지침을 제공한다
C. 사고는 흔하다고 안심시킨다
D. 추가 검사를 위해 유전상담에 의뢰한다

## 해설

경막하출혈·망막출혈·다수의 멍과 제시된 낙상 설명의 불일치는 학대성 두부외상을 강하게 의심하게 한다. 아동보호서비스 신고(A)와 안전 확보·전문 평가가 필요하다. 학대성 손상도 외상이며, 신고는 회복 후까지 기다리는 절차가 아니라 의심 시점에 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 학대와 외상을 대립시키는 오류와 신고를 퇴원 후까지 미뤄도 된다는 오해를 교정.
- https://publications.aap.org/pediatrics/article-lookup/doi/10.1542/peds.2015-0356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007502
