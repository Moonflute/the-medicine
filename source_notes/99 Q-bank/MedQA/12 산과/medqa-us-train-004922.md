---
type: qbank
schema_version: 1
id: medqa-us-train-004922
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b66adfaede243f230224ed1d82ddd68f76f62521a3df0b441933fe756fee5c2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "알파 지중해빈혈"
  - "태아수종"
  - "제대천자"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
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

임신 25주 태아의 흉수와 복수가 확인됐다. 중대뇌동맥 최고수축기속도가 해당 주수 중앙값의 1.7배로 중증 빈혈이 의심된다. 태아치료센터에서 혈색소를 확인하고 필요하면 곧바로 치료할 방법은?

## 선택지

A. 양수천자만 시행
B. 태아 흉수를 빼고 빈혈은 평가하지 않는다
C. 제대혈 채혈 후 중증 빈혈이면 자궁 내 수혈
D. 한 달 뒤 일반 초음파만 추적

## 해설

태아수종과 중대뇌동맥 속도 상승은 중증 빈혈의 경고 신호다. 전문팀에서 제대혈로 혈색소를 확인하고 필요한 경우 같은 접근으로 자궁 내 수혈을 시행할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 빈혈 위험에 따른 제대혈 채혈/수혈을 설명하고 유전형 확정 과장 삭제.
- https://publications.smfm.org/publications/586-society-for-maternal-fetal-medicine-clinical-guideline-8/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004922
- https://pubmed.ncbi.nlm.nih.gov/25824811/
