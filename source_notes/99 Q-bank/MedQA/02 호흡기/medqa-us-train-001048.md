---
type: qbank
schema_version: 1
id: medqa-us-train-001048
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e4aa14d810d06a0d840c80fedc1a83fa24960c82ae3df6f37da13f343d237de
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "chronic obstructive pulmonary disease"
  - "respiratory acidosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 여성이 지난 2일간 악화된 호흡곤란으로 남편에 의해 응급실로 이송되었다. 지난주에 인후통과 미열이 있었다. 지난 2년간 매일 아침 흰색 가래를 기침과 함께 배출했다. 고혈압과 제2형 당뇨병이 있다. 35년간 매일 담배 2갑을 피웠다. 현재 복용 중인 약물은 메트포르민(metformin)과 리시노프릴(lisinopril)이다. 진찰 결과, 문장 사이에 가끔 숨을 몰아쉬어야 한다. 체온은 38.1°C, 맥박은 85회/분, 호흡수는 16회/분, 혈압은 140/70 mm Hg이다. 양쪽 폐야에서 호기 시 천명음(expiratory wheezes)과 연장된 호기기가 들린다. 실내 공기 상태에서의 동맥혈 가스 분석 결과는 다음과 같다: pH 7.33, PCO2 53 mm Hg, PO2 68 mm Hg. 흉부 X-선 검사에서 양측 폐야의 과팽창과 횡격막 평탄화가 보인다. 이 환자에서 가장 가능성이 높은 추가 소견은 무엇인가?

## 선택지

A. 소변 삼투압 차이(urine osmolar gap) 증가
B. 요중 중탄산염 배설 감소
C. 소변 pH 증가
D. 요중 염화물 농도 감소

## 해설

pH 7.33과 PaCO₂ 53 mmHg는 호흡성 산증을 나타낸다. 만성 CO₂ 저류에 대해 신장은 중탄산염 재흡수와 산 배설을 증가시켜 보상하므로 보기 중 B, 요중 중탄산염 배설 감소가 합당하다. 이는 저산소혈증 자체에 대한 직접 보상이 아니라 고탄산혈증에 대한 산염기 보상이며, '혈중 중탄산염 배설'이라는 표현도 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 저산소혈증이 아닌 CO2 저류/호흡성 산증에 대한 신장 HCO3 보상으로 교정하고 혈중 배설이라는 오기 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001048
