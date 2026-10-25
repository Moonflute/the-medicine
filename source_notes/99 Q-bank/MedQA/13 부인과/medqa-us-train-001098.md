---
type: qbank
schema_version: 1
id: medqa-us-train-001098
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bcf4469fe8176e136ade7bbcebf6853419cbc11d0130ed1c45e5660a0fccdff6
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "contraception"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ydkeq4ie2UvOyehOuylSAoUG9zdGNvaXRhbCBDb250cmFjZXB0aW9uKS5tZA
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 피임 방법에 대해 상담하기 위해 내원하였다. 현재 한 명의 남성 파트너와 성생활을 하고 있으며, 피임은 하지 않고 있다. 유의미한 과거력은 없으며 복용 중인 약물도 없다. 15년 동안 하루에 담배 한 갑을 피워왔다. 라텍스와 구리에 알레르기가 있다. 소변 임신 검사는 음성이다. 이 환자에게 금기인 피임 방법은 무엇인가?

## 선택지

A. 살정제와 함께 사용하는 다이어프램(Diaphragm)
B. 프로게스틴 단일 경구 피임약
C. 자궁내장치(IUD)
D. 복합 경구 피임약

## 해설

36세·하루20개비 흡연은 에스트로겐 포함 복합피임약(D)의 금기(MEC4)에 해당한다. 프로게스틴 단독 방법은 별도로 평가한다. 구리 알레르기이면 구리IUD는 금기지만 LNG-IUD까지 모두 금기인 것은 아니다. 라텍스 없는 다이어프램도 있어 제형을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답D와 반대로IUD를 답으로 설명한 오류;35세이상다량흡연기준 반영.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm/
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018680Orig1s074lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001098
