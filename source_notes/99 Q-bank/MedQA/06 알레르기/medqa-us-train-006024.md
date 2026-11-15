---
type: qbank
schema_version: 1
id: medqa-us-train-006024
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a883289d22b702f2dbb49fae4ee015d7289e3bfde2bd5d7e64875719848836aa
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "유전성 혈관부종"
  - "C1 에스터라제 억제제 결핍"
  - "후두부종"
  - "Hereditary angioedema"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOu2gOyihSAo7Jyg7KCE7ISxKSAoSGVyZWRpdGFyeSBBbmdpb2VkZW1hKS5tZA
question_type: management
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

C1 억제인자 결핍형 유전성 혈관부종이 확진된 24세 여성이 치과 시술 뒤 목소리가 쉬고 숨쉬기 어렵다. 응급 기도 평가와 확보 준비를 시작했다. 기도 처치와 동시에 투여할 질환 특이 약제는?

## 선택지

A. 정맥 혈장유래 C1 억제인자 농축제
B. 경구 세티리진 단독
C. 정맥 메틸프레드니솔론 단독
D. 경구 다나졸 단독

## 해설


후두 침범은 즉각적인 기도 대처와 발작 치료가 필요하다. C1 억제인자 농축제는 급성 발작에 사용하는 표적 치료이며, 항히스타민제나 스테로이드만으로 브래디키닌 매개 부종을 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-006024`와 직접 대조했다.
- 판정: 반복 시술 유발 부종·낮은 C1 억제인자로 A가 선지 중 최선이나 64세에서 유전성으로 확정하면 안 됨. 후천성 결핍 감별 필요 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006024
- https://doi.org/10.1016/j.waojou.2026.101335
