---
type: qbank
schema_version: 1
id: medqa-us-train-002699
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ac2b866324a42f63f8e5f59a971e96f9c43c51bcc5bc9c1c94043d8f4cca7e1
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "glucocorticoid-induced myopathy"
  - "proximal muscle weakness"
  - "normal creatine kinase"
  - "giant cell arteritis treatment"
related_disease_slugs: []
question_type: diagnosis
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

거대세포동맥염으로 수개월간 글루코코르티코이드를 복용한 67세 여성이 계단을 오르거나 의자에서 일어날 때 힘이 빠진다. 양쪽 근위부가 약하지만 근육통은 거의 없고 CK와 염증수치는 정상이다. 가장 가능성 높은 원인은?

## 선택지

A. 다발단일신경병증
B. 류마티스성 다발근통
C. 글루코코르티코이드 유발 근병증
D. 활동성 자가면역 염증성 근병증

## 해설


장기 글루코코르티코이드 사용 뒤 서서히 생긴 통증 없는 근위부 약화와 정상 CK는 스테로이드 근병증에 맞는다. 원래 질환의 상태를 확인하며 감량·대체 전략을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002699 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA 치료 수개월 후 근위부 근력저하·정상 CK/ESR와 원래 혈관염 증상 호전은 steroid 유발 근병증 C를 지지한다. 원문·해설 일치; 신규 치료 권고가 아닌 병인 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002699
- https://www.ncbi.nlm.nih.gov/books/NBK557731/
