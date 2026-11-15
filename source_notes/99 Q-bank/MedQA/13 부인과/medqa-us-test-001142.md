---
type: qbank
schema_version: 1
id: medqa-us-test-001142
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0bc11f2d9e3f7e3a4de53ff6b4d5c8ac402c82be9ff6508b4121854b383b44e4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "난소 예비력 감소"
  - "이차성 불임"
  - "난소 기능 평가"
  - "diminished ovarian reserve"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

35세 여성이 체외수정 계획을 상담한다. AMH와 초음파의 동난포 수가 모두 낮지만 월경은 규칙적이다. 이 검사 결과로 설명할 수 있는 것은?

## 선택지

A. 자연임신은 불가능하다고 확정할 수 있다
B. 난소 자극 때 얻을 난자 수가 적을 가능성을 예측하는 데 도움이 된다
C. 난관이 막혔다는 뜻이다
D. 배아의 염색체 상태를 직접 판정할 수 있다

## 해설


AMH와 동난포 수는 난소 자극에 대한 난자 수의 반응을 예측하는 데 유용하다. 이 값만으로 자연임신 불가, 난자 질이나 난관 폐쇄를 진단하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001142
- https://www.asrm.org/practice-guidance/practice-committee-documents/testing-and-interpreting-measures-of-ovarian-reserve-a-committee-opinion-2020/
