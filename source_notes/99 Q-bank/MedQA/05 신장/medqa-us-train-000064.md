---
type: qbank
schema_version: 1
id: medqa-us-train-000064
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b1f724f877d100cc3cfeaa08fcb37959e185f3b80482d34de13f09c3a979194
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "부종"
  - "인후통"
  - "함요 부종"
  - "눈 주위 부종"
  - "단백뇨"
  - "지방 원주"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 눈 주위와 다리 부종으로 내원했다. 소변 단백/크레아티닌 비 6.8 g/g, 알부민 2.1 g/dL이다. 혈압과 신기능, C3는 정상이고 혈뇨는 없다. 전형적인 첫 소아 특발성 신증후군에서 초기 치료는?

## 선택지

A. 에날라프릴 단독
B. 푸로세미드 단독
C. 모든 환자에게 우선 신장 생검
D. 경구 프레드니솔론

## 해설

전형적인 소아 특발성 신증후군은 일반적으로 생검 없이 경구 스테로이드를 시작한다. 낮은 보체, 지속 고혈압, 뚜렷한 혈뇨 또는 스테로이드 저항성이 있으면 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 모든 급성 신증후군이 아니라 전형적 소아 MCD/스테로이드 민감 신증후군의 경험적 치료임을 명시.
- https://kdigo.org/wp-content/uploads/2025/04/KDIGO-2025-Guideline-for-Nephrotic-Syndrome-in-Children.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000064
- https://kdigo.org/guidelines/nephrotic-syndrome-in-children/
