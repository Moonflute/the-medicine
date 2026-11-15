---
type: qbank
schema_version: 1
id: medqa-us-train-002389
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92d0f6eabfca3242051c3fabc89780873a530f17609dcd1f7f9f392379f237d4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Takayasu arteritis"
  - "large-vessel vasculitis"
  - "subclavian artery stenosis"
  - "revascularization"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uLpOy5tOyVvOyImCDrj5nrp6Xsl7wgKFRha2F5YXN1J3MgQXJ0ZXJpdGlzKS5tZA
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
---

# MedQA US 임상문제

## 문제

15세 여아가 타카야수동맥염으로 진단됐다. 오른쪽 쇄골하동맥의 좁아진 부위 때문에 오른팔 혈압은 90/45 mmHg, 왼팔은 반복해서 175/74 mmHg다. 활동성 염증을 치료하는 동안 혈압은 어떻게 평가할까?

## 선택지

A. 관류가 유지되는 팔의 높은 혈압을 기준으로 고혈압을 평가·치료한다
B. 낮게 나오는 팔만 사용해 혈압이 정상이라고 판단한다
C. 양팔의 수치를 산술 평균해 저혈압으로 본다
D. 상지 혈압은 모두 무시해 추적하지 않는다

## 해설


협착보다 먼 쪽의 혈압은 실제 전신 혈압보다 낮게 나올 수 있다. 관류가 유지되는 사지의 혈압을 기준으로 삼아 고혈압을 관리하고 침범 혈관을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002389 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Takayasu에서 증상 개선 이후에도 필요한 고혈압 관리와 원문 누락 소견을 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002389
- https://doi.org/10.1002/art.41774
