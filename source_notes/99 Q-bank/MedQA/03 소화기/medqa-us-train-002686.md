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
explanation_status: machine-generated
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

37세 남성이 여러 식이·운동 프로그램에도 체중 감량에 실패해 내원했다. 2년간 당뇨병, 9년간 심한 위식도역류병이 있으며 BMI 36.5 kg/m²이다. 다음 중 가장 적절한 수술적 치료는?

## 선택지

A. 담췌 우회술과 십이지장 전환술
B. 복강경 조절식 위밴드술
C. 복강경 루와이 위우회술
D. 현재는 수술치료를 하지 않는다

## 해설


BMI > 35 kg/m²에 위식도역류가 동반된 경우, 체중 감소와 역류 개선을 동시에 달성할 수 있는 Roux‑en‑Y 위우회술이 가장 효과적인 수술법이다. 위밴드술은 역류 개선 효과가 제한적이며, 다른 선택지는 적절치 않다. 따라서 Roux‑en‑Y 위우회술이 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: BMI36.5·T2D·심한 GERD에서는 수술 대상이며 선택지상 RYGB C가 역류/대사 개선에 적절.
- https://asmbs.org/resources/2022-asmbs-and-ifso-indications-for-metabolic-and-bariatric-surgery/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002686
