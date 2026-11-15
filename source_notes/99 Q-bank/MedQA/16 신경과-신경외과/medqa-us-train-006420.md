---
type: qbank
schema_version: 1
id: medqa-us-train-006420
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:80225e4342c818c5df520b4ea1a73c5bda8f7e14f2c8b6cc23ab6e95d0699cd1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "알츠하이머병"
  - "치매"
  - "미만성 피질 위축"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 환자가 경도 알츠하이머 치매로 진단됐다. 부정맥이나 약물 금기는 없고 인지 증상에 도움이 되는 약을 원한다. 초기 선택은?

## 선택지

A. 메만틴을 경도 단계의 첫 단독 약물로 투여
B. 프라미펙솔
C. 도네페질
D. 쿠에티아핀

## 해설

도네페질 같은 콜린에스터레이스 억제제는 경도 알츠하이머 치매의 증상 치료 선택지다. 위장관 이상, 체중 감소, 서맥을 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Rivastigmine C는 유지. Bromocriptine·pramipexole을 중증 AD 약물로 묶은 오류 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng97/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006420
- https://pubmed.ncbi.nlm.nih.gov/39944527/
