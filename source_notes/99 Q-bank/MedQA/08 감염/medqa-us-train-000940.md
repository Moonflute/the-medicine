---
type: qbank
schema_version: 1
id: medqa-us-train-000940
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1c81c829d611ad936f032337e78ce3c56e79471c96642109751dff59b42bc36
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "rabies"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
question_type: prevention
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

여행 중 공수병 의심 야생동물에게 손을 물려 피부가 뚫린 환자가 왔다. 과거 공수병 예방접종을 하지 않았다. 상처를 즉시 비누와 물로 충분히 세척했다. 적절한 노출 후 예방은?

## 선택지

A. 증상이 생기면 백신과 면역글로불린 투여를 시작한다
B. 면역글로불린만 투여하고 백신은 생략한다
C. 공수병 백신과 공수병 면역글로불린을 신속히 투여한다
D. 파상풍 백신을 맞으면 공수병 예방은 필요 없다

## 해설


미접종자의 고위험 교상은 상처 세척에 더해 백신과 면역글로불린이 필요하다. 증상을 기다리지 말고 국내 공수병 대응 지침에 따라 노출 평가와 예방 처치를 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000940 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 확인되지 않은 동물 물림을 기정사실화하지 않고 동굴·박쥐 노출 및 증상 전 예방으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000940
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6760
