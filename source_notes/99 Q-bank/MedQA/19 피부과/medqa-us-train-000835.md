---
type: qbank
schema_version: 1
id: medqa-us-train-000835
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1093fcf06f5be86c5f922bf19b8019322fb4f9112c210cdb70d91119a1c8d35b
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "acne"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

국소 치료와 경구 항생제에도 호전되지 않은 중증 여드름으로 19세 여성에게 경구 이소트레티노인을 고려한다. 임신 가능성이 있는 이 환자에게 처방 전 우선 확인할 것은?

## 선택지

A. 자외선 차단제를 정기적으로 사용하는지 확인
B. 기존 경구 항생제를 장기 병용할 수 있는지 확인
C. 임신 여부를 확인하고 태아 위험과 치료 전후 피임을 상담
D. 국소 레티노이드를 함께 사용하도록 권고

## 해설

이소트레티노인은 태아에 중대한 위해를 줄 수 있어 임신 중에 사용하지 않는다. 국내 임신예방프로그램에 따라 처방 전에 임신 여부와 효과적인 피임을 확인하고, 치료 중 및 종료 후에도 제품별 안전사용 절차를 따른다. 미국 iPLEDGE의 검사 횟수를 국내 기준으로 그대로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원정답 C의 치료 전 2회 임신검사 요건은 유지하고 2026 FDA 변경에도 유지되는 의료환경 검사·임신예방 상담을 명확히 한다.
- 공식/학회 근거: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/ipledge-risk-evaluation-and-mitigation-strategy-rems
- 공식/학회 근거: https://www.medlineplus.gov/druginfo/meds/a681043.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000835
- 식품의약품안전처, 이소트레티노인 안전사용 안내: https://www.mfds.go.kr/brd/m_580/view.do?company_cd=&company_nm=&itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&page=4&seq=76&srchFr=&srchTo=&srchTp=&srchWord=
