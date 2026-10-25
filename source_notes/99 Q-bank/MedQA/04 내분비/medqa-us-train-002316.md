---
type: qbank
schema_version: 1
id: medqa-us-train-002316
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16e54aff9d730fa130fa88c76b2b645f9f1187ac5270c6c2e4baae10fae87c50
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteoporosis"
  - "raloxifene"
  - "selective estrogen receptor modulator"
  - "hot flashes"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: adverse_effect
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 여성이 건강검진을 위해 내원했다. 최근 DEXA에서 골밀도가 평균보다 2 표준편차 낮았다. 천식, 유방암, COPD, 불안, 과민성장증후군, 자궁내막암, 우울증 병력이 있으며 클로나제팜, 알부테롤, 플루옥세틴을 복용한다. 적절한 치료 후 귀가했으나 한 달 후 추적 방문에서 약을 잘 복용하고 있으며 간헐적으로 열감이 생겼다가 곧 사라진다고 한다. 다음 중 새로 시작했을 가능성이 높은 약물에 대해 옳은 설명은?

## 선택지

A. 자궁에서 에스트로겐 수용체 작용제
B. 자궁에서 에스트로겐 수용체 길항제
C. 파골세포 세포자멸사를 유도한다
D. 부갑상샘호르몬 유사체

## 해설

안면홍조를 동반할 수 있는 raloxifene은 선택적 estrogen 수용체 조절제(SERM)이다. 뼈에서는 estrogen 유사 작용으로 골흡수를 줄이고, 자궁에서는 estrogen 길항 작용을 나타내므로 B이다. 자궁에서 estrogen을 차단하기 때문에 골밀도가 좋아진다는 기존 인과 설명은 잘못이다. 이 문항의 약물기전 판단과 실제 골감소증 환자의 치료 적응증·암 병력·혈전 위험 평가는 구분해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Raloxifene의 골밀도 개선은 뼈의 estrogen 작용제 효과이며 자궁 길항 효과 때문이 아님. B의 조직별 작용을 구분.
- https://www.cancer.gov/about-cancer/treatment/drugs/raloxifenehydrochloride

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002316
