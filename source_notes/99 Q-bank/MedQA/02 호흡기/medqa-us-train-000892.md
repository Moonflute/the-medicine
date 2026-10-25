---
type: qbank
schema_version: 1
id: medqa-us-train-000892
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38280b288497a91c77fd402bdf840be4c5ead2e5e25e3cd68e84814da0937c1c
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "moderate persistent asthma"
  - "asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 지난 2일간 점진적으로 악화되는 기침, 쌕쌕거림(wheezes), 가슴 답답함으로 응급실에 내원했다. 환자는 중등도 지속성 천식(moderate persistent asthma) 병력이 있으며, 유지 요법으로 흡입용 코르티코스테로이드, 지속성 베타 작용제(long-acting beta-agonist), 그리고 구제 요법으로 알부테롤(albuterol)을 사용하고 있다. 구제 흡입기 사용을 늘렸음에도 증상이 호전되지 않았다. 환자는 호흡기 감염 증상이 있는 사람과 접촉한 적이 있다고 보고했다. 체온은 37.4°C, 혈압은 101/68 mm Hg, 심박수는 분당 99회, 호흡수는 분당 32회이다. 신체 검진상 전반적인 다성 쌕쌕거림(polyphonic wheezes)이 들리지만 공기 유입은 양측이 대칭적이다. 실내 공기 상태에서 산소 포화도는 92%이다. 다음 중 어떤 소견이 이 환자의 상태를 생명을 위협하는(life-threatening) 상태로 분류하게 하는가?

## 선택지

A. 최대 호기 유속(PEFR) >70%
B. 일상 활동을 제한하는 호흡곤란
C. 치료 시작 후 3일 이상 지속되는 증상
D. 호흡성 산증(respiratory acidosis)

## 해설


환자의 호흡곤란과 저산소증에 동반된 호흡성 산증은 가스 교환이 급격히 악화된 것을 의미한다. 호흡성 산증은 천식 악화 시 생명을 위협하는 위기 상태의 핵심 판단 기준이다. 따라서 호흡성 산증이 존재하면 life‑threatening asthma로 분류한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 천식 악화에서 CO2저류를 동반한 호흡성 산증은 호흡피로/위중한 환기부전 신호 D. PEF>70%와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000892
