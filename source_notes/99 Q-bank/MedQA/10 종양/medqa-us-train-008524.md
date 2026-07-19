---
type: qbank
schema_version: 1
id: medqa-us-train-008524
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d64954a22f2174242e8911558a137f1ba453592a0d3ee722a00209b0c05f45e3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "BRCA1 mutation"
  - "BRCA2 mutation"
  - "breast cancer screening"
question_type: prevention
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 연례 신체검사를 받으러 왔다. 지난 방문 이후 가족력에 변화가 있었다. 어머니가 최근 유방암 진단을 받았고 언니가 BRCA2 돌연변이 양성 판정을 받았다. 따라서 환자도 검사를 요청했다. BRCA1 또는 BRCA2 돌연변이 양성이라면 다음 중 가장 적절한 선별검사 방법은 무엇인가?

## 선택지

A. 매년 임상 유방검사, 매년 유방촬영술, 매월 자가 유방검사
B. 6개월마다 임상 유방검사, 매년 유방촬영술, 매년 유방 MRI, 자가 유방검사
C. 매년 초음파, 매년 유방촬영술, 매월 자가 유방검사
D. 유방 MRI를 의뢰한다

## 해설


BRCA1/2 양성 변이를 가진 여성은 연 1회 유방촬영술·연 1회 MRI·6개월마다 임상 검진·월간 자가 검진이 권고된다. 연 1회 초음파만으로는 충분하지 않다. 따라서 가장 적절한 선별검사는 6개월마다 임상 검진, 연 1회 유방촬영술·MRI, 자가 검진이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008524
