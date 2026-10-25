---
type: qbank
schema_version: 1
id: medqa-us-train-003566
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4e7c24bf298aadba4231ffc7ed0778db6ea18eb4b0ea6d371deb008e2c5db59
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute pericarditis"
  - "pericardial friction rub"
  - "recurrent pericarditis"
  - "colchicine"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: prevention
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 남성이 앉으면 호전되고 누우면 악화되는 칼로 찌르는 듯한 지속적 흉통으로 내원했다. 심전도는 급성 심낭염에 합당했고, 몸을 앞으로 숙였을 때 왼쪽 흉골연에서 마찰음이 들렸다. 다음 중 이 환자의 상태 재발을 예방할 수 있는 약물은?

## 선택지

A. 이부프로펜
B. 콜히친
C. 아스피린
D. 전신 항생제

## 해설

전형적 체위성 흉통과 심낭 마찰음은 급성 심낭염에 부합한다. Colchicine B는 aspirin/NSAID 등 항염증 치료에 병용하여 재발 위험을 줄인다. 미세소관과 염증세포 기능 및 inflammasome 신호 등에 작용하며 단순한 섬유증 억제제로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 재발예방 colchicine B를 유지. 섬유증 억제를 주기전처럼 한 설명을 염증/미세소관 작용으로 교정.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003566
