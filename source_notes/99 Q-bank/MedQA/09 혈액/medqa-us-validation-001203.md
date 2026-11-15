---
type: qbank
schema_version: 1
id: medqa-us-validation-001203
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d18de5b14bc8e787413220a5932b2cba60b9f5bf9f27c1d5b26b8781b846ea31
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "카바마제핀"
  - "골수억제"
  - "범혈구감소증"
related_disease_slugs: []
question_type: adverse_effect
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

카바마제핀을 시작한 지 두 달 된 14세 환자에게 멍과 창백이 생겼다. 혈색소 8.4g/dL, 절대호중구수 410/μL, 혈소판 1.8만/μL이고 망상적혈구도 감소했다. 가장 적절한 조치는?

## 선택지

A. 용량을 유지하고 다음 정기 진료 때 재검한다
B. 카바마제핀을 중단하고 골수억제와 출혈·감염 위험을 긴급히 평가하며 대체 항경련제를 계획한다
C. 혈소판만 낮은 면역성 혈소판감소증으로 판단한다
D. 철분만 보충하고 나머지 혈구는 확인하지 않는다

## 해설


카바마제핀은 드물게 심각한 골수억제를 일으킬 수 있다. 새로 발생한 다계열 혈구 감소에서는 원인 약 중단과 긴급 평가가 필요하며, 발작 치료는 다른 약으로 이어갈 계획을 세운다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001203 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Carbamazepine 노출·전혈구감소·retic저하는 약물 골수억제 D에 부합. 해당 약 허가정보의 aplastic anemia/pancytopenia 위험 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e68998cb-5f91-4d7e-85a6-555efb8b0384&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001203
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8cc7288c-4a7e-417c-9ceb-0e0f8aeeacb3
