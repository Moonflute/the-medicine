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
question_type: management
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

73세 환자가 갑자기 겹보임, 삼킴곤란, 구음장애와 심한 보행 불안정을 겪었다. 45분 뒤 모두 회복됐다. 어지럼증 환자에서 이 경과에 가장 맞는 판단은?

## 선택지

A. 후순환 일과성 허혈을 의심해 응급 평가를 진행한다
B. 증상이 사라졌으므로 체위성 현훈으로 판단한다
C. 난청이 없으므로 모든 중추 원인을 배제한다
D. 전정편두통으로 확정하고 외래에서 예방약만 논의한다

## 해설

겹보임, 연하·구음 장애와 실조가 동시에 갑자기 나타나면 후순환 허혈을 의심한다. 완전히 회복돼도 뇌·혈관 영상과 원인 평가가 시급하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척추동맥을 후두동맥이라 부른 용어 오류와 다른 혈관 TIA는 지속 결손을 남긴다는 잘못된 일반화를 수정하고 영문 최종 완전회복 시점을 복원했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003837
- https://pubmed.ncbi.nlm.nih.gov/37166022/
- https://doi.org/10.1161/STR.0000000000000375
