---
type: qbank
schema_version: 1
id: medqa-us-test-000185
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:82bd8857f0a11b2ffc18504d1fe8db20fff01774aa7c4c811a70c193c16a4840
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주요우울장애"
  - "가성치매"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 환자가 최근 몇 주 사이 기억력과 집중력이 떨어졌다. 같은 시기에 즐기던 활동에 흥미를 잃고 수면이 흐트러졌으며 움직임과 말이 느려졌다. 의식 수준이나 주의력의 뚜렷한 일중 변동은 없다. 가장 적절한 접근은?

## 선택지

A. 연령과 기억력 저하만으로 알츠하이머 치매를 확진한다
B. 우울증이 있으면 인지질환을 배제할 수 있으므로 더 평가하지 않는다
C. 우울증과 안전을 평가·치료하고, 인지와 일상 기능도 함께 추적한다
D. 낮은 기억 검사 점수를 정상 노화로 보고 평가를 끝낸다

## 해설

노년기 우울증은 집중력과 기억에 영향을 줄 수 있다. 인지질환이 같이 있을 수도 있으므로 한 번의 검사나 치료 반응만으로 결론내지 않고 두 영역을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 우울증 없는 인지저하에 fluoxetine쓴다는 반대설명 교정. 무쾌감·고립·수면장애·정신운동지연으로 우울관련인지장애, A 유지.
- https://www.nia.nih.gov/depression

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000185
- https://pubmed.ncbi.nlm.nih.gov/35154339/
- https://www.nice.org.uk/guidance/ng222/chapter/recommendations
