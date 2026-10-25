---
type: qbank
schema_version: 1
id: medqa-us-train-002568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab37ec38650b06d03d05fdfa9681f8624be8caedec5723a128e4cd4c12366bfd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "olanzapine"
  - "metabolic syndrome"
  - "type 2 diabetes mellitus"
  - "atypical antipsychotic"
question_type: adverse_effect
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
difficulty: standard
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

조현병, 제2형 당뇨병, 갑상샘기능저하증이 있는 28세 여성이 다시 약물을 복용하고 싶어 내원했다. 할로페리돌을 중단한 이유는 가만히 앉아 있기 어려웠기 때문이다. 친구가 도움이 되었다고 한 올란자핀을 요청한다. 다음 중 이 환자에서 올란자핀을 피해야 하는 이유는?

## 선택지

A. 망막병증 위험이 높다
B. 제2형 당뇨병이 있다
C. 유즙분비가 생길 수 있다
D. 올란자핀 장기 사용으로 지연성 운동이상증이 생길 가능성이 높다

## 해설

올란자핀은 체중 증가·혈당 악화 등 대사 부작용이 상대적으로 큰 항정신병약이다. 제시된 이유 중 기존 제2형 당뇨병이 이를 피하거나 다른 약을 우선 고려할 근거가 된다. 당뇨병 자체가 언제나 절대금기라는 뜻은 아니며 이전 치료 반응과 대안을 함께 평가하고, 사용한다면 체중·혈당·지질 등을 모니터링한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002568

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 당뇨병에서 올란자핀 대사 위험을 피하는 선택은 유지하되 당뇨 자체를 절대금기처럼 설명하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
