---
type: qbank
schema_version: 1
id: medqa-us-train-000059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:135922122ff189f69ca69b274c1290bbe5bef6f5126a49d252a8eda24cdf6565
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "gestational diabetes"
  - "fetal ultrasound"
  - "interventricular septum"
  - "left ventricular outflow tract obstruction"
  - "ejection fraction"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 32주차인 26세 G1P0 여성이 추적 초음파 검사를 위해 내원했습니다. 그녀는 임신 2분기에 임신성 당뇨병 진단을 받았으나, 혈당 조절이 잘 되지 않고 인슐린 치료를 잘 따르지 않았다고 인정합니다. 태아 초음파 검사에서 비대칭적인 심실중격 비대, 좌심실 유출로 폐쇄, 그리고 현저히 감소된 박출률이 나타났습니다. 분만 후 가장 적절한 관리 단계는 무엇입니까?

## 선택지

A. 응급 개복 태아 수술
B. 심장 자기공명영상
C. 심장 도관술
D. 약물 치료

## 해설

당뇨 산모의 태아 고인슐린혈증은 심실중격 비후와 유출로 폐쇄를 유발할 수 있다. 분만 후 심초음파와 혈역학을 평가하며 소아심장 전문 약물·지지치료(D)를 시행한다. 폐쇄성 생리에서는 베타차단제를 고려할 수 있으나 ACE 억제제 같은 혈관확장제는 폐쇄를 악화시킬 수 있어 일률 권고하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 당뇨 산모 영아의 폐쇄성 비후 심근병증에 약물관리 D 유지. ACE 억제제를 무조건 권한 위험 설명 교정.
- https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001250

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000059
