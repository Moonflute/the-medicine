---
type: qbank
schema_version: 1
id: medqa-us-train-001023
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2de67cb31d04518f5b3c52265dd858249aca63f0bdae05895fce7fa11ccb0ff
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cholecystitis"
  - "biliary colic"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 지속되는 우상복부 통증과 발열, 백혈구 증가를 보인다. 초음파와 CT로 급성 담낭염 여부가 확실하지 않다. 담낭이 추적자로 채워지는지 보아 담낭관 개통 여부를 확인하는 검사는?

## 선택지

A. 담낭 내시경초음파
B. 간담도 신티그래피(HIDA 검사)
C. 자기공명 담췌관조영술
D. 위배출 신티그래피

## 해설

HIDA는 간에서 담즙으로 배설되는 추적자가 담낭으로 들어가는지 평가하는 기능 검사다. 적절한 촬영에서 담낭이 끝내 보이지 않으면 담낭관 폐쇄 및 급성 담낭염을 지지한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HIDA를 기능성 담석증 확진이라 한 설명을 초음파 음성 의심 담낭염의 평가로 교정.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=132

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001023
- https://www.idsociety.org/practice-guideline/intra-abdominal-infections/
