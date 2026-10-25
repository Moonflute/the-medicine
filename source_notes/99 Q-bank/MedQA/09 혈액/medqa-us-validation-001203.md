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
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

14세 여아가 6주간 지속된 하지 멍과 최근 피로 및 창백함으로 진료를 받으러 왔다. 반복되는 전신 강직간대 발작으로 카바마제핀을 복용 중이며, 혈색소 8.4 g/dL, 백혈구 2,600/mm³, 혈소판 18,000/mm³, 망상적혈구 0.3%이다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 면역성 혈소판감소성 자반증
B. 겸상적혈구병
C. 전신홍반루푸스
D. 약물 부작용

## 해설


카바마제핀은 골수 억제 부작용으로 전혈구감소증(빈혈·백혈구·혈소판 감소)을 일으킬 수 있다. 환자의 전혈구 감소와 망상적혈구는 약물 부작용을 가장 잘 설명한다. 정답은 약물 부작용이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001203 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Carbamazepine 노출·전혈구감소·retic저하는 약물 골수억제 D에 부합. 해당 약 허가정보의 aplastic anemia/pancytopenia 위험 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e68998cb-5f91-4d7e-85a6-555efb8b0384&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001203
