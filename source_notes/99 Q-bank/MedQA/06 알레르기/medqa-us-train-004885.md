---
type: qbank
schema_version: 1
id: medqa-us-train-004885
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e18a35fbd015ec1879fad95033ccd25b25eb9388689a4f098859e8e4c0ae4769
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "I형 과민반응"
  - "IgE 매개 알레르기"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7세 남아가 친구 생일파티에서 숨쉬기 힘들어져 내원했다. 땅콩버터를 먹은 직후 얼굴이 붉어지고 얼굴과 목을 긁기 시작했다. 혈압 94/62 mmHg, 맥박 125회/분, 호흡수 22회/분이며 입술이 부어 있고 심한 천명성 협착음이 들린다. 이 환자가 경험하는 과민반응의 유형은?

## 선택지

A. I형 과민반응
B. II형 과민반응
C. III형 과민반응
D. IV형 과민반응

## 해설


땅콩 노출 직후 홍조·가려움·입술 부종과 협착음이 발생한 것은 IgE 매개 비만세포 활성화에 의한 I형 과민반응(A)을 지지한다. 아나필락시스는 저혈압 없이도 발생할 수 있으며 본문에 없는 발한을 근거로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-004885`와 직접 대조했다.
- 판정: 땅콩 노출 직후 점막·기도 침범은 I형 반응. 7세에서 94/62를 저혈압이라고 단정하고 발한을 추가한 해설을 교정; A 유지.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004885
