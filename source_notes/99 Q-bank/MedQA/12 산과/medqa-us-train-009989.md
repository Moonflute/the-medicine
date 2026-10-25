---
type: qbank
schema_version: 1
id: medqa-us-train-009989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b379130d120ccd283b564c16f72f703794f7bc96636bac79600bd27f2ca7530
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 위치 미확인"
  - "임신 초기"
  - "혈청 hCG 추적"
  - "Pregnancy of unknown location"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 복통으로 응급실에 내원했다. 전날 밤 시작되어 점점 악화되었다고 한다. 그 외에는 건강하고 약물은 사용하지 않으며 성관계를 가진 적이 없다. 체온 99.0°F(37.2°C), 혈압 120/83 mmHg, 맥박 분당 85회, 호흡수 분당 12회, 실내 공기 산소포화도 98%이다. 직장검사 후 대변 매복을 제거했고 5kg의 변을 꺼내자 증상이 호전되었다. 초기 검사에서 소변은 노란색, 단백 음성, 적혈구 음성, hCG 양성이다. 혈청 hCG는 1,000 mIU/mL이고 질식 초음파에서 자궁 내 임신낭이 보이지 않는다. 다음 중 가장 적절한 처치는?

## 선택지

A. 복강경검사
B. 메토트렉세이트
C. 난관절개술
D. 48시간 후 초음파와 혈청 hCG 재검

## 해설

hCG1,000에서 자궁내 임신낭이 보이지 않으면 임신 위치 미상(PUL)이다. 증상이 해소되고 안정적이면 D처럼 48시간 hCG·추적 초음파로 평가한다. 정상 초기 임신뿐 아니라 유산·자궁외임신도 가능하며 hCG 수치 하나로 구별하지 않는다. 통증·실신·출혈 악화 시 즉시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 체온 화씨 오역 및 PUL을 정상 초기 임신으로 확정한 해설 수정.
- https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009989
