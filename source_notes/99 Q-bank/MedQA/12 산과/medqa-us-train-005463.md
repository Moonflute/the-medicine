---
type: qbank
schema_version: 1
id: medqa-us-train-005463
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7449f503512f7930dd02d5752dad3e7383d488a4876e19302515568e64b858d3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "둔위"
  - "임신 38주"
  - "외회전술"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-uRlOychCAoQnJlZWNoIFByZXNlbnRhdGlvbikubWQ
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

임신 38주 초임부의 단태아가 지속적으로 둔위다. 태아 감시는 정상이며 양막은 온전하고 양수량은 적절하다. 질식분만에 금기가 없고 산모도 두위 질식분만을 원한다. 다음 조치는?

## 선택지

A. 둔위가 자연히 바뀔 때까지 태아 감시를 중단한다
B. 태위에 관계없이 바로 유도분만한다
C. 태아 감시와 응급 제왕절개가 가능한 곳에서 외회전술을 제안한다
D. 둔위가 한 차례 확인됐으므로 선택지를 설명하지 않고 제왕절개를 정한다

## 해설

외회전술은 금기가 없는 만삭 단태 둔위에서 두위로 바꾸어 제왕절개 가능성을 줄이는 방법이다. 성공 가능성·위험을 설명하고 태아 감시와 응급 분만이 가능한 곳에서 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 외회전술 명칭과 상담·응급수술 가능 조건 및 제왕절개 폄하 수정.
- https://www.rmf.harvard.edu/Risk-Prevention-and-Education/Guidelines-and-Algorithms-Catalog-Page/Guidelines-Algorithms/2026/OB-Guideline-Files/Guideline20-Mgmnt-of-Breech-Presentations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005463
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/05/external-cephalic-version
