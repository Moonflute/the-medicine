---
type: qbank
schema_version: 1
id: medqa-us-train-001620
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e487af0a23ea3cf60d60d174d9fbb314464a706e04f022d22d0aa429757caf3
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "statin-associated autoimmune myopathy"
  - "immune-mediated necrotizing myopathy"
  - "elevated CK"
  - "Statin-associated autoimmune myopathy"
related_disease_slugs: []
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
---

# MedQA US 임상문제

## 문제

50세 남성이 점점 심해지는 쇠약으로 내원했다. 3개월 동안 계단 오르기가 어려웠고 이제 의자에서 일어나기도 어렵다. 복시, 연하곤란, 호흡곤란, 근육통이나 관절통은 없다. 체중·식욕·더위나 추위 불내성의 변화도 없으며 간헐적 미열이 있다. 고혈압과 고지혈증으로 6년 동안 심바스타틴과 로사르탄을 매일 복용했다. 근위부 근력은 고관절 굴곡근 3/5, 삼각근 4/5이고 반사와 감각은 정상이다. 허벅지와 상지에 경미한 근육 압통이 있다. 혈청 AST 302 U/L, ALT 210 U/L, TSH 6.9 uU/mL, T4 5.8 ug/dL, CK 4300 U/L, CRP 11.9 mg/L, ESR 37 mm/h이다. 다음 중 가장 정확한 진단검사는 무엇인가?

## 선택지

A. 자가항체
B. 근전도검사
C. 근육 생검
D. 스타틴 중단

## 해설


진행성 대칭성 근위부 근력저하와 CK 4300 U/L는 근병증을 지지한다. 감각과 반사가 보존되어 신경병증보다는 염증성/괴사성 근병증 등을 고려한다. 선택지 중 근육 생검(C)은 근섬유 염증·괴사 등 병리 형태를 직접 확인하고 다른 근병증과 구분하는 데 유용하다. 스타틴 관련 면역매개 괴사성 근병증도 감별하지만 스타틴 복용과 CK 상승만으로 확정하지 않으며 anti-HMGCR 등 표적 검사와 임상 경과를 함께 평가한다. 본문에는 근육 비대나 스타틴 중단 후에도 지속된다는 정보가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001620 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 근육 비대·지속 근육통을 만들어낸 해설을 제거하고 CK 상승 근병증의 생검 역할과 statin 자가면역 근병증의 불확실성을 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niehs.nih.gov/sites/default/files/2024-09/naehs_council_abstract_rider_2024_september_long_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001620
