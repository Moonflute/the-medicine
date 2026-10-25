---
type: qbank
schema_version: 1
id: medqa-us-train-008088
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16e6dc67d1379f6f961e1dd1e0fea2a5503b7563dc8e71a0759c1069d1b4e03e
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "stimulant use disorder"
  - "cocaine intoxication"
  - "psychotherapy"
  - "Cocaine use disorder"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BY2FtcHJvc2F0ZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9OYWx0cmV4b25lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남자가 공격적 행동으로 경찰과 함께 응급실에 왔다. 간호사에게 성적으로 공격적인 말을 하며 저항하고 동공이 크게 확장되어 있다. 체온 98.2°F(36.8°C), 맥박 112회/분, 혈압 130/70 mmHg, 호흡수 18회/분, 산소포화도 98%이다. 소변 독성검사를 보냈다. 활기차고 발한이 증가했으며 동공이 확장되어 있다. 응급실에서 밤을 보낸 후 아침에는 위축되고 정동이 우울해졌으며 전날 행동을 사과하고 자신의 문제에 대해 걱정하며 도움을 원한다고 한다. 적절한 처치는?

## 선택지

A. 아캄프로세이트
B. 디설피람
C. 날트렉손
D. 정신치료

## 해설

교감신경 항진과 과다활동 뒤 다음날의 위축·우울 양상은 각성제 사용과 중독 후 상태를 시사한다. 질문 시점에는 안정되고 도움을 원하므로 제시된 선택지 중 정신치료·행동중재로 치료에 연계하는 것이 적절하다. 각성제 사용장애에서는 강화관리(CM)와 CBT 등 근거 기반 심리사회 치료를 고려한다. 이를 전날의 위험한 급성 초조에서도 상담만으로 충분하다는 뜻으로 해석하지 않으며, 중독·금단의 의학적 상태와 자살위험을 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008088

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 급성 각성제 중독의 위험한 초조에 정신치료만 일차로 쓴다는 해설 오류 교정. 안정 후 치료 연계의 정답으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://downloads.asam.org/sitefinity-production-blobs/docs/default-source/quality-science/stud_guideline_document_final.pdf
