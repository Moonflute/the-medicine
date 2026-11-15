---
type: qbank
schema_version: 1
id: medqa-us-train-001239
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3e0444654c1f8ca0873949767131756ecc47ff6f9884f613f327822f327aaf38
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "ileus"
  - "hypokalemia"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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

45세 여성이 급성 췌장염으로 입원한 지 이틀 뒤 통증은 줄었지만 배가 불러오고 대변과 가스가 나오지 않는다. 장음은 거의 없고 혈청 칼륨은 2.9 mEq/L이다. 복부 X선에서 소장과 대장이 모두 팽창하고 직장까지 가스가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 복수
B. 장마비
C. 괴사성 췌장염
D. 췌장 가성낭종

## 해설


췌장염과 저칼륨혈증에 이어 장음이 감소하고 소장과 대장이 넓게 팽창한 소견은 마비성 장폐색에 합당하다. 한 지점에서 막힌 기계적 폐색과 달리 장운동이 전체적으로 저하된 상태다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염2일 후 무통성 대칭 팽만·장음소실/고창과 저K는 ileus B. 임상 소견으로 선택 가능하며 없는 X선 세부소견은 만들지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001239
