---
type: qbank
schema_version: 1
id: medqa-us-train-008949
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0cc074996093f0cb22029246ca693a7f3f3a7b9d7e45d1f59c577dd37b96c2ac
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "palliative care"
  - "cancer pain"
  - "opioid titration"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shoztmZTquLAg7JWULm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

호스피스에서 전이성 난소암 환자가 정기 모르핀을 투여받는데도 통증이 하루 종일 8/10이다. 의식은 명료하고 과도한 졸림이나 호흡저하는 없다. 다음 진통 계획은?

## 선택지

A. 기본 용량과 추가 진통제 사용량을 평가해 오피오이드를 적정한다
B. 호흡억제를 우려해 용량을 늘리지 않고 일주일 관찰한다
C. 정기 투여를 끊고 통증이 심해질 때만 투여한다
D. 오피오이드를 끊고 아세트아미노펜 단독으로 바꾼다

## 해설


지속 통증이 조절되지 않으면 이전 투여량과 추가 진통제 요구량을 확인해 기본 치료를 조정한다. 반응과 진정·호흡 상태를 재평가하고, 새로 악화된 통증의 다른 원인도 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008949 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 말기암의 조절되지 않는 통증에 환자 반응을 관찰하며 opioid를 증량하는 A를 유지. 호흡억제 우려만으로 필요한 완화를 중단하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/side-effects/pain/pain-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008949
- https://pubmed.ncbi.nlm.nih.gov/36469839/
