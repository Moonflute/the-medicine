---
type: qbank
schema_version: 1
id: medqa-us-train-006918
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c8ba6f11a97124962006b732bdd4695d8a4774d034a4b1874fe9ac4afa90585
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "1도 방실차단"
  - "베라파밀 관련 PR 연장"
  - "무증상 서맥"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uwqeyLpOywqOuLqCAoQVYgYmxvY2spLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 여성이 하루 동안 두 차례 발생한 선홍색 직장출혈로 응급실에 내원했다. 편두통으로 베라파밀을 예방적으로 복용한다. 전반적으로 건강하고 혈역학적으로 안정적이다. 심장은 잡음이나 추가 심음 없이 규칙적으로 뛰고 폐 청진은 깨끗하다. 복부는 반발통이나 방어성 긴장 없이 경미한 압통이 있다. 직장수지검사에서 장갑에 신선한 피가 묻는다. 혈색소 10.4 g/dL, 백혈구 5,000/mm³, 혈소판 175,000/mm³, PTT 35초이다. 심전도에서 심박수 분당 75회, 정상 축, PR 간격 280ms, QRS 80ms, 각 P파 뒤 QRS가 있으며 허혈 변화는 없다. 심혈관 평가와 관련해 가장 적절한 다음 단계는?

## 선택지

A. 관찰
B. 동기화 심율동전환
C. 메토프롤롤 치료
D. 심박동기 삽입

## 해설

PR280ms와1:1전도는1도AV전도지연이다. 안정·무증상에서는 제시 중 관찰 A가 적절하며 verapamil 기여를 검토한다. Metoprolol 등 AV결절차단제는 차단을 더 악화시킬 수 있어 진행차단의 치료제로 설명하지 않는다. 심박동기 적응증은 증상·차단종류·가역원인을 따로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무증상1도차단 관찰 A는 유지하고 진행차단에 beta차단을 치료로 쓰는 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006918
