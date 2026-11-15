---
type: qbank
schema_version: 1
id: medqa-us-train-004028
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:66839d57128d2b1dd04dafe3d52597dde3be69a364ebe284b2c7706f56062a86
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "아토피피부염"
  - "영아 습진"
  - "피부 장벽 기능장애"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JWE7Yag7ZS8IO2UvOu2gOyXvCAoQXRvcGljIERlcm1hdGl0aXMpLm1k
  - MTkg7ZS867aA6rO8L-yVhO2GoO2UvCDtlLzrtoDsl7wgKEF0b3BpYyBEZXJtYXRpdGlzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5개월 아이의 뺨과 팔다리가 건조하고 가렵다. 향이 없는 보습제를 꾸준히 쓰는데도 뺨의 붉은 습진이 지속된다. 감염 소견은 없다. 적절한 추가 치료는?

## 선택지

A. 강한 국소 스테로이드를 얼굴에 매일 장기 사용한다
B. 분유부터 여러 종류로 바꾼다
C. 보습을 중단하고 항균제를 바른다
D. 얼굴과 나이에 맞는 약한 국소 스테로이드를 짧게 사용한다

## 해설

보습은 계속하고, 염증이 있는 영아 얼굴에는 부위에 맞는 낮은 강도의 국소 스테로이드를 짧게 사용할 수 있다. 분유 변경만으로 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영아 아토피피부염의 보습 D는 맞지만 스테로이드가 필요 없다고 일괄 배제한 오류를 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg57/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004028
- https://pubmed.ncbi.nlm.nih.gov/40736521/
