---
type: qbank
schema_version: 1
id: medqa-us-train-007122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:523bef3b068b56804306f2f1e8a04a81c70778050d18903355c6e69a69d6536f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "감염성 심내막염"
  - "오슬러 결절"
  - "승모판 탈출증"
  - "혈액배양"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "ESC2023은IE치료를신속히시작하며항생제전혈액배양3세트를30분간격채취하도록권고. 일률24시간채혈및결과대기 B대신 A로변경."
---

# MedQA US 임상문제

## 문제

38세 여자가 한 달 넘게 지속된 발열, 피로, 식욕부진으로 응급실에 내원했다. 경미한 승모판 탈출증 병력이 있다. 약 6주 전 합병증 없이 치아를 발치했다. 활력징후는 체온 100.8°F, 맥박 83회/분, 혈압 110/77 mmHg, 실내 공기 산소포화도 97%이다. 진찰에서 겨드랑이로 방사되는 심첨부의 3/6등급 전수축기 잡음과 손가락에 붉고 통증이 있는 결절이 여러 개 보인다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 1시간 동안 세 부위에서 혈액배양 3세트를 채취하고 경험적 항생제를 시작한다
B. 24시간 동안 세 부위에서 혈액배양 3세트를 채취하고 배양 결과가 나올 때까지 항생제를 시작하지 않는다
C. 혈액배양은 필요 없다. 경험적 항생제를 시작한다
D. 심장흉부외과에 승모판 치환술을 의뢰한다

## 해설

한 달 넘게 지속된 발열, 승모판 역류(MR) 잡음, 통증성 손가락 결절은 감염성 심내막염(IE)을 의심하게 한다. 항생제를 투여하기 전에 서로 다른 부위에서 혈액배양 3세트를 약 30분 간격으로 채취하고 경험적 항생제 치료를 시작하는 A가 현행 ESC 지침의 경로에 부합한다. 심초음파와 심내막염 진료팀의 평가도 신속히 진행한다. 배양 전 항생제 투여는 균 검출률을 낮출 수 있지만, 이를 ‘배양 오염’이라고 하지는 않는다. 모든 환자에서 배양 결과가 나올 때까지 24시간 이상 항생제를 기다리는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 의심IE의혈액배양후조기경험항생제 A로B→A 변경. 배양결과까지일률24시간대기하는설명교정.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007122
