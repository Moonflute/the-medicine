---
type: qbank
schema_version: 1
id: medqa-us-train-005818
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f51e18672bd668aa6d3d5af566d91140660f6ba755ddec427c454467a2aa02e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "살모넬라 장염"
  - "혈성 설사"
  - "달걀 매개 식중독"
related_disease_slugs:
  - MDgg6rCQ7Je8L-u5hOyepe2LsO2RuOyKpCDsgrTrqqjrhKzrnbwgKE5vbi10eXBob2lkYWwgU2FsbW9uZWxsYSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

기저질환이 없는 30세 환자가 설사로 진료받았다. 대변배양에서 비장티푸스성 살모넬라가 확인됐다. 열과 설사가 호전 중이고, 혈압은 안정적이며 물을 마실 수 있다. 가장 적절한 처치는?

## 선택지

A. 기저질환이 없어도 균혈증 예방을 위해 아지트로마이신을 투여한다
B. 증상 호전과 관계없이 세프트리악손을 투여한다
C. 대변배양이 음성이 될 때까지 시프로플록사신을 투여한다
D. 수분과 전해질을 보충하며 경과를 본다

## 해설


기저 위험이 없는 환자의 비복잡성 비장티푸스성 살모넬라 장염에는 보통 수분 보충 등 지지치료로 충분하다. 침습 감염, 중증이거나 침습 감염 위험이 높다면 항생제를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005818 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고열·염증성 설사의 음식 노출 선택지 중 달걀/Salmonella D 연관을 원문 대조 유지. 배양확진과 가능성 추론을 구별.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005818
- https://doi.org/10.3947/ic.2019.51.2.217
- https://www.cdc.gov/salmonella/hcp/clinical-overview/
