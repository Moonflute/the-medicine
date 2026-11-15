---
type: qbank
schema_version: 1
id: medqa-us-train-009592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:480e2ccf472e48a813a368f5630aa6967168d9a63b06d50156c22018decfe78e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hereditary hemochromatosis"
  - "유전성 혈색소침착증"
  - "iron overload cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

48세 남성이 유전성 혈색소증으로 진단됐다. 트랜스페린 포화도 82%, 페리틴 970 ng/mL이며 MRI로 간 철 침착을 확인했다. 빈혈이 없고 혈역학적으로 안정적이다. 철 과다로 인한 장기 손상을 막기 위한 표준 치료는?

## 선택지

A. 경구 데페라시록
B. 정기적인 페리틴 검사만 시행
C. 수혈 후 철 제거 치료
D. 정기적 치료적 사혈

## 해설


사혈을 견딜 수 있는 유전성 혈색소증에서는 치료적 사혈이 우선이다. 혈색소와 페리틴을 확인하며 빈도를 조정한다. 사혈이 어려운 환자에서는 원인과 상태에 따라 다른 치료를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009592 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철과다 심근증 예방 사혈 D 유지; 금연/다른 심부전 관리가 무효라는 일반화 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009592
- https://doi.org/10.1016/j.jhep.2022.03.033
