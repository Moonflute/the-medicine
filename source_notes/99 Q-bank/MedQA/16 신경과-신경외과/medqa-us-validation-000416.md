---
type: qbank
schema_version: 1
id: medqa-us-validation-000416
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3edeadf6fc97d8dd1e086494e56d129acb990e4f1ccdebbb6a1c9f6fbeafa438
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "일과성 허혈발작"
  - "국소 신경학적 결손"
  - "뇌졸중 위험 평가"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 2시간 전 발생한 말 어눌함과 왼쪽 팔·다리 저림이 45분 이내 완전히 호전되어 응급실에 왔다. 아침식사 중 말하기 어렵고 왼쪽 몸이 저린 것을 느꼈다. 제2형 당뇨병, 고혈압, 허혈성 심장질환이 있으며 현재 신경학적 진찰은 정상이다. 가장 적절한 다음 처치는?

## 선택지

A. 클로피도그렐을 추가하고 퇴원
B. 관찰과 평가를 위해 입원
C. 지금 퇴원하고 증상이 재발하면 방문하도록 안내
D. 항간질약 시작

## 해설

고령·당뇨·고혈압과 최근 언어/일측 감각 증상은 조기 뇌졸중 위험이 있는 의심 TIA이다. 보기 중 입원하여 신속하게 뇌·혈관·심장 평가를 진행하는 B가 적절하다. 단순히 약을 하나 추가해 평가 없이 퇴원하거나 재발 때만 돌아오라고 해서는 안 된다. 모든 TIA가 반드시 입원해야 하는 것은 아니며, 즉각적인 전문 평가가 보장되는 외래 경로가 있다면 위험과 자원에 따라 선택할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고위험 의심 TIA의 입원평가 B는 유지하되 모든 TIA는 반드시 입원해야 한다는 단정 교정.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/triage-and-initial-diagnostic-evaluation-of-transient-ischemic-attack-and-non-disabling-stroke

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000416
