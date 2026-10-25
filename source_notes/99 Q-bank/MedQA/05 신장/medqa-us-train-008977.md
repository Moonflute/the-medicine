---
type: qbank
schema_version: 1
id: medqa-us-train-008977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa7c6b89096e5703f5d5e765a2c06308993a5eb8cb36011549a4c19c4db9a31d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "postrenal acute kidney injury"
  - "urinary retention"
  - "oliguria"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2Mpe2bhCDquInshLEg7L2p7YylIOyGkOyDgSAoUG9zdHJlbmFsIEFjdXRlIEtpZG5leSBJbmp1cnkpLm1k
question_type: investigation
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "정답 C와 반대로 eGFR을 정답이라 한 해설 및 체중 누락 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

58세 남성이 하루나 이틀 동안 소변을 보지 못하고 3시간 동안 심한 치골상부 통증이 있어 응급실에 내원했다. 체중은 84kg이다. 양성 전립선비대증으로 프라조신과 타다라필 치료 중이다. 혈압 180/100mmHg, 맥박 80회/분, 호흡수 23회/분, 체온 36.5°C(97.7°F)이다. 방광 스캔에서 소변 700mL가 보였고 폴리 카테터를 삽입해 배액했다. 입원 시와 8시간 후 검사에서 크레아티닌 1.4→1.6mg/dL, BUN 64→62mg/dL, 소변량 250→260mL였다. 신장내과 협진을 제안한 이유를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 혈청 크레아티닌
B. 혈청 BUN
C. 소변량
D. 추정 사구체여과율(eGFR)

## 해설

폐색을 해소한 뒤에도 소변량이 적으면 AKI를 평가한다. 원문의 체중 84kg에서 8시간 동안 260mL는 약 0.39mL/kg/h로, 6시간 이상 0.5mL/kg/h 미만이라는 소변량 기준에 해당한다. 단일 250mL라는 임의 기준이 아니며 급격히 변하는 신기능에서는 계산 eGFR만으로 중증도를 판단하지 않는다. 실제 배액·측정 시간과 도뇨관 개통 상태도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008977

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 정답 C와 반대로 eGFR을 정답이라 한 해설 및 체중 누락 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
