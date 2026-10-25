---
type: qbank
schema_version: 1
id: medqa-us-train-005871
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1f5d3db6eca6db9bff844293482dc17ad1c36a8dab58d67dfb0a8171bf80f64f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "적응장애"
  - "우울한 기분"
  - "이혼 후 스트레스 반응"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yggeydkSDsnqXslaAgKEFkanVzdG1lbnQgRGlzb3JkZXIpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 36세 남성이 몇 주 동안 지속된 피로와 우울한 기분으로 친구와 함께 내원했다. 그동안 직장에 가지 않았고 친구들과 볼링을 하기로 한 두 번의 약속에도 나타나지 않았다. 친구는 직장을 잃을까 걱정한다. 대부분의 시간을 집에서 소파에 앉아 TV를 보며 보낸다. 밤에 자주 깨고 다시 잠들기까지 20분이 걸리기도 한다. 일주일 동안 매일 위스키 반 파인트를 마셨다. 아내가 4주 전 떠나 집을 나갔다. 활력징후는 정상이고 정신상태검사에서 사람, 장소, 시간에 대한 지남력은 정상이지만 감정이 둔화되어 있으며 아내 없이 어떻게 살지 모르겠다고 말한다. 자살사고는 부인한다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 알프라졸람 단기 처방
B. 인지행동치료 시작
C. 디설피람 치료 시작
D. 입원

## 해설

배우자와의 이별 뒤 우울감·불면·기능저하가 있어 제시된 선택지 중 인지행동치료를 시작하는 것이 적절하다. 진단 기준과 음주 양상을 평가하고 추적한다. 자살사고를 부인한다는 사실만으로 위험이 없다고 단정하지 않으며, 알코올과 벤조디아제핀의 병용 위험을 고려해 알프라졸람을 단순 수면 해결책으로 처방하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005871

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 자살사고 부인으로 위험이 없다고 단정한 설명 교정. 스트레스 이후 기능저하와 음주 증가에서 CBT 원정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
