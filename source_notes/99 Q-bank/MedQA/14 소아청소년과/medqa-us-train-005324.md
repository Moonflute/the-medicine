---
type: qbank
schema_version: 1
id: medqa-us-train-005324
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64cfc1b6f5ef3d6450e7230c6b93bd1460a891a1c37af7bc3f555fadffc49071
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "아동 성적 학대 의심"
  - "의무 신고"
  - "성적 학대 전문 평가"
question_type: ethics
related_disease_slugs: []
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

13세 여아가 한 달 동안 친구와 부모에게 화를 내고 학교를 자주 빠지며, 새 미술교사가 부적절하게 만졌다는 이야기를 반복해 부모가 내원했다. 어머니는 최근 이혼 때문이라고 생각하지만 성적 학대 가능성이 있다. 다음 중 평가에서 가장 적절한 다음 단계는?

## 선택지

A. 성병 선별검사
B. 철저한 비뇨생식기 진찰
C. 성적 학대 확인을 위한 전문기관 의뢰
D. 환자와 부모를 가족치료에 의뢰

## 해설

아동의 진술을 이혼에 따른 꾸며낸 이야기로 일축하지 않는다. 안전을 확인하고 의심 단계에서 해당 관할의 신고 의무를 이행하며 전문 성학대 평가기관(C)에 연계한다. 전문 평가에는 외상에 민감한 면담·진찰 및 필요시 감염검사가 포함된다. 학대의 확정을 기다리거나 필요한 응급 진료를 뒤로 미룬다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 학대 확정 후에만 신고·진료한다는 오해를 막고 안전·전문 평가의 병행을 명확화.
- https://publications.aap.org/pediatrics/article-lookup/doi/10.1542/peds.2013-1741
- https://www.cdc.gov/std/treatment-guidelines/table-8.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005324
