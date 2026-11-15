---
type: qbank
schema_version: 1
id: medqa-us-train-007408
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:06c29f39b77b40897e45b2551417b5537e346e4f56fdd9f4ddcfc54e90bb0910
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "용혈성 빈혈"
  - "비장절제술"
  - "비장절제 후 예방접종"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

유전구형적혈구증이 확진된 8세 아이가 한 해에 여러 번 적혈구 수혈을 받는다. 만성 빈혈로 활동이 어렵고 가족이 비장절제술을 고려 중이다. 수술과 관련해 반드시 마련할 계획은?

## 선택지

A. 수술 전에 폐렴구균 등 필요한 예방접종을 확인하고, 수술 뒤 감염 예방과 발열 시 응급 대응을 교육한다
B. 예방접종 없이 수술하고 고열이 나면 집에서 관찰한다
C. 비장절제로 적혈구의 유전적 막 이상이 없어지므로 감염 예방은 중단한다
D. 수술하면 감염 위험이 감소하므로 수술 뒤 항생제 예방은 고려하지 않는다

## 해설


수혈이 반복되는 중증 구형적혈구증에서 비장절제술은 용혈을 줄일 수 있다. 수술 뒤 침습 감염 위험은 지속되므로 필요한 예방접종, 항생제 예방 및 발열 시 신속 진료를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007408 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈 의존 HS의 비장절제·예방 D 유지;수술이 유전결함의 근본 교정이며1년 후 반드시 예방 종료라는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/full/10.1111/bjh.19361

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007408
- https://register.awmf.org/assets/guidelines/025-018l-S1_Hereditaere-Sphaerozytose_2023-09_1.pdf
- https://pubmed.ncbi.nlm.nih.gov/38600782/
