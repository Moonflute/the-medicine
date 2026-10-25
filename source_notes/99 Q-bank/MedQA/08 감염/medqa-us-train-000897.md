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
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJhdmFzdGF0aW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
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


CD4 77/mm³의 HIV 환자에게 발열과 새 국소 신경학적 결손이 생겼으므로 두부 영상으로 출혈·뇌졸중, 감염성 병변 및 종괴를 평가해야 한다. 보기 중 B가 가장 적절하다. 톡소플라스마 뇌염도 중요한 감별이지만 이 단계에서 원인으로 확정할 수 없고 혈청 IgG만으로 활동성 뇌염을 진단할 수 없다. CT가 불명확한 경우 MRI가 더 민감하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000897 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열·급성 국소 신경결손의 영상 우선 평가를 유지하되 톡소플라스마증으로 미리 확정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000897
