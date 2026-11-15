---
type: qbank
schema_version: 1
id: medqa-us-train-006771
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1f28bfc4f7a772108bf24aa2b241fbf8d045b637e43bc9217533d05aa2623bb7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 호흡곤란 증후군"
  - "미숙아"
  - "지속적 양압환기"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Zi47Z2h6rOk656AIOymne2bhOq1sCAoUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 32주 미숙아가 출생 직후부터 신음호흡과 흉곽 함몰을 보인다. 자발호흡은 유지되고 심박수는 분당 150회다. 흉부 X선에서 폐 용적 감소와 미만성 망상과립 음영이 보인다. 초기 호흡 지원은?

## 선택지

A. 산소만 투여하고 호흡곤란이 악화될 때까지 지켜본다
B. 모든 미숙아에게 즉시 침습적 기계환기를 시작한다
C. 비강 지속양압(CPAP)을 시작한다
D. 출생 후 스테로이드만 투여한다

## 해설

미숙아 호흡곤란증후군에 자발호흡이 있으면 비침습적 지속양압으로 폐를 펴는 것이 초기 선택이다. 산소 요구량과 임상 상태가 악화되면 구제 계면활성제를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: RDS 초기 CPAP와 필요한 구제 surfactant를 상호배타적 치료로 단정하지 않도록 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13038240/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006771
- https://doi.org/10.1159/000551062
