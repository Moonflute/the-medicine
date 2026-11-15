---
type: qbank
schema_version: 1
id: medqa-us-train-007255
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f41a1856459947b67d1e3ce0d5d892ed0591f0eebf18264bcf52b616acda1d6
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "메니에르병"
  - "저주파 감각신경성 난청"
  - "히드로클로로티아지드"
  - "현훈 예방"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uplOuLiOyXkOultOuzkSAoTWVuaWVyZSdzIGRpc2Vhc2UpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

메니에르병으로 진단된 45세 환자가 생활 조정 뒤에도 현훈 발작이 반복된다고 한다. 급성 발작이 없을 때 재발을 줄이기 위해 고려할 유지 약은?

## 선택지

A. 발작이 올 때마다 사용하는 진정제만 매일 복용
B. 항균제 장기 복용
C. 베타히스틴이나 이뇨제를 환자와 상의해 선택
D. 예방 목적으로 고용량 스테로이드 매일 복용

## 해설

메니에르병에서는 이뇨제나 베타히스틴을 유지치료 선택지로 고려할 수 있다. 진정성 전정억제제는 발작 중 제한적으로 사용하며 예방약처럼 계속 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. HCTZ를 예방에 가장 효과적인 약으로 단정한 설명을 지침의 선택적 유지요법 수준으로 교정.
- 공식/학회 근거: https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599820909438

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007255
- https://pubmed.ncbi.nlm.nih.gov/32267799/
