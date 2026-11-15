---
type: qbank
schema_version: 1
id: medqa-us-train-004526
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6223d1abdc4cb09f85422a336a47ff74a8a8064c0e99adfbd5680f82fd85454f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "생식기 사마귀"
  - "콘딜로마 첨형"
  - "인유두종바이러스 감염"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yDneyLneq4sCDsnbjqsIQg7Jyg65GQ7KKFIOuwlOydtOufrOyKpCAoR2VuaXRhbCB3YXJ0cykubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 외음부의 작고 부드러운 돌출 병변 여러 개로 왔다. 진찰에서 전형적인 외부 생식기 사마귀이고 궤양·출혈·고정은 없다. 의료진이 시술하는 치료를 원할 때 방법은?

## 선택지

A. 경구 아시클로버
B. 경구 독시사이클린
C. 액체질소 냉동치료
D. 벤자틴 페니실린 근육주사

## 해설

외부 생식기 사마귀는 병변 위치와 환자 선호에 따라 냉동치료 등으로 치료할 수 있다. 딱딱하거나 고정되고 출혈하는 비전형적 병변은 진단을 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 반대로 아시클로버를 권한 명백한 해설 오류를 교정.
- https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004526
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10789539/
