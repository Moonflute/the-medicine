---
type: qbank
schema_version: 1
id: medqa-us-train-004131
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6cd917522c1b74b07a91761674fe2ed0ae2eaea19075d1b2033ff7d0c2cce9ad
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "X연관 무감마글로불린혈증"
  - "브루톤 티로신키나아제 결핍"
  - "정맥 면역글로불린"
  - "X-linked agammaglobulinemia"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
difficulty: complex
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 발열과 가래 섞인 기침으로 내원했다. 6개월 전에도 폐렴으로 입원했고 중이염을 여섯 번 앓았다. 흉부 X선에서 우중엽 폐렴이 보인다. 편도는 작고, 유세포분석에서 말초 B세포가 거의 없지만 T세포 수는 정상이다. 급성 감염을 치료한 뒤 재발을 줄이기 위해 필요한 장기 보충 치료는?

## 선택지

A. 흉선 이식
B. 면역글로불린 정기 보충
C. 과립구집락자극인자 정기 투여
D. 인터페론 감마 정기 투여

## 해설

남아에서 영아기 이후 세균성 중이염·폐렴이 반복되고 성숙 B세포가 거의 없으므로 X연관 무감마글로불린혈증을 의심한다. 급성 감염은 항생제로 치료하고, 이후 정맥 또는 피하 면역글로불린을 정기적으로 보충한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 면역글로불린 보충과 현 폐렴·저혈압의 응급 치료를 분리하여 명확화.
- https://www.fda.gov/media/83304/download

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004131
