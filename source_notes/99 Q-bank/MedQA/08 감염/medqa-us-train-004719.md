---
type: qbank
schema_version: 1
id: medqa-us-train-004719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ddf6ccfe6c8527da5ba120621b8f2bbd51fd580144cc40bbcbfb4ee5310b1efe
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "선택적 IgA 결핍"
  - "반복성 호흡기 감염"
  - "체액성 면역결핍"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
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

20세 환자가 반복하는 부비동염과 중이염으로 내원했다. 반복 측정한 혈청 IgA는 5mg/dL이고 IgG와 IgM은 정상이다. 약물 등 이차 원인은 확인되지 않았다. 가장 가능성 높은 진단은?

## 선택지

A. 공통 가변성 면역결핍
B. 선택적 IgA 결핍
C. 고IgM 증후군
D. X연관 무감마글로불린혈증

## 해설


4세 이후 IgA가 현저히 낮지만 IgG와 IgM이 정상이고 이차 원인이 없으면 선택적 IgA 결핍에 부합한다. IgG도 낮다면 공통 가변성 면역결핍 등 다른 항체결핍을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004719 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 IgA라면서 낮은 IgA 정답을 택한 자기모순 해설 교정; 선택적 IgA 결핍 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004719
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/2025-Inborn-errors-of-immunity-pp.pdf
