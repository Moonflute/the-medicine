---
type: qbank
schema_version: 1
id: medqa-us-train-000360
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0ca0d19cc54d752739edb699b768f4c01f1cc21baa1309d469f3daf8d7603a99
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "small cell lung cancer"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: management
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
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 생검에서 소세포폐암으로 진단됐다. 동측 종격동 림프절이 침범됐지만 병기 검사에서 원격전이는 없다. 병변은 한 방사선 치료 범위에 포함할 수 있고 전신 상태는 양호하다. 완치를 목표로 한 초기 표준 치료는?

## 선택지

A. 쐐기절제술 단독
B. 백금제제·에토포사이드와 흉부 방사선의 동시 치료
C. 폐엽절제술 단독
D. 게피티닙 단독

## 해설


림프절을 침범한 제한병기 소세포폐암은 백금제제와 에토포사이드를 흉부 방사선과 병행하는 것이 초기 표준이다. 치료 뒤 진행이 없으면 적응증과 접근성을 평가해 공고 면역치료를 추가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조직상 SCLC에 동측 종격동 침범·원격전이 없음. 수술 단독 대신 platinum/etoposide+흉부방사선 B가 다음 치료에 부합.
- https://www.cancer.gov/types/lung/patient/small-cell-lung-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000360
- https://www.nejm.org/doi/full/10.1056/NEJMoa2404873
