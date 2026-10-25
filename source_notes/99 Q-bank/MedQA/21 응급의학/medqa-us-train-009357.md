---
type: qbank
schema_version: 1
id: medqa-us-train-009357
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:366d09180d0e1cf561ac9e09e7a3e6f241d8c13bd063a7f9f44457f1409053f6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "cat bite"
  - "고양이 물림"
  - "Pasteurella multocida"
  - "Cat bite infection"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-q1kOyDgSDqsJDsl7wgKEJpdGUgV291bmQgSW5mZWN0aW9uKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 남자가 친구 집에서 놀다가 친구의 고양이에게 물려 응급실에 왔다. 오른손과 손목에 중등도 통증이 있지만 운동 범위와 근력은 정상이다. 예방접종은 최신이고 전반적으로 건강하다. 진찰에서 깊은 찔린 상처가 활발히 출혈하고 있다. 상처를 세척하고 드레싱했다. 적절한 처치는 무엇인가?

## 선택지

A. 암피실린-설박탐, 수술적 변연절제 및 열상 봉합
B. 아목시실린-클라불란산
C. 아목시실린-클라불란산과 열상 봉합
D. 열상 봉합

## 해설

손의 깊은 고양이 천자상은 Pasteurella를 포함한 감염 위험이 높아 세척 후 아목시실린-클라불라네이트(B) 예방 투여가 적합하다. 이런 천자상은 일반적으로 일률적인 일차 봉합을 피하며, 감염 위험과 깊은 구조 손상을 평가한다. 예방접종이 최신이라는 사실은 교상 항생제의 필요성을 없애지 않는다. 따라서 봉합을 반드시 추가해야 한다는 설명은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 손의 깊은 고양이 천자상에서 B를 유지하며 반드시 일차 봉합한다는 모순을 제거한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG184/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009357
