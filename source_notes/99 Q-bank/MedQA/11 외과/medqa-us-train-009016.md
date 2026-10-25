---
type: qbank
schema_version: 1
id: medqa-us-train-009016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e86d60e6d930866c99c43e9a1afe48656884c6e07897beb1957f10707941e6e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "postoperative oliguria"
  - "volume depletion"
  - "prerenal acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2MpeyghCDquInshLEg7L2p7YylIOyGkOyDgSAoUHJlcmVuYWwgQWN1dGUgS2lkbmV5IEluanVyeSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

궤양성 대장염으로 개방형 전체 직장결장절제술을 받은 지 3시간 후, 42세 남성이 배꼽 주위와 하복부에 국한된 복통을 호소했다. 수술 종료 후 유치도뇨관으로 배액된 소변은 20mL뿐이다. 체온 37.2°C(98.9°F), 맥박 92회/분, 호흡수 12회/분, 혈압 110/72mmHg, 산소포화도 99%이다. 20cm 정중선 절개와 우하복부 회장루가 있고 상처에서 분비물은 없다. 도뇨관은 쉽게 세척되고 막힘이 없다. 심폐검사는 정상이며 BUN 30mg/dL, 크레아티닌 1.3mg/dL이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 정맥 푸로세미드
B. 정맥 수액
C. 복부 CT
D. 탐스로신 투여

## 해설


큰 복부수술 직후20mL/3시간의 저뇨는 원인 평가가 필요하다. 도뇨관은 열려 있으므로 관 폐색보다는 수술 중 손실·저혈량 등 신관류 저하를 우선 검토한다. 선택지 중 정맥 수액(B)이 적절할 수 있으나 먼저 체액상태·출혈·혈역학을 평가하고 필요한 경우 결정질 수액을 투여하며 반응을 재평가한다. 저뇨만으로 AKI의 원인이나 진단을 확정하지 않고 비반응 시 반복 수액을 무조건 주지 않는다. 체액 과부하가 없는데 furosemide를 투여하거나 tamsulosin으로 해결할 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009016 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 3시간 저뇨만으로 신전성 AKI를 확진한 설명을 체액·출혈 평가 후 수액 반응 확인으로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng148/chapter/Recommendations
- https://www.nice.org.uk/guidance/cg174/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009016
