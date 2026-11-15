---
type: qbank
schema_version: 1
id: medqa-us-validation-000960
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:26c02a78898a4caebd5b665013c6757721b055a3c55b0bea98eadbb3ab03c4f9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "발열성 호중구감소증"
  - "소세포폐암"
  - "세페핌"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
---

# MedQA US 임상문제

## 문제

소세포폐암 환자가 항암치료 첫 주기 뒤 발열성 호중구감소증으로 입원했다가 회복했다. 첫 주기에는 예방적 G-CSF를 사용하지 않았다. 치료 목적상 투여 간격과 용량을 유지하는 것이 중요하다. 다음 주기에 재발을 줄일 조치는?

## 선택지

A. 발열이 없을 때도 반코마이신을 정맥 투여한다
B. 한 번 회복했으므로 모든 예방을 생략한다
C. 반드시 용량을 줄이고 다른 방법은 고려하지 않는다
D. 다음 주기부터 G-CSF 이차 예방을 고려한다

## 해설


이전 주기에 호중구감소 합병증이 있었고 치료 강도를 유지하는 것이 중요하면 G-CSF 이차 예방을 고려한다. 감량·연기도 치료 목표에 따라 가능한 대안이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000960 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANC 320/µL의 발열성 호중구감소증에서 신속한 cefepime A 유지. 균혈증 검사·위험도 및 신기능 평가를 병행하는 안전성 맥락 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/050817s012lbl.pdf
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000960
- https://doi.org/10.1200/JCO-25-02938
