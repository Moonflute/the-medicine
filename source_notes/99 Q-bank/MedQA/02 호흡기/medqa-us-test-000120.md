---
type: qbank
schema_version: 1
id: medqa-us-test-000120
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1d4c30178dd5fc7ed7d8de045c98c8bc5c42154487db8305b866828ccac962cf
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "과민성 폐렴"
  - "조류 사육자 폐"
  - "항원 회피"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qzvOuvvOyEsSDtj5DsnqXsl7wgKEh5cGVyc2Vuc2l0aXZpdHkgUG5ldW1vbml0aXMpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQmVjbG9tZXRhc29uZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 조류 사육사가 새 우리를 청소한 뒤 수 시간마다 마른기침과 숨참이 반복된다고 한다. 며칠 일을 쉬면 호전되고, 고해상도 CT에서 소엽중심성 간유리 결절과 공기포획이 보인다. 조류 항원에 의한 과민성 폐렴으로 판단했다. 재발을 줄이기 위한 가장 중요한 조치는?

## 선택지

A. 흡입 스테로이드만 시작하고 노출을 유지한다
B. 가정에서 산소요법부터 시작한다
C. 작업 조정 등을 통해 조류 항원 노출을 피한다
D. 항생제를 예방적으로 복용한다

## 해설


과민성 폐렴에서는 원인 항원을 찾아 노출을 차단하는 것이 치료의 기본이다. 증상이 심하거나 섬유화가 있는 경우에는 약물치료를 별도로 평가하며 항원 회피만으로 항상 회복되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조류 노출 근무일 말 반복하는 기침·발열과 미만성 폐음영은 과민폐렴을 지지. 원인 항원 회피 C와 해설의 연결 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000120
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12235292/
