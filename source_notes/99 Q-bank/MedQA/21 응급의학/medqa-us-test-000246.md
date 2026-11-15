---
type: qbank
schema_version: 1
id: medqa-us-test-000246
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b44c2510867c4f6b9e43bff3d4752abb09fa276487a6d9641679048e73786f39
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "급성호흡곤란증후군"
  - "인공호흡기 관리"
  - "저산소혈증"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaWRhem9sYW0ubWQ
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL1Byb3BvZm9sLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

복강 내 감염에 의한 중등도 ARDS 환자가 폐보호 환기 중이다. 일회호흡량은 예측체중 기준 6 mL/kg, PEEP는 5 cmH₂O다. 회로·기관튜브에 문제가 없고 혈압이 안정적인데 FiO₂ 0.6에서 PaO₂가 57 mmHg다. 산소화를 위해 고려할 조정은?

## 선택지

A. 일회호흡량을 12 mL/kg로 높인다
B. 호흡수를 다섯 번만 높인다
C. 혈압과 고원압을 감시하며 PEEP를 단계적으로 높인다
D. PEEP를 0 cmH₂O로 낮춘다

## 해설

중등도 이상 ARDS에서는 폐포를 열어 두도록 PEEP를 올리는 전략을 고려한다. 낮은 일회호흡량을 유지하고 고원압과 혈역학을 확인하면서 흡입산소 농도도 함께 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 저산소혈증과 낮은 PEEP의 C는 적절하나 원문 1000mL 일회호흡량을 안전한 설정으로 묵인하지 않도록 폐보호 환기를 명시한다.
- 공식/학회 근거: https://www.thoracic.org/statements/resources/cc/ards-guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000246
