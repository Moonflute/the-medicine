---
type: qbank
schema_version: 1
id: medqa-us-train-007428
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a052018ec8ef611407226348a3d8522d88c7823d58117c355f4233b760c09bd
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "메토트렉세이트 불충분 반응"
  - "TNF 억제제"
  - "인플릭시맙"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FkYWxpbXVtYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NlbGVjb3hpYi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

류마티스관절염을 2년째 앓고 있는 34세 남자가 추적 진료를 받으러 내원했다. 현재 통증 조절을 위해 메토트렉세이트와 셀레콕시브를 복용하며 지금까지 반응이 좋았다. 그러나 이번 방문에서 아침 강직이 점점 악화되고 있다고 한다. 신체검사에서 양쪽 손목이 붉고 부어 있으며 팔꿈치에 결절도 있다. 류마티스인자는 30(정상 <15 IU/mL), ESR은 50 mm/시간, 항CCP 항체는 55(정상 <20)이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 메토트렉세이트와 코르티코스테로이드
B. 설파살라진
C. 아달리무맙 단독요법
D. 메토트렉세이트와 인플릭시맙

## 해설


Methotrexate는 단순 진통제가 아니라 RA 질병조절제이다. 적절한 용량·기간에도 활막염이 지속된다면 생물학제 등을 추가하는 치료 강화가 필요하며 선택지 D의 methotrexate+infliximab이 적절한 조합이다. 그러나 투여량·순응도·활성도와 감염 등 다른 악화 원인을 먼저 확인한다. TB·HBV 등 감염 위험 평가 후 시작하며 infliximab만이 모든 환자의 유일한 강화약이라는 뜻은 아니다. 장기 steroid 추가만으로 질병조절을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007428 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MTX를 통증약으로만 표현한 맥락을 질병조절제로 설명하고 생물학제 증량의 조건·안전평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/9273041/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007428
