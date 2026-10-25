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
question_type: investigation
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: A
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

45세 남자가 압궤성 흉골 뒤 통증으로 내원했다. 비만, 당뇨병, 고혈압이 있고 매일 밤 술 5잔, 40갑년 흡연력이 있다. 트럭 운전사로 주로 앉아서 생활한다. 심전도에서 V2~V5 ST 상승과 상호 변화가 있어 관상동맥 중재술과 스텐트 삽입을 받았다. 시술 후 갑자기 반응이 둔해지고 혈압 87/48 mmHg, 맥박 150회/분이 되었으며 경정맥 팽창 없이 맑은 폐음, 요통과 옆구리 압통이 있다. 링거액 3 L 후 혈압은 110/70 mmHg, 맥박은 분당 95회로 호전되었다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. CT 촬영
B. 응급 수술
C. FAST 검사
D. 관상동맥 조영술 반복

## 해설

PCI 뒤 저혈압과 요통·옆구리 통증이 발생하면 혈관 접근 관련 후복막 출혈 등을 의심한다. 소생 후 혈압 110/70 mmHg, 맥박 95회/분으로 호전된 이 환자에서는 복부·골반 CT(A)가 혈종의 위치와 범위, 조영 시 활동성 출혈을 평가하는 데 적절하다. 반드시 대동맥 자체에서 출혈했다고 단정할 수는 없다. FAST는 후복막 출혈을 충분히 배제하지 못하며, 다시 불안정해지면 CT를 기다리지 않고 출혈 통제와 소생을 우선해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCI 뒤 요통·옆구리 통증과 쇼크는 후복막 출혈을 시사한다. 원문의 소생 후 활력징후를 복원하고 대동맥 출혈 단정·항상 가장 빠른 CT라는 표현을 교정한다.
- 공식/학회 근거: https://gravitas.acr.org/ACPortal/GetDataForOneTopic?topicId=302

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009713
