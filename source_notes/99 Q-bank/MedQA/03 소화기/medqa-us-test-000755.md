---
type: qbank
schema_version: 1
id: medqa-us-test-000755
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1158eaf50b6a13ba84117398e0f5550d5cf95a10ee85db06f0291135c627a7e3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "총담관결석증"
  - "폐쇄성 황달"
  - "담석증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: investigation
difficulty: complex
answer: B
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

38세 여성이 우상복부 통증으로 왔다. 열이나 오한은 없다. 총 빌리루빈 2.0 mg/dL이고 ALP는 상승했다. 초음파에 담낭결석과 8 mm 총담관 확장이 있지만 총담관 안의 돌은 보이지 않는다. 담관결석을 확인할 다음 검사는?

## 선택지

A. 바로 내시경 역행 담췌관조영술(ERCP)
B. 자기공명 담췌관조영술(MRCP)
C. 담낭 핵의학 검사
D. 상부위장관 내시경

## 해설


담관이 늘어나고 간 검사에 이상이 있지만 담관염이나 영상으로 확인된 담관결석은 없으므로 중간 위험이다. MRCP 또는 내시경초음파로 확인하고, ERCP는 중재가 필요한 경우에 사용해 진단 목적으로 인한 합병증을 줄인다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황달/담즙정체와 10mm CBD 확장·담낭결석이 있고 담낭 염증 소견이 없어 총담관결석 B가 가장 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000755
- https://doi.org/10.15279/kpba.2024.29.4.122
