---
type: qbank
schema_version: 1
id: medqa-us-train-006103
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d44eaddffcdd5af23e4f2ca036561ffde15a99cdc18906d1a1434be297b5fba
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "소세포 폐암"
  - "이소성 ACTH 분비"
  - "쿠싱 증후군"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

흡연력이 있는 67세 남성이 기침과 쉽게 드는 멍으로 내원했다. 새로 당뇨병이 생겼고 얼굴이 둥글어지며 쇄골 위 지방이 늘었다. 폐종괴와 함께 이소성 ACTH 분비가 의심된다. 가장 관련이 높은 종양은?

## 선택지

A. 소세포폐암
B. 폐 편평세포암
C. 폐 대세포암
D. 폐선암

## 해설


고혈압, 새 당뇨, 쉽게 드는 멍과 지방 재분포는 코르티솔 과다의 단서다. 흉부 종양에서 이소성 ACTH 분비와 가장 잘 연관되는 보기의 조직형은 소세포폐암이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006103 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이소성 ACTH/SCLC A 유지하되 비소세포암도 다른 종양연관 호르몬을 낼 수 있음을 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006103
