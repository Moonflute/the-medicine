---
type: qbank
schema_version: 1
id: medqa-us-test-000533
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:077d3a72178e02161b23d1cb56f41be6e58f6af6dd6547e1a2d9e2ad5b224721
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경이완제 악성 증후군"
  - "플루페나진"
  - "저체온증"
question_type: mechanism
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 남성이 의식 상태 변화로 아버지와 함께 응급실에 왔다. 아버지에 따르면 아침에 침대에서 일어나지 못했고 지난 몇 시간 동안 점점 혼돈스러워졌다. 밤새 창문을 모두 열어 아파트가 ‘꽤 추웠다’고 한다. 갑상샘저하증, 분열정동장애, 제2형 당뇨병, 이상지질혈증, 고혈압 병력이 있으며 약물을 복용 중이다. 10일 전 새로운 약을 시작했다. 기면 상태였고 직장 체온 32°C(89.6°F), 맥박 54회/분, 호흡 8회/분, 혈압 122/80 mmHg였다. 하지 근력저하와 심부건반사 소실, 상지 반사 1+가 있었고 동공은 확장되어 빛에 반응이 둔했다. 진찰 내내 옷을 벗으려 했다. 다음 중 이 소견의 가장 가능성 높은 원인 약물은?

## 선택지

A. 리시노프릴
B. 플루페나진
C. 레보티록신
D. 아토르바스타틴

## 해설

체온 32°C, 서맥·저호흡·의식 저하 및 옷을 벗으려는 행동은 저체온증에 부합한다. 플루페나진을 포함한 항정신병약은 체온 조절 장애와 저체온에 관여할 수 있어 B가 출제 의도에 가장 적절하며, 한랭 노출과 갑상선저하증도 취약 요인이다. 이를 GABA 억제로 인한 신경이완제 악성증후군이라고 설명해서는 안 된다. 전형적 신경이완제 악성증후군의 고열·경직과 구별되며 본문 혈압 122/80 mmHg도 저혈압이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 심한 저체온을 고열성 신경이완제 악성증후군 및 GABA 억제라고 설명한 오류를 교정했다.
- https://pubmed.ncbi.nlm.nih.gov/3804993/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000533
