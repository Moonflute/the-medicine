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

36세 여성의 CT에서 간 결절이 우연히 보였다. 간담도 조영 MRI에서 동맥기 균일 조영증강, 중심부 흉터와 간담도기 조영제 섭취가 보여 전형적인 국소 결절성 과형성으로 판독됐다. 간질환이나 증상은 없다. 적절한 관리는?

## 선택지

A. 정기 영상 추적이나 치료를 하지 않는다.
B. 6개월마다 MRI를 반복한다.
C. 조직 확인을 위해 경피적 생검부터 한다.
D. 예방적 간 절제를 시행한다.

## 해설


전형적 영상으로 확진된 무증상 국소 결절성 과형성은 치료나 정기 추적이 필요하지 않다. 중심 흉터 하나만으로 확진하지는 않으며 비전형적 영상이면 간세포선종 등과 다시 감별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FNH의 중심 흉터·무증상 관찰 A는 유지. 원문 경구피임약 복용이 누락되어 선지 C 감별에 필요한 병력을 복원.
- https://doi.org/10.14309/ajg.0000000000002857

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002352
