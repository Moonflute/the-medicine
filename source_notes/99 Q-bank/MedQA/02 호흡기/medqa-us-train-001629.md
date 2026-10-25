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

57세 남성이 연례 건강검진에 내원했다. 건강하고 증상은 없으며 중증 과거력이나 복용 약도 없다. 35갑년 흡연력과 5년 전 금연력이 있고 아버지가 67세에 폐암으로 사망했다. 체온은 36.8°C (98.2°F), 맥박은 95회/분, 호흡수는 16회/분, 혈압은 100/75 mm Hg이다. 신체검사는 정상이고 검사실 결과도 정상이다. 다음 중 현재 권장되는 예방 선별검사는 무엇인가?

## 선택지

A. 흉부 X선
B. 심전도
C. 저선량 흉부 CT
D. 선별검사 불필요

## 해설

정답은 C이다. 57세, 35 pack-year 및 금연5년은 USPSTF의 연례 저선량CT 선별 대상인 50–80세·20 pack-year 이상·현재 흡연 또는 금연15년 이내 조건을 충족한다. 수술 등 근치치료를 받을 의사/능력과 기대여명도 평가한다. 흉부X선은 폐암 선별의 대체 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 환자나이57을55로 바꾼 해설과 오래된30pack-year 기준을 USPSTF 기준으로 교정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001629
