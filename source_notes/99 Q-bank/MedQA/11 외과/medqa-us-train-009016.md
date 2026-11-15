---
type: qbank
schema_version: 1
id: medqa-us-train-009016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e86d60e6d930866c99c43e9a1afe48656884c6e07897beb1957f10707941e6e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "postoperative oliguria"
  - "volume depletion"
  - "prerenal acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2MpeyghCDquInshLEg7L2p7YylIOyGkOyDgSAoUHJlcmVuYWwgQWN1dGUgS2lkbmV5IEluanVyeSkubWQ
question_type: management
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

결장 수술 3시간 뒤 소변량이 20 mL에 그쳤다. 도뇨관은 잘 통하고 방광은 비어 있다. 혈압은 안정적이고 출혈량·수액 수지·울혈 여부는 아직 확인하지 않았다. 우선 할 일은?

## 선택지

A. 바로 푸로세미드를 투여해 소변량을 늘린다
B. 혈압 추이·출혈·수분 수지와 저혈량 또는 울혈 징후를 확인한다
C. 소변량 기준을 넘길 때까지 수액을 반복 주입한다
D. 혈압이 정상이므로 검사와 추적을 중단한다

## 해설


수술 직후 저뇨는 저혈량뿐 아니라 수술 스트레스, 울혈, 신손상 등에서도 나타난다. 도뇨관 개통을 확인한 후 관류와 체액 상태를 재평가해 처치를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009016 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 3시간 저뇨만으로 신전성 AKI를 확진한 설명을 체액·출혈 평가 후 수액 반응 확인으로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng148/chapter/Recommendations
- https://www.nice.org.uk/guidance/cg174/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009016
- https://pubmed.ncbi.nlm.nih.gov/37812766/
