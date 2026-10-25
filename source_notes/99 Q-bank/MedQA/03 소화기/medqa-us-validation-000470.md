---
type: qbank
schema_version: 1
id: medqa-us-validation-000470
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:84e110223f7e9825789e0c0fd38dc3b41a6f7787a4dac8635e06094345e72519
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "약물 유발 급성 췌장염"
  - "푸로세미드"
  - "급성 췌장염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: etiology
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
---

# MedQA US 임상문제

## 문제

62세 흑인 남성이 24시간 동안 지속된 심한 명치 통증과 등으로의 방사통, 메스꺼움, 구토로 응급실에 왔다. 고혈압, 심부전, COPD가 있고 각각 암로디핀, 푸로세미드, 이프라트로피움, 가바펜틴으로 조절 중이다. 복부에서 배꼽 주위 피하조직의 부종과 멍, 심한 압통이 보인다. 이 환자 상태의 가장 가능성 높은 원인은?

## 선택지

A. 푸로세미드
B. 이프라트로피움
C. 가바펜틴
D. 알코올 섭취

## 해설


정답 A. 제시된 약물 중 furosemide의 이상반응에는 췌장염이 보고되어 있어 출제 의도에 가장 부합한다. 급성 등 방사 명치 통증과 배꼽주위 반상출혈은 출혈성 복강 내 과정/췌장염 가능성을 시사하지만 약물 원인에 특이하지 않다. 실제로는 담석, 음주, 중성지방 등 다른 원인과 투약 시점을 검토한 후 약물유발 여부를 판단하며, 복용 사실만으로 인과관계를 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000470 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: furosemide A의 허가사항상 pancreatitis 연관성만 설명하고 Cullen 징후로 약물원인 확진한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=341e29d9-a6f1-4c77-ae44-9b2c423ea6b4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000470
