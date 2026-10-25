---
type: qbank
schema_version: 1
id: medqa-us-train-007594
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:181c7b156f8b9916654172c029f87b6128060b26ea64e6bb307ef14773dc8bea
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "호모시스틴뇨증"
  - "마르팡 유사 체형"
  - "혈전색전증"
  - "혈청 호모시스테인"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 남자가 급성 흉통과 호흡곤란으로 응급실에 내원했다. 지적장애가 있고 입양 부모와 함께 산다. 어릴 때 입양된 후 의사를 본 적이 없고 현재 약물도 없다고 한다. 체온은 99.1°F(37.3°C), 맥박 108회/분, 혈압 125/70 mmHg, 호흡수 25회/분, 비강 캐뉼라 2L에서 산소포화도 92%이다. 키가 크고 마른 체형이며 고요족과 경미한 오목가슴이 있고 양쪽 하지가 약간 비대칭이며 더 큰 다리를 발등굽힘할 때 불편하다. 폐 청진은 정상이다. 이 환자의 기저 질환을 진단하기 위한 다음 단계는 무엇인가?

## 선택지

A. 흉부 방사선촬영
B. 혈관조영술
C. 심전도
D. 혈청 혈액검사

## 해설


정답 D. 큰 키·marfanoid 체형과 지적장애, 젊은 나이의 혈전 의심은 homocystinuria를 시사한다. 기저 질환 평가에는 혈장 total homocysteine 등 혈액검사가 필요하다. 다리 비대칭과 급성 흉통·저산소혈증은 DVT/폐색전증을 우려하게 하므로 단순 관절통으로 설명하지 않는다. 기저 대사질환 검사와 별개로 급성 혈전색전증의 신속한 평가를 지연하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007594 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 관절통으로 오해한 다리 종창/혈전 위험을 homocystinuria D에 연결; 기저질환 검사가 급성 PE 평가 대체하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.medlineplus.gov/genetics/condition/homocystinuria/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007594
