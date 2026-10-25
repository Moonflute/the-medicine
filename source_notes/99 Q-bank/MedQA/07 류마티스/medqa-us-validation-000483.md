---
type: qbank
schema_version: 1
id: medqa-us-validation-000483
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0a1c5136f57afaa97c4a27bbbfa24303299860bd68ab2d2f53acaa923efc00a1
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "강직성 척추염"
  - "천장관절염"
  - "아킬레스건염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남성이 3주간 지속된 발뒤꿈치 통증으로 진료를 받으러 왔다. 발목의 압박감과 부종이 있고 고관절 통증으로 걷기 어렵다. 아킬레스건이 붓고 따뜻하며 천장관절 영상에서 연조직 침범과 관절강 협소화가 보이고 척추 후만이 약간 있다. 가장 가능성 높은 질환은?

## 선택지

A. 강직성 척추염
B. 반응성 관절염
C. 골종
D. 섬유근육통

## 해설


24세 남성의 Achilles enthesitis, 고관절·천장관절 증상과 영상에 기술된 관절강 협소, 후만은 보기 중 ankylosing spondylitis A를 지지한다. Kyphosis는 후만이지 전만이 아니다. Enthesitis는 다른 SpA에서도 생길 수 있어 단독으로 확진하지 않지만 본문의 축성소견과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000483 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 24세를30대, kyphosis를전만으로 바꾼 해설 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000483
