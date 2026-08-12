---
type: qbank
schema_version: 1
id: medqa-us-train-000521
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16e724183b14d1384f72a68526f46728b33fa6659bc2c0682011d046c1a4f18f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute myocardial infarction"
  - "ventricular septal rupture"
  - "postmyocardial infarction syndrome"
  - "coronary artery dissection"
  - "papillary muscle rupture"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
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

급성 심근경색으로 심장 카테터 삽입술 및 관상동맥 성형술을 받은 지 3일 후, 70세 남성이 안정 시 호흡곤란을 호소한다. 환자는 고혈압, 고지혈증, 제2형 당뇨병을 앓고 있다. 현재 복용 중인 약물은 아스피린, 클로피도그렐, 아토르바스타틴, 설하 니트로글리세린, 메토프롤롤, 인슐린이다. 환자는 식은땀을 흘리고 있다. 체온은 37°C, 맥박은 분당 120회, 호흡은 분당 22회, 혈압은 100/55 mm Hg이다. 양측 폐 기저부에서 수포음(crackles)이 들린다. 심장 검사상 심첨부에서 가장 잘 들리는 새로운 3/6 등급의 전수축기 잡음(holosystolic murmur)이 확인된다. 심전도(ECG)는 II, III, aVF 유도에서 T파 역전이 동반된 동리듬을 보인다. 이 환자의 증상에 대한 가장 가능성 있는 설명은 무엇인가?

## 선택지

A. 심실중격파열
B. 심근경색 후 증후군
C. 관상동맥 박리
D. 유두근 파열

## 해설


심근경색 후 3일에 발생한 저혈압, 호흡곤란, 폐부종, 새로운 전수축기 잡음은 유두근 파열을 시사한다. 유두근 파열은 급성 MR을 일으켜 폐울혈을 유발한다. 심실중격파열은 전격적인 잡음과 급성 저산소증을 동반한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000521
