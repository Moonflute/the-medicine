---
type: qbank
schema_version: 1
id: medqa-us-test-001143
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:96e5954332dbafadd87866a8c9f563e9067bc57d41fd2533aeeb3886b8750c7c
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "아세트아미노펜 중독"
  - "불명확한 약물 과다복용"
  - "N-아세틸시스테인"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhOyEuO2KuOyVhOuvuOuFuO2OnCDspJHrj4UgKEFjZXRhbWlub3BoZW4gUG9pc29uaW5nKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 약병이 흩어진 컴퓨터 옆에서 졸린 상태로 발견되어 가족과 함께 응급실에 왔다. 가족이 발견한 것은 2시간 이상 전이었고 정확한 복용 시각과 약의 종류는 알 수 없었지만 환자는 아세트아미노펜을 몇 알 먹었다고 했다. 체온 99.5°F(37.5°C), 혈압 125/85 mmHg, 맥박 82회/분, 호흡 11회/분, 산소포화도 97%였다. 다음 중 가장 적절한 처치는?

## 선택지

A. N-아세틸시스테인
B. 활성탄
C. 정맥 수액
D. 이페카 시럽

## 해설

여러 약병이 있고 정확한 복용 시각·용량을 알 수 없는 acetaminophen 노출에서는 혈중 농도·간기능 등을 채혈하면서 NAC(A)를 즉시 시작할 수 있다. 발견 시각이 2시간 전이라는 사실은 복용 시각을 뜻하지 않는다. 복용 시각이 확실한 단회 노출은 적절한 시점의 농도와 nomogram으로 판단한다. NAC는 조기에 시작할수록 좋지만 24시간을 넘었다고 자동으로 무효한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 복용 시각 불명·불확실 병력에서는 경험적 NAC A가 합리적임을 FDA 근거로 확인하고 24시간 이내에만 유효하다는 인상을 교정한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=472f158a-5ab9-4308-8e49-1116e6ea3d39

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001143
