---
type: qbank
schema_version: 1
id: medqa-us-train-000239
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f71bda591b5c78ac4a6c86e005694548da8dd96ab6474cdf5e96b5c7413ae634
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "anxiety"
  - "depression"
  - "benzodiazepine withdrawal"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uFuOuFhOq4sCDsmrDsmrjspp0gKEdlcmlhdHJpYyBEZXByZXNzaW9uKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaWRhem9sYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

수개월간 고용량 벤조디아제핀을 복용하는 22세 환자가 약을 갑자기 끊었다. 이틀 뒤 떨림, 빈맥, 발한과 혼돈이 진행한다. 중증 금단을 의심할 때 가장 적절한 치료 계획은?

## 선택지

A. 즉시 퇴원해 집에서 버티게 한다
B. 플루마제닐을 투여한다
C. 항정신병약만 투여한다
D. 입원 감시하 벤조디아제핀으로 안정화한 뒤 점진적으로 감량한다

## 해설

장기 복용 뒤 갑자기 끊으면 섬망이나 발작이 생길 수 있다. 중증 금단은 입원 감시하에서 안정화하고, 이후 환자에 맞춰 서서히 감량한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Diazepam A를 짧은 반감기라고 적은 약동학 오류를 교정한다.
- 공식/학회 근거: https://www.asam.org/quality-care/clinical-guidelines/benzodiazepine-tapering

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000239
