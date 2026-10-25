---
type: qbank
schema_version: 1
id: medqa-us-train-003219
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4287213a65cfda72cc0c9bb4dba770b55b7ab2f263f4bedc11c0162af839e991
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Ehlers-Danlos syndrome"
  - "classical EDS"
  - "type V collagen defect"
  - "skin hyperextensibility"
question_type: mechanism
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yXmOufrOyKpC3ri6jroZzsiqQg7Kad7ZuE6rWwIChFaGxlcnMtRGFubG9zIFN5bmRyb21lKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 수개월 동안 쉽게 멍이 들어 부모와 함께 내원했다. 가벼운 외상에도 긁힌 상처에서 피가 나며 두 달 전 침대에서 떨어져 이마에 큰 혈종과 왼쪽 팔꿈치 열상이 생겼다. 씹을 때 통증 때문에 가끔 먹지 않으며 피부가 정상보다 잘 늘어나고 약하다. 관절 운동 범위가 약간 증가되어 있고 양측 턱관절에 압통이 있다. 다음 중 증상의 가장 가능성 높은 기저 원인은?

## 선택지

A. 구리 흡수 장애
B. 제3형 콜라겐 결함
C. 제5형 콜라겐 결함
D. 제1형 콜라겐 결함

## 해설

정답은 C, 제5형 콜라겐 결함이다. 피부의 과신축성과 취약성, 쉽게 생기는 멍·열상 및 관절 과운동성은 고전형 Ehlers-Danlos 증후군을 시사하며, 흔히 COL5A1 또는 COL5A2의 제5형 콜라겐 이상과 관련된다. 제3형 콜라겐은 혈관형 EDS, 제1형 콜라겐은 주로 골형성부전증과 연관된다. 마판증후군의 주된 이상은 fibrillin-1이며 이 케이스를 설명하는 답이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 마판/고정 S2 해설은 다른 질환 및 잘못된 기전. 피부취약·과신축·관절과운동/쉽게 멍의 고전형 EDS typeV 설명. C 유지.
- 공식/학회 근거: https://medlineplus.gov/genetics/gene/col5a1/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003219
