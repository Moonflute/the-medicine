---
type: qbank
schema_version: 1
id: medqa-us-train-000691
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5a7abbfa9bb5c22f0ad58fb5d819e5fc7b6a0881922c5ce738352bdfb479411
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Polycystic ovary syndrome"
  - "Congenital adrenal hyperplasia"
  - "Turner syndrome"
  - "Aromatase deficiency"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

16세 소녀가 아직 초경을 하지 않아 어머니와 함께 내원하였다. 출생 시 부분적인 음순 유합(partial labial fusion)과 음핵 비대(clitoromegaly)가 발견되었다. 어머니는 임신 중 자신의 턱에 비정상적인 털이 자라는 것을 발견했다고 보고하였다. 이 소녀는 심한 여드름이 있다. 3년 전, 경미한 외상 후 손목 골절이 있었다. 작년에는 이사 중 상자를 들어 올리다가 척추 압박 골절을 겪었다. 현재 경구 이소트레티노인(isotretinoin)과 경구 피임약을 복용 중이다. 환자의 키는 97백분위수, 체중은 50백분위수이다. 신체 검진상 얼굴과 등 상부에 다수의 염증성 농포가 관찰된다. 유방 발달은 태너(Tanner) 1단계이다. 환자는 골반 검사를 거부한다. 골반 초음파 검사 결과 다수의 낭종이 있는 난소와 정상 자궁이 확인되었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 다낭성 난소 증후군(Polycystic ovary syndrome)
B. 선천성 부신 과형성증(Congenital adrenal hyperplasia)
C. 터너 증후군(Turner syndrome)
D. 아로마타제 결핍증(Aromatase deficiency)

## 해설

태아기 외성기 남성화와 임신 중 산모의 남성화, 유방 발달 부재, 큰 키·취약골절과 낭성 난소는 아로마타제 결핍(D)에 부합한다. 안드로겐을 에스트로겐으로 전환하지 못해 안드로겐이 축적되고 에스트로겐 부족으로 골 성숙·골량과 사춘기 발달에 문제가 생긴다. 본문에 측정되지 않은 ‘고키톤’ 소견을 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무의미한고키톤표현제거. 모체/태아남성화·유방미발달·골취약의아로마타제결핍D기전.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000691
