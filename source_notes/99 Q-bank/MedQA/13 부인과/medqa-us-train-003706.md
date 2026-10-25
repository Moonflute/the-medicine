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

41주 임신의 27세 G3P2 여성이 질식분만 후 혈전이 섞인 다량의 질 출혈을 보였다. 자궁은 부드럽고 커져 있으며 물렁했고, 양손 자궁 마사지와 옥시토신 투여에도 출혈이 지속되었다. 천식 병력이 있다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 자궁절제술
B. 카보프로스트 트로메타민 투여
C. 수혈
D. 트라넥삼산 투여

## 해설

물렁하고 커진 자궁은 자궁이완성 산후출혈을 시사한다. 트라넥삼산은 섬유소용해를 억제하여 출혈을 줄이며 D가 적절하다. 자궁 마사지·자궁수축제·수액·출혈원 평가 등과 조기에 병행하고 투여를 불필요하게 늦추지 않는다. 천식에서는 카보프로스트로 기관지연축이 악화될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 트라넥삼산은 혈전 형성 억제가 아니라 섬유소용해 억제 약물이다. 정답 D 유지.
- https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage
- https://www.who.int/publications/i/item/9789241550154

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003706
