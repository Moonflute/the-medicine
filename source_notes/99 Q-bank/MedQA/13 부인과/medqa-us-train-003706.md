---
type: qbank
schema_version: 1
id: medqa-us-train-003706
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6595efd7af284f4cba82fb9e54f1a1155c5bdacebcad5bf5357f8f107c41cdbc
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "postpartum hemorrhage"
  - "uterine atony"
  - "tranexamic acid"
  - "asthma contraindication to carboprost"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

질식분만 직후 자궁이완성 출혈이 발생했다. 마사지·옥시토신 등 가능한 수축제·트라넥삼산·수액에도 출혈이 계속된다. 잔류 태반과 열상은 배제했고 수혈·응급 수술이 가능한 기관이다. 수술을 준비하며 시도할 자궁 보존 지혈 처치는?

## 선택지

A. 질경검사를 반복하며 지혈 없이 관찰
B. 자궁내막 생검
C. 태반이 완전히 나왔어도 맹목적 반복 소파술
D. 자궁 내 풍선 탐포네이드

## 해설

1차 치료에 반응하지 않는 자궁이완성 산후출혈에서는 혈액제제와 응급 수술을 바로 사용할 수 있는 환경에서 자궁 내 풍선 압박을 고려한다. 출혈이 조절되지 않으면 수술을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 트라넥삼산은 혈전 형성 억제가 아니라 섬유소용해 억제 약물이다. 정답 D 유지.
- https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage
- https://www.who.int/publications/i/item/9789241550154

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003706
- https://www.who.int/publications/i/item/9789240115637/
