---
type: qbank
schema_version: 1
id: medqa-us-test-000992
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e07d42df200ede9e17f22a258d83c4f3479394d7c03398dd6a7551e6850d7a3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유잉육종"
  - "작은 원형 청색 세포"
  - "양파껍질 골막반응"
  - "Ewing sarcoma"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

13세 남아가 2개월간 진행하는 왼쪽 다리 통증으로 진료를 받으러 왔다. 통증이 수면을 방해하기 시작했으며 어머니가 성장통으로 이부프로펜을 주었지만 호전되지 않았다. 통증 시작 일주일 전 야구공에 허벅지를 맞아 며칠간 붉고 부어 있었다. 왼쪽 대퇴골 중간 부위에 심한 압통이 있었고 백혈구 21,000/mm³, ESR 68 mm/h였다. X선에서 대퇴골 중간 1/3에 다발성 용해성 병변과 여러 층의 새 뼈로 덮인 피질이 보였고 생검에서 작은 원형 청색 세포가 관찰되었다. 가장 가능성 높은 진단은?

## 선택지

A. 골육종
B. 골연골종
C. 유잉육종
D. 유골 골종

## 해설


다발성 용해성 병변과 ‘양파껍질’ 골막 반응, 청색 세포는 유잉육종의 특징이다. 따라서 유잉육종이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000992 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소아 골간부 병변·양파껍질 골막반응·small round blue cells의 Ewing C가 원문과 일치. 병리 기초 내용 검토.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000992
