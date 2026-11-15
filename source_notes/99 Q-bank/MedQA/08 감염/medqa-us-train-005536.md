---
type: qbank
schema_version: 1
id: medqa-us-train-005536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a137bc49b313d4ffca20e5c1ddda47bb29618d59f633c02249cbd51941d62d9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "고양이할큄병"
  - "Bartonella henselae"
  - "지역 림프절병증"
  - "Cat-scratch disease"
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
question_type: diagnosis
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

새끼 고양이에게 왼쪽 손등을 긁힌 12세 환자가 2주 뒤 왼쪽 겨드랑이 통증을 호소한다. 긁힌 자리에 작은 구진이 남아 있고 같은 쪽 겨드랑이에 압통성 림프절이 만져진다. 가장 가능성 높은 진단은?

## 선택지

A. 고양이할큄병
B. 화농성 연쇄상구균 림프관염
C. 감염성 단핵구증
D. 결핵성 림프절염

## 해설


접촉 부위의 구진 뒤 그 부위를 배액하는 국소 림프절이 커지는 양상은 고양이할큄병에 부합한다. 급성 림프관염에서는 선형 홍반과 빠른 진행이 더 흔하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005536 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간비장 침범 CSD의 azithro/rifampin B는 보고된 접근이나 모든 단순 CSD의 표준이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7260883/
- https://www.cdc.gov/bartonella/hcp/clinical-overview/cat-scratch-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005536
