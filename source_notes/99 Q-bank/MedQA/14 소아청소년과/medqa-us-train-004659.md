---
type: qbank
schema_version: 1
id: medqa-us-train-004659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ce32efa0b3f742c532a76856e3155f83a5af4705c4698f9fd57ea10b3212cc8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "총동맥간"
  - "동맥간증"
  - "선천성 심장병"
  - "Truncus arteriosus"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
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

5주 영아가 수유 중 숨이 차고 땀을 흘린다. 가벼운 중심 청색증이 있다. 심초음파에서 큰 심실중격결손 위로 하나의 동맥이 나오고, 그 동맥에서 폐동맥과 대동맥이 함께 갈라진다. 진단은?

## 선택지

A. 총동맥간증
B. 대동맥폐동맥 창
C. 팔로사징
D. 대혈관 전위

## 해설

폐동맥과 대동맥 혈류가 하나의 동맥간에서 기원하면 총동맥간증이다. 대동맥폐동맥 창은 따로 형성된 두 혈관 사이에 비정상 통로가 있는 병변이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 총동맥간을 팔로사징 TOF와 혼동한 약어를 교정하고 유사한 혈류역학을 설명했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004659
- https://www.cdc.gov/heart-defects/about/truncus-arteriosus.html
