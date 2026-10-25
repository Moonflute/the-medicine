---
type: qbank
schema_version: 1
id: medqa-us-train-003615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d54a96831bd3cbec70b094f1eb1f60ef4727a1bb84052e72e0a7777a2c7a159d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "chronic cough"
  - "normal chest radiograph"
  - "pulmonary function testing"
  - "asthma evaluation"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 남성이 3개월간 지속된 비생산성 기침으로 추적 진료를 받으러 왔다. 디펜히드라민을 복용했지만 호전되지 않았고 흡연은 하지 않는다. 신체검사와 흉부 X선은 정상이었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 아지트로마이신 치료
B. 폐기능검사
C. 오메프라졸 치료
D. 흉부 CT

## 해설


원인 미확인 비생산성 기침에 대해 먼저 폐기능검사를 시행해 천식·COPD 등 폐역학적 이상을 평가한다. 이는 다음 단계 진단에 필수적이다. 따라서 폐기능검사가 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성기침·정상CXR·항히스타민 반응 없음에서 spirometry 포함 PFT B로 천식 등 평가.
- https://publications.ersnet.org/lookup/pmid/31515408

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003615
