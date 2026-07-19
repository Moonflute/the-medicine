---
type: qbank
schema_version: 1
id: medqa-us-train-000298
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:843d44b5a0078975541c947e158d95af03baa73730b77e050a7c2cafd033a759
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "AIDS"
  - "Kaposi's sarcoma"
  - "Cytomegalovirus retinitis"
  - "Toxoplasma retinitis"
  - "HIV retinopathy"
  - "Varicella zoster retinitis"
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

AIDS를 앓고 있는 34세 남성이 2일 전부터 시작된 우측 눈의 시력 저하와 검은 점이 보이는 증상으로 내원하였다. 통증은 없으며 좌측 눈은 증상이 없다. 환자는 6개월 전 플루코나졸(fluconazole)로 진균성 식도염을 치료받은 적이 있다. 2년 전 카포시 육종(Kaposi's sarcoma)을 진단받았다. 현재 복용 중인 약물은 에파비렌즈(efavirenz), 테노포비르(tenofovir), 엠트리시타빈(emtricitabine), 아지스로마이신(azithromycin), 트리메토프림-설파메톡사졸(trimethoprim-sulfamethoxazole), 종합비타민, 영양제이다. 키는 170cm, 체중은 45kg이며 체질량지수(BMI)는 15.6kg/m2이다. 체온은 37°C, 맥박은 분당 89회, 혈압은 110/70mmHg이다. 진찰 결과 경부 림프절병증이 관찰된다. 몸통과 사지에 다수의 보라색 판(violaceous plaques)이 보인다. 안저 검사에서 망막 혈관 주위의 과립형 황백색 혼탁과 다수의 점상 출혈(dot-blot hemorrhages)이 관찰된다. CD4+ T-림프구 수는 36/mm3이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 거대세포바이러스(Cytomegalovirus) 망막염
B. 톡소플라스마(Toxoplasma) 망막염
C. HIV 망막병증
D. 수두 대상포진(Varicella zoster) 망막염

## 해설


CD4 수가 36/mm³인 중증 면역억제 상태에서 망막에 과립형 황백색 혼탁과 점상 출혈이 나타나는 것은 CMV 망막염의 전형적인 소견이다. 이는 통증이 없고 시력 저하만 있는 경우와 일치한다. 따라서 가장 가능성 높은 진단은 거대세포바이러스(CMV) 망막염이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000298
