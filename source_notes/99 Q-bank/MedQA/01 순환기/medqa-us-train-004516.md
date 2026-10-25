---
type: qbank
schema_version: 1
id: medqa-us-train-004516
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4581abc4aacbd3bd90ffa5492e9e9da26cbcc5dfc6ce893fc2fec17b88ecc8f7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "안정형 협심증"
  - "운동부하검사"
  - "베타차단제 중단"
  - "stable angina"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 여성이 3개월 동안 반복되는 흉부 불편감으로 내원했다. 아파트 계단을 오르거나 평지에서 5분 동안 빠르게 걸을 때 증상이 발생한다. 호흡곤란, 두근거림이나 어지럼증은 없다. 고혈압과 고지혈증이 있다. 현재 에스트로겐 대체요법, 메토프롤롤, 암로디핀, 리시노프릴, 히드로클로로티아지드와 로수바스타틴을 복용한다. 하루에 커피 3~4잔을 마시고 음주는 하지 않는다. 맥박은 분당 65회, 호흡수는 분당 21회, 혈압은 145/90 mm Hg이다. 신체검사는 정상이고 안정 시 심전도는 정상 동리듬이다. 이틀 후 심장 운동부하검사가 예정되어 있다. 현재 관리에서 다음 중 어떤 약물을 중단하는 것이 가장 적절한가?

## 선택지

A. 메토프롤롤과 암로디핀
B. 메토프롤롤과 로수바스타틴
C. 에스트로겐과 히드로클로로티아지드
D. 에스트로겐과 암로디핀

## 해설

항허혈약은 운동부하검사의 허혈검출 민감도를 낮출 수 있어 진단목적과 안전성을 검토한 담당의 지시하에 metoprolol·amlodipine A를 일시보류할 수 있다. Metoprolol은 심박수반응을 억제하지만 dihydropyridine인 amlodipine은 같은 직접서맥기전이 아니다. 모든검사에 일률중단하거나 환자가 임의로 급중단해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 검사목적에따른 약물일시중단 A로 한정; amlodipine을 직접 심박수억제제로 오설명하지 않음.
- https://www.journalofnuclearcardiology.org/article/S1071-3581%2826%2900351-X/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004516
