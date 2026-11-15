---
type: qbank
schema_version: 1
id: medqa-us-train-008955
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2451b2f47cb78d7662d4b13a0014fe3394bd65393a45805029ff3465d26563e3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Fanconi anemia"
  - "radial ray anomaly"
  - "macrocytic anemia"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MkOy9lOuLiCDruYjtmIggKEZhbmNvbmkgQW5lbWlhKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4개월 영아에게 심한 대적혈구성 빈혈이 있다. 망상적혈구가 매우 적지만 백혈구와 혈소판은 정상이다. 소두증과 세 마디 엄지가 있고, 골수에서 적혈구 전구세포가 선택적으로 감소했다. 가장 가능성 높은 진단은?

## 선택지

A. 판코니 빈혈
B. 비타민 B12 결핍
C. 유전성 구형적혈구증
D. 다이아몬드–블랙판 빈혈

## 해설

생후 수개월의 대적혈구성 빈혈과 낮은 망상적혈구, 적혈구 계통만 억제된 골수는 다이아몬드–블랙판 빈혈을 시사한다. 선천성 엄지 기형은 단서지만, 판코니 빈혈에서는 여러 혈구 계통 저하가 더 전형적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Fanconi 빈혈·방사형 골절로 잘못 연결한 해설 교체. 영아기 단독 거대적혈구빈혈과 선천기형은 Diamond-Blackfan 증후군에 부합, 세지절엄지 C 유지.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12424227/
- https://ashpublications.org/blood/article/136/11/1262/461552/Diamond-Blackfan-anemia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008955
- https://pubmed.ncbi.nlm.nih.gov/38697731/
