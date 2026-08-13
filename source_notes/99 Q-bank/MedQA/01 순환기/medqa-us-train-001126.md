---
type: qbank
schema_version: 1
id: medqa-us-train-001126
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2251955ab9174cd768ebf624459801bf8533f4bc9afba7d73757a9f05d6b4b1a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "mitral valve regurgitation"
  - "coronary artery disease"
  - "type 2 diabetes mellitus"
  - "hypertension"
  - "chronic obstructive pulmonary disease"
  - "pneumonia"
  - "valve degeneration"
  - "pulmonary embolism"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsl63rpZggKE1pdHJhbCBSZWd1cmdpdGF0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
---

# MedQA US 임상문제

## 문제

78세 남성이 3주간 지속된 가래 섞인 기침, 다리와 발의 부종, 피로감으로 응급실에 내원하였다. 환자는 지난 2개월 동안 점진적인 운동 시 호흡곤란을 겪었다. 12년 전 심한 승모판 역류증으로 돼지 판막 치환술(porcine valve replacement)을 받았다. 관상동맥질환, 제2형 당뇨병, 고혈압 병력이 있다. 60년간 매일 담배 한 갑을 피웠고 매일 맥주 한 잔을 마신다. 현재 복용 중인 약물은 아스피린, 심바스타틴, 라미프릴, 메토프롤롤, 메트포르민, 하이드로클로로티아자이드이다. 창백해 보인다. 키는 179cm, 체중은 127kg이며, 체질량지수(BMI)는 41.3kg/m2이다. 체온은 37.1°C, 호흡수는 분당 22회, 맥박은 분당 96회, 혈압은 146/94mmHg이다. 폐 청진 시 양측 기저부에서 수포음(rales)이 들린다. 심장 검사에서 심첨 박동이 외측으로 변위되어 있다. 심첨부에서 3/6 등급의 점감-점증 이완기 잡음이 들린다. 발과 발목에 양측성 함요 부종이 있다. 나머지 검사에서는 이상 소견이 없다. 이 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 만성 폐쇄성 폐질환
B. 폐렴
C. 판막 퇴행
D. 폐색전증

## 해설


12년 전 판막 교체 후 현재 심부전 증상(폐부종·심장음)과 좌심실 부하 증가가 나타나는 경우, 퇴행성 판막(특히 승모판) 손상이 가장 흔한 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001126
