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

59세 남성이 피로감과 양쪽 발·손의 저림으로 내원했다. 27년 전 진단받은 제2형 당뇨병으로 메트포르민과 글리클라지드를 복용한다. 흡연, 음주 또는 불법 약물 사용은 부인한다. 진찰은 정상이다. 검사에서 혈색소 10.4 g/dL, 헤마토크릿 31%, 평균적혈구용적 110 μm³, 교정 망상적혈구 지수 저하, 백혈구 7,500/mm³, 혈소판 250,000/mm³이며 말초혈액도말 사진이 제시되어 있다. 다음 중 이 빈혈의 기저 원인을 가장 잘 설명하는 것은?

## 선택지

A. 적혈구 DNA 합성 장애
B. 헴 합성 결함
C. 글로빈 사슬 합성 결함
D. 골수이형성증후군

## 해설


장기 metformin 사용은 B12 결핍 위험과 연관되고 거대적혈구 빈혈·저망상적혈구와 손발 저림은 그 가능성을 지지한다. B12 관련 엽산 대사 장애로 DNA 합성이 저해되어 A가 맞다. Gliclazide를 동일하게 확립된 B12 결핍 원인으로 묶지 않는다. 도말 그림이 없으므로 과분절 등을 직접 관찰했다고 하지 않고 실제 B12/필요시 MMA 등을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006850 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B12 흡수 저하를 gliclazide에도 같은 기전으로 돌린 설명 교정; DNA 합성 장애 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006850
