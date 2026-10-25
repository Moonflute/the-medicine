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

71세 여성이 아들과 함께 병원에 왔다. 증상은 없지만 기억력과 공간지남력이 저하되어 있다. 혼자 걷고 자기관리는 가능하나 새로 들은 정보를 자주 잊고 지난 6개월 동안 집에서 시장까지 가는 길을 여러 번 잃어버려 가족이 혼자 외출하지 못하게 했다. 만성질환, 주요 심혈관 사건, 두부 외상은 없으며 아버지가 치매였다. 활력징후와 신경학적 진찰은 정상이었고 몬트리올 인지평가 점수는 18점이었다. 다음 중 적응증이 있는 약물은?

## 선택지

A. 이미프라민
B. 리튬
C. 도네페질
D. 설피리드

## 해설

최근 기억 저하와 반복되는 길 잃음으로 안전한 독립 외출이 어려워진 양상은 단순 경도인지장애보다 치매, 특히 알츠하이머병을 시사한다. MoCA 점수만으로 원인이나 병기를 확정하지는 않는다. 제시된 약물 중 도네페질은 알츠하이머 치매의 증상 치료에 사용하는 콜린에스터레이스 억제제이다. 이 답을 경도인지장애 전반에 도네페질이 적응증이라는 의미로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000809

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. MoCA 18점만으로 MCI=초기 알츠하이머라 확정한 오류 수정. 독립성 저하 임상 맥락과 증상 치료 적응증을 구분.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng97/chapter/Recommendations
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5772157
