---
type: qbank
schema_version: 1
id: medqa-us-train-009318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4cf0aef3eabc5780c082eb58fc6dec140f78fd288d9491b90301bb9f73504210
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "primary ovarian insufficiency"
  - "일차성 난소기능부전"
  - "hypergonadotropic hypogonadism"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yhsOq4sOuCnOyGjOu2gOyghCAoUHJlbWF0dXJlIE92YXJpYW4gRmFpbHVyZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YG065287J247Y6g7YSwIOymne2bhOq1sCAoS2xpbmVmZWx0ZXIgU3luZHJvbWUpLm1k
difficulty: standard
answer: C
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

32세 여성이 조기 난소기능부전으로 확진됐다. 자궁은 있으며 안면홍조는 없고 호르몬 치료 금기도 없다. 장기 건강을 위한 기본 계획은?

## 선택지

A. 안면홍조가 없으므로 호르몬을 사용하지 않는다
B. 에스트로겐 단독으로 내막도 충분히 보호한다
C. 에스트로겐과 프로게스토겐을 사용하고 일반적인 폐경 연령 무렵 재평가한다
D. GnRH 작용제를 장기간 투여한다

## 해설

조기 난소기능부전은 증상이 없더라도 금기가 없으면 일반적인 폐경 연령까지 호르몬 보충을 권한다. 자궁이 있으면 프로게스토겐을 병용하고, 보충요법은 피임을 보장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: FSH/에스트라디올 비율을 진단 기준으로 쓰고 POI를 완전한 영구 난소 고갈로 단정한 설명을 현행 다학회 지침에 맞춰 교정했다.
- https://www.asrm.org/practice-guidance/practice-committee-documents/evidence-based-guideline-premature-ovarian-insufficiency--2024/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009318
- https://academic.oup.com/hropen/article/2024/4/hoae065/7918369
