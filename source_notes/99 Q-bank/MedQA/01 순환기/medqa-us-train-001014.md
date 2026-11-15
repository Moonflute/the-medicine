---
type: qbank
schema_version: 1
id: medqa-us-train-001014
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2b88154ca9a27d6333387a0a9c4d667999d27ed2b757ece4d6f541236d214c2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute pericarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성이 숨쉴 때 아프고 앞으로 숙이면 좋아지는 흉통으로 내원했다. 심낭 마찰음과 미만성 ST분절 상승이 있으며 트로포닌이 상승했다. 심초음파에서 좌심실 수축기능은 보존됐고 심장압전이나 국소 벽운동 이상은 없다. 허혈성 원인이 배제되었다면 가장 가능성 높은 상태는?

## 선택지

A. 심근 침범이 없는 단순 심낭염
B. 좌심실 자유벽 파열
C. 좌심실 기능 저하 없이 심근 손상이 동반된 심낭염
D. 관상동맥이 막힌 급성 심근경색

## 해설

심낭염의 임상 소견이 있으면서 트로포닌으로 확인되는 심근 손상이 있지만 새 좌심실 기능 저하가 없다면 심근심낭염(myopericarditis)을 고려한다. 트로포닌 상승은 합병증이 아니라 심근 손상 자체의 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문의 미만성 ST상승을 없다고 뒤집고 저전압 마찰음이라 한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001014
- ESC 심근염·심낭염 진료지침(2025): https://academic.oup.com/eurheartj/article/46/40/3952/8234483
