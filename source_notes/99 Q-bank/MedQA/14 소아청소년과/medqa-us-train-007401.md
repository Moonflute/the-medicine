---
type: qbank
schema_version: 1
id: medqa-us-train-007401
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:72eb58c6583f07eaa3282b78eb8ac3447b123245f2ab8956864edc0c6be89352
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "가와사키병"
  - "관상동맥류"
  - "점막 변화"
  - "손발바닥 발진"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

가와사키병으로 정맥 면역글로불린을 투여받은 4세 아이가 투여 종료 40시간 뒤에도 39℃ 열이 난다. 다른 발열 원인을 평가했으나 뚜렷하지 않고 CRP도 높다. 다음 조치는?

## 선택지

A. 해열제만 투여하고 일주일 후 퇴원 진료
B. 아스피린을 끊고 항생제만 사용
C. ESR이 더 오를 때까지 치료하지 않음
D. 면역글로불린 불응으로 보고 전문팀에서 추가 항염증 치료를 검토

## 해설


IVIG 종료 36시간 이후에도 설명되지 않는 발열이 지속·재발하면 불응성 가와사키병을 의심한다. 관상동맥 합병증 위험을 재평가하고 반복 IVIG 등 추가 치료를 전문팀이 고른다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007401
- https://doi.org/10.1161/CIR.0000000000001295
- https://cps.ca/en/documents/position/kawasaki-disease
