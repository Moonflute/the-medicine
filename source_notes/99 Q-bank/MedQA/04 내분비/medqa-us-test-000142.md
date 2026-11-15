---
type: qbank
schema_version: 1
id: medqa-us-test-000142
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:068e720e88fd6745d2a7ad358125dc9bf9235b1fa18b840893d89f2ae282a67a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "ACTH 비의존성 쿠싱증후군"
  - "부신 종양"
  - "코르티솔 과다"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDsooXslpEgKEFkcmVuYWwgVHVtb3IpLm1k
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성의 내인성 고코르티솔혈증이 검사로 확인됐다. 혈장 ACTH는 반복해서 억제돼 있다. 코르티솔 과다의 원인을 찾을 다음 영상은?

## 선택지

A. 부신 CT 또는 MRI
B. 뇌하수체 MRI
C. 흉부 CT
D. 복부 혈관 도플러

## 해설

확인된 고코르티솔혈증에서 ACTH가 낮으면 부신성 과분비가 의심된다. 부신 영상으로 병변을 평가한다. ACTH가 높은 환자에서 쓰는 뇌하수체 및 이소성 분비 평가와 순서가 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 낮은 ACTH가 부신성 고코르티솔혈증의 국소화 방향을 결정함을 설명; MRI만 필수라는 표현 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000142
- https://doi.org/10.1507/endocrj.EJ25-0492
