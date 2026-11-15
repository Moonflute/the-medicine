---
type: qbank
schema_version: 1
id: medqa-us-train-008369
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:263881b1d662d4cc24fad5b1300ff31ef67dc4c8c5fad845a32f566bbb889977
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ST-elevation myocardial infarction"
  - "prehospital aspirin"
  - "percutaneous coronary intervention"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL1NU67aE7KCIIOyDgeyKuSDsi6zqt7zqsr3sg4nspp0gKFNURU1JKSAoU1QtRWxldmF0aW9uIE15b2NhcmRpYWwgSW5mYXJjdGlvbikubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남성이 30분째 이어지는 압박성 흉통으로 응급실에 왔다. 심전도에서 ST분절 상승이 보이고 일차 관상동맥중재술 팀을 호출했다. 혈압은 85/50 mmHg이며 의식은 명료하다. 아스피린 알레르기나 활동성 출혈이 없다. 지금 적절한 초기 약물 처치는?

## 선택지

A. 아스피린 100 mg을 유지용량으로만 복용시킨다
B. 설하 니트로글리세린을 추가 투여한다
C. 아스피린 300 mg을 씹어 복용하게 한다
D. 아스피린은 다음 날까지 보류한다

## 해설

대한심근경색학회 합의문은 금기가 없는 급성 심근경색에서 초기 경구 아스피린 부하용량 150–300 mg을 권고한다. 300 mg은 초기 부하용량이며 유지용량과 다르다. 이 환자는 저혈압이 있어 질산염을 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아스피린 급성 부하용량과 유지용량을 구별하고 저혈압에서 추가 질산염을 피함.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008369
- https://doi.org/10.4070/kcj.2020.0196
