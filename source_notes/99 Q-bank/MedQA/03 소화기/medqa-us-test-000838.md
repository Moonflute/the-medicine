---
type: qbank
schema_version: 1
id: medqa-us-test-000838
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e9fc465b54fad7b344ac1712f845ab3b686d637a785e9b31d451c65ef13bfd6
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간성뇌증"
  - "알코올성 간경변"
  - "TIPS 합병증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
question_type: management
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
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 일주일 동안 점점 심해지는 혼돈, 전신 피로, 과민성 때문에 남편과 함께 응급실에 왔다. 남편의 이름이나 집 주소를 기억하지 못했고 불면과 주간 졸림이 있었다. 마지막 배변은 3일 전이었다. 한 달 전 경정맥 간내 문맥전신 단락술(TIPS)을 받았고 알코올성 간경변이 있다. 스피로놀락톤과 푸로세미드를 복용 중이며, 이전에는 보드카를 매일 1파인트 이상 마셨지만 2개월 전 끊었다. 장소와 사람은 지남력이 있었고 체온 37.3°C(99.1°F), 맥박 88회/분, 혈압 102/64 mmHg였다. 공막 황달과 황달, 흉부와 등에 여러 모세혈관확장증, 손바닥 홍반, 복부는 경미하게 팽만했으나 압통은 없었고 이동탁음이 확인되었다. 양손을 펴고 손목을 뒤로 젖혔을 때 퍼덕떨림이 있었으며 다른 국소 신경학적 소견은 없었다. 숫자 연결 검사는 연령 기준보다 느렸다. 가장 적절한 다음 처치는?

## 선택지

A. TIPS를 되돌린다
B. 복수천자를 시행한다
C. 정맥 세프트리악손을 투여한다
D. 락툴로오스를 투여한다

## 해설

정답은 D이다. 간경변 환자에서 TIPS 후 변비·수면역전·혼돈·asterixis가 발생한 것은 간성뇌증에 합당하다. lactulose로 장내 질소 부하를 줄이면서 감염·출혈·전해질 이상 등 유발 요인을 함께 평가한다. 이를 폐성 뇌증이라고 부르지 않는다. 처음부터 TIPS를 되돌리는 것은 일차 약물치료가 실패한 난치성 사례와 구별해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간성 및 폐성 뇌증이라는 오연결을 간성뇌증으로 교정하고 원문 복부 소견 오역 수정.
- https://doi.org/10.14309/ajg.0000000000003899

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000838
