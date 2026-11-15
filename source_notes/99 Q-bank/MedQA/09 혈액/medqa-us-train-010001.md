---
type: qbank
schema_version: 1
id: medqa-us-train-010001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c517ebfd3c30979b81037109c4f02c9c933923ff316c5f8654da38eeade329a2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 K 결핍"
  - "응고인자 II 결핍"
  - "지방변"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2DgOuvvCBLIOqysO2VjSAoVml0YW1pbiBLIERlZmljaWVuY3kpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

수개월째 지방변을 보는 9세 아이가 멍이 쉽게 들어 내원했다. 혈소판은 정상이고 PT가 연장됐다. 간의 다른 합성기능은 상대적으로 보존됐고 항응고제 노출은 없다. 가장 먼저 의심할 영양 결핍은?

## 선택지

A. 비타민 B12
B. 비타민 B1
C. 철분
D. 비타민 K

## 해설


지방 흡수장애는 지용성 비타민 K 결핍을 일으킬 수 있다. 비타민 K 의존 응고인자가 감소해 PT가 늘며, 결핍이 심하면 aPTT도 연장될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010001 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지방 흡수장애의 비타민 K 의존 II인자 감소 D 유지. PTT45를 정상이라 한 해설과 가족관계 maternal aunt를 외할머니로 오역한 본문 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010001
- https://www.ncbi.nlm.nih.gov/books/NBK532921/
