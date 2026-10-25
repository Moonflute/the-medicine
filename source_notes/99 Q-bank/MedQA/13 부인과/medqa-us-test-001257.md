---
type: qbank
schema_version: 1
id: medqa-us-test-001257
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:55811aad7b0133d0e7af6d5c72d5fa0c91d4afa4b80017633c27fa1554b3581f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "난소 염전"
  - "부속기 종괴"
  - "복강경 수술"
  - "ovarian torsion"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2gOyGjeq4sOyXvOyghCAoQWRuZXhhbCBUb3JzaW9uKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 계단을 오르다 갑자기 발생한 심한 복통, 오심, 구토로 응급실에 왔다. 좌측 부속기 종괴와 압통이 있고 초음파에서 난소 주위 자유액과 부종, 도플러 혈류가 보였다. 임신검사는 음성이며 진통제에도 증상이 지속되었다. 가장 적절한 다음 처치는?

## 선택지

A. 복강경검사
B. 개복술
C. 골반 MRI
D. 관찰 및 반복 복부진찰

## 해설

갑작스러운 심한 통증·구토, 부속기 종괴·난소 부종은 염전이 의심된다. 도플러 혈류가 남아 있어도 염전을 배제할 수 없으며 신속한 복강경 평가·복원(A)을 시행한다. 혈류 ‘증가’가 확진 근거인 것은 아니다. 허혈 위험 때문에 MRI나 단순 관찰로 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 도플러 혈류 존재를 증가로 바꾼 오류 및 혈류 보존이 염전을 배제하지 않음 명시.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/08/adnexal-torsion-in-adolescents

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001257
