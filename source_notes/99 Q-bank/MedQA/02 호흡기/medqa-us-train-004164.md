---
type: qbank
schema_version: 1
id: medqa-us-train-004164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a42c3ee7ba85e1af5bb6b0a8dcb027a2572a5598fc4784a76ddb8b68c0f953da
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "상기도기침증후군"
  - "알레르기 비염"
  - "만성 기침"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDquLDsuagubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 석 달째 기침한다. 코막힘과 재채기가 잦고 목 뒤로 콧물이 넘어가는 느낌이 동반된다. 비갑개가 부어 있지만 폐 청진, 흉부 X선과 폐활량은 정상이다. 알레르기 비염에 동반된 상기도기침증후군을 의심할 때 먼저 시도할 치료는?

## 선택지

A. 프레드니솔론을 한 달간 경구 투여한다
B. 아목시실린/클라불란산을 투여한다
C. 거담제만 복용한다
D. 비강 스테로이드로 비염을 치료하고 기침 반응을 확인한다

## 해설


알레르기 비염 증상과 상기도 소견이 뚜렷하면 비강 스테로이드로 비염을 치료하고 기침이 호전되는지 확인한다. 호전되지 않으면 천식 등 다른 만성 기침 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상CXR/폐기능과 비염동반 만성기침의 UACS 경험적 항히스타민 D는 선택지상 적절.
- https://publications.ersnet.org/lookup/pmid/31515408

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004164
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8497763/
- https://pubmed.ncbi.nlm.nih.gov/36693355/
