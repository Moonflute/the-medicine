---
type: qbank
schema_version: 1
id: medqa-us-train-006883
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:929e08276d40bb752f2ba15b9cf221c0cdf2ccccc2329110cd458d1d39fd3153
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "약물 순응도 저하"
  - "장기 지속형 항정신병약"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

조현병 환자는 경구 리스페리돈을 규칙적으로 복용할 때 증상이 잘 조절됐다. 최근에는 자주 복용을 놓쳐 두 차례 재입원했고, 본인도 매일 약을 챙기지 않아도 되는 방법을 원한다. 적절한 계획은?

## 선택지

A. 장기지속형 주사제를 설명하고 당사자와 투여 방법·추적을 논의한다
B. 효과가 있던 약을 모두 중단하고 다음 재발까지 기다린다
C. 복용을 잊는 문제를 해결하기 위해 같은 약의 복용 횟수를 하루 네 번으로 늘린다
D. 매일 벤조디아제핀을 항정신병약 대신 복용한다

## 해설


약을 먹을 때 반응이 좋아도 복용 누락으로 반복 재발하면 장기지속형 주사제를 검토한다. 환자 선호, 이전 내약성, 제형별 초기 투여 방법과 내원 가능성을 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006883
- https://www.nice.org.uk/guidance/cg178/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/41057718/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영·한 본문·선지·답·해설 대조. 불안정 주거로 경구 복용이 어려운 사례에서 장기지속 리스페리돈 근육주사 선택 적절; 모든 노숙 환자의 강제 주사로 확장하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
