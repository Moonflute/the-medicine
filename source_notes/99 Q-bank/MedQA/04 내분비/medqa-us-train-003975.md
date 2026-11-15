---
type: qbank
schema_version: 1
id: medqa-us-train-003975
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:841f913f449a153b1eddf91315631886a8b09c6896fc6f939821272de06551ee
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘 수질암"
  - "다발성 내분비 종양 2형"
  - "RET 원종양유전자"
  - "갈색세포종"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

RET 병적 변이가 있는 45세 남성이 갑상선 수질암 수술을 준비 중이다. 발작성 두통과 발한이 있고, 혈장 메타네프린이 크게 상승했으며 부신에 갈색세포종이 확인됐다. 두 종양의 수술 순서는?

## 선택지

A. 갑상선 수술 후 부신 수술
B. 두 종양을 차단제 없이 같은 날 수술
C. 갑상선 수술만 하고 부신은 관찰
D. 적절한 차단 치료 뒤 부신을 먼저 수술

## 해설


MEN2에서 갈색세포종이 함께 있으면 마취·수술 중 카테콜아민 위기를 피하기 위해 알파차단 등으로 준비한 뒤 갈색세포종을 먼저 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수질암+부갑상샘항진/갈색세포종 의심의 MEN2는 RET 활성화 D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003975
- https://doi.org/10.1089/thy.2014.0335
