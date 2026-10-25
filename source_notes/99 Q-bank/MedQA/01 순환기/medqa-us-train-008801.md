---
type: qbank
schema_version: 1
id: medqa-us-train-008801
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:473d57883666361daa08d1d54b16ed793508684e1c2df7e63d46fb60a208db0d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "mitral valve prolapse"
  - "myxomatous degeneration"
  - "mitral regurgitation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsnbztg4jspp0gKE1pdHJhbCBWYWx2ZSBQcm9sYXBzZSkubWQ
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsl63rpZggKE1pdHJhbCBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 일주일 동안 지속된 호흡곤란으로 응급실에 내원했다. 2년 동안 반복되는 두근거림이 있었고, 일상생활 변화가 없는데도 불안 에피소드가 여러 번 있었다. 왼쪽 상부 흉골연에 국한된 날카로운 흉통이 간헐적으로 있다. 복통이나 다리 부종은 없다. 2년 전 연쇄상구균 인두염을 10일간 페니실린으로 치료받았다. 국외 여행력은 없다. 체온 36.5°C(97.7°F), 맥박 82회/분, 혈압 140/85mmHg이다. 심첨부에서 가장 크게 들리고 액와로 방사되며 중간 수축기 클릭을 동반하는 3/6 범수축기 심잡음이 있다. 양측 폐에서 미세 수포음이 들린다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 세로토닌의 이소성 생성
B. 점액종성 판막 변성
C. 염증성 판막 변성
D. 카테콜아민 과다생산

## 해설

중간 수축기 클릭과 심첨부에서 액와로 방사되는 수축기 잡음은 승모판 탈출과 역류를 시사한다. 대표적인 구조적 기전은 B의 점액종성 판막 변성이다. 이는 판막 결합조직의 변화이지 ‘근육성 변성’과 같은 말이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 점액종성 변성을 근육성 변성과 동의어로 쓴 오역을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008801
