---
type: qbank
schema_version: 1
id: medqa-us-train-006449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:82d446cdd95fb0a4e6548f6dbe00e240a85bdf8b259b0579fb33b60f25a3e550
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "고중성지방혈증"
  - "급성 췌장염"
  - "황색종"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 등으로 뻗치는 심한 명치 통증과 구토로 내원했다. 리파아제는 정상 상한의 5배이고 초음파에서 담석은 보이지 않는다. 엉덩이와 팔꿈치에 주변이 붉은 작은 노란 구진이 여럿 있다. 췌장염의 원인을 확인할 검사는?

## 선택지

A. 땀 염소 검사
B. 유행성이하선염 항체 검사
C. 복부 단순 X선
D. 혈청 중성지방 농도

## 해설

발진성 황색종은 심한 고중성지방혈증을 시사한다. 담석 등 흔한 원인이 확인되지 않은 급성 췌장염에서 중성지방을 조기에 잰다. 중성지방이 매우 높으면 췌장염의 원인이 될 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황색판-고TG췌장염의 지질검사 D 근거를 해설의 자기모순 없이 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006449
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9840919/
- https://pubmed.ncbi.nlm.nih.gov/38857482/
