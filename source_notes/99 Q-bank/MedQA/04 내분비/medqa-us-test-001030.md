---
type: qbank
schema_version: 1
id: medqa-us-test-001030
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:98f69359c6c53f423cee17d326b380e2af1642da926b559c39c5493228b05812
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선기능저하증"
  - "하시모토 갑상선염"
  - "TSH 상승"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 몇 달째 피곤하고 추위를 많이 타며 변비가 있다. 맥박은 55회/분이고 갑상선은 통증 없이 약간 커져 있다. TSH 19 mIU/L, 유리 T4는 정상 하한보다 낮다. 어떤 상태인가?

## 선택지

A. 현성 일차 갑상선기능저하증
B. 무증상 갑상선기능저하증
C. 중추성 갑상선기능저하증
D. 일차 갑상선기능항진증

## 해설

유리 T4가 낮고 TSH가 높으면 현성 일차 갑상선기능저하증이다. 무증상 갑상선기능저하증에서는 유리 T4가 정상 범위다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 37.2°C를 저체온이라고 한 해설 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001030
- https://ekjm.org/journal/view.php?number=25889
