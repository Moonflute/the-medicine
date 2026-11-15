---
type: qbank
schema_version: 1
id: medqa-us-train-005277
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf75d1b990b07ceabd4204e7ada7d821e45c11adb260bdcd9f8620027460dbf2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "치료저항성 조현병"
  - "클로자핀"
  - "지속성 피해망상"
  - "Treatment-resistant schizophrenia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
answer: D
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

조현병 환자가 서로 다른 항정신병약 두 종류를 각각 적정 용량으로 충분한 기간 복용했다. 복약은 확인됐고 물질 사용 등 다른 원인도 평가했지만 심한 환청과 망상이 지속된다. 다음에 고려할 약은?

## 선택지

A. 벤즈트로핀
B. 로라제팜 장기 단독
C. 다른 항정신병약을 여러 개 임의로 병합
D. 클로자핀

## 해설

적절한 두 차례 항정신병약 치료에도 반응이 부족하면 치료저항성 조현병에서 클로자핀을 고려한다. 시작 전 적응증·금기와 혈액검사 추적 가능성을 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005277
- https://www.nice.org.uk/guidance/cg178/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/32702217/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 리스페리돈 1주 투여에도 지속된 증상과 노숙 맥락 복원. 각 1주 치료만으로 치료저항성 확정한 해설을 교정, 반복 자살시도에서 클로자핀 선택 가능성으로 제한.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7c748f8a-73ce-4bd3-aa30-9c66657f06ec&version=6
