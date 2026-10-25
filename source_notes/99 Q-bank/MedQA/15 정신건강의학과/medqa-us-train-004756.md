---
type: qbank
schema_version: 1
id: medqa-us-train-004756
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87359a91f0a2ef44dc5af18e7aaa53cd6056b3c5716231d18aeed5fc9b7be8ab
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "외상후 스트레스장애"
  - "악몽"
  - "프라조신"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yZuOyDgSDtm4Qg7Iqk7Yq466CI7IqkIOyepeyVoCAoUFRTRCkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVheuqvSAoTmlnaHRtYXJlKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성이 9주 동안 잠을 잘 수 없어 보훈병원에 왔다. 12주 전 아프가니스탄 파병에서 돌아온 군인이다. 15주 전 부대가 외딴 거리에서 매복을 당해 동료 군인이 사망했다. 이 사건의 생생한 꿈 때문에 밤에 자주 깬다. 친구를 구하지 못한 것을 자책하고 잠들기 어렵고 원하는 시간보다 일찍 깬다. 이 기간 동안 외딴 거리를 걷는 것도 피하기 시작했다. 인지행동치료는 거부하고 설트랄린을 시작했다. 5주 후에도 악몽과 수면 곤란이 지속되어 다시 내원했다. 다음 중 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 디아제팜 치료
B. 트리아졸람 치료
C. 페넬진 치료
D. 프라조신 치료

## 해설

외상 재경험·회피·수면장애가 1개월 이상 지속되어 PTSD를 시사한다. 설트랄린 치료에도 지속되는 외상 관련 악몽에 대해 제시된 선택지 중 프라조신을 고려할 수 있다. VA/DoD 2023은 PTSD 관련 악몽에 약하게 권고하지만 전반적인 PTSD 증상의 표준 단독치료라는 뜻은 아니다. 기립저혈압 등 부작용을 고려하며, 벤조디아제핀을 PTSD의 기본 치료로 선택하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004756

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PTSD 악몽에 프라조신 원정답 유지. 전반적 PTSD에 대한 보편적 2차와 악몽 표적의 약한 권고를 구분.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp
