---
type: qbank
schema_version: 1
id: medqa-us-train-001981
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ddaa438b02b8da0a4e4d2e20ac2f16dc26e71ad05c4c1de116a7fd934e0a641
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "delirium"
  - "hyperactive delirium"
  - "haloperidol"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
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
  - ZHJ1ZzowNiDruYTrh6jCt-yLoOyepS9UYW1zdWxvc2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

폐렴으로 입원한 76세 환자가 섬망으로 산소관을 반복해서 뽑아 즉각적인 위험이 있다. 폐렴과 유발 요인을 치료 중이고, 재지남력 제공과 진정 유도가 실패했다. 파킨슨병·루이소체 치매는 없고 QTc는 정상이다. 고려할 단기 약물 처치는?

## 선택지

A. 저용량 할로페리돌을 사용하고 자주 재평가한다
B. 로라제팜을 정규 투여한다
C. 도네페질을 시작하고 효과를 기다린다
D. 졸피뎀을 매일 밤 투여한다

## 해설

섬망에서는 원인 교정과 비약물적 접근이 우선이다. 그래도 즉각적인 위험이 지속되면 금기를 확인한 뒤 저용량 할로페리돌을 최단기간 고려할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001981
- https://www.nice.org.uk/guidance/cg103/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 위험한 섬망 초조에서 단기 할로페리돌 원정답 유지. 정맥주사가 가장 효과적이라는 불필요한 경로·효과 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg103/chapter/Recommendations
- https://www.gov.uk/drug-safety-update/haloperidol-haldol-reminder-of-risks-when-used-in-elderly-patients-for-the-acute-treatment-of-delirium
