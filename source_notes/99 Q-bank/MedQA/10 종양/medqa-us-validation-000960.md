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
question_type: management
difficulty: complex
answer: A
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

절제할 수 없는 소세포폐암으로 여러 화학요법을 받은 52세 남성이 2일간의 발열로 응급실에 왔다. 마지막 시스플라틴과 에토포사이드 치료는 10일 전에 끝났다. 체온은 38.5°C, 혈압은 100/60 mm Hg, 맥박은 115회/분이며 백혈구 4,000/mm³, 총 호중구 비율 8%이다. 혈액배양 검체를 채취했다. 가장 적절한 다음 처치는?

## 선택지

A. 세페핌
B. 피페라실린
C. 클린다마이신
D. 고해상도 흉부 CT

## 해설


백혈구 4,000/µL의 호중구 8%이면 ANC는 약 320/µL이며 항암 후 발열 38.5°C와 함께 발열성 호중구감소증에 해당한다. 배양 검체를 신속히 채취하되 영상 결과 때문에 항생제를 지연하지 않고 항녹농균 활성이 있는 정주 cefepime A 같은 경험적 치료를 시작한다. 신기능에 따라 용량을 조절하며 혈역학적 불안정·내성 위험·특정 감염 병소가 있으면 추가 또는 대체 항균 범위가 필요하다. Piperacillin 단독은 piperacillin-tazobactam과 같지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000960 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANC 320/µL의 발열성 호중구감소증에서 신속한 cefepime A 유지. 균혈증 검사·위험도 및 신기능 평가를 병행하는 안전성 맥락 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/050817s012lbl.pdf
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000960
