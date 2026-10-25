---
type: qbank
schema_version: 1
id: medqa-us-train-006963
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:154a6c63707a2024286419ef3e7ea6c17b9bd5f394ce8592ada4b522fcff95c4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "말초동맥질환"
  - "간헐적 파행"
  - "발목-상완 지수"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 남자가 다리 통증으로 일차진료의를 찾아왔다. 개와 산책할 때 종아리에 통증이 생기며, 통증이 가라앉을 때까지 멈추거나 앉아 있어야 한다고 한다. 예전에는 최소 1마일을 걸을 수 있었지만 이제는 8블록을 걸으면 통증이 시작된다. 고지혈증과 고혈압 병력이 있다. 리시노프릴, 암로디핀, 아토르바스타틴을 복용하지만 꾸준히 복용하지는 않는다. 혈압은 161/82 mmHg, 맥박은 87회/분, 호흡수는 16회/분이다. 신체검사에서 피부가 차갑고 말초 맥박이 약하다. 양쪽 종아리는 매끈하고 털이 없다. 열린 상처나 궤양은 없다. 양쪽 발목의 발등굽힘과 발바닥굽힘 근력은 5/5이다. 발목-상완 지수는 왼쪽 0.8, 오른쪽 0.6이다. 생활습관 교정과 함께 시행할 다음 단계의 치료는 무엇인가?

## 선택지

A. 혈관성형술
B. 침상 안정
C. 클로피도그렐
D. 근전도검사

## 해설

증상과ABI0.8/0.6은 PAD이며 clopidogrel C는 항혈소판 작용으로 심근경색·뇌졸중 등 심혈관사건 위험을 줄인다. 이것이 파행의 직접치료나 모든동맥협착 진행을 멈추는 약이라는 뜻은 아니다. 운동·금연·statin·혈압관리와 복약순응도 개선도 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Clopidogrel C를 PAD진행 자체 억제보다 심혈관사건 예방으로 정확히 설명.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006963
