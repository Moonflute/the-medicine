---
type: qbank
schema_version: 1
id: medqa-us-train-000293
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55b954cef42bf577ae0289330bc4760ebf164cc47f369bd385568bd4d3c566e3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "carcinoma of the left breast"
  - "invasive ductal carcinoma"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: monitoring
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvVHJhc3R1enVtYWIubWQ
---

# MedQA US 임상문제

## 문제

53세 여성이 HER2 양성 유방암 수술 후 트라스투주맙 치료를 시작한다. 심부전 병력과 증상은 없다. 치료 전 확인해야 할 기저 검사는?

## 선택지

A. 심장초음파로 좌심실 박출률 측정
B. 심전도로 QT 간격만 측정
C. 흉부 X선으로 심장 크기만 측정
D. 운동부하검사로 허혈 여부 확인

## 해설


트라스투주맙은 좌심실 기능을 떨어뜨릴 수 있다. 무증상이라도 치료 전 좌심실 박출률의 기준값을 확인하고 치료 중 주기적으로 비교한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000293 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HER2 표적치료 계획 전 심기능 평가 echo A가 FDA trastuzumab baseline LVEF 권고와 부합.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=492dbdb2-077e-4064-bff3-372d6af0a7a2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000293
