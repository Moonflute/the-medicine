---
type: qbank
schema_version: 1
id: medqa-us-train-000411
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d4a8e78171c8e25b9be49c5ef1c3ca3c6a4ee271e05314dd6ad0c8b35e7b39c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Tetralogy of Fallot"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YyU66GcIOyCrOynlSAoVGV0cmFsb2d5IG9mIEZhbGxvdCkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2개월 된 여아가 수유 곤란을 주소로 응급실에 내원하였다. 환아는 29세 초산모에게서 임신 38주에 질식 분만으로 태어났다. 신생아기는 지금까지 합병증 없이 지냈다. 환아는 출생 후 모유 수유만 하였다. 부모는 이전에 수유가 잘 이루어지는 것 같았고 체중도 적절히 증가하고 있었다고 보고하였다. 지난 며칠 동안 어머니는 환아가 수유를 마치기 전에 지쳐하는 것 같다고 하였다. 또한 환아가 숨 가빠 보이고 입술에 푸른 변색이 나타나기 시작했다고 하였다. 출생 시 신장과 체중은 각각 20백분위수와 10백분위수였다. 현재 신장과 체중은 각각 20백분위수와 15백분위수이다. 체온은 98.0°F(36.7°C), 혈압은 60/48 mmHg, 맥박은 143회/분, 호흡은 40회/분이다. 신체 검진상 환아는 급성 고통 징후가 없으며 발달 상태가 양호해 보인다. 좌측 상부 흉골연에서 수축기 점증-점감 잡음(systolic crescendo-decrescendo murmur)이 들린다. 복부는 부드럽고 압통이 없으며 팽만되지 않았다. 복부 검진 중 환아가 울기 시작하면서 입 주위에 청색증이 나타났다. 이 환아의 상태를 진단하기 위한 가장 좋은 초기 검사는 무엇인가?

## 선택지

A. 흉부 X선 촬영
B. CT 혈관조영술
C. 심전도
D. 심장초음파

## 해설


신생아의 청색증·수축기 크레센도-디크레센도 잡음은 Tetralogy of Fallot를 의심하게 하며, 초기 진단에 가장 민감한 검사는 심장초음파이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수유/울음 때 청색증과 좌상흉골연 박출성잡음은 구조적 선천심장병 의심. 초기 해부/혈류 평가 echo D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000411
