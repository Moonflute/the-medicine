---
type: qbank
schema_version: 1
id: medqa-us-train-005516
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bec97e3a9d9ad0216addb70eab93362c02650dbe7e08650b61a90806bc25bfb0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "맥쿤-올브라이트 증후군"
  - "말초성 성조숙증"
  - "섬유성 이형성증"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 여아가 조기 유방 발달과 반복 질출혈을 보인다. 어릴 때부터 가장자리가 불규칙한 카페오레 반점이 있고, 골절을 평가한 영상에서 두 뼈에 섬유성 이형성증이 확인됐다. 가장 가능성 높은 진단은?

## 선택지

A. 신경섬유종증 1형
B. 맥쿤–올브라이트증후군
C. 불완전 골형성증
D. 중추성 성조숙증 단독

## 해설

불규칙한 카페오레 반점, 섬유성 이형성증과 조기 에스트로겐 노출은 맥쿤–올브라이트증후군을 시사한다. 자율적인 난소 활동에 의한 말초성 성조숙증이 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 맥쿤-올브라이트를 ACTH 과다 선천부신과형성으로 설명한 다른 질환의 기전을 교체했다.
- https://medlineplus.gov/genetics/condition/mccune-albright-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005516
- https://doi.org/10.1186/s13023-019-1102-9
