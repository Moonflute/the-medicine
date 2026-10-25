---
type: qbank
schema_version: 1
id: medqa-us-test-000875
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:96fda49d1a0c0e1bc17cb6dd1ca62a60bd05544c2201286dfd7f85694582dc5b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "감염 후 기침"
  - "급성 기관지염"
  - "지지요법"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDquLDsuagubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "ACR 객혈 적정성 기준은 비대량 객혈에도 초기 흉부영상을 권고한다. 원문에도 반복 혈담이 있어 지지요법만인 D보다 A가 적절."
---

# MedQA US 임상문제

## 문제

33세 남성이 기침으로 응급실에 왔다. 2주 전 발열, 오한, 기침이 있어 일차의가 아세트아미노펜, 이부프로펜, 휴식을 권했고 대부분 호전되었지만 만성 기침과 소량의 맑은 가래가 남았다. 가래에는 가끔 피가 섞였다. 흉통, 호흡곤란, 발열, 오한은 없었다. 전반적으로 건강하며 메트포르민과 알부테롤을 복용 중이다. 체온 98.3°F(36.8°C), 혈압 129/75 mmHg, 맥박 84회/분, 호흡 15회/분, 산소포화도 99%였다. 양쪽 폐음은 깨끗하고 림프절병증이나 구인두 이상은 없었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 흉부 방사선촬영
B. D-이합체
C. 객담 배양
D. 지지요법

## 해설

정답은 A이다. 감염 후 기침일 수 있지만 객담에 반복적으로 피가 섞이는 객혈이 있다. 안정적인 비대량 객혈에서도 초기 흉부영상으로 원인을 평가하며, 제시된 선택지에서는 흉부 방사선촬영이 적합하다. 정상 활력징후와 깨끗한 청진만으로 영상 평가를 생략하고 단순 지지요법으로 끝내지 않는다. D-dimer나 객담배양은 해당 질환을 의심할 추가 맥락에 따라 선택한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈담이 반복되는데 검사 없이 지지요법만 권한 원정답 D를 초기 흉부영상 A로 변경.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000875
