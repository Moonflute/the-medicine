---
type: qbank
schema_version: 1
id: medqa-us-train-005226
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b78734a3cc3313d540548e91b829d6aae7c4f5ff6b0f38b602bb34e8e6402cf
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "말초성 성조숙증"
  - "성조숙증"
  - "난소 에스트로겐 분비"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
difficulty: complex
answer: A
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

4세 여아에게 빠른 유방 발달과 키 성장, 앞선 골연령이 있고 GnRH 자극검사에서 사춘기 수준의 LH 반응이 확인됐다. 중추성 성조숙증의 원인을 확인할 검사는?

## 선택지

A. 뇌 MRI
B. 난소 동맥조영술
C. 혈청 AFP 단독 검사
D. 소변 임신검사만 반복

## 해설

6세 미만 여아의 확진된 중추성 성조숙증은 증상이 없어도 뇌 MRI로 시상하부·뇌하수체 병변을 평가한다. 6세 이상은 진행 양상과 신경 증상 등에 따라 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Leuprolide 후 estradiol 측정은 중추성 축 활성의 보조 확인이지 상승=말초성이라는 기존 설명이 아님을 교정.
- https://pubmed.ncbi.nlm.nih.gov/26094907/
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005226
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10556443/
