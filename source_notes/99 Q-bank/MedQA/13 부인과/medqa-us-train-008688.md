---
type: qbank
schema_version: 1
id: medqa-us-train-008688
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e363a923210ff38644cfcf6a87341ae9a56d2d2d07bc10b2038b53ef24ff2ec
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "lactational breast abscess"
  - "mastitis"
  - "incision and drainage"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqSDrho3slpEgKEJyZWFzdCBBYnNjZXNzKS5tZA
  - MTMg67aA7J246rO8L-yImOycoOq4sCDsnKDrsKnsl7wgKExhY3RhdGlvbmFsIE1hc3RpdGlzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "3 cm 수유성 유방농양은 초음파·흡인 D를 우선 고려한다. 원정답 B의 일률적 절개배농을 교정."
---

# MedQA US 임상문제

## 문제

24세 여성이 한쪽 유방 통증으로 일차진료를 받으러 왔다. 아들에게 모유 수유 중인데 최근 통증이 악화되었다. 통증이 심해져 왼쪽 유방으로는 수유하기 어려울 정도다. 과거력으로 식이와 운동으로 조절된 임신성 당뇨병이 있다. 체온 101°F(38.3°C), 혈압 137/69mmHg, 맥박 100회/분, 호흡수 13회/분, 산소포화도 97%이다. 신체검사에서 왼쪽 유방이 홍반성이고 3cm 크기의 압통과 파동이 있는 종괴가 보인다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 얼음찜질과 유축
B. 절개 및 배농
C. 중재가 필요하지 않다
D. 초음파와 세침흡인

## 해설

발열·발적·파동성 종괴는 수유성 유방농양이다. 초음파로 확인하고 흡인 배액·배양하는 D가 적절한 초기 선택이다. 배액관 또는 수술 배농은 크기·구조·피부 상태·치료 반응에 따라 고려한다. 항생제와 수유 지원을 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 3 cm 수유성 유방농양은 초음파·흡인 D를 우선 고려한다. 원정답 B의 일률적 절개배농을 교정.
- https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008688
