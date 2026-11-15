---
type: qbank
schema_version: 1
id: medqa-us-test-000809
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:78a8552189f4d6aa63784c512b6e790ab23e1e7e78e4ff4494b19838181deeeb
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "알츠하이머병"
  - "경도인지장애"
  - "콜린에스터레이스 억제제"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qyveuPhCDsnbjsp4Ag7J6l7JWgIChNaWxkIENvZ25pdGl2ZSBJbXBhaXJtZW50KS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 환자가 경도 알츠하이머 치매로 진단됐다. 최근 기억 저하로 약과 가계부를 혼자 관리하기 어렵다. 심박수는 정상이고 약물 금기는 없다. 인지 증상 완화를 위해 시작할 수 있는 약은?

## 선택지

A. 이미프라민
B. 리튬
C. 도네페질
D. 올란자핀

## 해설

도네페질은 경도·중등도 알츠하이머 치매에서 인지 증상 완화에 쓰는 콜린에스터레이스 억제제다. 인지검사 점수 하나로 진단하지 않으며, 일상 독립성이 유지되는 모든 경도인지장애에 사용하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000809
- https://pubmed.ncbi.nlm.nih.gov/39944527/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. MoCA 18점만으로 MCI=초기 알츠하이머라 확정한 오류 수정. 독립성 저하 임상 맥락과 증상 치료 적응증을 구분.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng97/chapter/Recommendations
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5772157
