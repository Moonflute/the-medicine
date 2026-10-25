---
type: qbank
schema_version: 1
id: medqa-us-validation-000764
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:978ebbfd4e09a6e70e9e69e694b3c9a2da99a6c2c05ab1e632f12f98341343cc
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "거대세포동맥염"
  - "류마티스성 다발근통"
  - "목 경직"
  - "giant cell arteritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

55세 여성이 반복되는 두통과 체중감소로 진료를 받으러 왔다. 오른쪽 턱을 따라 지속되는 통증이 오른쪽 눈으로 퍼지고, 턱에서 두피까지 압통이 있다. 이 환자의 상태와 가장 흔히 연관된 증상은?

## 선택지

A. 사지 근력저하
B. 목 경직
C. 복시
D. 얼굴의 전기충격 같은 통증

## 해설


50세 이후 새로운 두통·체중감소와 턱·두피 압통은 giant cell arteritis를 의심하게 한다. 연관된 PMR는 목·어깨·골반대 통증과 강직을 일으킬 수 있어 보기 중 B가 부합한다. 이는 경부 수막자극 징후를 의미하는 것은 아니며 GCA와 polyarteritis nodosa는 다른 질환이다. 복시도 GCA에서 생길 수 있는 중요한 허혈증상이며 얼굴의 순간 전기충격통은 삼차신경통에 더 전형적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000764 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA를다발성동맥염과 동일시한 용어오류 교정; 목강직은 연관 PMR의 근골격 증상으로 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13661133/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000764
