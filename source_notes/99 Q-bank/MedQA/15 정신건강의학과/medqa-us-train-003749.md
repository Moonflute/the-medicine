---
type: qbank
schema_version: 1
id: medqa-us-train-003749
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f5d715245f562c830166032de3f0fbe632c1dd366abfa2bafe90b3dc1b17e37
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tardive dyskinesia"
  - "treatment-resistant schizophrenia"
  - "clozapine"
  - "agranulocytosis"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

조현병으로 치료 중인 44세 남성이 최근 입과 혀의 리드미컬한 이상운동, 사회적 위축, 환청의 지속을 보였다. 최근 세 차례 진료에서 약을 조정해도 증상이 호전되지 않았다. 다음으로 가장 적절한 치료에서 우려하는 부작용은?

## 선택지

A. 불안 완화
B. 구강과 안구 건조
C. 감염
D. 심전도 QT 연장

## 해설

지속되는 정신병적 증상과 기존 약물 치료 후 이상운동을 고려하면 원문이 의도한 다음 약물은 클로자핀이다. 클로자핀은 중증 호중구감소증으로 감염 위험을 높일 수 있어 제시된 답은 감염이다. 다만 클로자핀에도 항콜린성·심장 부작용 등이 가능하므로 다른 선지의 증상이 절대로 생기지 않는다는 뜻은 아니다. 적정 치료저항성 여부와 모니터링을 실제로 확인해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003749

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로자핀 선택을 문제에 직접 노출한 한국어 문장을 원문의 '다음 치료 부작용' 질문으로 복원. 감염 답 및 약물 부작용의 비배타성 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
