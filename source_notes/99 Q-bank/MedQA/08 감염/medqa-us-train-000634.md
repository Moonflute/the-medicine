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
question_type: mechanism
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

24세 여성이 중증 급성 천식 악화 관리로 중환자실에 입원 중이다. 환자는 현재 기관 내 삽관 및 진정 상태이며, 정맥 주사 스테로이드, 지속적 분무 베타 작용제, 그리고 호흡기 치료를 통한 항콜린성 요법을 받고 있다. 입원 2일째, 38.9°C(102.0°F)의 새로운 발열이 발생했다. 흉부 X-선 검사에서 우하엽 경화가 관찰된다. 혈액 배양 검사를 시행하였고, 경험적으로 정맥 주사 세페핌(cefepime)과 답토마이신(daptomycin) 투여를 시작했다. 입원 4일째에도 환자는 여전히 발열이 지속되며, 흉부 X-선 검사에서 우하엽 혼탁이 악화된 소견을 보인다. 이 환자에서 치료 실패의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 신장에 의한 약물의 비정상적으로 빠른 제거
B. 간에 의한 약물의 비정상적으로 빠른 대사
C. 표적 조직 내 약물의 불활성화
D. 약물의 낮은 생체이용률

## 해설


Daptomycin은 폐 계면활성제와 상호작용하여 항균 활성이 억제되므로 폐렴 치료에 적합하지 않다. 따라서 정맥 투여했어도 폐 감염의 표적 조직에서 약물이 불활성화되는 C가 핵심이다. Cefepime이 폐 조직의 β-lactamase에 의해 일반적으로 분해된다는 설명이 아니다. 정맥 투여 약물의 흡수율 저하가 이 사례의 핵심 원인도 아니다. 폐렴 원인균과 배양·감수성을 재평가하여 적절한 폐렴 항생제를 선택해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000634 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: β-lactamase 때문이라는 해설을 daptomycin의 폐 계면활성제 불활성화로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/021572Orig1s008.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000634
