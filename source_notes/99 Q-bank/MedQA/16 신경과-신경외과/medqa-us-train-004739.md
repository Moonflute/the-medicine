---
type: qbank
schema_version: 1
id: medqa-us-train-004739
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95a37a199a510270697153893f98f74ee56bd421f771951bf870c4da5bc42014
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "정상압 수두증"
  - "보행장애"
  - "요실금과 인지저하"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 여성이 첫발을 떼기 어렵고 발을 넓게 벌린 채 짧은 걸음으로 걷는다. 최근 판단이 느려지고 급하게 소변을 보거나 새는 일이 잦다. MRI에서 뇌실확장이 두드러진다. 가장 가능성 높은 진단은?

## 선택지

A. 알츠하이머 치매
B. 특발 정상압 수두증
C. 본태떨림
D. 경도인지장애

## 해설

보행장애가 두드러지고 요절박·인지 저하가 동반되며 뇌실확장이 보이면 정상압 수두증을 우선 고려한다. 영상과 배액 반응 등을 종합해 치료를 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정상압수두증의 정상압을 정상 전신혈압으로 혼동한 설명을 제거했다. 임상 삼징과 C의 연결은 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004739
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7905302/
