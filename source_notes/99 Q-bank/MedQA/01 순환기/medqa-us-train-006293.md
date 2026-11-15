---
type: qbank
schema_version: 1
id: medqa-us-train-006293
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eef07635c3df9dd2bfe1a1ef60b466f7716cd1301d2924af07982a5acccf1c6c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장압전"
  - "심낭삼출"
  - "폐쇄성 쇼크"
  - "Cardiac tamponade"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성콩팥병이 있는 64세 여성이 갑자기 숨이 차서 내원했다. 혈압 80/60 mmHg이고 경정맥이 팽창하며 심음이 작다. 침상 심초음파에서 많은 심낭삼출과 우심실 이완기 허탈이 확인됐다. 즉시 필요한 근본 처치는?

## 선택지

A. 초음파 유도 응급 심낭 배액
B. 혈액투석 후 다음 날 재평가
C. 정맥 푸로세미드 단독 투여
D. 혈압상승제만 투여하고 관찰

## 해설

심낭액이 심장을 압박해 이완기 충만과 심박출량이 줄어든 불안정 심장압전이다. 즉시 배액한다. 요독증 등 원인 치료는 필요하지만 배액을 미뤄서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡기시 요골맥박 소실을 목맥박 소실로 오역한 설명 교정하고 압전배액 A와 투석 구별.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006293
- ESC 심근염·심낭염 진료지침(2025): https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_MyoPeri.pdf
