---
type: qbank
schema_version: 1
id: medqa-us-train-006464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e7b0964a3406873adf863c2767047f48be4ca75a6719c27749b1c736310197f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 소생술"
  - "낮은 아프가 점수"
  - "양압환기"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Zi47Z2h6rOk656AIOymne2bhOq1sCAoUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
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

출생 직후 무호흡이 있던 신생아에게 기도를 확보하고 흉곽이 오르는 효과적인 양압환기를 30초간 했다. 심박수는 여전히 분당 45회다. 다음 조치는?

## 선택지

A. 환기는 중단하고 산소만 투여한다
B. 5분 아프가 점수까지 변화를 기다린다
C. 환기를 유지하며 흉부압박을 시작한다
D. 맥박이 낮아도 신생아에게 압박은 시행하지 않는다

## 해설

폐를 펴는 효과적인 환기를 30초 이상 시행했는데도 심박수가 60회/분 미만이면 환기와 협응해 흉부압박을 시작한다. 환기에 반응하는 가벼운 서맥에는 압박이 우선이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 다른 비강 산소 C를 지지한 오연결 해설을 PPV로 교체.
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006464
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13277417/
