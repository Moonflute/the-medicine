---
type: qbank
schema_version: 1
id: medqa-us-train-006076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:056d9203027619ce1afa4ed4574603799979c99e892809e27f13eed9c600b65a
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "항인지질 증후군"
  - "반복 유산"
  - "항인지질 항체"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

전신홍반루푸스가 있는 35세 여성이 임신을 준비한다. 반복 임신 소실과 심부정맥혈전증이 있었고 항인지질항체 지속 양성으로 혈전성 항인지질증후군이 확진됐다. 임신이 확인된 뒤 권할 항혈전 치료는?

## 선택지

A. 와파린을 임신 전 기간 그대로 유지
B. 저용량 아스피린 단독
C. 직접 경구 항응고제 단독
D. 저용량 아스피린과 치료용량 헤파린 병용

## 해설


이전 혈전이 있는 항인지질증후군 환자는 임신 중 저용량 아스피린과 치료용량 헤파린을 사용한다. 혈전 병력이 없는 산과적 항인지질증후군의 예방용량과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006076 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SLE·재발2분기 유산·DVT·livedo는 항인지질증후군을 지지하여 항인지질항체 D가 적절하다. 원문·선지·해설 직접 대조; 실제 지속양성 확인을 생략하는 진단 승인은 아니다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006076
- https://doi.org/10.1136/ard-2019-215213
