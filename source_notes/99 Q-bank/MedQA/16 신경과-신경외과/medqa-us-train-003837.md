---
type: qbank
schema_version: 1
id: medqa-us-train-003837
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb5f9f373697daa72b473a609e06d223a3937f6c90319c88c00de2d963cf4f5e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "posterior circulation transient ischemic attack"
  - "vertebral artery occlusion"
  - "dysarthria"
  - "ataxia"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

73세 남성이 갑자기 발생한 심한 어지럼증, 연하곤란, 구음장애와 보행불안정으로 내원했다. 증상은 10분 뒤 호전되기 시작했고 발생 35분 뒤에는 미세한 안진과 운동실조만 남았으며, 이후 45분이 지나 완전히 회복되었다. 다음 중 상태의 가장 가능성 높은 원인은?

## 선택지

A. 척추동맥 폐색
B. 중대뇌동맥 폐색
C. 후대뇌동맥 폐색
D. 렌티큘로선조체동맥 폐색

## 해설

급성 어지럼증·연하곤란·구음장애와 안진·실조는 척추뇌기저동맥계의 뇌간·소뇌 허혈을 시사하여 척추동맥 폐색(A)이 가장 합당하다. 증상은 진료 중 완전히 회복되는 경과로 기술되어 있다. '후두동맥'은 척추동맥의 동의어가 아니며 다른 대뇌혈관 영역의 허혈도 일시적 증상으로 나타날 수 있다. TIA와 소경색의 최종 구분은 조직영상 등을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척추동맥을 후두동맥이라 부른 용어 오류와 다른 혈관 TIA는 지속 결손을 남긴다는 잘못된 일반화를 수정하고 영문 최종 완전회복 시점을 복원했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003837
