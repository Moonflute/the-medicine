---
type: qbank
schema_version: 1
id: medqa-us-train-000600
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7cf47307f06a0830ecaa698c79053f116bea0da8ccc3402fb8f6637640249643
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "polyhydramnios"
  - "median cleft lip"
  - "fused thalami"
  - "holoprosencephaly"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zri6Tspp0gKEh5ZHJhbW5pb3MpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 26주인 33세 여성(임신 2회, 출산 1회)이 잦은 자궁수축으로 응급실에 내원했다. 수축은 각각 40초간 지속되며 2분마다 발생하고 강도가 증가하고 있다. 첫째 아이는 태아 심박수 이상으로 하부 자궁분절 횡절개 제왕절개술을 통해 분만했다. 현재 복용 중인 약물은 엽산과 종합비타민이다. 체온은 36.9°C, 심박수는 분당 88회, 혈압은 126/76 mmHg이다. 복부에서 자궁수축이 느껴진다. 외음부와 질 입구에 맑은 액체가 있다. 자궁경부는 5cm 확장되었고 70% 소실되었으며, 태아 머리는 -2 하강도(station)에 위치한다. 태아 초음파상 양수과다증, 정중 구순열, 시상 융합이 관찰된다. 뇌량, 제3뇌실, 측뇌실은 보이지 않는다. 척추에는 이상이 없으며 심장은 4개의 방으로 구성되어 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 제왕절개술 시행
B. 질식 분만 허용
C. 자궁경부 확장 및 흡입술(D&E) 시행
D. 니페디핀(nifedipine) 치료 시작

## 해설

융합된 시상, 정중 구순열, 심한 전뇌 구조 이상은 중증 전전뇌증을 시사한다. 이미 경부 5 cm로 조기진통이 진행하고 양막파수도 의심된다. 원문은 예후가 매우 불량한 태아에서 불필요한 제왕절개 대신 질식분만(B)을 허용하는 의도이다. 실제로는 산모·태아 전문팀이 예후와 치료 목표를 상담하고 이전 하부 횡절개 흉터에 맞게 감시한다. 모든 태아 기형을 이유로 일괄 수축억제 또는 치료 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 반대로 니페디핀을 권한 해설을 중증 전전뇌증 사례 설명으로 교체.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/when-your-waters-break-prematurely/
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/09/perinatal-palliative-care

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000600
