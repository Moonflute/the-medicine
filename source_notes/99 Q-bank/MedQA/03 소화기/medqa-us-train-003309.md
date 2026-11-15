---
type: qbank
schema_version: 1
id: medqa-us-train-003309
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9fdf3e5e233899912c81ff452bd98a97dd508e63472aee9f01e4ade7a3b50d1e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "choledocholithiasis"
  - "biliary obstruction"
  - "dilated common bile duct"
  - "gallstones"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 여성이 오른쪽 윗배 통증과 황달로 왔다. 열은 없고 활력은 안정적이다. MRCP에서 총담관 안에 7 mm 결석이 확인됐다. 이 결석으로 인한 폐쇄를 해소할 내시경 치료는?

## 선택지

A. 내시경초음파로 결석을 다시 확인
B. 내시경 유두부에 조직검사만 시행
C. ERCP로 담관 결석 제거
D. 위내시경으로 유문부 풍선확장

## 해설


총담관결석이 영상으로 확인된 경우라서 ERCP로 결석 제거를 할 수 있다. 낮거나 중간 위험에서 결석을 확인하기 위해 MRCP나 EUS를 선택하는 상황과 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 담석·CBD10mm·황달/담즙정체 패턴은 choledocholithiasis C. 발열·패혈증 없는 상태를 cholangitis로 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003309
- https://doi.org/10.15279/kpba.2024.29.4.122
