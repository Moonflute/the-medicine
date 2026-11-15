---
type: qbank
schema_version: 1
id: medqa-us-train-006850
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5822064f4636584d41bed5bbf25411bc871eee2b37d450a1190135802a789b29
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 B12 결핍"
  - "메트포르민 유발 거대적아구성 빈혈"
  - "DNA 합성 장애"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: mechanism
difficulty: complex
answer: A
publication_status: "withheld"
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGljbGF6aWRlLm1k
---

# MedQA US 임상문제

## 문제

메트포르민을 장기간 복용한 59세 남성이 피로와 손발 저림으로 내원했다. 혈색소 10.4 g/dL, MCV 110 fL, 망상적혈구 수는 낮다. 비타민 B12 결핍이 확인됐다면 이 빈혈의 기전은?

## 선택지

A. 적혈구 전구세포의 DNA 합성 장애
B. 헴 합성 결함
C. 글로빈 사슬 합성 결함
D. 적혈구 막단백 결함

## 해설


비타민 B12 결핍은 DNA 합성을 방해해 거대적아구성 빈혈을 일으킬 수 있다. 손발 저림 등 신경학적 증상이 동반되며, 장기간 메트포르민을 복용한 환자에서는 B12 결핍을 확인할 이유가 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006850 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B12 흡수 저하를 gliclazide에도 같은 기전으로 돌린 설명 교정; DNA 합성 장애 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006850
