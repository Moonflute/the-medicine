---
type: qbank
schema_version: 1
id: medqa-us-train-008938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:99ae33452b9a5a86745bd512b15098b49bd1e4072d8b37d53f755ca95044175c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "rotavirus gastroenteritis"
  - "viral diarrhea"
  - "dehydration"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISk7IKsIChEaWFycmhlYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
  - MDgg6rCQ7Je8L-uFuOuhnOuwlOydtOufrOyKpCDqsJDsl7wgKE5vcm92aXJ1cyBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 설사로 응급실에 내원했다. 며칠 전 발열이 있었고 이후 구토와 설사가 진행되었다. 피가 섞이지 않은 설사를 여러 차례 했으며 피로감을 느낀다. 예방접종이 최신이 아니고 부모가 여러 종류의 허브 보충제를 먹이고 있다. 체온 101°F(38.3°C), 혈압 100/55mmHg, 맥박 111회/분, 호흡수 19회/분, 산소포화도 100%이다. 점막이 건조하고 피곤해 보인다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. Campylobacter jejuni
B. 코로나바이러스
C. 로타바이러스
D. Vibrio cholerae

## 해설

미접종 4세의 발열·구토·비혈성 수양성 설사와 탈수에서는 보기 중 로타바이러스(C)가 가장 부합한다. 실제 유행·지역·검사에 따라 다른 원인도 가능하며 4세는 영아가 아니다. 모든 소아 설사의 원인을 일률적으로 로타바이러스로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 4세를 영아로 부르고 모든 급성 설사의 최빈 원인을 단정한 설명 보정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008938
