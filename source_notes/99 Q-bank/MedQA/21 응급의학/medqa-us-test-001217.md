---
type: qbank
schema_version: 1
id: medqa-us-test-001217
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6ae84948c297c9c0150e88fbc0acef01daf7c7f8c44a56bcb966133bd99f97cd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심장 타박상"
  - "외상성 부정맥"
  - "교통사고"
  - "Cardiac contusion"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 남성이 안전벨트 없이 교통사고를 당한 지 15분 후 의식이 없는 상태로 응급실에 왔다. 혈압 60 mmHg, 맥박 141회/분으로 불규칙하게 불규칙했고 흉부 멍과 복부·두피 열상이 있었다. 경정맥압이 증가하고 양쪽 폐기저부 수포음이 있었으며 FAST는 음성이었다. 심전도에서 P파가 없고 혈관수축제를 투여했지만 한 시간 후 사망했다. 가장 가능성 높은 진단은?

## 선택지

A. 심장 타박상
B. 혈흉
C. 대동맥 박리
D. 폐좌상

## 해설

큰 흉부 둔상 뒤 새로운 불규칙 빈맥·P파 소실(심방세동 양상)과 심한 쇼크·울혈 소견은 둔상성 심장손상/심장 타박상(A)을 지지한다. 부정맥과 심근 수축기능 저하가 동반될 수 있다. P파 소실은 심방세동 소견이지 심장 타박상에 특이적이지 않으며 음성 FAST도 모든 출혈·대동맥·심장 손상을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상성 심장 타박상 A를 유지하되 P파 소실·음성 FAST를 질환 정의나 단독 확진 소견으로 가르치지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001217
