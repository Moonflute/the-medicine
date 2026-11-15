---
type: qbank
schema_version: 1
id: medqa-us-train-006719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5c9f734d26abb8ad72b9719283a3c072b271730e8ef84fb2c04b53e2d073da0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "제4형 신세뇨관산증"
  - "당뇨병성 신장병증"
  - "고칼륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
curation_status: "revised"
curation_reason: "제4형 RTA에서 칼륨 배설이 증가한다는 반대 기전을 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 67세 남성이 혈청 K 5.7 mmol/L, Na 142 mmol/L, Cl 115 mmol/L, 중탄산염 17 mmol/L로 확인됐다. eGFR은 83 mL/min/1.73m²이며 설사와 요로 폐쇄가 없다. 요 pH는 5.3이다. 가장 가능성 높은 진단은?

## 선택지

A. 제1형 원위 신세뇨관산증
B. 제4형 신세뇨관산증
C. 제2형 근위 신세뇨관산증
D. 당뇨병성 케톤산증

## 해설

고칼륨혈증과 정상 음이온차 대사성 산증은 알도스테론 부족 또는 작용 저하로 발생하는 제4형 신세뇨관산증에 부합한다. 다른 유형과 달리 소변 pH가 낮아도 배제되지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006719
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7889554/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 제4형 RTA에서 칼륨 배설이 증가한다는 반대 기전을 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
