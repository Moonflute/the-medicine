---
type: qbank
schema_version: 1
id: medqa-us-train-002686
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e3201f3c7d18ba110c987b747f98a2a84a96803991626ac8c329bb906f903111
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "morbid obesity"
  - "bariatric surgery"
  - "Roux-en-Y gastric bypass"
  - "gastroesophageal reflux disease"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 BMI 36.5 kg/m²이고 제2형 당뇨병이 있다. 비수술 치료에도 체중이 줄지 않았고 약물에도 심한 역류가 지속된다. 비만대사수술 대상인 이 환자에서 역류도 함께 고려하면 적절한 수술은?

## 선택지

A. 위소매절제술
B. 조절형 위밴드술
C. 루와이 위우회술
D. 위저부주름술만 시행

## 해설


국내 기준에서 비수술 치료에 실패한 BMI 35 이상 환자는 비만대사수술을 고려할 수 있다. 심한 역류가 함께 있으면 위소매절제 후 역류가 악화될 수 있어 루와이 위우회술을 우선 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: BMI36.5·T2D·심한 GERD에서는 수술 대상이며 선택지상 RYGB C가 역류/대사 개선에 적절.
- https://asmbs.org/resources/2022-asmbs-and-ifso-indications-for-metabolic-and-bariatric-surgery/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002686
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10088549/
- https://www.sages.org/publications/guidelines/multi-society-consensus-conference-and-guideline-on-the-treatment-of-gerd/
