---
type: qbank
schema_version: 1
id: medqa-us-train-001847
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4de88655c5c101179a3c3192d2942401f7eac8b8201253f07bca071014a9b8bd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "frostbite"
  - "rewarming"
  - "warm water immersion"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

한밤중 추위에 노출된 환자의 손끝이 차고 단단하며 감각이 떨어졌다. 중심체온과 순환은 안정됐고 다시 얼 위험은 없다. 손가락을 어떻게 재가온하는가?

## 선택지

A. 약 37–39℃의 물에 담가 재가온한다
B. 마른 수건으로 세게 문지른다
C. 뜨거운 난로나 헤어드라이어를 직접 댄다
D. 언 채로 먼저 괴사 조직을 제거한다

## 해설

재동결 위험이 없을 때 조절된 따뜻한 물로 동상 부위를 빠르게 재가온한다. 문지르거나 직접 열원에 대면 감각이 떨어진 조직이 더 손상될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 재가열 전 손모양만으로 4도 동상을 확정하고 40–42도 물침수를 권한 오류를 수정했다. 재동결 위험이 없는 환경에서 37–39도 물로 재가열하는 D를 유지한다.
- 공식/학회 근거: https://journals.sagepub.com/doi/10.1177/10806032231222359

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001847
- https://pubmed.ncbi.nlm.nih.gov/38577729/
