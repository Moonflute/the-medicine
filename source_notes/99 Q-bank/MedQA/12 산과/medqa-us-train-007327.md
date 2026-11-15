---
type: qbank
schema_version: 1
id: medqa-us-train-007327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:107f26d9209f624a862f239c9e9a08d4e25e7abc9d757cf90582fabce8352493
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 생백신 금기"
  - "MMR 비면역"
  - "산후 예방접종"
question_type: prevention
related_disease_slugs: []
difficulty: complex
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

임신 10주인 여성이 풍진 항체가 없음을 확인했다. 최근 풍진에 노출된 적은 없다. MMR 접종 시기는?

## 선택지

A. 임신 중 지금
B. 임신 20주 이후
C. 모유 수유를 모두 마친 뒤에만 접종
D. 출산 후, 모유 수유 여부와 관계없이 접종

## 해설

MMR은 생백신이므로 임신 중에는 접종하지 않는다. 면역이 없다면 출산 후 접종을 권하며 모유 수유 때문에 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: A와C를 혼동한 혈청검사후접종 해설 수정. MMR 임신금기는 이론적위험,비면역확인된 산후접종A.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007327
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1122&menuLv=1
- 질병관리청 국가건강정보포털, 임신 중 예방접종: https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6953
