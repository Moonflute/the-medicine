---
type: qbank
schema_version: 1
id: medqa-us-train-001092
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8a54e9d11db43c9c1e5598099fc30d77b0c819d1fdee3882c4614744c99308b
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Atopic dermatitis"
  - "Seborrheic keratosis"
  - "Allergic contact dermatitis"
  - "Seborrheic dermatitis"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JWE7Yag7ZS8IO2UvOu2gOyXvCAoQXRvcGljIERlcm1hdGl0aXMpLm1k
  - MTkg7ZS867aA6rO8L-ygkey0ie2UvOu2gOyXvCAoQ29udGFjdCBEZXJtYXRpdGlzKS5tZA
  - MTkg7ZS867aA6rO8L-yngOujqCDtlLzrtoDsl7wgKFNlYm9ycmhlaWMgRGVybWF0aXRpcykubWQ
  - MTkg7ZS867aA6rO8L-yVhO2GoO2UvCDtlLzrtoDsl7wgKEF0b3BpYyBEZXJtYXRpdGlzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3개월 된 남아를 부모가 두피와 이마의 발진 평가를 위해 데려왔다. 부모는 발진이 몇 주 동안 지속되었다고 보고한다. 그들은 발진이 특히 추울 때 때때로 붉고 비늘이 생긴다고 말한다. 환아는 임신 36주에 태어났으며 그 이후로 전반적으로 건강했다. 아버지는 건선(psoriasis)이 있다. 환아는 편안해 보인다. 진찰 결과 두피, 이마, 헤어라인을 따라 여러 개의 홍반성 반점이 보인다. 일부 반점은 기름진 노란색 비늘로 덮여 있다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 아토피 피부염
B. 지루각화증
C. 알레르기 접촉 피부염
D. 지루 피부염

## 해설

정답은 D, 지루피부염이다. 생후 수개월 영아에서 두피·이마·헤어라인에 생긴 홍반성 반점과 기름진 노란 인설은 영아 지루피부염(cradle cap)에 전형적이다. 아토피피부염은 보통 가려움과 건조한 습진이 더 두드러지며, 지루각화증은 이 연령의 전형적인 질환이 아니다. 아버지의 건선 병력만으로 이 임상 양상을 건선으로 판단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 현훈/전정신경염 해설 오연결. 영아 두피의 기름진 황색 인설인 지루피부염 해설 교체. D 유지.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-symptoms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001092
