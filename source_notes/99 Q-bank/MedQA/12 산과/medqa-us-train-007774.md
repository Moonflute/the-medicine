---
type: qbank
schema_version: 1
id: medqa-us-train-007774
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ae294d86551fcd58b3810783f7677f8100f541aa2de5926ff08b53d5426c86f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "variable fetal heart rate decelerations"
  - "reassuring fetal status"
  - "intrapartum monitoring"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
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

파수 후 진통 중인 산모의 태아 심박에서 제대 압박이 의심되는 변이감속이 반복된다. 감속 사이에는 중등도 변이도가 유지된다. 체위를 바꿔도 감속이 계속되고 진찰상 제대탈출은 없다. 다음으로 고려할 처치는?

## 선택지

A. 태아 감시를 중단한다
B. 산모 산소포화도가 정상이어도 고농도 산소만 계속 준다
C. 양수주입술로 반복되는 제대 압박을 줄인다
D. 심박 패턴을 보지 않고 옥시토신을 증량한다

## 해설

파수 뒤 제대 압박이 의심되는 반복 변이감속은 체위 변경과 필요한 원인 교정을 우선한다. 계속되면 양수주입술을 고려할 수 있으며 심박 상태가 더 나빠지면 신속히 분만 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 급속·가변 시점 감속은 비변동성이 아니라 변이감속임.
- https://obgyn.onlinelibrary.wiley.com/doi/full/10.1016/j.ijgo.2015.06.020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007774
- https://pubmed.ncbi.nlm.nih.gov/40966736/
