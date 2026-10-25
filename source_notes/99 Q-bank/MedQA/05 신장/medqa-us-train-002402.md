---
type: qbank
schema_version: 1
id: medqa-us-train-002402
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8b426fecddf06800546a11575b4aae7be66f30aa48339a262518e488fb2c808
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "acute pyelonephritis"
  - "flank pain"
  - "pyuria"
  - "fever"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

34세 여성이 5시간 동안 지속된 오른쪽 옆구리 통증과 구토로 응급실에 왔다. 2일간 발열과 오한이 있었고 3일 전 바비큐에서 달걀샐러드를 먹었다. 1년 전 왼쪽 난소 염전 수술을 받았다. 월경은 규칙적이고 경구 피임약을 복용한다. 체온 38.9°C, 맥박 101회/분, 혈압 118/76 mmHg이다. 오른쪽 아래배와 옆구리에 심한 압통이 있고 골반검사는 정상이다. 백혈구 14,200/mm³이며 소변에서 백혈구에스터라제가 양성, 적혈구 6~8/HPF, 백혈구 80~85/HPF이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 난소 염전
B. 위장염
C. 골반염증성 질환
D. 신우신염

## 해설


발열, 옆구리 통증, 소변에서 백혈구와 적혈구가 동반된 농뇨는 급성 신우신염의 전형적인 임상양상이다. 이는 요로 감염에 의한 염증으로 가장 흔히 나타난다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 발열·CVA/옆구리 압통·심한 농뇨와 정상 골반진찰로 신우신염 D; 달걀샐러드는 핵심 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002402
