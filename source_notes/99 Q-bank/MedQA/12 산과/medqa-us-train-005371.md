---
type: qbank
schema_version: 1
id: medqa-us-train-005371
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4c76fdd2e7854b47930d7398b1287484ee14489e641e58e0e3b57a0e8109b5f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 36주 산전관리"
  - "B군 연쇄상구균 선별검사"
  - "신생아 감염 예방"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 36주인 27세 임신 2회·출산 1회의 여자가 산전 진료를 받으러 왔다. 태아 움직임은 충분하고 이전 초음파는 정상이다. 혈액형은 A 음성이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 전혈구검사
B. 경복부 도플러 초음파
C. 혈청 PAPP-A와 hCG 측정
D. B군 연쇄상구균 배양을 위한 질·직장 면봉검사

## 해설

미국 ACOG에서는 일반적으로 임신 36주 0일–37주 6일에 질·직장 GBS 배양을 시행해 분만 중 예방 항생제 필요성을 정한다. 따라서 36주인 이 환자에서는 D가 적절하다. 과거 35–37주 범위를 그대로 현행 권고라고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: GBS 미국 현행 선별 창 36+0–37+6주로 갱신.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005371
