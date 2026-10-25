---
type: qbank
schema_version: 1
id: medqa-us-train-008561
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9bea6ffad3f6e51bd3552c654beaedf91abfecfbfb388337e25cc407280d5862
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "treatment-resistant schizophrenia"
  - "psychosis in pregnancy"
  - "clozapine"
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여성이 낙태를 요청하며 응급실에 내원했다. ‘정화를 받아야 한다’고 말하는 목소리가 들린다. 밤에 반복해서 깨어 낮에 졸리며, 예전에 즐기던 활동에도 더 이상 관심이 없다고 한다. 약 2개월 전 정신과 의사는 최대 용량에서도 효과가 없다는 이유로 아리피프라졸을 리스페리돈으로 변경했다. 활력징후는 정상이다. 정신상태검사에서 말이 빠르고, 대화를 자주 벌의 자연 서식지에 관한 이야기로 돌린다. 소변 임신검사는 양성이고 독성검사는 음성이다. 골반 초음파에서 추정 임신 15주가 확인되었다. 입원 후 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 클로자핀 치료
B. 전기경련요법
C. 클로미프라민 치료
D. 리튬 치료

## 해설

적정 항정신병약 치료에도 정신병적 증상이 지속된다면 진단·용량·기간·복약을 확인한 뒤 치료저항성에 대한 클로자핀을 고려할 수 있어 제시된 원문 선택은 클로자핀이다. 그러나 임신 중 유일하게 안전성이 입증된 약이라는 주장은 잘못이며, 모체·태아 위험과 대안, 혈액·대사 모니터링을 전문적으로 평가해야 한다. 전기경련치료도 임신 중 필요한 상황에서 고려할 수 있고 급성 상황에만 한정된 치료가 아니다. 임신 여부 하나로 모든 다른 치료를 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008561

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로자핀만 임신 안전성이 입증됐다는 허위 주장과 ECT는 급성 상황에만 사용된다는 오류 교정. 치료저항성 확인 후 클로자핀 고려로 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/Guidance/CG178/chapter/recommendations
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
