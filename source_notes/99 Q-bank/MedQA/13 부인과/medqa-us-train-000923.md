---
type: qbank
schema_version: 1
id: medqa-us-train-000923
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fef42a5a9d38a4ba65d63c83e95b7c8dc1f9d77e515bc2d15cca8a3469fbd678
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Müllerian agenesis"
  - "5-alpha reductase deficiency"
  - "Premature ovarian failure"
  - "Turner syndrome"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yhsOq4sOuCnOyGjOu2gOyghCAoUHJlbWF0dXJlIE92YXJpYW4gRmFpbHVyZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
  - MTMg67aA7J246rO8L-uurOufrOq0gOuwnOycoeu2gOyghCAoTXVsbGVyaWFuIEFnZW5lc2lzKS5tZA
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 여성이 초경이 없다는 주소로 산부인과에 내원하였다. 환자는 평생 1명의 남성 파트너와 성관계를 가져왔으며 항상 콘돔을 사용하였다. 어머니는 환자의 유방 발달이 11세에 시작되었다고 생각한다. 신체 검진상, 환자는 건강해 보이며 다모증은 없고, Tanner V 단계의 유방 및 음모 발달을 보인다. 골반 검진에서 정상적인 외성기, 짧아진 질이 확인되었으며 자궁경부는 시각화할 수 없었다. 초기 호르몬 수치 및 핵형 검사는 정상이었고, 영상 검사는 신체 검진에서 의심했던 소견을 확인해주었다. 환자의 무월경에 대한 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 5-알파 환원효소 결핍증(5-alpha reductase deficiency)
B. 뮐러관 무형성증(Müllerian agenesis)
C. 조기 난소 부전(Premature ovarian failure)
D. 터너 증후군(Turner syndrome)

## 해설


정상 2차 성징과 무월경, 짧아진 질, 자궁경부 비시각화는 자궁과 상부 질이 선천적으로 결여된 Müllerian agenesis와 일치한다. 다른 선택지는 호르몬 결핍이나 염색체 이상을 동반한다. 따라서 정답은 B이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000923
