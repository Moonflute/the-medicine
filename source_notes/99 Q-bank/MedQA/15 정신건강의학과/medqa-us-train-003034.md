---
type: qbank
schema_version: 1
id: medqa-us-train-003034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f6e3ea7f2b94d6e1394456385117128b4494f8388b60745a2c6266ca2ec20ae
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bulimia nervosa"
  - "binge-eating and purging"
  - "parotid enlargement"
  - "fluoxetine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEse2PreyLneymnSAoQnVsaW1pYSBOZXJ2b3NhKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 신경성 폭식증으로 섭식장애 특화 인지행동치료를 6주 받았지만 폭식과 보상행동이 지속된다. 의학적 상태는 안정적이다. 기존 치료에 더할 약물은?

## 선택지

A. 플루옥세틴
B. 부프로피온
C. 아미트립틸린
D. 쿠에티아핀

## 해설


플루옥세틴은 신경성 폭식증의 폭식과 보상행동을 줄이는 데 사용한다. 부프로피온은 신경성 폭식증에서 발작 위험 때문에 피한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003034
- https://pubmed.ncbi.nlm.nih.gov/36722117/
- https://pubmed.ncbi.nlm.nih.gov/37350265/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문에 없는 구강 건조와 이하선 번역 오류를 실제 손 관절 굳은살·이하선비대·치아 침식으로 수정. 플루옥세틴 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
