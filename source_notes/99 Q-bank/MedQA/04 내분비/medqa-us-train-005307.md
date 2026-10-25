---
type: qbank
schema_version: 1
id: medqa-us-train-005307
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5977593a584333cd031c22415c0ce464ef236041ab2dd88f1f07151c9d966c11
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘 유두암"
  - "방사선 유발 갑상샘암"
  - "전갑상샘절제술"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsnKDrkZDslZQgKFRoeXJvaWQgUGFwaWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여자가 PET에서 발견된 갑상샘 결절의 추적 진료를 받으러 왔다. 28세에 비호지킨 림프종으로 두경부 외부 방사선치료와 항암화학요법을 받았다. 초음파에서 왼쪽 갑상샘에 불규칙한 경계와 미세석회화를 동반한 1.2 cm 결절이 보이고 세침흡인검사에서 사종체와 투명한 유리질 핵이 보인다. 다음 중 가장 적절한 처치는?

## 선택지

A. 방사성 요오드 치료
B. 3개월 후 관찰 및 추적
C. 갑상샘 신티그래피
D. 전갑상샘절제술

## 해설

사종체·ground-glass 핵은 유두갑상선암이며 선택지 D는 수술적 치료다. 두경부 방사선력은 전절제 고려요인이지만 1.2cm만으로 전절제가 의무는 아니다. 현행 ATA는 작은 일측 저위험암에서 엽절제를 우선 고려하며 병기·반대엽·방사선력·환자선호로 범위를 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 방사선병력 PTC 수술 D는 가능하나 모든 작은 방사선관련암의 전절제가 의무라는 과장 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13090833/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005307
