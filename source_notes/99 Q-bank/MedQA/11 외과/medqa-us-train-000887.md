---
type: qbank
schema_version: 1
id: medqa-us-train-000887
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:383a428a707987804dcbb74a8dcddda4826dd2e65c220a41d5c9b51724549e3d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "esophageal perforation"
  - "achalasia"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7J207JmE67aI64ql7KadIChBY2hhbGFzaWEpLm1k
question_type: management
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

25세 남성이 연하 곤란으로 소화기내과에 내원하였다. 환자는 고형식을 먹을 때마다 다시 역류한다고 말한다. 의심되는 진단에 따라 소화기내과 의사가 진단 검사를 시행하였다. 몇 시간 후, 환자는 흉통과 호흡 곤란을 주소로 응급실에 내원하였다. 체온은 99.5°F(37.5°C), 혈압은 130/85 mmHg, 맥박은 60회/분, 호흡수는 12회/분, 실내 공기에서의 산소 포화도는 99%이다. 신체 검진상 심폐 검사는 정상이다. 목의 압통은 없으며, 구인두는 정상이고, 쇄골 상부에서 촉지되는 염발음(crepitus)과 경미한 림프절병증이 관찰된다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 바륨 연하 검사(Barium swallow)
B. 응급 수술
C. 가스트로그라핀 연하 검사(Gastrografin swallow)
D. 초음파 검사

## 해설


식도 검사 뒤 흉통과 쇄골 위 피하기종은 의인성 식도 천공을 의심하게 한다. 제시된 선택지 중 수용성 조영제를 이용한 식도조영술(C)이 누출 확인에 적절하다. 바륨이 종격동으로 새는 위험을 줄일 수 있으나, 가스트로그라핀은 고삼투성으로 흡인 시 심한 폐손상을 일으킬 수 있어 흡인 위험을 평가해야 한다. '가스가 적다'는 이유로 쓰는 것이 아니다. 현행 지침에서는 조영증강 CT/CT 식도조영술도 중요한 초기 검사이며, 그 선택지는 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000887 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가스트로그라핀의 물성을 가스가 적음·흡인 폐렴 위험 없음으로 설명한 오류를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000887
