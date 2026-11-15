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
question_type: management
difficulty: simple
answer: B
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

심방세동이 있는 73세 여성에게 고혈압과 제2형 당뇨병이 있다. 뇌졸중 병력은 없고 신장기능은 정상이다. 기계판막, 중등도 이상 승모판 협착이나 활동성 출혈은 없다. 뇌졸중 예방에 적절한 치료는?

## 선택지

A. 아스피린 단독
B. 적절한 용량의 경구 직접항응고제
C. 맥박을 조절한 뒤 항혈전제 없이 관찰
D. 아스피린과 클로피도그렐 병용

## 해설


나이, 고혈압과 당뇨병을 고려하면 뇌졸중 위험이 높아 경구 항응고가 적절하다. 기계판막이나 중등도 이상 류마티스성 승모판 협착이 없는 상황에서는 직접항응고제를 우선 고려한다. 항혈소판제는 이를 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CHADS2는 고혈압 1점+당뇨 1점이며 73세는 연령 75세 기준에 미달하여 합계2 B; 다른 점수체계와 혼동하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000109
- 대한부정맥학회 심방세동 NOAC 치료 진료지침(2024): https://www.k-hrs.org/expert/guide/atrial
