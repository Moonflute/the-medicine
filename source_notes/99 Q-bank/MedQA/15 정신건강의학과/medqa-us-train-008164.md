---
type: qbank
schema_version: 1
id: medqa-us-train-008164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:867cc058583f0940f27e8e485dd7b4db964fe7998dcab275b6c697204920282a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "frontotemporal dementia"
  - "Pick disease"
  - "disinhibition"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghOuRkOy4oeuRkOyXvSDsuZjrp6QgKEZyb250b3RlbXBvcmFsIERlbWVudGlhKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghO2ZmCDsnqXslaAgKENvbnZlcnNpb24gRGlzb3JkZXIpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 2년 사이 사회적 거리낌을 잃고 가족의 감정에 무관심해졌다. 단 음식을 집착하듯 먹고 계획을 세우기 어려워하지만 사건 기억은 비교적 유지된다. MRI에서 전두엽과 앞쪽 측두엽이 위축됐다. 가장 가능성 높은 진단은?

## 선택지

A. 알츠하이머병
B. 행동변이 전두측두치매
C. 루이소체 치매
D. 혈관성 인지장애

## 해설

초기 탈억제, 공감 저하, 식행동 변화 및 집행기능 저하와 전두·앞쪽 측두엽 위축은 행동변이 전두측두치매에 부합한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008164
- https://pubmed.ncbi.nlm.nih.gov/21810890/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 인지장애 문항에 전혀 무관한 CT/경막하혈종/배액 해설이 붙은 오류 전면 교정. 픽병 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nia.nih.gov/health/frontotemporal-disorders/what-are-frontotemporal-disorders-causes-symptoms-and-treatment
