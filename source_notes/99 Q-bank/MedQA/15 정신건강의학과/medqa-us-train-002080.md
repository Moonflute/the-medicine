---
type: qbank
schema_version: 1
id: medqa-us-train-002080
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d8b9cd0060ab042b230cb798640e7d6e23f78accfebc1117340d1843875f257
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Alzheimer disease"
  - "moderate-to-severe dementia"
  - "memantine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

알츠하이머 치매 환자가 도네페질을 잘 복용하고 있지만 인지와 일상 기능 저하가 진행해 중증 단계로 평가됐다. 갑작스러운 악화나 섬망은 아니고 신장기능도 안정적이다. 추가할 수 있는 인지 증상 치료약은?

## 선택지

A. 리스페리돈
B. 메만틴
C. 디펜히드라민
D. 프라미펙솔

## 해설

중등도에서 중증 알츠하이머 치매에서는 메만틴을 고려할 수 있다. 중증 단계에서는 이미 콜린에스터레이스 억제제를 복용하는 환자에게 추가하는 선택이 있다. 증상 치료이지 진행을 멈추는 약은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002080
- https://pubmed.ncbi.nlm.nih.gov/39944527/
- https://www.nice.org.uk/guidance/ng97/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 메만틴을 경증~중등도 치료로 설명하고 나머지 선지를 모두 정신병약으로 묶은 오류 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng97/chapter/Recommendations
