---
type: qbank
schema_version: 1
id: medqa-us-test-001066
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2e7a6d6a59dd1f197ce79cd3d5482b766544d6389c882a4b818e1540046ca895
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 당뇨병 선별"
  - "임신 24~28주"
  - "포도당 부하검사"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 25주이며 당뇨병을 진단받은 적 없는 산모다. 국내 지침에 따라 임신성 당뇨병 1단계 검사로 75 g 경구당부하검사를 시행했다. 공복 89, 1시간 177, 2시간 156 mg/dL이다. 적절한 해석은?

## 선택지

A. 모든 측정값이 정상이므로 임신성 당뇨 없음
B. 한 항목만 높으므로 반드시 100 g 검사로 확인
C. 공복혈당이 92 미만이므로 다른 수치에 관계없이 배제
D. 2시간 값이 기준 이상이므로 임신성 당뇨병

## 해설


대한당뇨병학회 75 g 검사 기준은 공복 92, 1시간 180, 2시간 153 mg/dL 이상 중 하나다. 2시간 156 mg/dL이 기준을 충족하며, 50 g 선별 후 100 g 검사를 하는 2단계 접근과 혼동하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001066
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
