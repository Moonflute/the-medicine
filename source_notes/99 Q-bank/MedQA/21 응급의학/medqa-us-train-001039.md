---
type: qbank
schema_version: 1
id: medqa-us-train-001039
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:baf530af03c4fdd7842a7f16101c389970e40059ff1d29addf07890c00058f1b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "smoke inhalation"
  - "cyanide poisoning"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR64-FIChQb2lzb25pbmcpLm1k
difficulty: complex
answer: D
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

45세 남성이 아파트 화재 현장에서 구조된 지 20분 만에 응급실로 이송되었습니다. 그는 소방관들이 20분 후 그를 구출하기 전까지 연기가 가득 찬 방에 갇혀 있는 동안 잠시 의식을 잃었던 것 같다고 말합니다. 그는 두통, 어지럼증, 간헐적인 기침을 호소합니다. 호흡, 발성, 연하 곤란은 없습니다. 그는 약간 불편해 보이고 초조해합니다. 체온은 36.4°C, 맥박은 분당 90회, 호흡은 분당 16회, 혈압은 155/68 mm Hg입니다. 실내 공기 상태에서 맥박 산소 포화도는 92%입니다. 호흡음은 거칩니다. 나머지 신체 검사 결과는 정상입니다. 실내 공기 상태에서의 동맥혈 가스 분석 결과는 다음과 같습니다: pH 7.30, PCO2 38 mm Hg, PO2 70 mm Hg, HCO3- 18 mEq/L, COHb 2% (정상 < 3%). 비재호흡 마스크(non-rebreather mask)를 통한 산소 공급 외에, 다음 중 가장 적절한 다음 관리 단계는 무엇입니까?

## 선택지

A. 정맥 내 디메르카프롤(dimercaprol) 투여
B. 고압 산소 요법
C. 메틸렌 블루(methylene blue) 투여
D. 정맥 내 하이드록시코발라민(hydroxycobalamin) 투여

## 해설

밀폐 공간 화재 후 의식 소실 병력·초조와 대사성 산증은 시안화물 노출을 고려하게 한다. 시안화물 중독을 임상적으로 의심하면 선지 D의 하이드록소코발라민을 선택할 수 있으며 산소·기도·순환 지지가 병행된다. 이 약은 시안 이온을 결합하여 시아노코발라민으로 만들어 배설시키는 해독제이지 이미 시안과 결합된 약이라는 뜻이 아니다. 현재 젖산 수치는 제시되지 않았으므로 심한 젖산산증을 관찰 사실로 만들지 않는다. 모든 화재 노출 환자에게 일률적으로 투여하는 것이 아니라 노출력·정신상태·저혈압·젖산 등을 종합해 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 하이드록소코발라민을 이미 시안이 결합된 형태로 설명한 기전을 교정했다. 밀폐 화재 후 신경증상·산증에서 의심 시안화물 중독의 D를 설명하되 모든 연기 노출에 일률 투여하지 않는다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d56fcc8d-bd64-46ab-b0c0-2124bd745a6b

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001039
