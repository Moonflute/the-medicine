---
type: qbank
schema_version: 1
id: medqa-us-test-000349
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3e89e71b7654d09eeaa6192bd26bc81a0b209b499f020cc0cd8bfdce64a92d37
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주요우울장애"
  - "항우울제 치료 반응"
  - "불면"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

주요우울장애로 SSRI를 시작한 지 일주일 됐다. 환자는 아직 좋아지지 않았다고 한다. 복용을 잘 했고 새 부작용, 조증 증상이나 자살 위험 변화는 없다. 다음 계획은?

## 선택지

A. 반응이 없다고 판단해 바로 두 약을 추가한다
B. 약을 중단하고 다음 치료 없이 지켜본다
C. 현재 약이 실패했다고 보고 곧바로 전기경련치료를 한다
D. 약을 유지하고 초기 반응·부작용과 안전을 가까운 시일에 다시 확인한다

## 해설

항우울제 시작 1주만으로 효과 부족을 확정할 수 없다. 반응과 안전, 부작용을 초기부터 확인하고 충분한 용량과 기간을 거쳐 다음 단계를 정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000349
- https://www.nice.org.uk/guidance/ng222/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/41139602/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. '1주 차에 효과가 없다고 판단한다'는 정답과 반대인 문장을 교정. 치료 지속 및 초기 안전성 추적 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
