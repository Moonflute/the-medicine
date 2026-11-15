---
type: qbank
schema_version: 1
id: medqa-us-train-004720
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf320043e4180e7c0f28bacdc07f3ceb99a35461e5733259737a0a1182e57e33
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "다낭성 난소 증후군"
  - "고인슐린혈증"
  - "LH:FSH 비율 증가"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
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

17세 청소년이 초경 4년 뒤에도 월경 간격이 60–90일이고 다모가 뚜렷하다. 혈액검사에서 안드로겐 상승이 확인됐다. 다낭성난소증후군을 평가할 때 맞는 설명은?

## 선택지

A. 다른 원인을 배제하고 지속적인 월경 이상과 고안드로겐증을 함께 평가한다
B. 난소 초음파의 다낭 모양만으로 확진한다
C. LH/FSH 비만 상승하면 확진한다
D. 초경 직후의 일시적인 월경불순과 구분할 필요는 없다

## 해설

청소년에서는 초경 후 경과에 비춰 비정상적인 월경 주기와 임상 또는 생화학적 고안드로겐증이 모두 필요하다. 임신·갑상샘 이상 등 다른 원인을 제외하고 초음파나 LH/FSH 비만으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: LH:FSH비를PCOS원인/진단필수처럼쓰지않도록수정. C의고전적연관성은유지,청소년진단정보부족명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004720
- https://pmc.ncbi.nlm.nih.gov/articles/10505534/
