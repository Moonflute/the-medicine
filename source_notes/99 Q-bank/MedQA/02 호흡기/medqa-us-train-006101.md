---
type: qbank
schema_version: 1
id: medqa-us-train-006101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ab31a4b3e731f7273c5cfea4a558d23e9f32653d5f2acacda5ff49d6372c565
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "비만 저환기 증후군"
  - "고탄산혈증"
  - "수면 중 저환기"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yggO2YuO2doSAoSHlwb3ZlbnRpbGF0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

56세 남성이 심한 주간 졸림과 아침 두통을 호소한다. BMI는 49 kg/m²이고 깨어 있을 때 동맥혈 PaCO₂는 50 mmHg이다. 수면검사의 무호흡–저호흡지수는 시간당 2회지만 수면 중 이산화탄소가 지속적으로 상승했다. 폐활량은 정상이고 진정제 복용이나 신경근질환은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 폐쇄성 수면무호흡증 단독
B. 비만 저환기증후군
C. 기면증
D. 단순 코골이

## 해설

비만, 수면 중 호흡 이상과 깨어 있을 때 PaCO₂ 45 mmHg 이상의 고탄산혈증이 있고 다른 저환기 원인이 없으면 비만 저환기증후군에 부합한다. 수면 중 저환기는 폐쇄성 무호흡이 뚜렷하지 않아도 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: OHS B는 낮은 AHI가 아니라 비만+깨어있을 때 고탄산으로 설명하고 중추성저환기는 반드시 뇌손상이라는 단정 제거.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6680300/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006101
- https://doi.org/10.1164/rccm.201905-1071ST
