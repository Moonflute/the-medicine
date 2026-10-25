---
type: qbank
schema_version: 1
id: medqa-us-train-006166
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e43b5c0c56c234db0d8672c7273c1f9643cb1cb184b786cb24d4f0000c9143d
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "품행장애"
  - "반사회성 인격장애"
  - "아동 공격행동"
question_type: prognosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 행동 문제로 어머니와 함께 내원했다. 학교에서 다른 학생을 괴롭히고 싸움을 시작하며 친구들의 점심값을 훔친다고 교사가 불평했다. 6개월 전에는 이웃집 마당에 들어가 개를 잔인하게 걷어찼다는 신고도 받았다. 특별한 병력은 없고 발달은 정상이다. 다음 중 이 진단이 가장 잘 예측하는 성인 인격장애는 무엇인가?

## 선택지

A. 회피성 인격장애
B. 편집성 인격장애
C. 반사회성 인격장애
D. 조현성 인격장애

## 해설


지속적인 공격적 행동과 반사회적 행동은 반사회적 인격장애로 진행될 위험이 크다. 따라서 가장 잘 예측하는 성인 인격장애는 반사회적 인격장애이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006166

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·선지·답·해설 대조. 동물 학대·폭력·절도의 품행장애와 성인 반사회성 인격장애 위험을 연결하며 성인에서 반드시 발생한다고 확정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
