---
type: qbank
schema_version: 1
id: medqa-us-train-008142
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fb901a4b01295752f37977145b6f1e65afd4c00dcb93346cd03c2a51718ad02e
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "bronchiectasis"
  - "hemoptysis"
  - "bronchial artery damage"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성이 기관지확장증으로 추적 중이다. 이번에 생명을 위협할 정도의 객혈로 입원해 기도와 순환을 안정시켰다. 조영증강 CT에서 출혈과 연관된 확장된 기관지동맥이 확인됐지만 객혈이 지속된다. 출혈원 조절을 위한 다음 처치는?

## 선택지

A. 기관지동맥 색전술
B. 폐활량검사
C. 전신 항응고제 투여
D. 기침 억제제만 주고 기다린다

## 해설

기관지확장증은 비대해진 기관지동맥에서 심한 출혈이 날 수 있다. 초기 기도·순환을 안정시키고 원인 혈관을 찾은 뒤 기관지동맥 색전술로 지혈을 시도한다. 기도 폐쇄가 진행 중이면 기도 확보가 먼저다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기관지확장증의 객혈을 폐포 파열이나 기관지-폐동맥 혼동으로 설명한 오류를 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008142
- https://doi.org/10.3348/kjr.2018.19.5.866
- https://publications.ersnet.org/lookup/doi/10.1183/13993003.01126-2025
