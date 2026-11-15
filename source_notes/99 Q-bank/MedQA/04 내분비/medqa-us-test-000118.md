---
type: qbank
schema_version: 1
id: medqa-us-test-000118
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:63c09bbad61908220a3c36c9deea9e6d1f4d822143fbb23da1634fde41578375
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "메트포르민 관련 젖산산증"
  - "고음이온차 대사성 산증"
  - "신장기능 저하"
  - "Lactic acidosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCsOymnSAoQWNpZG9zaXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

메트포르민을 복용하는 66세 남성이 구토와 탈수로 급성 신손상을 보인다. 크레아티닌이 1.2에서 3.1 mg/dL로 상승했고, 정맥 pH 7.22, 젖산 9 mmol/L, 혈중 케톤은 정상이다. 소생과 원인 평가 중 우선 중단할 약은?

## 선택지

A. 아토르바스타틴
B. 아스피린 저용량
C. 메트포르민
D. 레보티록신

## 해설

급성 신손상에서는 메트포르민 배설이 감소한다. 젖산산증이 있는 경우 메트포르민을 보류하고 저관류, 패혈증 등 다른 원인도 신속히 평가한다. 복용력만으로 산증의 원인을 하나로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 고음이온차 산증/신기능 저하에서 MALA 가능성을 설명하되 복용/젖산 미측정을 구별하고 대사 축적이 아닌 신장 청소율 감소로 교정.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/204353s045%2C205879s022lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000118
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7043977/
