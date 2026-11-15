---
type: qbank
schema_version: 1
id: medqa-us-train-009102
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55aadbaf1e743e0d3a0f6f927141cbefc117c00b099a5a9b9a102accc8d3237d
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "paraphimosis"
  - "감돈포경"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qwkOuPiCDtj6zqsr0gKFBhcmFwaGltb3NpcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

유치도뇨관을 교체한 뒤 포경수술을 받지 않은 62세 남성의 귀두가 아프고 부었다. 뒤로 젖혀둔 포피가 귀두 뒤를 조이고 있다. 뚜렷한 괴사는 없다. 첫 처치는?

## 선택지

A. 진통과 부종 완화 후 포피를 수동 정복한다
B. 포피를 그대로 두고 다음 날 다시 본다
C. 국소 항진균제를 바른다
D. 포피를 더 뒤로 당겨 고정한다

## 해설

감돈포경은 뒤로 젖혀진 포피가 혈류를 위협하는 응급상황이다. 신속하게 정복을 시도하며 정복이 안 되거나 허혈이 의심되면 응급 비뇨의학과 수술 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수동 정복을 가위로 잡아 뒤로 미는 것으로 설명한 위험한 술기 오류를 교정.
- 공식/학회 근거: https://www.baus.org.uk/trainees/balanitis_foreskin_conditions.aspx

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009102
