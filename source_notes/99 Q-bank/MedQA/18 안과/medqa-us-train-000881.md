---
type: qbank
schema_version: 1
id: medqa-us-train-000881
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28391d90b639b37ae50a6ac4e426e13908869ec1b98d278089a44b7bd7778c4c
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "sympathetic ophthalmia"
  - "Sympathetic ophthalmia"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-yViOq1rCDsmbjsg4EubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 남성이 3시간 전부터 시작된 양쪽 눈의 통증과 충혈로 응급실에 내원했다. 환자는 최근 시야 흐림과 밝은 곳에서 눈을 뜨기 힘든 증상을 겪고 있다. 최근 외상은 없었다. 환자는 매일 콘택트렌즈를 사용한다. 6개월 전 파편에 의한 관통 외상으로 왼쪽 눈 수술을 받은 적이 있다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 양측 윤부 주위 결막의 충혈이 관찰된다. 양측 시력은 저하되어 있다. 안구 운동은 정상이다. 세극등 검사상 각막의 윤곽은 정상이며 양쪽 전방 내에 백혈구가 관찰된다. 눈꺼풀, 속눈썹, 눈물관에는 이상이 없다. 이 환자의 상태에 대한 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 대상포진 바이러스(herpes zoster virus)의 재활성화
B. 망막 항원에 대한 자가면역 반응
C. 방수의 배출 장애
D. 연령 관련 수정체 단백질의 변성

## 해설

한쪽 눈의 관통 외상/수술 수개월 후 양쪽 눈에 통증, 눈부심, 시력저하와 전방 염증세포가 발생하여 교감성 안염(sympathetic ophthalmia)을 의심한다. 외상으로 노출된 면역특권성 안구 항원에 대한 자가면역 반응이 양안 포도막염을 일으킬 수 있어 B가 가장 적절하다. 단순 망막염이나 자극성 결막염을 의미하지 않으며 수정체 노화나 방수 배출 장애로 이 경과를 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 관통상 후 양안 포도막염의 교감성 안염을 자극성 안구염과 뒤섞은 설명을 교정.
- 공식/학회 근거: https://eyewiki.aao.org/Sympathetic_Ophthalmia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000881
