---
type: qbank
schema_version: 1
id: medqa-us-validation-000808
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4e47e7d510f9f7e91bec55470b44ec14b027678c1dadc833e996441f3af94557
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "태반조기박리"
  - "태아곤란"
  - "응급 제왕절개"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 34주인 36세 여성이 한 시간 전 시작된 지속적인 짙은 색 질출혈과 심한 하복부 통증으로 응급실에 왔다. 자궁은 압통이 있고 과긴장성 수축과 태아 심박수 170회/분, 감속이 있다. 맥박 100회/분, 혈압 90/60 mmHg이다. 가장 적절한 처치는?

## 선택지

A. 응급 제왕절개 분만
B. 계획 제왕절개 분만
C. 테르부탈린 투여
D. 옥시토신 투여 후 질식분만

## 해설

심한 지속 통증·긴장된 자궁·출혈·저혈압과 태아 빈맥170/감속은 중증 태반조기박리를 시사한다. 소생·혈액 준비와 함께 이 사례에서는 응급 제왕절개(A)가 적절하다. 안정된 경증 박리나 태아 사망 등 다른 상황의 분만 방식과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아는 빈맥170이며 감속 동반; 모든 박리에 제왕절개라고 일반화하지 않음.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/antepartum-haemorrhage-green-top-guideline-no-63/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000808
