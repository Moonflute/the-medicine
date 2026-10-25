---
type: qbank
schema_version: 1
id: medqa-us-train-003794
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3fcab92b63b96d6469e735c75da7cc9f8a47da87bba3a682b160a12048c403ce
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "normal infant crying"
  - "colic differential"
  - "normal growth"
  - "parent counseling"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: D
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

생후 1개월 여아가 하루에 몇 차례 20~30분씩 울며 저녁에 더 심하지만 성장과 신체검사는 정상이다. 수유와 배뇨, 배변도 정상이고 안거나 속싸개로 달래기는 어렵고 영아용 그네에서만 진정된다. 다음 중 가장 가능성 높은 상태는?

## 선택지

A. 위식도역류질환
B. 영아 산통
C. 우유 단백질 알레르기
D. 정상적인 영아 울음

## 해설

생후 1개월에 수유 전과 저녁에 20~30분씩 하루 최대 네 차례 우는 것은 성장·수유/배설과 진찰이 정상이면 정상 울음(D)의 범위일 수 있다. 울음은 생후 6~8주 무렵 많아질 수 있고 달래기 어렵다는 한 사실만으로 알레르기·역류병이나 산통을 확진하지 않는다. 원문은 안기/속싸개로는 달래기 어렵고 그네에서만 진정한다고 하며 이를 '달래면 쉽게 진정'으로 바꾸어서는 안 된다. 그네에서 진정되는 것과 그곳에서 재우는 것은 별개이며 수면은 안전한 평면에서 바로 눕히는 원칙을 따른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 달래기 쉬운 울음으로 바꾼 번역을 원문의 달래기 어려움/그네에서만 진정으로 복원하고 정상 울음 판단을 성장·경과와 함께 설명했다.
- https://www.rch.org.au/clinicalguide/guideline_index/crying_baby_infant_distress/
- https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022-Recommendations-for-Reducing-Infant-Deaths-in-the-Sleep-Environment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003794
