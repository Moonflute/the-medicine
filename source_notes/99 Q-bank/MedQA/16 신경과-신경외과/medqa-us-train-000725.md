---
type: qbank
schema_version: 1
id: medqa-us-train-000725
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d8e13f44cc3db5fc22bbf045e7b190b5cd60a224eb69395489ba0877662ae5a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "non-Hodgkin lymphoma"
  - "peripheral neuropathy"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
  - MDkg7ZiI7JWhL-qzoOygkOuPhCDspp3tm4TqtbAgKEh5cGVydmlzY29zaXR5IFN5bmRyb21lKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
  - ZHJ1ZzoxMCDsooXslpEvQ3ljbG9waG9zcGhhbWlkZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
---

# MedQA US 임상문제

## 문제

67세 남성이 지난 일주일간 다리의 저림과 화끈거리는 느낌으로 내원하였다. 환자는 또한 대변이 평소보다 크고 거칠어졌다고 호소한다. 환자는 비호지킨 림프종(non-Hodgkin lymphoma)을 앓고 있으며 현재 프레드니손(prednisone), 빈크리스틴(vincristine), 리툭시맙(rituximab), 사이클로포스파미드(cyclophosphamide), 독소루비신(doxorubicin)으로 화학요법을 받고 있다. 화학요법을 4주기 받았으며, 마지막 화학요법 주기는 2주 전이었다. 체온은 37.1°C, 맥박은 89회/분, 혈압은 122/80 mm Hg이다. 진찰 결과 하지 원위부 근육의 근력 저하가 관찰된다. 발목 반사(ankle jerk)는 양측 1+, 무릎 반사(knee reflex)는 양측 2+이다. 하지의 통증, 진동, 위치 감각이 저하되어 있다. 혈청 포도당, 크레아티닌, 전해질, 칼슘 농도는 참고 범위 내에 있다. 이 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 빈크리스틴(vincristine)의 부작용
B. 척수 압박(spinal cord compression)
C. 부종양성 자가항체(paraneoplastic autoantibodies)
D. 샤르코-마리-투스병(Charcot–Marie–Tooth disease)

## 해설


Vincristine는 미세소관 억제제로 말초 신경 독성을 일으켜 손발 저림, 근력 약화, 반사 저하를 초래한다. 환자는 화학요법 중 vincristine 투여 후 말초 신경병증 증상을 보이므로, 가장 가능성 높은 원인은 vincristine 부작용이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000725
