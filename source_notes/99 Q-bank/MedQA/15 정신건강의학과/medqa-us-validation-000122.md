---
type: qbank
schema_version: 1
id: medqa-us-validation-000122
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:db3d1532ef56873421c4760dc4e231031decd412c18f997b60ec534e919efacd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "바르비투르산염 금단"
  - "아모바르비탈"
  - "심혈관 허탈"
question_type: prognosis
related_disease_slugs: []
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 마취과 의사가 병원을 나가기 전 아모바르비탈 주사기를 가방에 넣다가 발견되었다. 이혼 후 1년간 매일 약물을 남용했고 최근 사용은 8시간 전이었다. 아모바르비탈 금단의 가장 생명을 위협하는 합병증은?

## 선택지

A. 내부 출혈
B. 호흡억제
C. 심혈관 허탈
D. 자해

## 해설

바르비투르산염 금단은 생명을 위협할 수 있으며 경련·섬망과 심한 자율신경/심혈관 불안정이 발생할 수 있다. 제시된 합병증 중 심혈관 허탈이 원문 정답이다. 호흡억제는 주로 중독·과량복용 때의 문제이며 금단의 대표 억제성 기전으로 설명하지 않는다. 이 환자는 일일 사용 후 중단 상황이므로 면밀한 의료적 관찰과 통제된 금단 관리가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000122

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 심혈관 허탈 원정답 유지. 교감항진을 곧 서맥·저혈압으로 설명한 잘못된 연결 및 선지 문자 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.euda.europa.eu/publications/drug-profiles/barbiturates_en
