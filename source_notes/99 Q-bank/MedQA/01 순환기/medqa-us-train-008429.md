---
type: qbank
schema_version: 1
id: medqa-us-train-008429
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a926383fd6ffc68b2f770f8d54d35fdbbc46f3f464cfcbe9a5a53ed893eeda55
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive emergency"
  - "acute coronary syndrome"
  - "labetalol"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 가슴을 짓누르는 통증으로 응급실에 왔다. 혈압은 204/114 mmHg이고, 심전도에서 전외측 유도의 새 ST분절 하강이 보이며 연속 트로포닌이 상승한다. 설하 질산염을 투여한 뒤에도 흉통과 심한 고혈압이 지속된다. 저혈압, 우심실 경색 소견 또는 최근 PDE5 억제제 사용은 없다. 급성관상동맥증후군 치료와 병행할 적절한 혈압 처치는?

## 선택지

A. 경구 암로디핀을 처방하고 외래에서 추적한다
B. 정맥 혈압약을 반복 투여해 수분 안에 정상 혈압으로 낮춘다
C. 혈압은 통증에 대한 반응이므로 관리하지 않는다
D. 정맥 니트로글리세린을 감시하에 조절하며 혈압과 허혈성 통증을 낮춘다

## 해설

급성 심근허혈이 동반된 심한 혈압 상승은 고혈압 응급증이다. 금기가 없고 통증과 혈압 상승이 지속되면 정맥 질산염을 감시하에 조절할 수 있다. 관상동맥 관류를 해칠 정도로 혈압을 급격히 낮추지 않으며, 급성관상동맥증후군의 평가와 치료를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ‘no more than 25% 감소’를 ‘25% 이하까지 낮춤’으로 오독하는 번역을 선지와 해설에서 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008429
- https://doi.org/10.5646/ch.2026.32.e31
- https://academic.oup.com/eurheartj/article/45/38/3912/7741010
- https://doi.org/10.1161/CIR.0000000000001309
