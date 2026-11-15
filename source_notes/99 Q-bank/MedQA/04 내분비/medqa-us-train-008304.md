---
type: qbank
schema_version: 1
id: medqa-us-train-008304
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43a8ac8cc9fdcc00fc855f42a1a82e8de9a03eb5b9b02393b92425a8a5146c4f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Klinefelter syndrome"
  - "47,XXY"
  - "small firm testes"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YG065287J247Y6g7YSwIOymne2bhOq1sCAoS2xpbmVmZWx0ZXIgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

19세 남성이 사춘기 발달이 더디고 성욕이 낮아 내원했다. 키가 크고 양쪽 고환은 각각 3mL로 작고 단단하다. 오전 테스토스테론이 반복해서 낮고 LH와 FSH는 높다. 클라인펠터 증후군을 확인할 검사는?

## 선택지

A. 뇌하수체 MRI
B. 혈청 프로락틴 재검
C. GnRH 자극검사
D. 말초혈액 핵형검사

## 해설


작고 단단한 고환과 고성선자극호르몬성 성선기능저하는 클라인펠터 증후군을 시사한다. 말초혈액 핵형검사로 대표 핵형인 47,XXY 등을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008304 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장신·여성형유방·작은 음낭과 학습 어려움에서 Klinefelter 의심 핵형검사 D 유지. 핵형이 이미 측정되었다는 의미는 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008304
- https://doi.org/10.1111/andr.12909
