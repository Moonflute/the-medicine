---
type: qbank
schema_version: 1
id: medqa-us-train-006686
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4c1b739479afc825c505dc35ef9000e8eef8b2e608ff12078b81e685dbdbc8b2
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "급성 세균성 이하선염"
  - "편도절제술 후 감염"
  - "턱밑 부종"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

수술 뒤 물을 충분히 마시지 못한 환자에게 고열과 한쪽 귀밑의 통증성 부종이 생겼다. 해당 이하선을 부드럽게 누르자 윗어금니 맞은편 관 입구에서 고름이 나왔다. 가장 가능성 높은 진단은?

## 선택지

A. 유행성이하선염
B. 쇼그렌증후군
C. 편도주위농양
D. 급성 화농성 이하선염

## 해설

한쪽 이하선의 급성 발열·압통과 관 입구의 고름은 화농성 이하선염의 단서다. 수술 뒤 탈수와 침의 정체가 위험을 높일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 세균성 이하선염 C를 유지하되 모든 편도수술 후 부종의 최빈 원인이라는 과장을 교정하고 혼입 영어를 정리.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006686
- https://www.ncbi.nlm.nih.gov/books/NBK560735/
