---
type: qbank
schema_version: 1
id: medqa-us-train-004695
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ad4e938640d9af16cc3abb3300bdb5ef05b3278c8bc905b3e2f467d37fc2eff8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "말초동맥질환"
  - "간헐적 파행"
  - "실로스타졸"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EdWxveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 발목상완지수 0.80인 말초동맥질환으로 금연, 구조화된 보행운동과 위험인자 치료를 받고 있다. 종아리 파행으로 보행이 여전히 불편하지만 안정 시 통증이나 궤양은 없다. 심부전도 없다. 보행 증상을 완화하는 데 추가할 수 있는 약물은?

## 선택지

A. 와파린
B. 둘록세틴
C. 비분획 헤파린
D. 실로스타졸

## 해설

실로스타졸은 일부 간헐적 파행 환자의 보행 거리와 증상을 개선한다. 심부전이 있는 환자에게는 사용하지 않는다. 운동과 동맥경화 위험 관리도 계속한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 파행의 cilostazol D는 HF 금기를 포함한 증상개선 치료로 한정.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004695
- ACC/AHA 하지 말초동맥질환 진료지침(2024): https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251
