---
type: qbank
schema_version: 1
id: medqa-us-validation-000002
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2b1e7b4e7e6c153e2839c424d33f49054e5ef53b8143be55abe78fcdc768a11a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "주기성 구토 증후군"
  - "반복 구토"
  - "탈수"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISk7IKsIChEaWFycmhlYSkubWQ
difficulty: complex
answer: A
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

5세 여아가 약 2시간 지속되는 오심과 담즙성 구토를 반복하여 응급실에 왔다. 이러한 증상 사이에는 건강하게 지내지만 지난 6개월 동안 탈수로 두 번 입원했고 체중은 30백분위수였다. 복부는 부드럽고 경도의 전반적 압통이 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 주기성 구토 증후군
B. 위장염
C. 비대성 유문협착증
D. 위식도 역류질환

## 해설

반복되는 유사 구토 삽화 사이 건강하게 지내는 양상은 보기 중 주기성 구토 증후군(A)에 부합한다. 그러나 담즙성 구토는 장회전이상·폐쇄 등 다른 원인을 배제해야 하는 경고이며, 정상에 가까운 복부 촉진만으로 안전하다고 단정하지 않는다. 원문에 마른 외모·점막 건조·혈압82/52가 있어 현 탈수 평가도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 주기성 구토의 패턴은 유지하되 담즙성 구토를 단순 정상 진찰로 무시하는 설명을 교정.
- https://naspghan.org/professional-resources/clinical-guidelines/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000002
