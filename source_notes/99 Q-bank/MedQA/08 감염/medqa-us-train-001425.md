---
type: qbank
schema_version: 1
id: medqa-us-train-001425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:157168bf47985391610a4681d2e61cecd8cc374db05bf8f027810cfca7c3b8f6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "prosthetic valve endocarditis"
  - "Staphylococcus epidermidis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

인공 대동맥판막 환자가 항생제 치료 중에도 열이 계속 나고 새 방실차단이 생겼다. 경식도 심초음파는 인공판막의 음영 때문에 판막 주변 농양을 확인하거나 배제하지 못했다. 긴급 수술팀 평가와 병행할 영상검사는?

## 선택지

A. 운동부하 심초음파
B. 폐환기·관류 스캔
C. 심전도 동기화 조영 심장 CT
D. 복부 비조영 CT

## 해설


인공판막 심내막염에서 새 방실차단은 판막 주변 감염 확장의 단서다. 경식도 심초음파가 불확실할 때 심장 CT는 농양이나 가성동맥류 평가를 보완한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001425 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가공된 균명과 모든 인공판막 감염 원인 일반화를 교정. 사진 없이도 조기 인공판막 심내막염의 보기 선택 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001425
- https://doi.org/10.1093/eurheartj/ehad193
