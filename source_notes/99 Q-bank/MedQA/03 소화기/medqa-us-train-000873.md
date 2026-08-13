---
type: qbank
schema_version: 1
id: medqa-us-train-000873
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55f82c0d6dda945d7800daab04d14a33c651fe3feec796b7f8539cb498cb5433
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "peptic ulcer disease"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

38세 남성이 복통을 주소로 일차 진료 의사를 방문하였다. 그는 수개월 동안 둔하고 타는 듯한 통증이 있었으며 점차 악화되었다고 보고하였다. 또한 같은 기간 동안 약 5파운드의 체중 감소가 있었다고 언급하였다. 환자는 메스꺼움을 호소하며 식사 후에 통증이 더 심해진다고 느끼지만, 구토나 설사는 없다고 하였다. 과거력상 고혈압이 있으며, 건설 노동자로 일하다 실직한 이후로 평소보다 많은 스트레스를 받고 있다고 보고하였다. 복용 중인 약물로는 에날라프릴(enalapril)과 직장에서 발생한 요통을 위해 매일 복용하는 이부프로펜(ibuprofen)이 있다. 환자는 저녁 식사와 함께 맥주 1~2잔을 마시며, 25갑년의 흡연력이 있다. 가족력으로는 아버지의 대장암과 할머니의 백혈병이 있다. 신체 검진상 상복부에 중등도의 압통이 관찰된다. 대변 잠혈 검사 결과 양성이다. 환자의 병력 중 이 상태를 유발했을 가능성이 가장 높은 것은 무엇인가?

## 선택지

A. 생리적 스트레스
B. 알코올 사용
C. 약물 사용
D. 암 가족력

## 해설


NSAID(이부프로펜) 장기 복용은 위점막 보호를 억제해 궤양을 유발한다. 환자의 복통, 체중 감소, 출혈 양성 검사 모두 NSAID에 의한 소화성 궤양 가능성을 높인다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000873
