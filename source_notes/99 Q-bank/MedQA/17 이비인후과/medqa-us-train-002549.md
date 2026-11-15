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
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 환자가 코를 부딪친 지 하루 뒤 양쪽 코가 심하게 막힌다. 비중격 양쪽에 부드럽고 물렁한 돌출이 있고, 국소 충혈제거제를 써도 줄지 않는다. 다음 조치는?

## 선택지

A. 단순 코뼈 골절로 보고 두어 달 뒤 교정한다
B. 응급 이비인후과 평가와 비중격 혈종 배액을 시행한다
C. 코 안 스테로이드만 처방한다
D. 항생제만 처방하고 혈종은 그대로 둔다

## 해설

외상 뒤 물렁한 비중격 부종은 혈종일 수 있다. 연골 괴사와 천공을 예방하기 위해 전문 배액을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 배액되지 않은 비중격 혈종의 합병증 기전을 고형화·협착이 아니라 연골 영양공급 차단과 괴사·천공으로 교정.
- 공식/학회 근거: https://www.rch.org.au/trauma-service/manual/maxillofacial-injury/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002549
- https://www.rch.org.au/clinicalguide/guideline_index/nasal_fracture/
