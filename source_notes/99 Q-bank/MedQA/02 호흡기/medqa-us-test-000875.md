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
question_type: investigation
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

33세 남성이 감기 증상이 대부분 가라앉았지만 2주째 기침을 한다. 오늘 처음으로 가래에 소량의 피가 섞였다. 코나 잇몸에서 난 피는 아니고, 흉통과 호흡곤란은 없다. 흡연력은 없고 활력징후와 폐 청진은 정상이다. 첫 영상검사는?

## 선택지

A. 흉부 X선 촬영
B. 폐동맥 CT 혈관조영술
C. 흉부 MRI
D. 정상 활력징후이므로 영상검사를 하지 않는다

## 해설

성인의 객혈에서는 흉부 X선을 초기 영상으로 시행한다. 감염 직후이고 활력징후가 정상이어도 실제 객혈이면 단순 기침약으로 끝내지 않는다. 객혈이 반복되거나 암 위험이 높으면 조영증강 CT가 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈담이 반복되는데 검사 없이 지지요법만 권한 원정답 D를 초기 흉부영상 A로 변경.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000875
- https://doi.org/10.3348/kjr.2018.19.5.866
