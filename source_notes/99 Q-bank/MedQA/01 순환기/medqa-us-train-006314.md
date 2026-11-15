---
type: qbank
schema_version: 1
id: medqa-us-train-006314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c255781bf09596d8bd5e33d0ed4d2c43cbcd2635174f23db6a5506410be55717
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "버거병"
  - "폐쇄성 혈전혈관염"
  - "흡연"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2PkOyHhO2YiOq0gCDtmIjsoITsl7wgKOuyhOqxsOuzkSkgKFRocm9tYm9hbmdpaXRpcyBPYmxpdGVyYW5zIChCdWVyZ2VyJ3MgRGlzZWFzZSkpLm1k
question_type: prevention
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
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 남성이 양쪽 발 통증과 발가락 끝 궤양으로 내원했다. 하루 두 갑씩 흡연하고, 몇 달 동안 다리 여러 곳의 표재정맥을 따라 통증 있는 결절이 생겼다 사라졌다. 발은 차고 맥박이 약하다. 평가에서 폐쇄성 혈전혈관염으로 판단했다. 상처·혈관 치료와 함께 진행을 막기 위한 핵심 조치는?

## 선택지

A. 흡연량만 절반으로 줄인다
B. 모든 담배 사용을 완전히 중단한다
C. 다른 치료 없이 에녹사파린을 평생 투여한다
D. 스타틴만 단독 투여한다

## 해설

젊은 흡연자의 원위부 허혈, 발가락 궤양과 이동성 표재정맥염은 폐쇄성 혈전혈관염에 맞는다. 질환 진행과 절단 위험을 줄이는 가장 중요한 조치는 완전 금연이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은흡연자의 이동성 정맥염+말단허혈을 Buerger로 설명하고 금연 B의 핵심을 명료화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006314
