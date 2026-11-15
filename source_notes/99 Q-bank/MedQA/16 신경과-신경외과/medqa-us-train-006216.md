---
type: qbank
schema_version: 1
id: medqa-us-train-006216
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba9bbfe4b0543217ea9179870cdfdea82713a334bcc9f4162872df31d57ebba2
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "송과체 종양"
  - "Parinaud 증후군"
  - "성조숙증"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
difficulty: complex
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

8세 아이가 수개월 동안 두통과 흐린 시야를 겪는다. 위를 보지 못하고, 동공은 빛보다 가까운 표적을 볼 때 잘 수축한다. 원인을 찾는 뇌 MRI에서 특히 확인할 부위는?

## 선택지

A. 뇌하수체 앞엽
B. 송과체 주변과 등쪽 중뇌
C. 왼쪽 하전두회
D. 소뇌 편도

## 해설

상방주시마비와 빛–근접 반응 해리는 등쪽 중뇌증후군의 단서다. 송과체 부위 종괴가 중뇌와 뇌수도관을 눌러 눈운동 이상과 수두증을 일으킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 송과체 부위 종양 연관 성조숙증을 성장호르몬 과다로 설명한 오류를 hCG 분비 배세포종 기전으로 교정.
- 공식/학회 근거: https://www.cancer.gov/types/brain/patient/child-cns-germ-cell-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006216
- https://www.cancer.gov/types/brain/hp/child-cns-germ-cell-treatment-pdq
