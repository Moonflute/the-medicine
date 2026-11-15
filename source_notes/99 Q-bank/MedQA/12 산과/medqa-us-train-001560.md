---
type: qbank
schema_version: 1
id: medqa-us-train-001560
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0b1b8f2061d762179a196886504d9bd4a20e09456c52da1ed39a05c2cafd7e2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "incomplete abortion"
  - "anembryonic pregnancy"
  - "expectant management"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-u2iOyZhOyghCDsnKDsgrAgKEluY29tcGxldGUgQWJvcnRpb24pLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 9주 자궁내 임신의 소실이 반복 초음파로 확인됐다. 산모는 혈역학적으로 안정되고 소량 출혈만 있으며 발열은 없다. 수술과 약물치료도 설명했으나 우선 지정한 날에 추적하며 자연 배출을 기다리고 싶다고 한다. 가능한 관리는?

## 선택지

A. 메토트렉세이트를 투여한다
B. 증상 악화 시 재내원 및 배출 완료 확인을 전제로 기대요법을 시행한다
C. 출혈량에 관한 설명 없이 추적을 끝낸다
D. 금기나 선호와 관계없이 즉시 자궁절제술을 시행한다

## 해설

확인된 초기 유산에서 과다출혈·감염·불안정 소견이 없다면 환자 선호에 따라 기대요법을 선택할 수 있다. 출혈이 많아지거나 발열·실신이 있으면 바로 재평가하고 배출 완료 여부를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 안정된 초기 유산의 선택권 및 진단 확인·출혈 경고 보강.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001560
- https://www.nice.org.uk/guidance/ng126/chapter/management-of-miscarriage
