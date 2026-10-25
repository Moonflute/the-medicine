---
type: qbank
schema_version: 1
id: medqa-us-test-000288
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ad1d5e13d4d4c674a156a49174cdf17cd2959a34fab5a50cf40641a11d32b240
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환 급성 악화"
  - "세균성 기관지염"
  - "COPD"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남성이 수개월 동안 지속된 기침으로 병원에 왔다. 지난해 만성폐쇄성폐질환(COPD) 진단을 받은 뒤 증상 완화를 위해 속효성 β작용제를 사용하고 있다. 진단 후 금연했으며 약 30년 동안 하루 두 갑을 피웠다. 오늘 증상이 악화되어 내원했고, 지난 3일 동안 37.8~39°C(100~102.2°F)의 발열이 있었다고 한다. 녹황색 가래가 많이 나오는 기침이 지속되고 호흡곤란도 있었다. 체온 38.6°C(101.5°F), 호흡 22회/분, 혈압 110/80 mmHg, 맥박 115회/분이었다. 양쪽 폐 하부에서 경미한 수포음과 천명음이 들렸다. FEV1은 예측 정상치의 57%였다. 산소와 경구 프레드니손을 투여하기 시작했다. 이때 다음 중 어떤 치료를 추가로 고려해야 하는가?

## 선택지

A. 독시사이클린
B. 시프로플록사신
C. 에리트로마이신
D. 현재는 항생제가 적절하지 않다

## 해설

정답은 A이다. 호흡곤란 증가와 다량의 농성 객담·발열을 동반한 COPD 악화에서는 항생제를 고려한다. doxycycline은 제시된 선택지 중 적합한 경험적 선택이 될 수 있으며 실제 선택은 최근 항생제·배양·내성·중증도에 따른다. 녹색 객담만으로 녹농균 감염을 진단할 수 없고 doxycycline을 녹농균 치료제로 설명해서는 안 된다. 고열과 수포음이 있어 동반 폐렴도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 농성 객담을 녹농균의 증거로 설명한 오류를 교정하고 COPD 악화의 항생제 적응증을 명시.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10066569/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000288
