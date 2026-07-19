---
type: qbank
schema_version: 1
id: medqa-us-train-000368
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6902ec900bb0272c33612965525b8738f5c2f13adc4a68795848f79d4af1572
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "salicylate toxicity"
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

58세 남성이 몇 시간 전 시작되어 혼란(confusion)으로 진행된 이명(ringing in his ears)을 주소로 응급실에 내원하였다. 환자는 양측 무릎 관절염 외에 다른 의학적 병력은 없다고 하였다. 최근 양측 무릎 관절염 평가를 위해 정형외과 전문의를 만났으나, 무릎 치환술을 받지 않기로 결정하고 약물 치료를 선호하였다. 환자의 아내는 오늘 하이킹을 가기 전부터 환자가 혼란스러워 보였고 평소와 달랐다고 언급하였다. 그들은 집에 머물기로 결정하였고, 약 14시간 후 환자는 더 이상 말이 통하지 않는 상태가 되었다. 신체 검진상 혼란스러운 상태가 확인되었다. 환자의 활력 징후를 측정하고 혈액 검사를 시행 중이다. 혈액 가스 분석에서 가장 가능성이 높은 결과는 무엇인가?

## 선택지

A. pH: 7.30, PaCO2: 15 mmHg, HCO3-: 16 mEq/L
B. pH: 7.31, PaCO2: 31 mmHg, HCO3-: 15 mEq/L
C. pH: 7.41, PaCO2: 65 mmHg, HCO3-: 34 mEq/L
D. pH: 7.47, PaCO2: 11 mmHg, HCO3-: 24 mEq/L

## 해설


Salicylate 중독은 초기 호흡성 알칼리증(PaCO2 감소)과 이후 대사성 산증(HCO3‑ 감소)이 동시에 나타나는 혼합성 산-염기 장애를 일으킨다. 7시간 이상 지속된 혼란과 이명은 고용량 살리실산에 의한 중증 중독을 시사한다. 선택지 A는 pH 7.30(산성)과 저 PaCO2 15 mmHg(호흡성 알칼리) 및 낮은 HCO3‑ 16 mEq/L(대사성 산증)이라는 혼합 패턴을 보여 가장 가능성이 높다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000368
