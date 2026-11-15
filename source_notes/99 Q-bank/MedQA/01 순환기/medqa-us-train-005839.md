---
type: qbank
schema_version: 1
id: medqa-us-train-005839
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f713a070e705089f44de0a46fb4cee0249a2835d73294b2bc325c117a3c7e4b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "방실결절 회귀성 빈맥"
  - "방실결절 이중 경로"
  - "발작성 상심실성 빈맥"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uwnOyekeyEsSDsg4Hsi6zsi6TshLEg67mI66elIChQYXJveHlzbWFsIFN1cHJhdmVudHJpY3VsYXIgVGFjaHljYXJkaWEgKFBTVlQpLm1k
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

40세 여성이 갑자기 시작해 수분 뒤 갑자기 끝나는 두근거림이 반복된다. 발작 중 심전도는 분당 180회의 규칙적인 좁은 QRS 빈맥이다. 뚜렷한 P파는 보이지 않고 V1에서 평소에는 없던 작은 r′가 QRS 끝에 보인다. 가장 가능성 높은 기전은?

## 선택지

A. 방실결절의 빠른 경로와 느린 경로를 이용한 재진입
B. 여러 심방 부위의 무질서한 전기 활동
C. 허혈성 반흔을 도는 심실 내 재진입
D. 동방결절 자동능의 점진적 증가

## 해설


급격히 시작하고 끝나는 규칙적 좁은 QRS 빈맥에서 역행성 심방 탈분극이 QRS에 겹치면 V1에 가성 r′가 보일 수 있다. 전형적인 방실결절 재진입성 빈맥은 방실결절의 성질이 다른 두 경로를 이용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정규 협폭빈맥·숨은P파 패턴은 제시 기전 중 AV결절 이중경로 AVNRT A를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005839
