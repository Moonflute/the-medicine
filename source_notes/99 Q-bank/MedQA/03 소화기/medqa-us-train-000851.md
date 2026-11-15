---
type: qbank
schema_version: 1
id: medqa-us-train-000851
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2c1727d5a1616769a8e59864d183e2f616d286d0b261a7dff050aea72ccb4bc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "colorectal cancer"
  - "adenocarcinoma"
  - "type 2 diabetes mellitus"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

대장내시경 생검으로 결장 선암이 확인된 72세 남성의 병기 평가 CT에서 간에 1.3 cm 결절 하나가 보인다. 다른 전이는 없고 이 결절의 성격에 따라 수술 계획이 달라진다. 간 병변을 구분할 다음 검사는?

## 선택지

A. 간 비조영 CT
B. 조영 증강 간 MRI
C. 대장내시경 재검
D. CEA 재검만 시행

## 해설


CT에서 간전이가 의심되고 간 병변이 수술 전략을 바꿀 수 있는 경우 조영 간 MRI로 병변의 성격과 개수·분포를 더 정확히 평가한다. CEA만으로는 전이 여부를 판단할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선암으로 확인된 CRC의 제시 위험인자 중 72세 연령 B가 가장 강함. aspirin/naproxen을 유발 위험인자로 뒤집지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000851
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11082542/
