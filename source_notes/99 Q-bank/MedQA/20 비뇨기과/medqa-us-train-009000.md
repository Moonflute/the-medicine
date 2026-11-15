---
type: qbank
schema_version: 1
id: medqa-us-train-009000
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c4a1229f7f9f980a0c15061bba15c869b3fb078c1df012e74b9a6f031913baa
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "seminoma"
  - "testicular cancer"
  - "metastatic seminoma"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 고환절제술을 받은 뒤 정상피종으로 진단됐다. 병기 CT에서 대동맥 주위의 큰 림프절과 쇄골상 림프절 전이가 확인됐다. 다음 치료의 원칙은?

## 선택지

A. 추적 관찰만 한다
B. 고환절제 부위에만 방사선을 조사한다
C. 면역관문억제제를 단독으로 먼저 사용한다
D. 시스플라틴 기반 전신 항암치료를 계획한다

## 해설

쇄골상 림프절까지 전이한 정상피종은 국소 치료보다 시스플라틴 기반 전신 치료가 필요하다. 치료 조합과 횟수는 병기와 위험도에 맞춘다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 B 화학요법과 정반대로 방사선치료를 권한 해설 오연결 교정. Seminoma를 정상피종으로 명확히 함.
- 공식/학회 근거: https://uroweb.org/guidelines/testicular-cancer/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009000
