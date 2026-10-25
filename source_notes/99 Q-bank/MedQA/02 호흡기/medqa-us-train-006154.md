---
type: qbank
schema_version: 1
id: medqa-us-train-006154
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:97579ec4c233b1d41536e8497b77ac966d3a8440c35378e57ab72965675b79f1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐암 선별검사"
  - "저선량 흉부 CT"
  - "고위험 흡연력"
related_disease_slugs: []
question_type: prevention
difficulty: complex
answer: B
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

68세 여성이 연례 검진을 위해 내원했다. 활력징후는 맥박 85회, 체온 98.8°F(37.1°C), 호흡수 16회, 혈압 125/70 mmHg이다. 35년 동안 하루 한 갑씩 흡연했으나 5년 전 금연했다. 64세에 마지막 자궁경부 세포검사를 받았고 모두 정상이었으며, 62세에 마지막 대장내시경도 정상이었다. 다음 중 이 환자에게 가장 적절한 다음 검사는 무엇인가?

## 선택지

A. 복부 초음파
B. 흉부 CT
C. 자궁경부 세포검사
D. 흉부 방사선촬영

## 해설

68세·35pack-year·금연5년은 USPSTF의 연례 저선량 CT B 기준(50-80세,20pack-year 이상,현재흡연 또는금연15년 이내)에 부합한다. 일반 흉부X선이나 통상 진단용 CT를 선별 LDCT와 혼동하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: LDCT B의 과거55세 기준을 현행50-80세/20pack-year 기준으로 교정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006154
