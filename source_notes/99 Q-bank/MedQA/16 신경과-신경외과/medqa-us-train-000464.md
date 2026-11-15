---
type: qbank
schema_version: 1
id: medqa-us-train-000464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e70359faf03734606cf8c8b46186388a35d6433b837e075dd397b38a5ef3a47
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Cluster headache"
  - "Chronic paroxysmal hemicrania"
  - "SUNCT syndrome"
  - "Trigeminal neuralgia"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sgrzssKjsi6Dqsr3thrUgKFRyaWdlbWluYWwgbmV1cmFsZ2lhKS5tZA
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 환자가 한쪽 눈 주위의 극심한 통증을 하루 8–10회, 한 번에 10–15분씩 겪는다. 같은 쪽 눈물과 콧물이 나며, 적절한 인도메타신 치료 뒤 발작이 완전히 사라졌다. 가장 가능성 높은 진단은?

## 선택지

A. 발작성 편측두통
B. 군발두통
C. 삼차신경통
D. 전조 없는 편두통

## 해설


발작성 편측두통은 동측 자율신경 증상을 동반하는 매우 짧고 잦은 편측 발작이 특징이며 인도메타신으로 완전히 억제된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일측 극심 두통·동측 눈물·약60분 반복 발작은 군발두통 A의 임상 양상. 네 선지·해설·영어원문 개별 대조 후 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000464
- https://ichd-3.org/3-trigeminal-autonomic-cephalalgias/3-2-paroxysmal-hemicrania/
