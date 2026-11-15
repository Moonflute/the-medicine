---
type: qbank
schema_version: 1
id: medqa-us-validation-000577
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9d1a1fc92c2f31a14253e074fde33c6ce1a9be93398d3ef2971546f02d724935
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "유착태반"
  - "태반 만출 지연"
  - "산후출혈"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

반복 제왕절개 병력이 있는 산모가 분만 후 태반이 분리되지 않아 조심스럽게 평가받던 중 많은 출혈이 생겼다. 자궁저부는 단단하고 태반 일부가 자궁벽에 단단히 붙어 있다. 출혈의 가장 가능성 높은 원인은?

## 선택지

A. 자궁무력증
B. 태반조기박리
C. 태반유착스펙트럼
D. 태반이 이미 완전히 만출된 뒤 생긴 정상 출혈

## 해설

자궁이 잘 수축했는데도 태반 일부가 자궁벽에 강하게 붙어 있고 분리하려 할 때 출혈하면 태반유착을 의심한다. 무리한 태반 분리를 중단하고 출혈 대응을 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유착태반과 전치태반을 동의어로 쓴 오류를 교정하고 제왕절개 반흔·태반 분리 곤란·견고한 자궁 단서를 연결했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000577
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2018/12/placenta-accreta-spectrum
