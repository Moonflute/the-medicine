---
type: qbank
schema_version: 1
id: medqa-us-test-000685
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e2684e609ae26ed4ea27d72ef3dcac43b184822fc64b98755c56f4e4c7af210
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "유전성 혈관부종"
  - "C1 에스터레이스 억제인자 결핍"
  - "브래디키닌"
  - "Hereditary angioedema"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOu2gOyihSAo7Jyg7KCE7ISxKSAoSGVyZWRpdGFyeSBBbmdpb2VkZW1hKS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

12세 여아가 발치 뒤 가렵지 않은 얼굴 부종과 반복적인 심한 복통으로 내원했다. 두드러기는 없으며 어머니에게도 비슷한 발작이 있다. 유전성 혈관부종이 의심될 때 초기 혈액검사는?

## 선택지

A. 총 IgE와 음식 특이 IgE
B. 혈청 C4와 C1 억제인자의 농도·기능
C. 혈청 트립타제만 측정
D. 항핵항체와 류마티스인자

## 해설


두드러기 없이 반복되는 부종과 복통, 가족력은 브래디키닌 매개 유전성 혈관부종의 단서다. C1 억제인자의 기능·농도를 C4와 함께 측정하며, C4 단독으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000685`와 직접 대조했다.
- 판정: 외상·치과시술 유발 비소양성 반복 부종과 장벽 부종은 C1 억제인자 결핍 지지. 보체 활성화가 직접 브래디키닌을 만든다는 부정확한 연결을 접촉계 조절 장애로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000685
- https://doi.org/10.1016/j.waojou.2026.101335
- https://doi.org/10.1111/all.70207
