---
type: qbank
schema_version: 1
id: medqa-us-train-003490
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8fffaa709901cc354d530797adda7ab3c7265727486c97a34b3e571543853c0c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "community-acquired pneumonia"
  - "HIV with preserved CD4 count"
  - "Streptococcus pneumoniae"
  - "lobar infiltrate"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

35세 남성이 2일 전 갑자기 시작된 발열, 오한, 호흡곤란, 가래 기침으로 내원했다. HIV를 4년 전 진단받았지만 삼제 항레트로바이러스 치료를 받고 있으며 CD4 T세포는 520/mm3였다. 흉부 X선에서 오른쪽 하엽 침윤이 보였다. 다음 중 가장 가능성 높은 원인 균은?

## 선택지

A. 황색포도상구균
B. 크립토코쿠스 네오포르만스
C. 폐렴사슬알균
D. 폐포자충

## 해설


HIV 감염이지만 CD4 수가 520으로 보존된 경우, 일반 인구와 동일하게 Streptococcus pneumoniae가 가장 흔한 원인이다. 폐렴의 전형적인 폐엽성 침윤도 이에 부합한다. 따라서 정답은 폐렴사슬알균이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003490
