---
type: qbank
schema_version: 1
id: medqa-us-validation-000938
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:295ffe07d0aca1f403fd9d7ac6a125ae476d6db913af699af4211511114be14a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "이첨 대동맥판"
  - "대동맥판 협착"
  - "수축기 박출성 잡음"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

36세 남성이 만성 흉통이 아급성으로 악화되고 운동 시 호흡곤란이 있어 응급실에 왔다. 평소 건강하고 규칙적으로 웨이트트레이닝을 하며 흡연하지 않는다. 심장 청진에서 상부 흉골 우측에서 들리고 경동맥으로 방사되는 강도 증가-감소형 잡음이 있다. 심전도에서 좌축편위와 좌심실비대 기준을 충족하며 초기 트로포닌은 음성이다. 가장 가능성 높은 진단은?

## 선택지

A. 세균성 심내막염
B. 이첨 대동맥판
C. 심장 점액종
D. 노인성 석회화 변화

## 해설

36세에서 경동맥으로 방사되는 박출성 잡음과 좌심실 비대는 대동맥판 협착을 시사하며, 원인으로 이첨 대동맥판(B)이 노인성 석회화보다 적합하다. 원문 혈압은 정상 범위이며 고혈압이 있었다고 추가하지 않는다. 실제 판막 형태와 협착 정도는 심초음파로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은 환자의 AS 원인 B를 지지하되 고혈압이 제시되었다거나 잡음만으로 판막 형태를 확진한 설명을 한정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000938
