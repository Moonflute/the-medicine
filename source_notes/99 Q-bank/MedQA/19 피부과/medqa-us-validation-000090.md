---
type: qbank
schema_version: 1
id: medqa-us-validation-000090
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7ab6a39a89837804e9ed11315947a3522c2cd5bb4a445c6287e054279eec0958
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "여드름"
  - "면포"
  - "벤조일퍼옥사이드"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yXrOuTnOumhCAoQWNuZSBWdWxnYXJpcykubWQ
difficulty: complex
answer: D
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

17세 여아의 이마와 턱에 개방면포와 폐쇄면포가 다수 있다. 염증성 병변이나 흉터는 없다. 면포를 줄이기 위한 초기 치료는?

## 선택지

A. 경구 독시사이클린
B. 국소 클린다마이신 단독
C. 경구 이소트레티노인
D. 국소 아다팔렌

## 해설

국소 레티노이드는 모낭 각화를 정상화해 면포 위주 여드름의 초기 치료에 적합하다. 경구 항생제나 이소트레티노인은 이 정도의 면포 여드름에 우선 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 면포 여드름의 benzoyl peroxide B는 적절한 선지이며 면포를 단순 국소 염증으로 정의한 설명을 교정한다.
- 공식/학회 근거: https://www.aad.org/member/clinical-quality/guidelines/acne

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000090
- https://www.aad.org/member/clinical-quality/guidelines/acne/
