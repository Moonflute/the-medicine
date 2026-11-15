---
type: qbank
schema_version: 1
id: medqa-us-train-004235
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d474807600a536e3beea0ab2db1d34371e66125a2a402a8d201a6f85bbae8d59
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "작은 자발성 기흉"
  - "무증상 기흉"
  - "흉부 X선 추적"
  - "pneumothorax"
related_disease_slugs: []
question_type: 임상증례 객관식
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

26세 남성의 흉부 X선에서 작은 좌측 원발성 자발성 기흉이 우연히 발견됐다. 호흡곤란과 통증이 없고 활력징후와 산소포화도는 정상이다. 기저 폐질환은 없고 관찰 중 X선에서 커지지 않았다. 악화 시 바로 내원할 수 있다. 적절한 관리는?

## 선택지

A. 응급 바늘 감압을 한다
B. 경과를 관찰하고 재내원 기준과 추적 X선 일정을 안내한다
C. 기계환기를 위해 바로 삽관한다
D. 증상이 없어도 모두 응급 흉관을 삽입한다

## 해설


생리학적으로 안정적이고 증상이 없거나 매우 가벼운 원발성 자발성 기흉은 선택적으로 보존 관리할 수 있다. 영상 크기 하나만으로 처치를 결정하지 않으며, 증상이 심해지거나 호흡이 불안정하면 즉시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 무증상 작은PSP는 관찰/추적영상 B가 적절; 긴급 감압·양압환기 적응증 없음.
- https://erj.ersjournals.com/content/erj/63/5/2300797.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004235
- https://publications.ersnet.org/lookup/doi/10.1183/13993003.00797-2023
