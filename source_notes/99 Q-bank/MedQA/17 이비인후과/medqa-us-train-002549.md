---
type: qbank
schema_version: 1
id: medqa-us-train-002549
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f9ef8e3b435e827334d0b590813045d486a57379dbc591e28702bbd10c7dd51
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "nasal septal hematoma"
  - "septal perforation"
  - "nasal fracture"
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 3주간 지속된 호흡 시 휘파람 소리로 내원했다. 운동할 때 특히 소리가 커진다. 6개월 전 고속 야구공에 코를 맞아 비복잡성 코골절로 외래 치료를 받았고 이후 아스피린을 복용했다. 무증상 비강폴립 병력이 있다. 다음 중 호흡 시 휘파람 소리를 예방했을 가능성이 가장 높은 처치는?

## 선택지

A. 비중격 혈종 배액
B. 항생제 치료
C. 코성형술
D. 비중격성형술

## 해설

비중격 혈종은 연골막을 연골에서 분리하여 연골로의 영양·혈류 공급을 방해한다. 이를 방치하면 연골 괴사와 비중격 천공이 생길 수 있고, 작은 천공을 통과하는 공기 때문에 휘파람 소리가 날 수 있다. 따라서 초기 혈종 배액 A가 이러한 합병증을 예방할 수 있었다. 단순히 혈종이 굳어서 소리가 난다고 설명하는 것은 정확하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 배액되지 않은 비중격 혈종의 합병증 기전을 고형화·협착이 아니라 연골 영양공급 차단과 괴사·천공으로 교정.
- 공식/학회 근거: https://www.rch.org.au/trauma-service/manual/maxillofacial-injury/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002549
