---
type: qbank
schema_version: 1
id: medqa-us-validation-000526
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1900c3e20c8734afc41869cd1cb52a43b6bae154b6a2942b8727f2a81bc3c0b0
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "게실염"
  - "결장 게실"
  - "장벽 염증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Tsl7wgKERpdmVydGljdWxpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

57세 여성이 24시간 동안 지속된 왼쪽 아랫배 통증, 메스꺼움, 구토로 응급실에 왔다. 복부 CT에서 장벽 비후와 줄무늬 모양 장간막 지방이 보인다. 이 환자의 주된 질환은?

## 선택지

A. 충수 내강 폐쇄
B. 신장 실질, 신배, 신우의 염증
C. 결장 근육층을 통한 점막과 점막하층의 탈출
D. 상부 생식기의 염증

## 해설


CT에서 장벽 비후와 줄무늬 모양 장간막 지방은 장벽을 통과한 점막과 점막하층이 장 근육층을 통해 탈출한 장 게실염을 시사한다. 따라서 주된 질환은 장 게실 탈출이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000526 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: LLQ 급성 염증 소견에서 결장 게실의 기저 구조인 근육층을 통한 점막·점막하층 탈출 C를 묻는 기초 병리로 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000526
