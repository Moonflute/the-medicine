---
type: qbank
schema_version: 1
id: medqa-us-train-007386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:61fde87bdda62cc77b73882cebb1ff02e7acabf6e78b5d140a1f3ab2d479ae19
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 고혈압"
  - "폐부종"
  - "중증 고혈압"
  - "급성 호흡곤란"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
  - MTIg7IKw6rO8L-ykkeymnSDsoITsnpDqsITspp0gKFNldmVyZSBQcmUtZWNsYW1wc2lhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 34주 산모가 호흡곤란으로 왔다. 혈압은 반복해서 170/105 mmHg이고 흉부 영상에서 폐부종이 확인됐다. 새 단백뇨는 확인되지 않았다. 이 환자의 산과 판단으로 옳은 것은?

## 선택지

A. 단백뇨가 없으면 폐부종은 자간전증과 관계없다
B. 보통 부종과 같으므로 외래에서 37주까지 관찰한다
C. 황산마그네슘만 투여하면 폐부종 치료나 분만 평가가 필요 없다
D. 폐부종은 중증 소견으로 즉시 안정화하고 분만을 준비한다

## 해설

새 고혈압에 폐부종 같은 장기 이상이 있으면 단백뇨 없이도 중증 자간전증을 판단할 수 있다. 산소화와 혈압을 안정시키고, 임신 지속으로 위해가 커질 수 있어 산과팀이 신속히 분만을 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산소성폐부종이라는잘못된분류삭제. 중증혈압·양측수포음의폐부종A,과거DVT도별도감별.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007386
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
