---
type: qbank
schema_version: 1
id: medqa-us-train-006477
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40cff80b968cfc6566a1c2834ce5a5c72fc9e163f23ee1b9d14b6f6599af5ad5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 장애"
  - "조증 삽화"
  - "항우울제 유발 조증"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

양극성 I형 장애 환자가 우울 삽화로 항우울제를 복용 중이었다. 며칠 동안 잠을 거의 자지 않아도 피곤하지 않고 말이 빨라졌으며, 위험한 지출과 과대망상으로 입원했다. 약을 어떻게 조정할까?

## 선택지

A. 항우울제를 증량해 기다린다
B. 항우울제 중단을 검토하고 급성 조증 치료를 시작한다
C. 현재 입원했으므로 항우울제를 그대로 두고 수면제만 추가한다
D. 항우울제를 한 종류 더 추가한다

## 해설

뚜렷한 조증이 생기면 항우울제를 재평가하고 항조증 치료를 시작한다. 항우울제 증량이나 항우울제 단독 지속은 조증 치료가 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006477
- https://www.jknpa.org/DOIx.php?id=10.4306%2Fjknpa.2026.65.2.108

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 유발 약물 추론을 양극성 우울의 권장 처방으로 반대로 설명한 위험한 해설 교정. 설트랄린 유발 조증 전환으로 답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations
