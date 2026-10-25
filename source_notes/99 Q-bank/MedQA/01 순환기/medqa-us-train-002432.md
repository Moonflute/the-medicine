---
type: qbank
schema_version: 1
id: medqa-us-train-002432
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:597f341a9bc7bc54a407082dc9ae2e834026c35e44904aca9ff52d113d37dfa7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "sarcoidosis"
  - "cardiac sarcoidosis"
  - "hilar lymphadenopathy"
  - "atrioventricular block"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 아프리카계 미국인 여성이 3주간 간헐적으로 악화되는 어지럼과 실신 직전 증상으로 응급실에 왔다. 만성 기침과 수주 후 저절로 사라지는 피부 발진 병력이 있다. 체온 37°C, 혈압 122/80 mmHg, 맥박 43회/분이다. 경부 림프절병증이 있고 심잡음은 없다. 심전도에서 2:1 방실차단과 좌각차단이 보이며 흉부 X선에서 양측 폐문 림프절병증이 관찰된다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 경동맥 협착
B. 비호지킨 림프종
C. 소세포폐암
D. 사르코이드증

## 해설

젊은 여성의 폐문 림프절병증·만성 기침·피부 증상과 고도 AV 전도장애는 심장 침범을 동반한 sarcoidosis D를 시사한다. Sarcoidosis는 비건락성 육아종을 특징으로 하며 심장 전도계를 침범할 수 있다. 비육아성 육아종증이라는 기존 표현은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Sarcoidosis의 비육아성 육아종증이라는 모순을 비건락성 육아종으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002432
