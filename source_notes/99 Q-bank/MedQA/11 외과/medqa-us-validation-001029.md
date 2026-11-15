---
type: qbank
schema_version: 1
id: medqa-us-validation-001029
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:c8348bd590951de71a8a4e73e340e6658a00b6681bcbd739e024e3b85ddeb92c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "화농성 관절염"
  - "관절액 그람양성 구균"
  - "무릎 관절염"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

6세 여아가 열과 갑작스러운 무릎 통증으로 걷지 못한다. 무릎이 붓고 따뜻하며 수동으로 조금만 움직여도 심하게 아파한다. 전신 상태는 안정적이다. 세균성 관절염을 확인하기 위한 우선 검사는?

## 선택지

A. 신속한 관절천자와 관절액 배양
B. 혈청 항연쇄상구균 용혈소 O 역가
C. 관절 단순 X선만 시행
D. 말초혈액 백혈구 감별만 시행

## 해설


열이 나고 수동 관절운동이 극심하게 아픈 소아의 단관절염은 세균 감염을 먼저 평가한다. 안정적이고 검체를 바로 얻을 수 있다면 관절액·혈액배양을 채취한다. 쇼크나 급격한 악화가 있으면 검체 때문에 항생제를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001029 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 필수적으로 골수염 후 관절염이 생긴다는 오류를 제거하고 누락된 발열·외상·가족력을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001029
