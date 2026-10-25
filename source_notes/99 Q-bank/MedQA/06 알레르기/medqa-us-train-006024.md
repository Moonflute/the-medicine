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
question_type: diagnosis
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

64세 여성이 입술 부종과 호흡곤란으로 응급진료센터에 왔다. 오늘 여러 차례 근관치료를 받은 후 2시간 전부터 입술이 붓기 시작했고 호흡이 어려워졌다. 과거에도 이와 같은 소수술 후 비슷한 발작이 있었다. 혈압은 118/76 mmHg, 심박수는 분당 84회, 호흡수는 분당 16회이다. 입술 부종과 경한 흡기성 협착음이 있고 검사에서 C1 에스터라제 억제제가 낮다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 유전성 혈관부종
B. 접촉피부염
C. 약물 유발 혈관부종
D. 알레르기 반응

## 해설


낮은 C1 에스터라제 억제인자와 반복되는 시술 유발 혈관부종은 C1 억제인자 결핍성 혈관부종을 지지하므로 선지 중 A가 가장 가깝다. 다만 고령 환자에서는 후천성 C1 억제인자 결핍도 감별해야 하며, 연령만으로 유전성을 확정할 수 없다. 발병 연령·가족력·C1q 등을 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-006024`와 직접 대조했다.
- 판정: 반복 시술 유발 부종·낮은 C1 억제인자로 A가 선지 중 최선이나 64세에서 유전성으로 확정하면 안 됨. 후천성 결핍 감별 필요 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006024
