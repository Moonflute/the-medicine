---
type: qbank
schema_version: 1
id: medqa-us-train-008543
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e7b9ac0001bd37ad9341361ca395b3c02fbfb253fc546a15e4c5b615f2c473ab
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "acute pelvic pain"
  - "pregnancy test"
  - "ectopic pregnancy"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 여성이 6시간째 악화하는 하복부 통증으로 왔다. 혈압과 맥박은 안정적이고 복막 자극 징후는 없다. 늘 콘돔을 사용해 임신 가능성이 없다고 한다. 초기 평가에 꼭 포함할 검사는?

## 선택지

A. 복부 CT를 먼저 하고 임신 여부는 나중에 확인
B. 정량 혈청 β-hCG 검사
C. 자궁경부 세포검사
D. 골반통이 사라질 때까지 관찰만 시행

## 해설


가임기 환자의 급성 골반통은 피임 여부와 무관하게 임신을 확인한다. 양성이면 초음파와 추적 hCG 등을 이용해 자궁외임신 가능성을 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008543
- https://www.nice.org.uk/guidance/ng126/chapter/recommendations
