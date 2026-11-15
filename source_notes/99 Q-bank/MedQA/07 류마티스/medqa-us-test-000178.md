---
type: qbank
schema_version: 1
id: medqa-us-test-000178
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7cd787605b791b508e152254d7bae0e07acd91bce91045eb583cf294f2173bc4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "골관절염"
  - "헤버든 결절"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 남성이 몇 년간 걸을 때 심해지는 무릎 통증과 손가락 끝마디 통증을 겪었다. 아침 강직은 10분 내에 풀린다. 원위지간관절에 단단한 골성 결절이 있고 무릎은 움직일 때 염발음이 나지만 열감은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 축성 척추관절염
B. 통풍
C. 골관절염
D. 류마티스관절염

## 해설


활동 시 통증, 짧은 아침 강직, 원위지간관절의 골성 결절과 무릎 염발음은 골관절염에 맞는다. 염증성 활막염에서는 강직이 오래 지속되거나 관절 열감과 부종이 두드러질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000178` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Heberden 결절·엄지기저·무릎 염발음의 OA C 유지. 50분 아침강직을 전형적 OA라고 단정한 해설 교정.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000178
- https://www.nice.org.uk/guidance/ng226/chapter/Recommendations
