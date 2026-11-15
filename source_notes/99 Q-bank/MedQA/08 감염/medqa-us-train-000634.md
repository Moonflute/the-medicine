---
type: qbank
schema_version: 1
id: medqa-us-train-000634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f40a2bbefd1878e2ba3d23b3d835e8df69b3fb682ea2252460e02cced402903d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "severe acute asthma exacerbation"
  - "fever"
  - "right lower lobe consolidation"
  - "Ventilator-associated pneumonia"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MDIg7Zi47Z2h6riwL-uzkeybkO2ajeuTnSDtj5DroLQgKEhvc3BpdGFsLUFjcXVpcmVkIFBuZXVtb25pYSkubWQ
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRGFwdG9teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

인공호흡기 관련 폐렴 환자의 기관지 검체에서 MRSA가 확인됐다. 다른 감염 부위는 없다. 여러 약제에 시험관 내 감수성을 보이지만 폐렴 치료에 사용하면 안 되는 약은?

## 선택지

A. 반코마이신
B. 리네졸리드
C. 답토마이신
D. 세프타롤린

## 해설


답토마이신은 폐 계면활성제에 의해 활성이 억제돼 감수성이 확인돼도 폐실질 폐렴에는 쓰지 않는다. MRSA 병원획득 폐렴에는 일반적으로 반코마이신 또는 리네졸리드를 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000634 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: β-lactamase 때문이라는 해설을 daptomycin의 폐 계면활성제 불활성화로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/021572Orig1s008.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000634
- https://doi.org/10.1093/cid/ciq146
