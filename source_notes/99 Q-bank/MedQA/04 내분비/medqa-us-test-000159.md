---
type: qbank
schema_version: 1
id: medqa-us-test-000159
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:29f9ac1c0f0628c2c4cff5136eb964dbe05f2fbbe47db64429a79711ecef9b5a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "저칼슘혈증"
  - "수술 후 부갑상선기능저하"
  - "테타니"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
question_type: management
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQ2FsY2l1bUdsdWNvbmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 남성이 2일 동안 지속된 오심, 복부 불편감, 설사로 응급실에 내원했다. 식후 통증이 악화되고 지난 24시간 동안 입 주위 무감각과 상지 근육 경련이 점점 심해졌다. 6개월 전 비만 치료를 위해 루와이 위우회술을 받았고 4일 전 허슬세포 병변으로 전갑상선절제술을 받았다. 비타민을 제외한 약물은 없다. 활력징후는 정상이고 혈압을 측정할 때 손 경련이 관찰된다. 혈청 Mg²⁺ 1.7 mEq/L, 인 4.3 mg/dL, 25-하이드록시비타민 D 20 ng/mL, 부갑상선호르몬 115 pg/mL이다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 복부 CT
B. 수분 보충
C. 글루콘산칼슘 투여
D. 비타민 D 보충

## 해설

정답은 C이다. 입 주위 감각이상, 근경련과 혈압 커프에 유발되는 손 경련은 증상성 저칼슘혈증을 시사한다. 혈중 칼슘(이온화 또는 albumin 보정), Mg 및 ECG를 신속히 확인하면서 심한 증상에는 정맥 calcium gluconate를 투여한다. 다만 제시된 PTH 115 pg/mL는 상승값이므로 전형적인 수술 후 PTH 결핍이라고 단정할 수 없다. 위우회술 후 칼슘/비타민 D 흡수 문제 등을 평가해야 하며 경구 비타민 D만으로 즉각적인 테타니 처치를 대신할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 저칼슘혈증의 응급 칼슘 투여는 유지하되 PTH 115를 부갑상샘기능저하로 잘못 연결한 해설 교체.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000159
