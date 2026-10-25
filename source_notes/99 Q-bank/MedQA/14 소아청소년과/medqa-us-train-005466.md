---
type: qbank
schema_version: 1
id: medqa-us-train-005466
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eeebdc83d91971cb859f8165e4030d4312a5ee695d633db7961cebe6d2afc18f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "동맥관개존증"
  - "좌우 단락"
  - "인도메타신 폐쇄치료"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-Z66el6rSAIOqwnOyhtOymnSAoUGF0ZW50IER1Y3R1cyBBcnRlcmlvc3VzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 36주에 태어난 생후 1개월 남아가 수유 중 땀을 많이 흘리고 불편해한다. 수유 시간이 길어졌고 맥박 170회/분, 호흡수 55회/분이며 왼쪽 상흉골연에서 4/6 연속성 잡음이 들린다. 심초음파로 진단을 확인한 후 가장 적절한 처치는?

## 선택지

A. 프로스타글란딘 E1 주입
B. 경피적 수술
C. 디곡신과 푸로세미드
D. 인도메타신 주입

## 해설

36주 출생 영아의 수유 곤란·발한과 연속성 잡음은 PDA를 시사하며 심초음파로 혈역학적 중요도를 확인한다. 약물 폐쇄를 선택할 경우 보기 중 indomethacin(D)은 프로스타글란딘 합성을 억제한다. 생후 연령이 증가하면 반응이 감소할 수 있어 모든 PDA에서 가장 효과적이라고 단정하지 않으며, 필요시 중재 폐쇄를 평가한다. 이뇨제 등은 심부전 증상 관리에 쓰일 수 있으나 동맥관을 직접 닫는 약제는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문 36주 출생 단서를 복원. PDA 치료 약제의 기전·한계를 교정하고 심부전 약제를 무관하다고 한 오류 삭제.
- https://publications.aap.org/pediatrics/article/155/5/e2025071425/201674

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005466
