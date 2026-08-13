---
type: qbank
schema_version: 1
id: medqa-us-train-008641
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc5613c884210505749dc9e31e493ca9f405aca756f4b9969a89d1cd83b34de5
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "post-thyroidectomy hypocalcemia"
  - "hypoparathyroidism"
  - "parathyroid hormone cAMP signaling"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG9wYXJhdGh5cm9pZGlzbSkubWQ
question_type: mechanism
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
---

# MedQA US 임상문제

## 문제

55세 여성이 유두상 갑상선암으로 전갑상선절제술을 받았다. 수술 11시간 후 입 주변이 저리다고 호소한다. 상태가 빠르게 악화되어 호흡곤란과 흉부 압박감이 발생했다. 다음 중 이 환자 증상을 일으킨 결핍 호르몬의 신호전달 경로를 가장 잘 나타내는 것은 무엇인가?

## 선택지

A. 고리형 구아노신 일인산(cGMP)
B. 고리형 아데노신 일인산(cAMP)
C. 이노시톨 삼인산(IP3)
D. 세포내 수용체

## 해설


부갑상선 호르몬은 Gs 단백질을 통해 adenylate cyclase를 활성화하고 cAMP를 증가시킨다. 저칼슘증 후 결핍된 PTH 신호전달 경로는 고리형 cAMP이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008641
