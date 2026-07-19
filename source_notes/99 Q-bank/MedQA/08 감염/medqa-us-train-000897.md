---
type: qbank
schema_version: 1
id: medqa-us-train-000897
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d1313b42c44c940017c545a89d6d2c767ad966255469d92a03c20d2d96d48dff
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV"
  - "Toxoplasma"
  - "pneumonia"
question_type: management
difficulty: complex
answer: B
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

HIV(CD4: 77/mm^3), 고혈압, 고지혈증, 골관절염의 과거력이 있는 46세 백인 남성이 갑작스러운 오른손 위약감으로 응급실에 내원했다. 환자는 위약감이 점차 악화되었으며 오늘 아침에는 커피잔을 떨어뜨렸다고 보고했다. 작년에 폐렴으로 입원한 적은 있으나 이와 같은 증상은 처음 겪는다고 한다. 환자는 raltegravir, tenofovir, emtricitabine, TMP-SMX, hydrochlorothiazide, pravastatin, 그리고 간헐적인 ibuprofen을 포함한 자가 약물 복용을 일관되게 하지 않았다고 보고했다. 부친은 60세에 심근경색으로 사망했고, 모친은 72세에 뇌졸중을 겪었다. 환자의 체온은 102.6°F(39.2°C), 혈압은 156/92 mmHg, 맥박은 88회/분, 호흡은 18회/분이다. 신경학적 검사상 오른쪽 말초 근육의 근력은 3/5이며 감각은 보존되어 있다. 다른 모든 사지의 신경학적 검사는 정상이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. Toxoplasma 특이 IgG 항체 혈청 검사
B. 뇌 CT
C. Pyrimethamine-sulfadiazine을 이용한 경험적 치료
D. Itraconazole을 이용한 경험적 치료

## 해설


급성 발열과 국소적인 신경학적 결손(우측 손 힘 약화)은 뇌 병변을 의심하게 하며, HIV 환자에서 가장 흔한 원인은 뇌 병변을 동반한 톡소플라스마 뇌염이다. 영상학적 확인이 선행되어야 하므로, 다음 단계는 뇌 CT 촬영이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000897
