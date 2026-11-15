---
type: qbank
schema_version: 1
id: medqa-us-train-006820
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:72d9fe2ad3b0d52c89a82d4df0dc86bd05c179ffb47dcfc22589b251e1e0b611
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "판코스트 종양"
  - "상대정맥증후군"
  - "호너증후군"
related_disease_slugs:
  - MTAg7KKF7JaRL-yDgeuMgOygleunpSDspp3tm4TqtbAgKFN1cGVyaW9yIFZlbmEgQ2F2YSBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

72세 남성이 수개월간 계속되는 오른쪽 어깨 통증이 팔 안쪽으로 뻗친다고 한다. 오른손 힘이 줄고 체중도 감소했다. 진찰에서 오른쪽 눈꺼풀이 처지고 오른쪽 동공이 작다. 병변의 가장 가능성 높은 위치는?

## 선택지

A. 왼쪽 폐첨부
B. 오른쪽 폐하엽
C. 오른쪽 폐첨부
D. 왼쪽 폐하엽

## 해설

폐첨부 종양이 상완신경총과 교감신경 경로를 침범하면 같은 쪽 어깨·팔 통증과 손의 약화, 축동과 안검하수가 나타날 수 있다. 이 조합은 우측 폐첨부 병변을 시사한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Horner와SVC증후군을 동일시하고 SVC압박이축동 원인이라 한 해부기전 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006820
