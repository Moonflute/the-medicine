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
explanation_status: "manual-reviewed"
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

57세 여성이 왼쪽 아랫배 통증과 미열로 왔다. 조영증강 CT에서 구불결장의 게실을 중심으로 장벽이 두꺼워지고 주변 지방에 염증이 보이지만 농양, 복강 내 자유공기나 장폐색은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 충수염
B. 급성 신우신염
C. 합병증 없는 급성 대장 게실염
D. 대장 게실 출혈

## 해설


게실을 중심으로 한 장벽 비후와 주변 지방 침윤은 급성 대장 게실염을 지지한다. 농양·천공·폐색이 확인되지 않으면 비복잡성으로 분류한다. 통증 없이 다량 혈변이 나는 게실 출혈과는 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000526 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: LLQ 급성 염증 소견에서 결장 게실의 기저 구조인 근육층을 통한 점막·점막하층 탈출 C를 묻는 기초 병리로 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000526
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13434530/
