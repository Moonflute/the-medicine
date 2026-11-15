---
type: qbank
schema_version: 1
id: medqa-us-train-001526
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a99e4eaf7b206d2aedacbcf26d035888c8d231c0ac6dcdfce54be12e1b4e811d
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "Chediak-Higashi syndrome"
  - "giant granules"
  - "immunodeficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAvQ2hlZGlhay1IaWdhc2hpIOymne2bhOq1sCAoQ2hlZGlhay1IaWdhc2hpIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

7세 여아가 반복되는 중증 세균감염과 쉽게 멍이 드는 증상으로 내원했다. 모발은 은빛이고 피부는 저색소성이다. 체디아크–히가시 증후군을 우선 의심하게 하는 말초혈액 도말 소견은?

## 선택지

A. 적혈구의 표적세포
B. 호산구의 현저한 증가
C. 과립구 안의 거대 세포질 과립
D. 작은 혈소판만 관찰

## 해설


부분 백색증과 반복 감염, 출혈 경향에 더해 백혈구의 거대 과립은 체디아크–히가시 증후군의 특징이다. 필요하면 LYST 유전자 검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001526`와 직접 대조했다.
- 판정: 반복 감염·부분 백색증·신경학적 증상과 거대 과립 백혈구의 Chediak-Higashi 연결을 원문 대조. C 유지; 치료·용량 검토 아님.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001526
- https://www.ncbi.nlm.nih.gov/books/NBK5188/
