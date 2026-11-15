---
type: qbank
schema_version: 1
id: medqa-us-train-009713
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e467cd70684fbb6cc54be33de1322767a690bf6c7b81202a1768eb130093390
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "retroperitoneal hemorrhage"
  - "후복막 출혈"
  - "post-catheterization bleeding"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

대퇴동맥으로 관상동맥 중재술을 받은 환자가 새 요통과 옆구리 통증을 호소한다. 혈압이 떨어지고 혈색소가 감소하지만 서혜부 겉으로 보이는 혈종은 없다. 우선 의심할 합병증은?

## 선택지

A. 심낭압전
B. 재관류 부정맥
C. 급성 폐부종
D. 후복막 출혈

## 해설

대퇴혈관 접근 뒤 저혈압과 등·옆구리 통증이 나타나면 눈에 띄는 서혜부 혈종이 없더라도 후복막 출혈을 의심한다. 소생을 진행하고 안정되면 복부·골반 CT로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCI 뒤 요통·옆구리 통증과 쇼크는 후복막 출혈을 시사한다. 원문의 소생 후 활력징후를 복원하고 대동맥 출혈 단정·항상 가장 빠른 CT라는 표현을 교정한다.
- 공식/학회 근거: https://gravitas.acr.org/ACPortal/GetDataForOneTopic?topicId=302

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009713
