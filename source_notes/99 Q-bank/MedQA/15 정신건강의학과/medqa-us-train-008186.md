---
type: qbank
schema_version: 1
id: medqa-us-train-008186
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4108bd93365a12a7e25a8d8d3bcfe1aa58b9614cc4a14ebbe5cfbd8feea75c6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "suicide attempt"
  - "bipolar disorder"
  - "involuntary psychiatric admission"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: complex
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

19세 여대생이 자살 시도로 응급실에 왔다. 직장에서 절도하다 해고된 뒤 “보고 싶을 거야”라는 문자를 보냈고, 기숙사 샤워실에서 피를 흘리며 웅크린 채 발견되었다. “이 삶에서 벗어나고 싶다”고 말하며 왼쪽 전완에 4 cm 수직 절개가 있다. 양극성장애로 리튬을 처방대로 복용하고 매주 정신과 진료를 받는다. 이전 자살 시도나 정신과 입원은 없다. 열상 봉합 중 입원 여부를 묻자 기분이 나아졌고 과잉반응을 이해한다고 하며 집에 가고 싶다고 한다. 남자친구는 함께 있겠다고 하고 총기 접근성도 없다. 가장 적절한 처치는?

## 선택지

A. 리튬 중단 후 발프로산 시작
B. 퇴원 전 자살방지 서약서 작성
C. 비자의 입원
D. 다음 날 정신과 예약

## 해설

최근 구체적인 작별 문자와 실제 자살시도가 있어 짧은 시간 뒤 기분이 나아졌다는 말만으로 안전을 확정하지 않는다. 제시된 선택지 중 입원하여 보호·정신과 평가를 받게 하는 것이 원문 답이다. 자살방지 서약서는 위험 평가와 안전 계획을 대체하지 않고 남자친구의 동행이나 총기 부재만으로도 위험이 해소되지 않는다. 환자가 현재 계속 자살 의도를 말한다고 원문을 바꾸어 설명하지 않는다. 실제 비자의 입원은 충분한 재평가와 관할 법적 요건·절차에 따라 결정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008186

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정답 입원 유지하되 환자가 여전히 자해 의도를 표현한다는 본문에 없는 사실과 비자 오기 제거. 최근 자살시도·단기 호전의 한계 및 법적 절차 구별.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
