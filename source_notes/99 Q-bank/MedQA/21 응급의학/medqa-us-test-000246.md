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

70세 여성이 하루 동안 지속된 복통, 메스꺼움, 구토로 응급실에 왔다. CT에서 소장 천공이 확인되어 응급 탐색적 개복술을 준비했다. 미다졸람으로 진정하고 프로포폴로 유도한 뒤 기관삽관했으며 수술 내내 아산화질소와 아이소플루레인을 사용했다. 수술 중 회장 말단에 단일 천공이 있는 것을 확인하여 성공적으로 봉합했다. 환자는 중환자실로 옮겨졌다. 인공호흡기는 FiO₂ 50%, 일회호흡량 1,000 mL, 호흡수 12회/분, 호기말 양압 2.5 cm H₂O로 설정되어 있었다. 체온 37.3°C(99.1°F), 맥박 76회/분, 혈압 111/50 mmHg였고 통증 자극에 반응했다. 폐 진찰에서 양측 수포음이 들렸으며 복부는 팽창되어 있었으나 수술 절개부는 온전했다. 동맥혈가스분석은 pH 7.44, pO₂ 54 mmHg, pCO₂ 31 mmHg, HCO₃⁻ 22 mmHg였다. 다음 중 가장 적절한 처치는?

## 선택지

A. FiO₂를 증가시킨다
B. 일회호흡량을 증가시킨다
C. PEEP를 증가시킨다
D. 호흡수를 증가시킨다

## 해설

FiO₂ 0.5에서 PaO₂ 54 mmHg인 저산소혈증과 양측 수포음은 폐포 허탈·폐내 단락 등을 우려하게 한다. 낮은 PEEP를 적절히 높여 산소화를 개선하는 C가 선지 중 가장 적절하다. 기도·회로·폐 병변 원인과 혈역학을 함께 평가하며 PEEP를 무제한 높이는 것은 아니다. 일회호흡량 1,000 mL를 더 늘리면 안 되고 예측체중에 맞는 폐보호 일회호흡량·기도압으로 재조정해야 한다. 이 정보만으로 ARDS 원인을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 저산소혈증과 낮은 PEEP의 C는 적절하나 원문 1000mL 일회호흡량을 안전한 설정으로 묵인하지 않도록 폐보호 환기를 명시한다.
- 공식/학회 근거: https://www.thoracic.org/statements/resources/cc/ards-guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000246
