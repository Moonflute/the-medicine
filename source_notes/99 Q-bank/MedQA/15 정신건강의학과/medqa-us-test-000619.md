---
type: qbank
schema_version: 1
id: medqa-us-test-000619
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7ee5f516d67a08e9dc1b63d9634b46233adf87ccae974eeba11c8147401c2c00
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "섬망 tremens"
  - "알코올 금단"
  - "환각"
  - "Delirium tremens"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

장기간 과음하던 환자가 금주 3일째에 발한, 손 떨림과 빈맥을 보인다. 지금은 지남력이 떨어지고 보이지 않는 것이 보인다고 한다. 감염과 대사 이상도 함께 평가 중이다. 금단 섬망의 우선 약물은?

## 선택지

A. 항정신병약 단독
B. 클로니딘 단독
C. 경구 날트렉손
D. 감시하 벤조디아제핀 투여

## 해설


현저한 자율신경 항진과 섬망을 동반한 알코올 금단은 입원 및 면밀한 감시가 필요하다. 벤조디아제핀이 일차 치료다. 티아민을 보충하며, 항정신병약 단독으로 금단을 치료하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000619
- https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문과 번역의 중단 5일·고열·자율신경항진·지남력 소실·촉각환각 확인. 알코올 금단 섬망에 디아제팜 정답과 해설 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
