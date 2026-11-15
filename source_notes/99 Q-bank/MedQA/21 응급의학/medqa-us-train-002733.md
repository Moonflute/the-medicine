---
type: qbank
schema_version: 1
id: medqa-us-train-002733
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec9e9f447beeb93e2fc11cd47f05764517e644e5b3505abaa20c734c3f40fbb6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "dog bite"
  - "rabies postexposure management"
  - "healthy dog observation"
  - "rabies prophylaxis"
  - "Rabies"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
difficulty: complex
answer: C
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

공수병 유행 지역을 여행하던 8세 아이가 떠돌이 개에게 물려 피부가 뚫렸다. 개를 찾을 수 없고 아이는 이전에 공수병 예방접종을 받은 적이 없다. 상처를 즉시 씻은 뒤 필요한 처치는?

## 선택지

A. 상처를 봉합하고 공수병 예방은 하지 않는다
B. 개를 찾을 때까지 백신을 보류한다
C. 공수병 백신과 면역글로불린을 신속히 투여한다
D. 파상풍 백신만 투여한다

## 해설

고위험 지역에서 관찰할 수 없는 개에게 피부가 뚫리게 물린 미접종자는 공수병 노출 후 예방이 필요하다. 상처를 충분히 씻고 백신과 면역글로불린을 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 관찰 가능한 건강한 개의10일 관찰 A는 유지하되, 과거 접종자는 노출 후 백신을 쓰지 않는다는 오류를 수정하고 지역 공중보건 판단 조건을 명시했다.
- 공식/학회 근거: https://www.cdc.gov/rabies/hcp/veterinarians/
- 공식/학회 근거: https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002733
- https://www.kdca.go.kr/bbs/kdca/55/306017/download.do
- 질병관리청 국가건강정보포털, 공수병 노출 후 치료: https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6760
