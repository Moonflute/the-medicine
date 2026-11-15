---
type: qbank
schema_version: 1
id: medqa-us-train-002714
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a7162506ef46edf869369484660ca105c835832df80d71afa9d3217c739fee3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "neurofibromatosis type 1"
  - "von Recklinghausen disease"
  - "cafe-au-lait macules"
  - "axillary freckling"
  - "Lisch nodules"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK9IOyErOycoOyiheymnSAoTmV1cm9maWJyb21hdG9zaXMpLm1k
difficulty: complex
answer: A
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

사춘기 전 9세 아이에게 5 mm보다 큰 카페오레반점이 여섯 개 이상 있고 겨드랑이 주근깨가 있다. 부모에게는 비슷한 소견이 없다. 가장 의심할 질환은?

## 선택지

A. 제1형 신경섬유종증
B. NF2 관련 신경초종증
C. 결절성 경화증
D. 스터지–웨버 증후군

## 해설

여러 개의 카페오레반점과 겨드랑이 주근깨는 제1형 신경섬유종증의 중요한 진단 단서다. 색소 소견만 있다면 레기우스증후군 등도 고려해 전문 평가와 추적을 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진에서 리쉬 결절을 보았다고 단정하지 않도록 수정했다. 본문의 다수 5 mm 초과 색소반과 겨드랑이 주근깨만으로도 NF1 D를 충분히 시사하여 이미지 부재만으로 보류하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002714
- https://pubmed.ncbi.nlm.nih.gov/34012067/
