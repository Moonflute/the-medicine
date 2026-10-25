---
type: qbank
schema_version: 1
id: medqa-us-validation-000908
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0f73f6fce87196a22dc156eb4849f24f35b275c788e399c3e50e8c7d5304e77e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자궁외임신"
  - "임신 중 복통"
  - "질식 초음파"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
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

23세 여성이 구토와 복통으로 왔다. 24시간 동안 먹거나 마시면 구토하고 임신검사(β-hCG)가 양성이다. 오른쪽 아랫배 압통과 반대쪽 반발통이 있다. 가장 적절한 다음 처치는?

## 선택지

A. 흉부 방사선촬영
B. 복부 CT
C. 초음파
D. 대장내시경

## 해설

우하복부 압통과 좌측 깊은 촉진 시 우측 통증은 충수염을 시사하는 Rovsing 징후 맥락이다. 임신 양성이므로 자궁외임신 등 산과 원인도 함께 평가하고 초음파(C)를 먼저 사용한다. 비진단적이면 임신 중 MRI 등을 고려하며 수술 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 충수염 징후를 자궁외임신으로만 연결한 오류 수정.
- https://www.idsociety.org/practice-guideline/intra-abdominal-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000908
