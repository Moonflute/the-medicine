---
type: qbank
schema_version: 1
id: medqa-us-train-008250
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c011ed7fd339ed990b12b4eb94d723473a285dfb35730fb50a363d29440e510b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "focal aware seizure"
  - "olfactory aura"
  - "temporal lobe seizure"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 환자에게 30초 정도 이상한 냄새가 나고 오른손이 저리는 동일한 사건이 반복된다. 사건 중 질문에 답할 수 있고 이후 모든 상황을 기억한다. 발작으로 확인됐다면 유형은?

## 선택지

A. 의식이 저하된 국소발작
B. 의식이 보존된 국소발작
C. 전형 결신발작
D. 전신 강직간대발작

## 해설

반복되는 짧은 국소 감각 증상 중 반응과 기억이 유지되면 의식이 보존된 국소발작에 맞는다. 정상 MRI만으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의식저하가 있다고 한 해설을 본문에 맞게 의식 보존으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008250
- https://pubmed.ncbi.nlm.nih.gov/40264351/
