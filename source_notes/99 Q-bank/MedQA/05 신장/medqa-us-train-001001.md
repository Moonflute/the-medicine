---
type: qbank
schema_version: 1
id: medqa-us-train-001001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:969bb17afd6371e21892b3568e9cc61f471422f3fd76c42074663f6c2af1b4e4
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "Focal segmental glomerulosclerosis"
  - "Membranous nephropathy"
  - "Rapidly progressive glomerulonephritis"
  - "Thin basement membrane disease"
  - "chronic bronchitis"
  - "nephrotic syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-q1reyGjCDthqDrpqzqtbPsnYzspp0gKEZvY2FsIFNlZ21lbnRhbCBHbG9tZXJ1bG9zY2xlcm9zaXMpLm1k
  - MDUg7Iug7J6lL-unieyEsSDsgqzqtazssrTsi6Dsl7wgKE1lbWJyYW5vdXMgTmVwaHJvcGF0aHkpLm1k
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-yWleydgCDthqDrpqzrsJTri6Xrp4nrs5EgKFRoaW4gQmFzZW1lbnQgTWVtYnJhbmUgRGlzZWFzZSkubWQ
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성에게 새로 생긴 신증후군이 있고 신장 생검은 막성 신병증에 부합한다. 최근 원인 불명 체중 감소와 혈담이 있으며 흉부 CT에서 새로 생긴 폐 종괴가 보인다. 면역억제 치료 전에 우선 할 평가는?

## 선택지

A. 폐 종괴의 악성 가능성과 다른 이차성 원인을 평가한다
B. 폐 종괴를 무시하고 바로 고용량 면역억제를 시작한다
C. 신증후군을 흡입제 부작용으로 판단하고 관찰한다
D. 저알부민혈증에 대한 알부민 투여로 원인 평가를 대신한다

## 해설

막성 신병증은 악성종양 등 이차성 원인과 동반될 수 있다. 설명되지 않는 체중 감소와 폐 종괴가 있으면 면역억제에 앞서 암 여부 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성 기관지염 자체를 막성신병증의 원인처럼 설명한 부분을 고형암 연관 신증후군으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001001
- https://kdigo.org/guidelines/gd/
