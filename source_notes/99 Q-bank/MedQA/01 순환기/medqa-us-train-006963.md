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

49세 남성이 보행 시 종아리 통증으로 진료를 받는다. 발목상완지수는 오른쪽 0.60, 왼쪽 0.80이다. 출혈 금기는 없지만 아스피린을 복용했을 때 아나필락시스가 있었다. 금연·운동·지질 치료에 더해 심혈관 사건 예방 목적으로 추가할 약은?

## 선택지

A. 실로스타졸 단독
B. 와파린 단독
C. 클로피도그렐 단독
D. 펜톡시필린 단독

## 해설

발목상완지수가 낮은 증상성 말초동맥질환에서는 심근경색과 뇌졸중 위험을 낮추기 위해 항혈소판제를 사용한다. 아스피린 중증 알레르기가 있어 클로피도그렐 단독이 적절하다. 실로스타졸은 주로 파행 증상 완화 목적으로 쓴다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Clopidogrel C를 PAD진행 자체 억제보다 심혈관사건 예방으로 정확히 설명.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006963
- ACC/AHA 하지 말초동맥질환 진료지침(2024): https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251
