---
type: qbank
schema_version: 1
id: medqa-us-train-009434
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ce91ecf9ba3d460290cf6f4d124a872311a73dbec3379832e181290c075d055
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "postpartum eclampsia"
  - "산후 자간증"
  - "magnesium sulfate"
  - "Eclampsia"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOqwhOymnSAoRWNsYW1wc2lhKS5tZA
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

출산 5일째 산모가 심한 두통과 시야 흐림으로 응급실에 왔다. 임신 중 혈압은 정상이었으나 15분 간격으로 169/109, 173/112 mmHg가 측정됐다. 발작은 아직 없고 단백뇨 검사 결과는 대기 중이다. 적절한 초기 대응은?

## 선택지

A. 분만이 끝났으므로 산과 고혈압은 아닌 것으로 본다
B. 단백뇨가 양성일 때만 응급 치료한다
C. 산후 자간전증을 의심해 혈압을 신속히 낮추고 황산마그네슘 예방을 평가한다
D. 두통약만 주고 다음 산후 외래까지 기다린다

## 해설

임신 중 혈압이 정상이었어도 출산 후 처음 자간전증이 나타날 수 있다. 지속 중증 고혈압과 새로운 신경 증상은 응급이며 항고혈압 치료와 발작 예방을 검토하고 다른 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 황산마그네슘을 혈압강하제로 설명한 오류 수정.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009434
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/30575639/
