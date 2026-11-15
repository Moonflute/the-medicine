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
answer: C
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

25세 여성이 갑작스러운 심한 한쪽 골반통과 구토로 왔다. 임신검사는 음성이고 초음파에서 난소가 커지고 부어 있다. 도플러 혈류는 일부 남아 있지만 통증이 계속되고 염전이 강하게 의심된다. 다음 조치는?

## 선택지

A. 혈류가 있으므로 단순 난소낭종으로 보고 귀가
B. 초음파에서 혈류가 완전히 없어질 때까지 기다림
C. 응급 복강경으로 확인하고 가능하면 난소를 풀어 보존
D. 염전이 확인되면 일률적으로 난소를 절제

## 해설

난소로 가는 혈류가 일부 보이더라도 염전을 배제할 수 없다. 의심도가 높으면 수술을 늦추지 않고 복강경으로 확인하며 가능하면 염전을 풀어 보존한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 도플러 혈류 존재를 증가로 바꾼 오류 및 혈류 보존이 염전을 배제하지 않음 명시.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/08/adnexal-torsion-in-adolescents

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001257
- https://pubmed.ncbi.nlm.nih.gov/31348225/
