---
type: qbank
schema_version: 1
id: medqa-us-train-006348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb83396236187067c9742d4ed762172b908d21afac7ae82afaee5da9ee97e94e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "가와사키병"
  - "점막피부 림프절 증후군"
  - "관상동맥류"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 아이가 7일째 발열하고 양측 비삼출성 결막충혈, 입술 균열, 몸통 발진이 있다. 뚜렷한 감염원은 없고 CRP는 8 mg/dL, ESR은 70 mm/h다. 놓치면 안 되는 질환을 평가할 다음 검사는?

## 선택지

A. 인두배양만 하고 결과까지 추가 평가하지 않는다
B. 복부 CT로 충수염만 평가한다
C. 심초음파로 관상동맥과 심장 기능을 평가한다
D. 퇴원 후 해열제가 듣는지 확인한다

## 해설

가와사키병의 전형적 징후가 모두 없더라도 지속 발열과 높은 염증 수치가 있으면 불완전 가와사키병을 신속히 평가한다. 심초음파와 보조검사를 이용하고 초기 심초음파가 정상이어도 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 완전 가와사키 기준 충족을 과잉 단정한 설명과 aspirin 단독 관상동맥류 예방 주장을 교정.
- https://www.heart.org/en/health-topics/kawasaki-disease
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006348
- https://doi.org/10.1161/CIR.0000000000001295
