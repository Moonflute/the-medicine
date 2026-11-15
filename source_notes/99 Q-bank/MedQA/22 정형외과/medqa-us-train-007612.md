---
type: qbank
schema_version: 1
id: medqa-us-train-007612
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c99487c09c9e96a5e022d6081f249b48c0f45e92bf52c20005aab812e6c862a9
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "내측 측부인대 손상"
  - "외반력"
  - "무릎 인대 손상"
  - "외반 스트레스 검사"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-uCtOy4oSDsuKHrtoAg7J2464yAIOyGkOyDgSAoTWVkaWFsIENvbGxhdGVyYWwgTGlnYW1lbnQgSW5qdXJ5KS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

축구 중 무릎 바깥쪽에 충격을 받은 17세 환자의 무릎 안쪽이 아프다. 내측곁인대의 안정성을 평가할 검사는?

## 선택지

A. 무릎을 약간 굽힌 상태에서 외반 스트레스 검사
B. 라크만 검사
C. 뒤쪽 서랍 검사
D. 내반 스트레스 검사

## 해설

무릎 바깥쪽 충격은 내측곁인대에 외반력을 가한다. 무릎을 약 30도 굽히고 외반력을 가했을 때 안쪽 관절 간격이 반대쪽보다 벌어지는지 본다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://now.aapmr.org/medial-and-lateral-collateral-ligament-injuries/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007612
