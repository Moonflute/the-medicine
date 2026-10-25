---
type: qbank
schema_version: 1
id: medqa-us-train-004333
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50d607437407e64ac05f0ea7d4b8a2b4f412c5041da794e6fad4e61dc8264bf4
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 I형 장애"
  - "조증"
  - "리튬 유지치료"
  - "Bipolar I disorder"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 남자가 이상 행동으로 친구들에게 이끌려 정신병원에 왔다. 며칠 밤 동안 잠을 자지 않고 아파트 벽을 보라색으로 칠하고 성경을 큰 소리로 읽으며 빠르게 말하고 성적으로 도발적인 발언을 했다. 가족은 지난해에도 비슷한 에피소드가 두 번 있었다고 한다. 정신상태검사에서 정동이 불안정하고 과대망상이 있다. 소변 독성검사는 음성이다. 입원 후 조증에 리튬을 시작했고 2주 이내 증상이 호전되었다. 퇴원을 앞두고 리튬을 어떻게 관리해야 하는가?

## 선택지

A. 평생 리튬을 계속 투여
B. 치료적 혈청 리튬 농도에 도달할 때까지 계속 투여한 후 감량
C. 유지치료를 위해 리튬을 아리피프라졸로 교차 감량
D. 리튬을 중단하고 향후 조증 재발 시 다시 시작

## 해설

최근 조증 외에도 작년에 두 차례 비슷한 삽화가 있어 재발 위험이 높으므로 리튬에 반응했다고 퇴원 때 즉시 중단하지 않고 장기 유지 치료를 계획한다. 제시된 선택지 중 평생 지속으로 표현된 장기 유지 선택이 가장 적절하다. 다만 모든 양극성 I형 환자에게 재평가 없이 동일 약물을 평생 강제한다는 뜻은 아니다. 신장·갑상선 기능, 혈중농도, 부작용·상호작용과 선호를 정기적으로 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004333

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 반복 조증의 장기 리튬 유지 원정답 유지. 양극성 I형이면 모든 환자가 예외 없이 평생 같은 약이라는 해설 단정 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations
