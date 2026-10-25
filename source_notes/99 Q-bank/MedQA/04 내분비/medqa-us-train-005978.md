---
type: qbank
schema_version: 1
id: medqa-us-train-005978
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95d7bd7550b34de236bbf0c3105aa6980b1adbb071dc646b9a7e9f1cfc6ee922
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "말단비대증"
  - "수근관증후군"
  - "말단비대증성 심근병증"
related_disease_slugs:
  - MDQg64K067aE67mEL-unkOuLqOu5hOuMgOymnSAoQWNyb21lZ2FseSkubWQ
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
question_type: prognosis
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

33세 남성이 한 달 동안 손의 저림과 따끔거림으로 일차진료를 받으러 왔다. 평소 의사를 잘 찾지 않지만 손의 저림과 쇠약이 점점 심해지고 있다. 체온은 99°F(37.2°C), 혈압은 120/66 mmHg, 맥박은 분당 80회, 호흡수는 분당 16회, 산소포화도는 99%이다. 하악이 커지는 등 얼굴 생김새가 특이하고 키가 크며 손이 매우 크다. 손목 굴근지대를 두드리면 저림과 통증이 재현된다. 공복혈당은 155 mg/dL이다. 다음 중 이 환자의 가장 가능성 높은 사망 원인은 무엇인가?

## 선택지

A. 부신부전
B. 울혈성 심부전
C. 신부전
D. 뇌졸중

## 해설

큰 하악·손·수근관증상·고혈당은 말단비대증을 시사한다. 심근비대/섬유화에 따른 심근병증과 심부전 B가 제시 선택지 중 중요한 사망 관련 합병증이다. 수근관증후군 자체가 주요 사망원인이라는 설명은 틀리며 모든 시대·치료상태에서 CHF가 반드시 최다 사망원인이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수근관증후군을 사망원인으로 묶은 오류를 제거하고 CHF B를 제시 중 심혈관 합병증으로 한정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005978
