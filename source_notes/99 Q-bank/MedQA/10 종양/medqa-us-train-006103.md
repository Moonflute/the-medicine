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

67세 남성이 2개월 동안 지속된 마른기침과 호흡곤란으로 내원했다. 최근 뚜렷한 외상 없이 피부에 멍이 잘 든다. 만성폐쇄성폐질환과 최근 진단된 제2형 당뇨병 병력이 있다. 35년 동안 하루 한 갑 흡연했으나 3년 전 금연했다. 체온은 37.1°C(98.7°F), 혈압은 170/80 mmHg, 맥박은 분당 85회이다. 얼굴이 둥글고 다혈성이며 쇄골 위 지방 패드가 크다. 흉부 전반에서 호흡음이 감소하고 국소 수포음이나 천명은 없다. 흉부 X선이 제시되어 있다. 다음 중 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 소세포 폐암
B. 폐 편평세포암
C. 대세포 폐암
D. 베게너 육아종증

## 해설


흡연력과 호흡기 증상에 쉽게 멍듦, 고혈압·새 당뇨, 다혈성 둥근 얼굴과 지방패드가 동반되어 Cushing syndrome을 의심한다. 제시한 폐질환 중 이소성 ACTH 분비와 가장 잘 연관된 소세포폐암 A가 적절하다. 비소세포암이 어떤 호르몬도 분비하지 않는다는 뜻은 아니며 편평세포암은 PTHrP 관련 고칼슘혈증 등을 일으킬 수 있다. 실제 흉부사진의 구체적 종괴 소견은 제공되지 않아 만들어 넣지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006103 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이소성 ACTH/SCLC A 유지하되 비소세포암도 다른 종양연관 호르몬을 낼 수 있음을 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006103
