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
question_type: mechanism
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
difficulty: standard
answer: A
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

생후 6주 된 여아가 추적 진찰을 위해 내원했다. 수유가 어렵고 우유를 자주 토하며 체중이 적절히 늘지 않아 어머니가 걱정한다. 어머니는 아이의 울음소리가 삐걱거리는 문과 비슷하다고 한다. 머리둘레는 2백분위수, 키는 30백분위수, 체중은 15백분위수이다. 진찰에서 하악 저형성, 넓은 콧등, 양안격리, 둥근 얼굴이 보인다. 눈꺼풀틈새는 아래로 기울어져 있고 단일 손바닥 주름이 있다. 좌측 하부 흉골연에서 3/6등급 범수축기 잡음이 들린다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 5번 염색체 미세결실
B. X연관 유전자 돌연변이
C. 21번 염색체 전좌
D. 모체 갑상선기능저하증

## 해설

특징적 높은 울음, 소두증, 하악 저형성과 얼굴 소견은 묘성증후군(cri-du-chat syndrome)을 시사한다. 원인은 5번 염색체 단완 5p 영역 결실로 A가 적절하다. 5q 결실 증후군과는 다른 질환이며 기존 해설의 5q 표기는 오류다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 묘성증후군의 결실을 5q로 잘못 쓴 해설을 5p 단완 결실로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009883
