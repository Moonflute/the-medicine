---
type: qbank
schema_version: 1
id: medqa-us-train-009431
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ccdf6a1233c75db3bb8e7bf5f709532f5160f983068c433a3c1962c7c2705e8
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "delirium"
  - "섬망"
  - "fluctuating consciousness"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남자가 의식 변화로 입원했다. 며칠 전까지 평소 상태였지만 이후 혼란스럽고 기면이 있으며 건망증이 생기고 같은 질문을 반복한다. 어떤 때는 완전히 정상으로 보이다가 가족을 알아보지 못하기도 한다. 어제는 방이 뱀으로 가득 찼다고 소리쳤다. 의학적으로 조절되는 제2형 당뇨병과 만성콩팥병이 있으며 격일로 혈액투석을 받는다. 흡연, 음주, 약물 사용은 없다. 혈압 129/88 mmHg, 맥박 112회/분, 체온 38.2°C, 호흡수 20회/분이다. 사람과 장소만 지남력이 있고 MMSE는 18/30으로 기본 계산과 3개 물체 중 1개 회상에 어려움이 있다. 경부강직은 없고 근력은 양측 5/5이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 섬망
B. 치매
C. 일과성 전반적 기억상실
D. 베르니케 실어증

## 해설

수일 내 발생한 혼돈·주의/인지 변화가 시간에 따라 크게 변동하고 지각 이상이 동반되어 섬망이 가장 적절하다. 치매보다 급성·변동성 경과가 핵심이다. 발열과 투석/신질환 병력이 있으므로 감염·대사 이상·약물 등 원인을 평가해야 하며 투석 자체가 확정 원인이라는 뜻은 아니다. 원문에 수면-각성 주기 변화가 명시되지는 않았다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009431

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 급성 변동성 섬망 답 유지. 원문에 없는 수면주기 교란과 투석 자체가 확정 원인이라는 해설 삭제.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
