---
type: qbank
schema_version: 1
id: medqa-us-train-009850
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c9ba63345520b297a2ac434c0087d35f6969981cf636dffed33011697b6f82da
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "정상적인 스트레스 반응"
  - "적응장애"
  - "우울 증상"
question_type: diagnosis
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여성이 6시간 동안 간헐적으로 울고 침대에서 일어나려 하지 않아 딸과 함께 내원했다. 증상은 20년간 다닌 직장에서 어제 해고된 뒤 시작되었다. 슬프고 이제 인생에서 무엇을 해야 할지 모르겠다고 말한다. 운동 유발 천식에 필요할 때 일반의약품 흡입기를 사용하고, 최근 여드름 때문에 경구 이소트레티노인을 시작했다. 예전에는 하루 한 갑의 담배를 피웠지만 지난 1년 동안 하루 2개비로 줄였다. 슬프고 매우 속상해 보인다. 체온 37°C, 맥박 분당 110회, 호흡수 분당 20회, 혈압 140/80 mmHg이다. 신체검사에서 다른 이상은 없다. 정신상태검사에서 사람, 장소, 시간에 대한 지남력은 정상이고 눈맞춤을 유지하며 지시를 따른다. 자살사고는 부인한다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. 주요우울장애
B. 정상적인 스트레스 반응
C. 적응장애
D. 약물 관련 우울증

## 해설

중요한 직장을 잃은 직후 수시간의 슬픔만으로 정신질환을 확정하지 않으며, 제시된 정보에서는 정상적인 스트레스 반응이 가장 가깝다. 정상 반응에 '1개월 이내'라는 필수 진단 규칙은 없다. 적응장애는 스트레스에 비해 현저한 고통 또는 유의한 기능장애 등을 평가하며 두 조건이 항상 모두 필요한 것은 아니다. 증상이 지속·악화되면 우울증·약물 영향과 자살위험을 재평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009850

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정상 스트레스 반응에 1개월 규칙, 적응장애에 기능손상이 반드시 있어야 한다는 오류 교정. 수시간 반응의 정상 범위 추정 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
