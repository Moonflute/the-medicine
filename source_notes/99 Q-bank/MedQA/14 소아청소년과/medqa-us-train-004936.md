---
type: qbank
schema_version: 1
id: medqa-us-train-004936
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d816bd5e545b3124d301486e5264f2b49e55eefb7b1eba9a6f8c68e18421106c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "열성경련"
  - "DTaP 예방접종"
  - "예방접종 금기 없음"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Je07ISxIOqyveugqCAoRmVicmlsZSBDb252dWxzaW9uKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15개월 여아가 DTaP 4차 접종을 위해 추적 방문했다. 3개월 전 MMR, 수두, Hib, PCV13, 소아마비 백신을 접종한 지 13일 후 40.5°C의 발열과 2분간 지속된 전신 발작이 발생했으나 평가 결과는 정상이었고 아세트아미노펜으로 열이 내린 뒤 다른 증상은 없었다. 어머니는 추가 접종을 걱정한다. 다음 중 가장 적절한 권고는?

## 선택지

A. DTaP 접종을 피한다
B. 예방적으로 아스피린을 투여하며 DTaP 접종
C. 예정대로 DTaP 접종
D. 감량한 DTaP 접종

## 해설

이전 단기 전신 열성경련은 당시 MMR 등 접종 후 발생했으며 DTaP 투여 후 뇌병증으로 제시되지 않았다. 현재 회복하여 신경학적 이상이 없으므로 예정대로 DTaP(C)를 접종할 수 있다. MMR 후에는 열성경련 위험이 일시 증가할 수 있으므로 백신과 전혀 무관하다고 단정하지 않는다. 아스피린 예방투여나 감량은 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 기왕 접종에 DTaP가 없는데 DTaP 후 경련으로 연결한 오류를 교정.
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/contraindications-precautions.html
- https://www.cdc.gov/vaccine-safety/about/febrile-seizures.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004936
