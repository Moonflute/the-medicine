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

83세 남성이 폐렴으로 입원한 지 4일째 혼란 상태로 관찰 중이다. ceftriaxone과 azithromycin으로 호전되던 중 이틀 전 밤 혼란과 이탈 시도가 있었으나 재지향으로 진정되었다. 오늘 아침 명료했다가 저녁에 다시 혼란과 초조가 생겼다. 심한 치매와 양성 전립선비대증 병력이 있고 tamsulosin과 새 항생제를 복용한다. 이름만 지남력이 있고 일어나려다 넘어지며 간호사를 위협하고 접시를 벽에 던진다. 재지향 외에 다음 단계는 무엇인가?

## 선택지

A. Haloperidol
B. Lorazepam
C. 신체 억제대
D. Rivastigmine

## 해설

급성으로 변동하는 주의력·지남력 저하에 공격성과 낙상 위험이 동반되어 섬망에 부합한다. 재지향·진정적 대화 등 비약물 접근으로도 자신이나 타인에게 위험하다면 제시된 선택지 중 저용량 할로페리돌의 단기 사용을 고려할 수 있다. 통증·감염·저산소증·배뇨 문제 등 원인 교정은 계속한다. 고령·치매에서는 신경학적 부작용과 사망 위험, QT 연장 및 아지트로마이신 상호작용을 고려해 ECG·전해질과 금기를 확인해야 한다. 모든 섬망에 일률적인 정맥 할로페리돌을 투여하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001981

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 위험한 섬망 초조에서 단기 할로페리돌 원정답 유지. 정맥주사가 가장 효과적이라는 불필요한 경로·효과 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg103/chapter/Recommendations
- https://www.gov.uk/drug-safety-update/haloperidol-haldol-reminder-of-risks-when-used-in-elderly-patients-for-the-acute-treatment-of-delirium
