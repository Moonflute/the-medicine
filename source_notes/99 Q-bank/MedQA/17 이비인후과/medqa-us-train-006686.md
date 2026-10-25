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
answer: C
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

26세 여성이 합병증 없이 편도절제술을 받은 지 2일 후 오른쪽 턱과 목 주변이 붓고 턱을 움직이거나 씹을 때 통증이 있어 내과에 내원했다. 출생 후 정기적인 건강관리를 모두 받았고 활력징후는 체온 38.4°C 외에는 안정적이다. 오른쪽 부위에 심한 압통이 있고 나머지 진찰은 정상이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 유행성이하선염
B. 쇼그렌증후군
C. 급성 세균성 이하선염
D. 상대정맥증후군

## 해설

수술 직후의 급성 편측 턱 주변 부종, 심한 압통, 발열은 선택지 중 C, 급성 세균성 이하선염에 가장 부합한다. 수술 후 수분 섭취 감소와 침 분비 정체가 세균의 역행성 감염을 촉진할 수 있다. 유행성이하선염·쇼그렌증후군·상대정맥증후군보다 급성 국소 세균감염의 양상에 가깝다. 사진을 임의로 복원하거나 실제로 관찰하지 않은 이하선관 농을 추가하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 세균성 이하선염 C를 유지하되 모든 편도수술 후 부종의 최빈 원인이라는 과장을 교정하고 혼입 영어를 정리.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006686
