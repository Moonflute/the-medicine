---
type: qbank
schema_version: 1
id: medqa-us-train-002352
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f031b9490d69a26f2ad1181fdc7cba8c0241eab097baa9f4ec53265a125a7f11
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "focal nodular hyperplasia"
  - "central scar"
  - "benign hepatic lesion"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qta3showg6rKw7KCIIOqzvO2YleyEsSAoRm9jYWwgTm9kdWxhciBIeXBlcnBsYXNpYSkubWQ
question_type: management
difficulty: complex
answer: A
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

36세 여성이 교통사고 후 응급실에 왔다. 의식은 명료하고 지남력은 정상이다. 유일한 복용약은 경구피임약이다. 체온 37.3°C, 맥박 100회/분, 호흡 20회/분, 혈압 102/80 mmHg이다. 몸통과 복부에 멍이 있고 FAST는 음성, 흉부 X선은 골절이 없다. 조영증강 흉부 및 복부 CT에서 중앙에 저감쇠 흉터가 있는 4 cm 크기의 경계가 뚜렷한 간 종괴가 보인다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 안심시키고 관찰한다
B. 종괴 생검
C. 경구 피임약을 중단한다
D. 종괴를 경피적으로 흡인한다

## 해설


CT에서 중앙에 저감쇠 섬유화가 있는 4 cm 간 결절은 중심 흉터를 가진 국소 결절성 과형성(FNH)과 일치한다. FNH는 양성 병변으로 증상 없이 관찰만 하면 된다. 따라서 안심하고 관찰한다가 적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FNH의 중심 흉터·무증상 관찰 A는 유지. 원문 경구피임약 복용이 누락되어 선지 C 감별에 필요한 병력을 복원.
- https://doi.org/10.14309/ajg.0000000000002857

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002352
