---
type: qbank
schema_version: 1
id: medqa-us-train-001756
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:859b033a3ec34c3eba6f56ed994a26204a1f59663dff8dbe2266454388e0b6e6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "thyrotoxicosis"
  - "iatrogenic hypothyroidism"
  - "propylthiouracil"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 최근 발생한 두통, 체중 감소 및 안절부절못함 때문에 일차진료의에게 왔다. 증상은 어제 시작되었고 이후 땀이 나며 전반적으로 불편했다. 과거력은 특별한 것이 없고 최근 바이러스성 호흡기 감염이 저절로 호전된 적이 있다. 현재 복용 약은 없다. 체온 99.5°F (37.5°C), 혈압 127/68 mmHg, 맥박 110/min, 호흡 14/min, 실내 공기 산소포화도 98%이다. 땀을 흘리며 불편해하고 맥박이 빠르지만 이비인후과 진찰은 정상이다. 초기 검사에서 혈색소 12 g/dL, 헤마토크릿 36%, 백혈구 8,500/mm^3, 혈소판 195,000/mm^3, Na+ 139 mEq/L, Cl- 102 mEq/L, K+ 4.4 mEq/L, HCO3- 24 mEq/L, BUN 20 mg/dL, glucose 99 mg/dL, creatinine 1.0 mg/dL, Ca2+ 10.2 mg/dL, TSH .03 mIU/L, AST 12 U/L, ALT 10 U/L였다. propranolol과 propylthiouracil을 처방받았다. 1주 후 심한 피로를 호소하며 돌아왔고 TSH는 6.0 mIU/L로 상승했지만 다른 검사값은 변하지 않았다. 다음 중 최선의 관리 단계는 무엇인가?

## 선택지

A. 현재 약물의 용량을 줄인다
B. 현재 약물을 중단하고 ibuprofen을 추가한다
C. 약물을 중단하고 T3를 추가한다
D. 현재 약물을 중단한다

## 해설

정답은 D이다. 바이러스감염 뒤 일시적인 갑상샘중독 증상 후 TSH가 상승하고 피로가 생긴 경과는 파괴성 갑상샘염의 중독기 뒤 저하기를 시사한다. 새 호르몬 합성이 주기전이 아니므로 PTU를 지속하는 것은 적절하지 않고 빈맥도 사라졌다면 증상용 propranolol도 재평가한다. 중단 자체가 갑상샘저하증을 유발한다는 뜻은 아니다. FT4/TSH를 추적하며 통증이 없으므로 무조건 NSAID를 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PTU 중단 때문에 저하증이 생긴다는 역인과를 일과성 파괴성 갑상샘염의 경과로 교정.
- https://doi.org/10.1089/thy.2016.0229

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001756
