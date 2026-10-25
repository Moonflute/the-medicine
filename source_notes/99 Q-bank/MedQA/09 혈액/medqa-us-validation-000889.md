---
type: qbank
schema_version: 1
id: medqa-us-validation-000889
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:69cec2276723230e1c090cadfae02fc4cfdbe546fb68d7eddd22e551891a74d1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "글로빈 사슬 구조 이상"
  - "손발 증후군"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: standard
answer: C
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

18개월 여아가 손발 부종과 심한 보챔으로 진료를 받으러 왔다. 손발의 중수골과 중족골을 가볍게 만지면 비명을 지르고 경도의 빈혈, 백혈구증가증, 망상적혈구 증가가 있다. 말초도말 사진이 제시되어 있다. 이 상태의 원인은?

## 선택지

A. 적혈구 효소 결핍
B. 헴 합성 이상
C. 글로빈 사슬 구조 이상
D. 글로빈 사슬 합성 이상

## 해설


영아의 손·발 dactylitis, 빈혈과 망상적혈구 증가 양상은 겸상적혈구병을 시사한다. HbS는 β-globin의 아미노산 치환에 따른 구조 이상(C)이다. 지중해빈혈의 사슬 합성량 감소(D)와 구분한다. 누락된 사진에서 거대적혈구를 보았다고 덧붙일 수 없으며 거대적혈구가 SCD의 필수 진단 소견인 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000889 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유아 dactylitis·빈혈/retic↑의 HbS 구조 이상 C 유지. 본문에 없는 거대적혈구가 진단 단서라는 설명 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000889
