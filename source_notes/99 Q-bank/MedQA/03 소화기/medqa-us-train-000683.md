---
type: qbank
schema_version: 1
id: medqa-us-train-000683
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a97da10e95b2a80ec1272ab5dee97f98303dc79f7f3676fbad6c491187bfd2b1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "diabetes mellitus"
  - "hemochromatosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병 병력이 있는 48세 남성이 무기력증, 관절통, 발기부전으로 일차 진료 의사를 방문하였다. 검사실 평가에서 페리틴(ferritin) 1400 ug/L(정상 <300 ug/L), 총 철분 증가, 트랜스페린 포화도 증가, 총 철 결합능 감소가 확인되었다. 이 환자의 상태에 대해 다음 중 사실이 아닌 것은?

## 선택지

A. 심장 기능 저하를 초래할 수 있다
B. 칼슘 킬레이트제로 호전될 수 있다
C. 간세포암종(hepatocellular carcinoma) 위험 증가와 관련이 있다
D. 피부 청동색 변화를 유발한다

## 해설


헴오크로마토시스는 철 과다 축적으로 간섬유화·심부전·피부 청동색 변화를 일으키지만, 칼슘 킬레이트제로 개선되지 않는다. 따라서 B가 사실이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 높은 ferritin/철포화도와 DM·관절통·성선저하는 hemochromatosis. 칼슘 chelator로 개선 B가 틀린 진술이며 철 과다의 심장/간/피부 합병증과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000683
