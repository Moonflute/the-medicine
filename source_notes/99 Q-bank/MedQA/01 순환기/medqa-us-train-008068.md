---
type: qbank
schema_version: 1
id: medqa-us-train-008068
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a421ca2c95cf718e2614281dd51b67fd63f6edc1771a5a204bd8cfe5d3e64e0
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "amiodarone hepatotoxicity"
  - "transaminitis"
  - "drug-induced liver injury"
related_disease_slugs:
  - MTEg7Jm46rO8L-qwhCDshpDsg4EgKExpdmVyIEluanVyeSkubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남자가 정기 건강검진을 위해 내원했다. 고혈압, 심방세동, 양극성장애, 무릎 골관절염이 있고 리시노프릴, 아미오다론, 라모트리진, 아세트아미노펜을 복용한다. 6개월 전 아미오다론을 시작했고 4개월 전 리튬을 라모트리진으로 변경했다. 활력징후와 진찰은 정상이다. AST 110 U/L, ALT 115 U/L이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 아미오다론 중단
B. 아세트아미노펜 중단
C. 6개월 후 검사 결과 추적
D. 음주 감소

## 해설

아미오다론 시작 후 간효소 상승은 약물성 간손상을 의심하게 하므로, 제시된 선택지 중 A의 중단을 검토하는 것이 적합하다. 허가사항은 정상 상한의 3배 초과 또는 기저치가 높은 환자에서 2배 상승 시 감량이나 중단과 추적검사를 권고한다. 이 문항에는 정상 상한과 기저치가 없어 배수를 임의로 확정하지 않는다. 아세트아미노펜의 복용량 등 다른 원인도 확인하며, 평가 없이 6개월을 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아미오다론 간독성 평가와 중단 기준을 명료화하고 모든 간효소 상승이 즉시 중단이라는 과장을 제거.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3e631c5-1204-419c-8dbe-fa9b37a77f97

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008068
