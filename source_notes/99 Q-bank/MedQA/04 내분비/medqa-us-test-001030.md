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
question_type: investigation
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

24세 여성이 건강검진을 받으러 왔다. 전반적으로 건강하지만 집중하기 어렵고 점점 피로하며 몇 달 동안 체중이 15파운드 증가했다. 변비와 관절통도 있고 6개월 전에는 두근거림, 배변 횟수 증가, 손떨림이 있었다. 천식 병력이 있으며 현재 성생활을 하고 피임을 일관되게 사용한다. 체온 99°F(37.2°C), 혈압 127/98 mmHg, 맥박 55회/분이고 말과 움직임이 느리며 손목과 발목 관절 압통, 심부건반사 이완 지연이 있었다. 가장 가능성 높은 검사 결과는?

## 선택지

A. TSH 증가
B. 환자건강설문지-9(PHQ-9) 점수 증가
C. 항CCP 항체 양성
D. 소변 독성검사 양성

## 해설

정답은 A이다. 피로·체중 증가·변비·서맥·느린 말과 운동 및 심부건반사 이완 지연은 일차 갑상샘기능저하증을 시사하며 TSH 상승이 가장 합당하다. 앞선 두근거림·떨림은 갑상샘염의 일시적 중독기 등과 연결될 수 있으나 원인을 확정할 자료는 없다. 제시된 37.2°C는 저체온이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 37.2°C를 저체온이라고 한 해설 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001030
