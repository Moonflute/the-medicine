---
type: qbank
schema_version: 1
id: medqa-us-train-001497
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de4ce42e581a52b0ad32d92c81be807fcdbff1918874a16779c229d32429e505
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "child abuse"
  - "immersion scald burn"
  - "nonaccidental injury"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7JWE64-Z7ZWZ64yAIOuwjyDruYTsmrDrsJzsoIEg7IaQ7IOBLm1k
difficulty: standard
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

3세 여아가 이틀 전 갑자기 발생한 발진으로 어머니와 함께 내원했다. 어머니는 미지근한 물로 목욕시킨 지 한 시간 후 발진이 생겼다고 한다. 2주 전 피부감염으로 진단받고 페니실린 V로 치료했다. 그 외에는 건강했지만 영유아 건강검진을 여러 차례 놓쳤다. 최근 실직해 사회보조에 의존하는 한부모 어머니와 함께 산다. 어머니는 주요우울장애가 있고 이모는 전신홍반루푸스가 있다. 체온은 36.8°C (98.2°F), 맥박은 112회/분, 혈압은 108/62 mm Hg이다. 눈맞춤이 좋지 않다. 하지에 배꼽까지 날카롭게 경계가 지어지는 홍반이 보이며 무릎과 굽힘면은 보존되어 있다. 추가 평가에서 다음 중 어떤 소견이 발견될 가능성이 높은가?

## 선택지

A. 서로 다른 치유 단계의 여러 손상
B. 니콜스키 징후 양성
C. 비순구를 보존하는 나비형 발진
D. 구강 점막 궤양

## 해설

배꼽 아래 하체의 뚜렷한 상한선과 피부주름 보존은 침수 화상을 의심하게 하며 미지근한 목욕물이라는 설명과 맞지 않는다. 다른 손상의 유무와 발생 시기를 확인해야 하고, 서로 다른 치유 단계의 다른 손상(A)은 반복 손상을 뒷받침할 수 있다. 이는 이번 한 번의 화상 부위가 모두 서로 다른 시점에 발생했다는 뜻이 아니다. 보호자의 사회적 배경만으로 학대를 판정하지 않으며 전체 병력·진찰과 안전 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 하체 침수 화상을 손 화상·뜨거운 물 끼얹기로 바꿔 쓴 해설 및 한 번의 화상으로 서로 다른 치유 단계가 생긴다는 오류를 교정했다.
- https://childprotection.rcpch.ac.uk/child-protection-evidence/burns-systematic-review/
- https://childprotection.rcpch.ac.uk/wp-content/uploads/sites/6/2020/05/child_protection_evidence_-_burns.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001497
