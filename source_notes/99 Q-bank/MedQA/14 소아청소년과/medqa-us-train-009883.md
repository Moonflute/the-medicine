---
type: qbank
schema_version: 1
id: medqa-us-train-009883
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:847082b1d5ec7bd6a3771423576d9b83162c7b1a5f4487d80c3d7b0fca427478
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "묘성증후군"
  - "5번 염색체 결실"
  - "선천성 심장병"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 6주 영아에게 수유곤란, 소두증과 작고 뒤로 들어간 턱이 있다. 울음소리는 유난히 높고 고양이 울음과 비슷하다. 의심되는 염색체 이상은?

## 선택지

A. 4번 염색체 단완 결실
B. 5번 염색체 단완 결실
C. 22q11.2 결실
D. 21번 삼염색체

## 해설

높고 특징적인 울음과 성장·발달 이상은 묘성증후군을 시사한다. 원인은 5번 염색체 단완(5p) 결실이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 묘성증후군의 결실을 5q로 잘못 쓴 해설을 5p 단완 결실로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009883
- https://www.genome.gov/Genetic-Disorders/Cri-du-Chat
