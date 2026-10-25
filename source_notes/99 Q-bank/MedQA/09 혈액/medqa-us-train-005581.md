---
type: qbank
schema_version: 1
id: medqa-us-train-005581
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b9096e9432786ea6f14de481a354374584b2782b479c899b8c65a0ebe8a80cb1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "겸상적혈구 통증발작"
  - "적혈구 형태 이상"
  - "Sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

11세 남아가 축구 태클 후 갑자기 양손과 발이 아프고 대칭적으로 부어 응급실에 왔다. 발진은 없고 진통제를 시작했다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 적혈구 형태 변화
B. 외상에 의한 양성 부종
C. 성매개감염
D. 바이러스 감염

## 해설


네 사지 말단의 대칭적 통증·부종은 단일 외상 부위의 단순 부종보다 SCD의 혈관폐쇄성 통증/지염을 고려하게 하여 선택지 A가 가장 관련된다. 탈산소 HbS 중합으로 적혈구가 낫 모양으로 변형·경직되어 미세혈관 흐름을 방해한다. 삼각형 적혈구라고 부르면 안 된다. SCD가 확진된 정보는 없고 이 연령의 새 발현은 혈색소 검사 등 실제 확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005581 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 겸상 적혈구를 삼각형이라고 한 형태 오류 교정; 대칭 통증 부종의 혈관폐쇄 A 추론 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005581
