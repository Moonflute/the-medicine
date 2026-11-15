---
type: qbank
schema_version: 1
id: medqa-us-train-007228
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71c9766d41e83b2f947ab33bf3d452908ecf4075403106e53629a7c2d15af73a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "말기 알츠하이머병"
  - "치매 진행"
  - "가정 호스피스"
  - "연명의료 목표"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

중증 알츠하이머병 환자가 일상생활에서 전적인 도움을 받고 반복해서 흡인성 폐렴을 앓는다. 가족은 위루관이 폐렴을 막을 수 있는지 묻는다. 환자는 이전에 편안함을 우선하고 싶다고 했다. 적절한 계획은?

## 선택지

A. 흡인 예방을 위해 위루관을 일률적으로 삽입한다
B. 환자의 목표를 확인하고, 안전하게 도와 먹이기와 구강 관리 등 편안함을 위한 계획을 논의한다
C. 체중 감소가 있으므로 이전 의사와 관계없이 장기 정맥영양을 시작한다
D. 환자와 가족의 의사를 확인하지 않고 즉시 모든 먹이기와 돌봄을 중단한다

## 해설

중증 치매에서 위루관이 흡인을 확실히 막는다고 볼 수 없고 장기 관급식은 일률적으로 시작하지 않는다. 연하 문제를 평가하고 회복 가능한 원인, 환자의 가치, 가족의 돌봄 여건에 맞춰 계획을 세운다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007228
- https://pubmed.ncbi.nlm.nih.gov/38772068/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 가정 호스피스 원정답 유지. MMSE/섭취 저하만으로 자동 말기·급여 적격 확정 대신 환자 목표와 예후 평가에 따른 가정 완화·호스피스 연계로 한정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
