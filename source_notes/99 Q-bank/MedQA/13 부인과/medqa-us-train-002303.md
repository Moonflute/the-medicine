---
type: qbank
schema_version: 1
id: medqa-us-train-002303
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d91fcb96b9a782ce3cd5451d4c174cbc72b38dbcdb821e2f3e259ac21308833b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometriosis"
  - "endometriosis-associated infertility"
  - "laparoscopic lesion ablation"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
  - MTMg67aA7J246rO8L-yekOq2gSDshKDsspzquLDtmJUgKENvbmdlbml0YWwgVXRlcmluZSBBbm9tYWx5KS5tZA
difficulty: standard
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

23세 여성이 주기적인 하복부 및 골반 통증으로 내원했다. 지난 12개월 동안 임신이 잘 되지 않았고 최근 6개월간 성교통이 더 잦아졌다. 심장 두근거림과 갑상샘기능저하증 병력은 있으나 심폐검사는 정상이고 하복부에 경미한 압통이 있다. 임신을 원할 때 추정되는 질환에 대한 가장 확실한 치료는?

## 선택지

A. NSAID
B. 류프로라이드
C. 양측 난관난소절제술을 포함한 전자궁적출술
D. 복강경검사와 병변 소작

## 해설

주기 골반통·성교통·불임은 자궁내막증을 시사한다. 임신을 원하는 환자에서는 선택지 중 자궁을 보존하는 복강경 병변 소작·제거(D)를 고려한다. 병기·난소예비력·다른 불임 원인에 따라 수술의 이득은 달라 완치나 임신을 보장하지 않는다. GnRH 억제는 복용 중 임신을 촉진하는 방법이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문의ablation을절제로바꾼번역복원 및 불임수술효과의개별화.
- https://academic.oup.com/hropen/article/2022/2/hoac009/6537540

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002303
