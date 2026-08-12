---
type: qbank
schema_version: 1
id: medqa-us-train-000076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1cd774500a6ad3ff110dcf770c8b62736eebfbd614cf6ff1aeb78ed6c952840d
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Metastatic breast cancer"
  - "Multiple myeloma"
  - "Paget’s disease"
  - "Primary hyperparathyroidism"
  - "fever"
  - "productive cough"
  - "dyspnea"
  - "upper back pain"
  - "rales"
  - "painful lymph nodes"
  - "point tenderness"
  - "pneumonia"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 여성이 3일간의 발열, 가래 섞인 기침, 호흡곤란으로 응급실에 내원했습니다. 이 환자는 3개월 동안 활동 후 악화되는 등 위쪽 등 통증을 겪었습니다. 통증 완화를 위해 이부프로펜을 복용합니다. 흡연력은 없습니다. 체온은 39.5°C, 혈압은 100/70 mmHg, 맥박은 95회/분, 호흡수는 22회/분입니다. 폐 청진 시 좌측 하엽 부위에서 수포음(rales)이 들립니다. 좌측 액와부와 경부에서 통증이 있는 림프절(1 × 1 cm)이 촉지됩니다. 여러 흉추를 따라 압통이 있습니다. 검사 결과는 대기 중입니다. 두개골 X-선과 폐 창(lung window) 흉부 컴퓨터 단층 촬영(CT) 스캔이 제시되었습니다. 다음 중 어떤 질환이 이 환자의 급성 상태에 가장 큰 역할을 했을 가능성이 높습니까?

## 선택지

A. 전이성 유방암
B. 다발성 골수종
C. 파제트병
D. 원발성 부갑상선 기능 항진증

## 해설


환자는 다발성 골수종으로 인한 골수 침범과 신장 기능 저하가 폐렴을 악화시킨 상황이다. 다발성 골수종은 면역 억제로 감염 위험을 높이며, 치료에 베타-락탐계 항생제(반코마이신)와 세페핌이 필요하다. 따라서 가장 적절한 치료는 반코마이신 및 세페핌이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000076
