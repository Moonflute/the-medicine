---
type: qbank
schema_version: 1
id: medqa-us-train-000650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:caa01c58a8e66f8177f31cbe0caf0d54b07af8fec21937cb37327e0f6827689e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "vitamin B12 deficiency"
  - "subacute combined degeneration"
  - "megaloblastic anemia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
---

# MedQA US 임상문제

## 문제

54세 남성이 5개월간 지속된 전신 피로감과 다리 및 발가락의 저림으로 내원하였다. 환자는 고혈압과 고콜레스테롤혈증이 있다. 15년 전 소화성 궤양 질환으로 부분 위절제술을 받았다. 현재 복용 중인 약물은 암로디핀(amlodipine)과 아토르바스타틴(atorvastatin)이다. 직업은 페인트공이다. 체온은 37°C, 맥박은 101회/분, 호흡수는 17회/분, 혈압은 122/82 mm Hg이다. 진찰 결과 결막 창백과 설염이 관찰된다. 하지의 진동 및 위치 감각이 소실되었다. 보행 시 기저면이 넓다. 환자는 양발을 모으고 눈을 감은 채 서 있을 때 몸이 흔들린다. 혈색소 농도는 10.1 g/dL, 백혈구 수는 4300/mm3, 혈소판 수는 110,000/mm3이다. 이 환자에서 가장 나타날 가능성이 높은 검사 결과는 무엇인가?

## 선택지

A. 뇌척수액 내 올리고클론 띠(oligoclonal bands)
B. 메틸말론산(methylmalonic acid) 수치 상승
C. 말초혈액 도말검사상 호염기성 점상(basophilic stippling)
D. 양성 급속 혈장 재긴(rapid plasma reagin) 검사

## 해설


위절제 병력·설염·빈혈과 진동/위치감각 소실·감각성 보행실조는 B12 결핍과 아급성 연합변성을 시사한다. B12는 methylmalonyl-CoA mutase의 보조인자이므로 결핍 시 methylmalonic acid(B)가 상승한다. 본문에는 MCV나 거대적혈구 도말 결과가 제시되지 않았으므로 이를 직접 관찰된 사실로 추가하지 않는다. 페인트공이라는 정보는 납중독 감별을 유도하지만 후주 감각 이상과 위절제 병력은 B12 결핍에 더 잘 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000650 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 위절제 후 B12 결핍 기전과 MMA를 유지하고 본문에 없는 거대적혈구를 이미 관찰된 소견으로 쓰지 않았다. Basophilic stippling 선지 오역 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000650
