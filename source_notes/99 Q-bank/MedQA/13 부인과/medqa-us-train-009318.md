---
type: qbank
schema_version: 1
id: medqa-us-train-009318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4cf0aef3eabc5780c082eb58fc6dec140f78fd288d9491b90301bb9f73504210
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "primary ovarian insufficiency"
  - "일차성 난소기능부전"
  - "hypergonadotropic hypogonadism"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yhsOq4sOuCnOyGjOu2gOyghCAoUHJlbWF0dXJlIE92YXJpYW4gRmFpbHVyZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YG065287J247Y6g7YSwIOymne2bhOq1sCAoS2xpbmVmZWx0ZXIgU3luZHJvbWUpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 G0P0 여성이 경구피임약을 중단한 지 12개월이 지났지만 임신이 되지 않아 내원했다. 초경은 15세였고 이후 월경이 불규칙했다. 피임약 복용 중 간헐적 출혈이 있었지만 중단 후 ‘정상 월경’을 한 적이 없다. 현재 안면홍조는 없다. 키와 BMI는 정상이고 질경검사에서 질 위축이 보인다. TSH와 프로락틴은 정상이며 혈청 β-hCG는 음성이다. FSH 56 mIU/mL, 에스트라디올 <18 pmol/L가 2개월 동안 두 번의 검사에서 확인되었다. 불임의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 다낭성 난소 증후군
B. 고프로락틴혈증
C. 일차성 난소기능부전
D. 이차성 난소기능부전

## 해설

40세 미만에서 장기간 무월경/월경불순, 높은 FSH와 낮은 에스트라디올은 일차성 난소기능부전(C)을 지지한다. 현재 다학회 지침은 4개월 이상 월경 이상과 FSH >25 IU/L를 핵심으로 하며 불확실하면 재검한다. 이 사례의 FSH 56과 반복된 저에스트로겐 소견은 이에 부합한다. FSH/에스트라디올 비율은 별도 진단 기준이 아니며 비수술성 POI에서는 간헐적 난소 활동이 가능해 모든 난자가 영구 소진됐다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: FSH/에스트라디올 비율을 진단 기준으로 쓰고 POI를 완전한 영구 난소 고갈로 단정한 설명을 현행 다학회 지침에 맞춰 교정했다.
- https://www.asrm.org/practice-guidance/practice-committee-documents/evidence-based-guideline-premature-ovarian-insufficiency--2024/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009318
