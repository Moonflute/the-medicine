---
type: qbank
schema_version: 1
id: medqa-us-train-010165
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3135ffe3d38dcc724904892e6ac9d90f255cb1cd8cbb84d08c7847165880d7a2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "오피오이드 중독"
  - "축동"
  - "날록손"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 여성이 의식 변화로 아들과 함께 응급실에 왔다. 최근 오른쪽 무릎관절성형술을 받고 2일 전 퇴원했다. 제2형 당뇨병과 고혈압으로 메트포르민과 히드로클로로티아지드를 복용한다. 1년 전 왼쪽 백내장 수술을 받았다. 체온 97°F(36.1°C), 혈압 99/70 mmHg, 맥박 분당 60회, 호흡수 분당 8회이다. 왼쪽 동공은 불규칙한 모양의 동공부등이 있고 오른쪽 동공은 지름 1mm이다. 큰 소리와 통증 자극에 눈을 뜨고 사지를 모두 움츠린다. 손가락 혈당은 79 mg/dL이며 정맥로가 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 조영제 없는 두부 CT
B. 강제 공기 가온
C. 비강 내 날록손
D. 기관내 삽관

## 해설

최근 수술 환자의 의식 저하, 분당 8회의 느린 호흡과 오른쪽 축동은 오피오이드에 의한 호흡 억제를 의심하게 한다. 왼쪽 동공의 불규칙성은 이전 백내장 수술과 관련될 수 있어 양쪽 모양 차이만으로 이 가능성을 배제하지 않는다. 정맥로가 없으므로 비강 내 날록손(C)을 신속하게 투여하면서 기도를 평가하고 필요한 환기를 보조한다. 효과가 불충분하면 반복 투여와 추가 기도 확보가 필요하며, 비강 투여가 모든 상황에서 가장 빠르거나 반드시 즉시 회복시킨다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 체온 97°F를 복원하고 최근 수술 뒤 축동·호흡 저하에서 날록손 C의 근거와 환기 보조를 명확히 한다.
- 공식/학회 근거: https://www.cdc.gov/stop-overdose/response/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010165
