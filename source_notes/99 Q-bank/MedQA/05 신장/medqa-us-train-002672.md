---
type: qbank
schema_version: 1
id: medqa-us-train-002672
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0394980382a51d543f9d09bfc0ae13773923915aa1601c89f4463611d451d89e
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "psoas abscess"
  - "psoas sign"
  - "diabetes mellitus"
  - "retroperitoneal infection"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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

35세 여성이 2주간 진행된 왼쪽 옆구리 통증과 빈뇨로 내원했다. 조절이 잘 되지 않는 제1형 당뇨병이 있고 체온 38°C, 맥박 90회/분, 혈압 120/80 mmHg이다. 왼쪽 아랫배와 옆구리에 압통, 왼쪽 고관절을 수동으로 펴면 통증이 있으며 백혈구 16,000/mm³, 소변 임신검사 음성, 소변검사에서 포도당 3+이다. 복부 초음파는 정상이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 자궁외임신
B. 신장결석
C. 장요근 농양
D. 자궁근종

## 해설


당뇨병 환자에서 고열, 옆구리 통증, 고관절을 펴면 통증이 악화되는 것은 장요근 농양을 시사한다. 신장결석이나 외임은 이와 일치하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Psoas sign과 발열은 장요근농양 C. 영어 원문 음성 임신검사 누락을 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002672
