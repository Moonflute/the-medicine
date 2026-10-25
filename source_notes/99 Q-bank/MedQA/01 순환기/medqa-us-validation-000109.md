---
type: qbank
schema_version: 1
id: medqa-us-validation-000109
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9830cba06ea1b90b033230d8350160ddc92db79d0e04fc41539cae3903250985
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심방세동"
  - "CHADS2 점수"
  - "뇌졸중 위험"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: biostatistics
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

심방세동이 있는 73세 여성이 항응고 필요성을 상담하러 왔다. 고혈압과 제2형 당뇨병이 있고 뇌졸중이나 TIA 병력은 없다. CHADS2 점수는?

## 선택지

A. 1
B. 2
C. 4
D. 정보가 부족하다

## 해설


CHADS2 점수는 고혈압(1점)과 당뇨병(1점)으로 총 2점이다. 따라서 환자의 CHADS2 점수는 2점이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CHADS2는 고혈압 1점+당뇨 1점이며 73세는 연령 75세 기준에 미달하여 합계2 B; 다른 점수체계와 혼동하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000109
