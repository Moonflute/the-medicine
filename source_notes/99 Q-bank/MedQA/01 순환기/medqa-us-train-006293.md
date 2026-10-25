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

64세 여성이 급성 호흡곤란과 흉통이 시작된 지 1시간 후 응급실에 내원했다. 흉통은 흉골 뒤쪽에 국한되고 방사되지 않는다. 오심은 있지만 구토는 하지 않았다. 제2형 당뇨병, 고혈압 및 만성 신장질환이 있다. 현재 인슐린, 아스피린, 메토프롤롤 및 히드로클로로티아지드를 복용한다. 창백하고 식은땀을 흘린다. 체온은 37°C(98°F), 맥박은 분당 136회, 혈압은 80/60 mm Hg이다. 진찰에서 경정맥 팽창이 있고 흡기 시 요골맥박이 소실된다. 양쪽 폐기저부에서 수포음이 들린다. 심장 진찰에서 심음이 작게 들린다. 검사 결과 혈색소는 8.3 g/dL, 혈당은 313 mg/dL, 혈액요소질소는 130 mg/dL, 크레아티닌은 6.0 mg/dL이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 심낭천자
B. 혈액투석
C. 푸로세미드 치료
D. 노르에피네프린 주입

## 해설

저혈압·JVP상승·심음감소와 흡기시 요골맥박 소실의 심한 기이맥은 불안정 압전을 시사한다. 신속 bedside echo 등으로 평가하며 긴급 심낭배액 A가 필요하다. 요독증이 원인일 수 있어도 순환을 압박하는 삼출의 배액을 투석만 기다리며 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡기시 요골맥박 소실을 목맥박 소실로 오역한 설명 교정하고 압전배액 A와 투석 구별.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006293
