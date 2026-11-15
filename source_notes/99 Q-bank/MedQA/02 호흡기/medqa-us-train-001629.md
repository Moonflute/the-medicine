---
type: qbank
schema_version: 1
id: medqa-us-train-001629
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1742c40428427d4ae602ce5853a5473c7c9cbc3072e154d32a3b915f2caf62a0
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "lung cancer screening"
  - "low-dose CT"
  - "former smoker"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: prevention
difficulty: complex
answer: C
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

57세 남성이 건강검진을 받는다. 호흡기 증상은 없으며 현재 흡연 중이고 35갑년의 흡연력이 있다. 국내 국가폐암검진에서 적절한 검사와 주기는?

## 선택지

A. 매년 흉부 X선
B. 2년마다 객담 세포검사
C. 2년마다 저선량 흉부 CT
D. 매년 조영증강 흉부 CT

## 해설

국내 국가폐암검진은 만 54–74세의 폐암 고위험군을 대상으로 2년마다 저선량 흉부 CT를 시행한다. 이 환자는 30갑년 이상 흡연한 현재 흡연자로 해당한다. 폐암 의심 증상이 있는 환자의 진단 검사는 선별검사와 별개다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 환자나이57을55로 바꾼 해설과 오래된30pack-year 기준을 USPSTF 기준으로 교정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001629
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5296
- 국가암정보센터, 국가암검진 사업: https://www.cancer.go.kr/lay1/S1T261C262/contents.do
